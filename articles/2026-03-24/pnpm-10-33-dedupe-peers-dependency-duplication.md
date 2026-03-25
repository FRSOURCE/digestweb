---
layout: article
title: 'pnpm 10.33 Improves Peer Dependency Deduplication'
description: 'pnpm v10.33 introduces a new `dedupePeers` setting that significantly reduces peer dependency duplication, leading to fewer package instances and improved performance in complex projects.'
photo: 'https://opengraph.githubassets.com/4f477f2f17ed104249f78c589faec747d175262bf8e828a22678986e4faf2b83/pnpm/pnpm/releases/tag/v10.33.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v10.33.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, dx, release]
significance: 1
---

## Summary & Key Takeaways

- pnpm v10.33 introduces `dedupePeers`, a new setting to reduce peer dependency duplication.
- This feature uses version-only identifiers for peer dependency suffixes, simplifying package paths.
- It aims to dramatically reduce the number of package instances, especially in projects with many recursive peer dependencies.
- Other patch fixes include improved error handling, concurrent `pnpm dlx` stability, and Windows compatibility improvements.

## Our Commentary

The `dedupePeers` feature in pnpm 10.33 is a really smart optimization. Anyone who's wrestled with `node_modules` bloat or deeply nested peer dependency structures knows the pain. Reducing package instances can have a tangible impact on disk space, install times, and even build performance. It's these kinds of incremental improvements in tooling that make a real difference in developer experience over time. pnpm continues to innovate in package management, and this release is another step in making dependency graphs more manageable.
