/* eslint no-console: "off" -- using console for logging script output */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import Parser from 'rss-parser';
import { sources } from './sources.ts';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeedItem {
  title: string;
  link: string;
  isoDate: string;
  contentSnippet?: string;
  content?: string;
}

interface CandidateInput {
  id: number;
  source: string;
  title: string;
  date: string;
  url: string;
  content: string;
}

interface CandidateResult {
  id: number;
  significance: 0 | 1 | 2 | 3 | 4;
  reason: string;
  // present only when significance > 0:
  title?: string;
  description?: string;
  slug?: string;
  tags?: string[];
  summarySection?: string;
  commentarySection?: string;
}

// used at write step only
type ArticleJudgment = Required<Omit<CandidateResult, 'id'>>;

// ─── Constants ────────────────────────────────────────────────────────────────

const root = resolve(import.meta.dirname, '..');
const importedPath = resolve(import.meta.dirname, 'imported.json');
const candidatesInputPath = resolve(
  import.meta.dirname,
  'candidates-input.json',
);
const candidatesOutputPath = resolve(
  import.meta.dirname,
  'candidates-output.json',
);

const TAG_VOCABULARY = [
  'javascript',
  'typescript',
  'css',
  'html',
  'browser',
  'web-platform',
  'frameworks',
  'react',
  'vue',
  'angular',
  'svelte',
  'solidjs',
  'astro',
  'nodejs',
  'deno',
  'bun',
  'wasm',
  'tooling',
  'build-tools',
  'testing',
  'performance',
  'dx',
  'accessibility',
  'design',
  'release',
  'tutorial',
];

const SIGNIFICANCE_NAMES: Record<number, string> = {
  1: 'mention',
  2: 'highlight',
  3: 'feature',
  4: 'headline',
};

const JUDGE_PROMPT = `You are a web dev news curator for digestweb.dev.
You receive a JSON array of article candidates. For EACH candidate, triage it and — if publishable — generate full metadata.

Respond ONLY with a JSON array, same length and order as the input:

• If significance === 0:
  { "id": N, "significance": 0, "reason": "..." }

• If significance >= 1:
  { "id": N, "significance": 1|2|3|4, "reason": "...", "title": "...", "description": "...", "slug": "...", "tags": [...], "summarySection": "...", "commentarySection": "..." }

Significance scale:
  0 = skip — patch-only releases, link dumps, marketing, already-covered rehash
  1 = mention — minor release, niche article, tangential to mainstream web dev
  2 = highlight — notable minor release, good tutorial, community news
  3 = feature — major release with new features, significant web-platform addition, influential deep-dive
  4 = headline — landmark release, paradigm shift, Stage 3/4 TC39 proposal shipping, ecosystem-wide impact

Field rules (significance >= 1 only):
  title         — clean, engaging, max 80 chars
  description   — 1–2 sentences
  slug          — kebab-case, max 80 chars
  tags          — 1–4 items from allowed vocabulary
  summarySection   — markdown for "## Summary & Key Takeaways"; use bullet points; concise
  commentarySection — markdown for "## Our Commentary"; engaging, insightful

Allowed tags: ${TAG_VOCABULARY.join(', ')}`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function loadImported(): Set<string> {
  try {
    const data = JSON.parse(readFileSync(importedPath, 'utf-8')) as string[];
    return new Set(data);
  } catch {
    return new Set();
  }
}

function appendImported(url: string): void {
  let current: string[] = [];
  try {
    current = JSON.parse(readFileSync(importedPath, 'utf-8')) as string[];
  } catch {
    // file doesn't exist yet
  }
  current.push(url);
  writeFileSync(importedPath, JSON.stringify(current, null, 2));
}

async function fetchFeed(url: string): Promise<FeedItem[]> {
  const parser = new Parser({
    timeout: 10000,
    headers: { 'User-Agent': 'digestweb.dev-fetcher/1.0' },
  });
  const feed = await parser.parseURL(url);
  return feed.items.map((item) => ({
    title: item.title ?? '',
    link: item.link ?? item.guid ?? '',
    isoDate: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
    contentSnippet: item.contentSnippet,
    content: item.content,
  }));
}

async function extractOgImage(url: string): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    const html = await res.text();
    // two-pass regex: handle property/content in either order
    const match =
      html.match(
        /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
      ) ??
      html.match(
        /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
      );
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

