---
layout: article
title: 'pnpm 12.20: Bug Fixes, Security Update, and Experimental Lockfile Features'
description: "pnpm's latest release focuses on stability, addressing several bugs related to hoisted nodeLinker and peer dependencies. It also includes a security fix for the bundled node-gyp and introduces experimental v13 lockfile enhancements."
photo: 'https://opengraph.githubassets.com/370e23c7873caf70dc6e9247036de5809a065d904c8aa60655b04d779be2e8dd/pnpm/pnpm/releases/tag/v12.20.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.20.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release]
significance: 1
---

## Summary & Key Takeaways

- Fixes several bugs related to `nodeLinker: hoisted` and peer dependencies.
- Addresses a security vulnerability in the bundled `node-gyp` by updating `undici`.
- Introduces experimental v13 lockfile features to record local directory dependency specifiers.
- Improves handling of version-selector overrides for catalog and workspace dependencies.
- Enhances `pnpm dedupe` to better manage locked runtime versions and Node.js ranges.

## Our Commentary

We appreciate the continuous bug fixes and security updates from the pnpm team. The experimental v13 lockfile changes are interesting; I'm curious to see how they evolve. It's good to see them addressing the `undici` security flag.
