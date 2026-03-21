/* eslint no-console: "off" -- using console for logging script output */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fetchFeed, stripHtml } from './feed.ts';
import { appendImported, loadImported } from './imported.ts';
import { judgeAllWithGemini } from './judge.ts';
import { sources } from './sources.ts';
import type { CandidateInput, CandidateResult, FeedItem } from './types.ts';
import {
  SIGNIFICANCE_NAMES,
  extractOgImage,
  picsumFallback,
  slugify,
  writeArticle,
} from './write-article.ts';

// ─── Constants ────────────────────────────────────────────────────────────────

const candidatesInputPath = resolve(
  import.meta.dirname,
  'candidates-input.json',
);
const candidatesOutputPath = resolve(
  import.meta.dirname,
  'candidates-output.json',
);

// ─── CLI parsing ──────────────────────────────────────────────────────────────

function parseArgs(): {
  days: number;
  sourceId?: string;
  dryRun: boolean;
  dateFrom: Date;
  candidatesInputFile?: string;
  candidatesOutputFile?: string;
} {
  const args = process.argv.slice(2);
  let days = 7;
  let dateFrom = new Date();
  let sourceId: string | undefined;
  let dryRun = false;
  let candidatesInputFile: string | undefined;
  let candidatesOutputFile: string | undefined;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--days' && args[i + 1]) {
      days = parseInt(args[++i], 10);
    } else if (args[i] === '--date-from' && args[i + 1]) {
      dateFrom = new Date(args[++i]);
    } else if (args[i] === '--source' && args[i + 1]) {
      sourceId = args[++i];
    } else if (args[i] === '--dry-run') {
      dryRun = true;
    } else if (args[i] === '--candidates-input' && args[i + 1]) {
      candidatesInputFile = args[++i];
    } else if (args[i] === '--candidates-output' && args[i + 1]) {
      candidatesOutputFile = args[++i];
    }
  }
  return {
    days,
    sourceId,
    dryRun,
    dateFrom,
    candidatesInputFile,
    candidatesOutputFile,
  };
}

// ─── Resume helper ────────────────────────────────────────────────────────────

