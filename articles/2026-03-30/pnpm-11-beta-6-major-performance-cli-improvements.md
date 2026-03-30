---
layout: article
title: 'pnpm 11 Beta 6: Major Performance & CLI Improvements'
description: 'The latest pnpm v11 beta introduces significant performance enhancements by using SQLite for package indexing and optimizing the store format, alongside cleaner CLI output.'
photo: 'https://opengraph.githubassets.com/0578d9c16e886e9384195a3a2a52be918ec2d84d90f993aa7583a65265569fef/pnpm/pnpm/releases/tag/v11.0.0-beta.6'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-beta.6
source_name: 'pnpm Releases'
source_author: ''
tags: [release, tooling, build-tools, nodejs]
significance: 3
---

## Summary & Key Takeaways

- pnpm 11 Beta 6 introduces major changes to CLI output, lifecycle scripts, and the package store.
- CLI output is cleaner, showing `$ command` instead of verbose script execution details and suggesting `pnpm peers check` for peer dependency issues.
- Lifecycle scripts now only populate well-known `npm_*` environment variables, aligning with Yarn's behavior.
- The package store has been optimized with a new index file format, storing hash algorithms once and using hex digests for improved performance.
- Bundled manifests are now stored directly in the package index, reducing I/O and speeding up repeat installs.
- SQLite is now used for storing the package index, replacing individual JSON files, which reduces filesystem overhead and improves space efficiency.
- Global installs and `pnpm dlx` now utilize the global virtual store by default.

## Our Commentary

This beta release for pnpm v11 is packed with some seriously impactful changes. The move to SQLite for the package index is a game-changer for performance and efficiency, especially for large projects or frequent installs. I'm particularly excited about the reduced I/O and faster repeat installs – anything that shaves seconds off build times is a win in my book. The cleaner CLI output is also a welcome quality-of-life improvement. It feels like pnpm is really doubling down on its strengths as a fast and efficient package manager.
