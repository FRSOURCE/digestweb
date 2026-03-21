import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Source } from './sources.ts';
import type { ArticleJudgment, FeedItem } from './types.ts';

const root = resolve(import.meta.dirname, '..');

export const SIGNIFICANCE_NAMES: Record<number, string> = {
  1: 'mention',
  2: 'highlight',
  3: 'feature',
  4: 'headline',
};

export async function extractOgImage(url: string): Promise<string | null> {
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

export function picsumFallback(slug: string): string {
  const hash = createHash('sha256').update(slug).digest('hex');
  const n = parseInt(hash.slice(0, 8), 16) % 1000;
  return `https://picsum.photos/id/${n}/800/450`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

export function writeArticle(opts: {
  judgment: ArticleJudgment;
  item: FeedItem;
  source: Source;
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
title: ${judgment.title}
description: ${judgment.description}
photo: ${photo}
original_url: ${item.link}
source_name: ${source.name}
source_author: ${authorName}
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