function candidateInputsToAllCandidates(
  inputs: CandidateInput[],
): Array<{ item: FeedItem; source: (typeof sources)[number] }> {
  return inputs.map((input) => {
    const sourceName = input.source.replace(/\s*\(.*\)$/, '');
    const source =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      sources.find((s) => s.name === sourceName)!;
    const item: FeedItem = {
      title: input.title,
      link: input.url,
      isoDate: input.date,
      content: input.content,
    };
    return { item, source };
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const {
    days,
    sourceId,
    dryRun,
    dateFrom,
    candidatesInputFile,
    candidatesOutputFile,
  } = parseArgs();

  const needsGemini = !candidatesOutputFile;
  if (needsGemini && !process.env.GOOGLE_AI_API_KEY) {
    console.error(
      'Error: GOOGLE_AI_API_KEY environment variable is not set.\n' +
        'Get a free key at https://aistudio.google.com/apikey and add it to .env',
    );
    process.exit(1);
  }

  const genAI = process.env.GOOGLE_AI_API_KEY
    ? new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY)
    : new GoogleGenerativeAI('placeholder');
  const imported = loadImported();
  const cutoff = new Date(dateFrom.getTime() - days * 24 * 60 * 60 * 1000);

  const filteredSources = sourceId
    ? sources.filter((s) => s.id === sourceId)
    : sources;

  if (sourceId && filteredSources.length === 0) {
    console.error(`Error: No source found with id "${sourceId}"`);
    process.exit(1);
  }

  if (dryRun) {
    console.log('[dry-run] No files will be written.');
  }

  let added = 0;
  let skippedInsignificant = 0;
  let skippedImported = 0;
  let feedErrors = 0;
  const addedArticles: string[] = [];
  const feedErrorList: string[] = [];

  let allCandidates: Array<{
    item: FeedItem;
    source: (typeof sources)[number];
  }> = [];

  let results: CandidateResult[];

  const inputPath =
    candidatesInputFile ??
    (candidatesOutputFile
      ? resolve(candidatesOutputFile, '..', 'candidates-input.json')
      : candidatesInputPath);
  let inputs: CandidateInput[] = [];

  if (candidatesInputFile || candidatesOutputFile) {
    try {
      inputs = JSON.parse(readFileSync(inputPath, 'utf-8')) as CandidateInput[];
      console.log(
        `[resume] Loaded ${inputs.length} candidates from ${inputPath}`,
      );
      allCandidates = candidateInputsToAllCandidates(inputs);
    } catch (err) {
      console.error(
        `  [resume] Failed to load input candidates from ${inputPath}`,
        err,
      );
      process.exit(1);
    }
  } else {
    // ── Phase A: feed fetching ────────────────────────────────────────────────
    for (const source of filteredSources) {
      if (!source.feed) {
        console.log(`[skip] ${source.name} — no feed URL`);
        continue;
      }

      console.log(`[fetch] ${source.name} …`);
      let items: FeedItem[];
      try {
        if (typeof source.feed === 'function') {
          items = await source.feed(source.homeUrl);
        } else {
          items = await fetchFeed(source.feed);
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error(`  [error] ${source.name}: ${msg}`);
        feedErrors++;
        feedErrorList.push(`${source.name}: ${msg}`);
        continue;
      }

      const candidates = items.filter((item) => {
        if (!item.link) return false;
        const pubDate = new Date(item.isoDate);
        return (
          pubDate >= cutoff && pubDate <= dateFrom && !imported.has(item.link)
        );
      });

      console.log(
        `  ${candidates.length} candidate(s) in ${days} days counting from ${dateFrom.toISOString()} (${items.length - candidates.length} filtered out)`,
      );

      for (const item of candidates) {
        if (imported.has(item.link)) {
          skippedImported++;
          continue;
        }
        allCandidates.push({ item, source });
      }
    }

    inputs = allCandidates.map(({ item, source }, id) => ({
      id,
      source: `${source.name} (${source.category})`,
      title: item.title,
      date: item.isoDate,
      url: item.link,
      content: stripHtml(item.content ?? item.contentSnippet ?? '').slice(
        0,
        2000,
      ),
    }));
  }

  if (candidatesOutputFile) {
    // ── Resume from Phase B results ────────────────────────────────
    results = JSON.parse(
      readFileSync(resolve(candidatesOutputFile), 'utf-8'),
    ) as CandidateResult[];
    console.log(
      `[resume] Loaded judgement output (${results.length}) from ${candidatesOutputFile}`,
    );
  } else {
    // ── Phase B: single Gemini call ───────────────────────────────────────────
    if (inputs.length === 0) {
      console.log('\nNo new candidates found — skipping Gemini call.');
      results = [];
    } else {
      writeFileSync(candidatesInputPath, JSON.stringify(inputs, null, 2));
      console.log(
        `\n[judge] ${inputs.length} candidate(s) — single Gemini call …`,
      );

      results = await judgeAllWithGemini(inputs, genAI);
      writeFileSync(candidatesOutputPath, JSON.stringify(results, null, 2));
    }
  }

  // ── Phase C: process results ────────────────────────────────────────────────
  for (const res of results) {
    const { item, source } = allCandidates[res.id];

    if (res.significance === 0) {
      console.log(`  [skip] "${item.title}" — ${res.reason}`);
      skippedInsignificant++;
      if (!dryRun) appendImported(item.link);
      imported.add(item.link);
      continue;
    }

    const judgment = {
      significance: res.significance,
      reason: res.reason,
      title: res.title as string,
      description: res.description as string,
      slug: res.slug as string,
      tags: res.tags as string[],
      summarySection: res.summarySection as string,
      commentarySection: res.commentarySection as string,
    };

    const pubDate = new Date(item.isoDate);
    const date = pubDate.toISOString().slice(0, 10);

    console.log(`  [fetch og] ${item.link}`);
    const ogImage = await extractOgImage(item.link);
    const photo =
      ogImage ?? picsumFallback(judgment.slug || slugify(judgment.title));

    const path = writeArticle({
      judgment,
      item,
      source,
      photo,
      date,
      dryRun,
    });

    if (!dryRun) {
      appendImported(item.link);
      imported.add(item.link);
    }

    const sigName = SIGNIFICANCE_NAMES[judgment.significance] ?? '';
    console.log(
      `  [${dryRun ? 'dry' : 'add'}] ${path}  (significance: ${judgment.significance} — ${sigName})`,
    );
    added++;
    addedArticles.push(`${judgment.title} → ${path}`);
  }

  // Summary
  console.log(
    '\n─── Summary ─────────────────────────────────────────────────',
  );
  console.log(`Added:               ${added}`);
  console.log(`Skipped (not significant): ${skippedInsignificant}`);
  console.log(`Skipped (already imported): ${skippedImported}`);
  console.log(`Feed errors:         ${feedErrors}`);

  if (addedArticles.length > 0) {
    console.log('\nNew articles:');
    addedArticles.forEach((a) => console.log(`  • ${a}`));
  }

  if (feedErrorList.length > 0) {
    console.log('\nFeed errors:');
    feedErrorList.forEach((e) => console.log(`  • ${e}`));
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
