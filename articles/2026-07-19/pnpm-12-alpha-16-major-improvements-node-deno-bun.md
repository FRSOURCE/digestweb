---
layout: article
title: 'pnpm 12 Alpha 16: Major Improvements for Node.js, Deno, and Bun'
description: "pnpm's latest alpha introduces a Rust-powered CLI, enhanced runtime parity across runtimes, and a new `virtualStoreOnly` setting for flexible dependency management."
photo: 'https://opengraph.githubassets.com/3a8152beb3100557b73ca8426c6afc0d3be48fd70a2b43dc69ce846c07cba572/pnpm/pnpm/releases/tag/v12.0.0-alpha.16'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-alpha.16
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, deno, bun]
significance: 2
---

## Summary & Key Takeaways

### Key Updates

- Achieves runtime installation parity across Node.js, Deno, and Bun.
- Reports deprecated packages during installation with clear warnings.
- Introduces native `install-test`, `recursive`, `multi`, and `m` commands in the Rust CLI.
- Adds a `virtualStoreOnly` setting for populating the virtual store without post-import linking.
- Improves repeat install reconciliation for `node_modules` consistency.
- `enableModulesDir` can now be read from `pnpm-workspace.yaml`.
- `pnpm install --ignore-scripts` now records skipped builds.

## Our Commentary

An alpha release, but wow, the feature list here is substantial. The Rust CLI commands and the `virtualStoreOnly` setting are particularly interesting. We're seeing a trend of build tools rewriting core parts in Rust for performance, and pnpm is clearly leaning into that. The improved reconciliation logic also sounds like a huge DX win. I'm genuinely excited to see how this stabilizes.
