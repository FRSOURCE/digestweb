---
layout: article
title: 'pnpm 12 RC 4: Enhanced Pruning, Syncing, and Install Logic'
description: "pnpm's latest release candidate for version 12 introduces new settings for dependency pruning, improved synchronization for injected dependencies, and atomic global installs."
photo: 'https://opengraph.githubassets.com/90efe271bad4e323a34258465d6b6be5d34da1c8608129e1bbdda919a7635695/pnpm/pnpm/releases/tag/v12.0.0-rc.4'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.4
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release, dx]
significance: 3
---

## Summary & Key Takeaways

- Introduces `minimumReleaseAgeExcludePrune` for smarter dependency pruning.
- Renames `cleanupUnusedCatalogs` to `catalogPrune` for consistent terminology.
- Adds `syncInjectedDepsAfterScripts` to keep injected packages in sync after script execution.
- Optimizes `pnpm add` to avoid full re-resolution when a satisfying version exists.
- Enables atomic switching for global installs, improving reliability.

## Our Commentary

This RC for pnpm 12 looks solid. I'm particularly interested in the `syncInjectedDepsAfterScripts` feature; stale injected copies have been a minor annoyance. The atomic global installs are also a nice touch for stability. We appreciate the continuous improvements to developer experience here.
