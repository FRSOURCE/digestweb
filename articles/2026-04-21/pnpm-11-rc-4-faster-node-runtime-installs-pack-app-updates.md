---
layout: article
title: 'pnpm 11 RC 4 Speeds Up Node.js Runtime Installs & Enhances `pack-app`'
description: 'pnpm 11 RC 4 significantly improves Node.js runtime installation speed by no longer extracting bundled npm, npx, and corepack. It also refines the `pnpm pack-app` command with a new `--runtime` flag for better control over embedded runtimes.'
photo: 'https://opengraph.githubassets.com/efb4c0358223fe7100959f5cbfce5dca6853691e147de604ad0a67965a8deceb/pnpm/pnpm/releases/tag/v11.0.0-rc.4'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.4
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11 RC 4 introduces a major change that makes Node.js runtime installations significantly faster.
- The installer no longer extracts bundled `npm`, `npx`, and `corepack` from Node.js archives, reducing file operations.
- Users needing `npm` can install it as a separate package.
- The `pnpm pack-app` command now uses a more flexible `--runtime` flag, replacing `--node-version`, to specify runtimes like `node@22.0.0`.
- This update also includes patch fixes to restore legacy package names for `@pnpm/exe`'s optional dependencies, ensuring compatibility with `pnpm self-update` from v10.

## Our Commentary

We're always happy to see performance improvements, and cutting installation time by "roughly half the files" for Node.js runtimes is a substantial win for developer experience. The `pack-app` changes also seem like a step towards more robust and future-proof handling of different runtimes, which is a smart move. It's good to see them addressing compatibility for self-updates too; breaking that flow can be a real headache.
