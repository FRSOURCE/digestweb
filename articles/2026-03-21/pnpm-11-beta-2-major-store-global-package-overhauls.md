---
layout: article
title: 'pnpm 11 Beta 2: Major Store & Global Package Overhauls'
description: pnpm's latest beta brings substantial changes to its package store, including SQLite integration and an optimized index format, alongside a new approach to isolated global packages.
photo: https://opengraph.githubassets.com/7367dfbf813c158a9b5fb7b0b448de96ba715300398018d45c58be65744eb742/pnpm/pnpm/releases/tag/v11.0.0-beta.2
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-beta.2
source_name: pnpm Releases
source_author:
tags: [nodejs, build-tools, release, performance]
significance: 3
---

## Summary & Key Takeaways

- **Store Architecture Overhaul**: pnpm 11 introduces a new store version (v11) with significant changes.
- **SQLite Integration**: Package index data is now stored in a single SQLite database, replacing individual JSON files, to reduce I/O and improve space efficiency.
- **Optimized Index Format**: The index file format is optimized to store hash algorithms once and use hex digests, improving performance for path lookups.
- **Bundled Manifests**: Package manifests are now stored directly in the index, reducing the need to read `package.json` files during resolution and installation.
- **Global Virtual Store**: Global installs (`pnpm add -g`) and `pnpm dlx` now default to using the global virtual store.
- **Isolated Global Packages**: Each globally installed package gets its own isolated directory, preventing conflicts and improving consistency.

## Our Commentary

This is a pretty big deal for pnpm users, and honestly, for anyone in the Node.js ecosystem who cares about package management efficiency. The move to SQLite for the package index is a smart play; we've seen similar shifts in other tools to combat filesystem overhead, and it usually pays off in spades for performance. The idea of isolated global packages is also a huge win for developer experience. How many times have we wrestled with conflicting global tools? This change should make that a thing of the past, which is a relief. It's still a beta, but these are the kinds of foundational improvements that make a package manager truly robust. We're excited to see how this lands in a stable release.
