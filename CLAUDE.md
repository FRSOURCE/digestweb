# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # dev server
pnpm build      # production build → ./dist
pnpm preview    # serve built output
pnpm lint       # eslint + prettier check
pnpm fix        # eslint --fix + prettier --write
```

> If `pnpm` is not in PATH, run `corepack enable` first.

There are no automated tests in this project.

## Architecture

**digestweb.dev** is a VitePress 2 (alpha) static site — a curated web dev news feed. Build output goes to `./dist` (GH Pages deploys from there via `deploy.yml`).

### Content model

Articles live at `articles/YYYY-MM-DD/<slug>.md`. The date comes from the directory name, extracted by `articles.data.ts` (`createContentLoader`). Required frontmatter:

```yaml
layout: article # triggers ArticleDetail component instead of <Content>
title: '...'
description: '...'
photo: https://... # cover image URL
original_url: https://...
source_name: '...'
source_author: '...'
tags: [css, layout]
```

### Theme & rendering

The theme has **no VitePress DefaultTheme** — `Layout.vue` is entirely custom. If `frontmatter.layout === 'article'`, `<ArticleDetail>` is rendered; otherwise `<Content>` is used (the home feed in `index.md`).

`index.md` imports `articles.data.ts` as a VitePress data loader and renders `<ArticleCard>` for each entry.

### Styling

Tailwind CSS v4 via `@tailwindcss/vite`. Custom design tokens are defined in `vars.css` as CSS custom properties and surfaced as Tailwind utilities with a `dw-` prefix (e.g. `bg-dw-bg`, `text-dw-primary`, `text-dw-muted`). A neumorphic shadow scale (`raised-1` → `raised-5`, `-raised-*` for inset variants) is also defined there.

### RSS / feeds

`buildEnd` in `.vitepress/config.ts` reads all article markdown files with `gray-matter`, sorts by date, and writes `feed.rss`, `feed.atom`, and `feed.json` to `./dist`.

### Localization

Two locales: `root` (English) and `pl` (Polish). Polish content lives under `pl/`.
