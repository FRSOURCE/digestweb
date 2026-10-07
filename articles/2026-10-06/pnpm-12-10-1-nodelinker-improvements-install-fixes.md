---
layout: article
title: 'pnpm 12.10.1: NodeLinker Improvements & Install Fixes'
description: 'pnpm 12.10.1 addresses critical install failures and significantly improves the experimental `nodeLinker.type: loaded` feature. This update enhances performance and refines file management.'
photo: 'https://opengraph.githubassets.com/eb121f252ed8c39a80ed9d5588a99ba12d88fef94156a6a7f7ac791b61c89e9f/pnpm/pnpm/releases/tag/v12.10.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.10.1
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- pnpm 12.10.1 fixes install failures related to overrides and filtered frozen installs.
- The experimental `nodeLinker.type: loaded` now writes generated files to `node_modules`.
- Packages with their own `node_modules` now load correctly from the store with `nodeLinker.type: loaded`.
- Scripts can now run Node.js runtimes installed via `devEngines.runtime`.
- Node.js process startup time is significantly faster with `nodeLinker.type: loaded`.
- Frozen installs with `catalogPrune` no longer incorrectly remove lockfile entries.
- `pnpm install --fix-lockfile` no longer removes deprecated fields from lockfile entries.

## Our Commentary

I'm always interested in how package managers evolve. The `nodeLinker.type: loaded` improvements here, especially the startup speed boost, are genuinely compelling. Moving generated files into `node_modules` is a smart move for cleaner project roots. These kinds of DX wins are what we love to see.
