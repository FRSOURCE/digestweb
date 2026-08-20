---
layout: article
title: 'pnpm 12 RC 8: Faster Linux Installs & Smarter Audit Fixes'
description: 'pnpm 12 RC 8 optimizes Linux package installs by prioritizing hardlinks, potentially halving materialization time, and refines `pnpm audit` to prevent reporting non-existent patches.'
photo: 'https://opengraph.githubassets.com/206876e570e18d773e07a8eb5818f3530c30cc0de18c88c96593932519f864cc/pnpm/pnpm/releases/tag/v12.0.0-rc.8'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.8
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, performance, release]
significance: 2
---

## Summary & Key Takeaways

- `packageImportMethod: auto` on Linux now attempts hardlinks before cloning, improving install times.
- This change can roughly halve the time spent materializing `node_modules` from a warm store on btrfs.
- `pnpm approve-builds` now correctly removes deprecated build settings from `pnpm-workspace.yaml`.
- `pnpm audit` no longer reports patched versions that were never published or are deprecated.
- The audit fix command is improved to prevent adding overrides for non-existent patches.

## Our Commentary

It's always good to see package managers squeezing out more performance. That hardlink optimization for Linux users is a solid win.
The `pnpm audit` improvements are also a welcome change. Dealing with phantom patches or deprecated versions in audit reports is just noise.
This RC feels like a thoughtful refinement of the pnpm experience. We appreciate the attention to detail here.
