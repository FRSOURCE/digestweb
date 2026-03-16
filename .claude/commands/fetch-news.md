---
description: Fetch and import recent web dev news from RSS feeds using AI curation
---

Run `pnpm fetch-news $ARGUMENTS` to pull articles from configured sources, evaluate
significance with Claude, and write article .md files to date-named directories.

Common usage:

- `/fetch-news` — all sources, last 7 days
- `/fetch-news --days 14` — wider lookback window
- `/fetch-news --source vite-releases` — single source by id
- `/fetch-news --dry-run` — preview without writing files

After running, report: articles added (titles + paths), skipped (not significant),
skipped (already imported), and any feed errors.
