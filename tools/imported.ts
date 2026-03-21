import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const importedPath = resolve(import.meta.dirname, 'imported.json');

export function loadImported(): Set<string> {
  try {
    const data = JSON.parse(readFileSync(importedPath, 'utf-8')) as string[];
    return new Set(data);
  } catch {
    return new Set();
  }
}

export function appendImported(url: string): void {
  let current: string[] = [];
  try {
    current = JSON.parse(readFileSync(importedPath, 'utf-8')) as string[];
  } catch {
    // file doesn't exist yet
  }
  current.push(url);
  writeFileSync(importedPath, JSON.stringify(current, null, 2));
}
