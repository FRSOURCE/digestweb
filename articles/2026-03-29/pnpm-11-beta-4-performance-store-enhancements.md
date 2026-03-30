---
layout: article
title: 'pnpm 11 Beta 4 Introduces Major Performance & Store Enhancements'
description: 'The latest pnpm 11 beta brings substantial architectural changes, including a switch to SQLite for the package index and a global virtual store, promising significant performance gains.'
photo: 'https://opengraph.githubassets.com/f35176ec9822642d11ae55c8fcf24f93e98b7378cac8944eb5f9f91b44626f6a/pnpm/pnpm/releases/tag/v11.0.0-beta.4'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-beta.4
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release]
significance: 2
---

## Summary & Key Takeaways

- The CLI output for script execution is now cleaner, showing `$ command` and suggesting `pnpm peers check` for peer dependency issues.
- Lifecycle scripts now only populate well-known `npm_*` environment variables, aligning with Yarn's behavior.
- Runtime dependencies are consistently linked from the global virtual store, which is also used by global installs and `pnpm dlx`.
- The store's index file format has been optimized to store hash algorithms once and use hex digests, improving performance.
- pnpm now utilizes SQLite for storing package index metadata, which reduces filesystem overhead, improves space efficiency, and enables concurrent access.

## Our Commentary

Yet another post about upcoming pnpm 11. But well - we cannot get enought and wait any longer! :)
This pnpm 11 beta is packed with some seriously interesting under-the-hood changes. The move to SQLite for the package index is a big deal. It's a smart way to tackle filesystem overhead and should make installs even snappier.
Waiting!
