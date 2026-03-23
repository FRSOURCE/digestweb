import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { SourceCategory } from './sources.ts';

interface SubmittedSource {
  name: string;
  category: SourceCategory;
  tags: string[];
  feed: string | null;
  homeUrl: string;
  authorName?: string;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function buildLiteral(source: SubmittedSource & { id: string }): string {
  const lines = ['  {'];
  lines.push(`    id: ${JSON.stringify(source.id)},`);
  lines.push(`    name: ${JSON.stringify(source.name)},`);
  lines.push(`    category: ${JSON.stringify(source.category)},`);
  lines.push(`    tags: ${JSON.stringify(source.tags)},`);
  lines.push(
    `    feed: ${source.feed ? JSON.stringify(source.feed) : 'null'},`,
  );
  lines.push(`    homeUrl: ${JSON.stringify(source.homeUrl)},`);
  if (source.authorName)
    lines.push(`    authorName: ${JSON.stringify(source.authorName)},`);
  lines.push('  },');
  return lines.join('\n');
}

const raw = process.env.SOURCE_DATA;
if (!raw) {
  // eslint-disable-next-line no-console -- script error reporting
  console.error('SOURCE_DATA missing');
  process.exit(1);
}

const payload: SubmittedSource = JSON.parse(raw);
for (const field of ['name', 'category', 'homeUrl'] as const) {
  if (!payload[field]) {
    // eslint-disable-next-line no-console -- script error reporting
    console.error(`Missing: ${field}`);
    process.exit(1);
  }
}

const id = slugify(payload.name);
const literal = buildLiteral({ id, ...payload });

const sourcesPath = resolve(import.meta.dirname, 'sources.ts');
const content = readFileSync(sourcesPath, 'utf-8');
const closingIndex = content.lastIndexOf('];');
if (closingIndex === -1) {
  // eslint-disable-next-line no-console -- script error reporting
  console.error('Cannot find `];` in sources.ts');
  process.exit(1);
}

writeFileSync(
  sourcesPath,
  content.slice(0, closingIndex) + literal + '\n' + content.slice(closingIndex),
  'utf-8',
);
// eslint-disable-next-line no-console -- script output
console.log(`Added source: ${id}`);