function picsumFallback(slug: string): string {
  const hash = createHash('sha256').update(slug).digest('hex');
  const n = parseInt(hash.slice(0, 8), 16) % 1000;
  return `https://picsum.photos/id/${n}/800/450`;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function judgeAllWithGemini(
  candidates: CandidateInput[],
  genAI: GoogleGenerativeAI,
): Promise<CandidateResult[]> {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    systemInstruction: JUDGE_PROMPT,
    generationConfig: { temperature: 0, responseMimeType: 'application/json' },
  });
  const result = await model.generateContent(JSON.stringify(candidates));
  return JSON.parse(result.response.text()) as CandidateResult[];
}

function writeArticle(opts: {
  judgment: ArticleJudgment;
  item: FeedItem;
  source: (typeof sources)[number];
  photo: string;
  date: string;
  dryRun: boolean;
}): string {
  const { judgment, item, source, photo, date, dryRun } = opts;
  const baseSlug = judgment.slug || slugify(judgment.title);
  const dirPath = resolve(root, 'articles', date);
  let slug = baseSlug;
  let filePath = resolve(dirPath, `${slug}.md`);
  if (!dryRun) {
    let counter = 2;
    while (existsSync(filePath)) {
      slug = `${baseSlug}-${counter++}`;
      filePath = resolve(dirPath, `${slug}.md`);
    }
    mkdirSync(dirPath, { recursive: true });
  }

  const tags = judgment.tags.slice(0, 4).join(', ');
  const authorName = source.authorName ?? '';
  const content = `---
layout: article
title: '${judgment.title.replace(/'/g, "\\'")}'
description: '${judgment.description.replace(/'/g, "\\'")}'
photo: ${photo}
original_url: ${item.link}
source_name: '${source.name}'
source_author: '${authorName}'
tags: [${tags}]
significance: ${judgment.significance}
---

${judgment.summarySection}

${judgment.commentarySection}
`;

  if (!dryRun) {
    writeFileSync(filePath, content);
  }
  return `articles/${date}/${slug}.md`;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

// ─── CLI parsing ──────────────────────────────────────────────────────────────

function parseArgs(): {
  days: number;
  sourceId?: string;
  dryRun: boolean;
  dateFrom: Date;
} {
  const args = process.argv.slice(2);
  let days = 7;
  let dateFrom = new Date();
  let sourceId: string | undefined;
  let dryRun = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--days' && args[i + 1]) {
      days = parseInt(args[++i], 10);
    } else if (args[i] === '--date-from' && args[i + 1]) {
      dateFrom = new Date(args[++i]);
    } else if (args[i] === '--source' && args[i + 1]) {
      sourceId = args[++i];
    } else if (args[i] === '--dry-run') {
      dryRun = true;
    }
  }
  return { days, sourceId, dryRun, dateFrom };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  if (!process.env.GOOGLE_AI_API_KEY) {
    console.error(
      'Error: GOOGLE_AI_API_KEY environment variable is not set.\n' +
        'Get a free key at https://aistudio.google.com/apikey and add it to .env',
    );
    process.exit(1);
  }

  const { days, sourceId, dryRun, dateFrom } = parseArgs();
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
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

  // ── Phase A: feed fetching ──────────────────────────────────────────────────

  const allCandidates: Array<{
    item: FeedItem;
    source: (typeof sources)[number];
  }> = [];

  for (const source of filteredSources) {
    if (!source.feedUrl) {
      console.log(`[skip] ${source.name} — no feed URL`);
      continue;
    }

    console.log(`[fetch] ${source.name} …`);
    let items: FeedItem[];
    try {
      items = await fetchFeed(source.feedUrl);
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

  // ── Phase B: single Gemini call ────────────────────────────────────────────

  if (allCandidates.length === 0) {
    console.log('\nNo new candidates found — skipping Gemini call.');
  } else {
    const inputs: CandidateInput[] = allCandidates.map(
      ({ item, source }, id) => ({
        id,
        source: `${source.name} (${source.category})`,
        title: item.title,
        date: item.isoDate,
        url: item.link,
        content: stripHtml(item.content ?? item.contentSnippet ?? '').slice(
          0,
          2000,
        ),
      }),
    );

    writeFileSync(candidatesInputPath, JSON.stringify(inputs, null, 2));
    console.log(
      `\n[judge] ${inputs.length} candidate(s) — single Gemini call …`,
    );

    const results = await judgeAllWithGemini(inputs, genAI);
    writeFileSync(candidatesOutputPath, JSON.stringify(results, null, 2));

    // ── Phase C: process results ──────────────────────────────────────────────

    for (const res of results) {
      const { item, source } = allCandidates[res.id];

      if (res.significance === 0) {
        console.log(`  [skip] "${item.title}" — ${res.reason}`);
        skippedInsignificant++;
        if (!dryRun) appendImported(item.link);
        imported.add(item.link);
        continue;
      }

      const judgment: ArticleJudgment = {
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
