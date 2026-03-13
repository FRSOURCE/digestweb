import { createHash } from 'node:crypto';
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const articlesDir = resolve(root, 'articles');
const distDir = resolve(root, 'dist');
const manifestPath = resolve(distDir, '.build-manifest.json');

type Manifest = Record<string, string>;

function sha256(content: string): string {
  return createHash('sha256').update(content).digest('hex');
}

function loadManifest(): Manifest {
  try {
    return JSON.parse(readFileSync(manifestPath, 'utf-8')) as Manifest;
  } catch {
    return {};
  }
}

function collectArticles(): { rel: string; absPath: string }[] {
  const results: { rel: string; absPath: string }[] = [];
  let dateDirs: string[];
  try {
    dateDirs = readdirSync(articlesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return results;
  }
  for (const dateDir of dateDirs) {
    const dirPath = resolve(articlesDir, dateDir);
    let files: string[];
    try {
      files = readdirSync(dirPath).filter((f) => f.endsWith('.md'));
    } catch {
      continue;
    }
    for (const file of files) {
      results.push({
        rel: `articles/${dateDir}/${file}`,
        absPath: resolve(dirPath, file),
      });
    }
  }
  return results;
}

const manifest = loadManifest();
const nextManifest: Manifest = {};
const toSkip: string[] = [];

const articles = collectArticles();

for (const { rel, absPath } of articles) {
  const content = readFileSync(absPath, 'utf-8');
  const hash = sha256(content);
  nextManifest[rel] = hash;

  const slug = rel.replace(/^articles\//, '').replace(/\.md$/, '');
  const htmlPath = resolve(distDir, 'articles', slug + '.html');

  if (manifest[rel] === hash && existsSync(htmlPath)) {
    toSkip.push(rel);
  }
}

const changed = articles.length - toSkip.length;
// eslint-disable-next-line no-console
console.log(
  `Incremental build: ${changed} new/changed, ${toSkip.length} unchanged (skipped)`,
);

const env: NodeJS.ProcessEnv = {
  ...process.env,
  VITEPRESS_INCREMENTAL: '1',
  VITEPRESS_SKIP_ARTICLES: toSkip.join('|'),
};

execSync('pnpm vitepress build .', { cwd: root, env, stdio: 'inherit' });

writeFileSync(manifestPath, JSON.stringify(nextManifest, null, 2));
// eslint-disable-next-line no-console
console.log('Manifest updated:', manifestPath);
