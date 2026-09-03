---
layout: article
title: 'pnpm 12.3: Native Global Commands & Lockfile Trust'
description: 'pnpm 12.3 enhances its package manager with native executables for global commands and extends lockfile trust options to `remove` and `update` commands.'
photo: 'https://opengraph.githubassets.com/6348e07ae1bd9abe1a30c31800d3ef3c5a5f1f2af199195e513fcdf4636eabfd/pnpm/pnpm/releases/tag/v12.3.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.3.0
source_name: 'pnpm Releases'
source_author: ''
tags: [pnpm, release, build-tools, dx]
significance: 2
---

## Summary & Key Takeaways

- Context-aware global commands (node, deno, bun) are now native executables on all platforms.
- This change improves environment variable handling for global commands.
- `pnpm remove` and `pnpm update` now support `--trust-lockfile` and related supply-chain flags.
- Several bug fixes address issues with local package additions and lockfile generation.
- `pnpm config` now accepts global and location flags before subcommands.
- `pnpm dedupe` is improved to converge in a single pass.

## Our Commentary

pnpm 12.3 is a solid minor update. Making global commands native executables is a nice touch for consistency and reliability, especially on Windows. Extending the `--trust-lockfile` options to `remove` and `update` is also a welcome improvement for supply-chain management. It's these kinds of continuous refinements that make pnpm such a robust tool.
