---
layout: article
title: 'pnpm 11.5.1 Improves Audit Performance and Fixes Integrity Issues'
description: "pnpm's latest patch release, 11.5.1, brings significant performance boosts to `pnpm audit` and resolves crucial integrity problems with remote tarball dependencies."
photo: 'https://opengraph.githubassets.com/57d75fd951a3f947461b8173f10a7893e0c3400138321db17771041598082871/pnpm/pnpm/releases/tag/v11.5.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.5.1
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, performance, dx, release]
significance: 1
---

## Summary & Key Takeaways

- `pnpm audit` performance is improved by pruning non-vulnerable lockfile subtrees.
- Avoids crashes when the workspace state cache is partially written.
- Preserves integrity field for remote tarball dependencies during lockfile rebuilds.
- Normalizes string repository fields for `pnpm publish` to prevent registry errors.
- Fixes inconsistent resolution of shared diamond peer dependencies.

## Our Commentary

A patch release, but those `pnpm audit` performance gains sound genuinely useful. Nobody wants to wait forever for security checks. And fixing those integrity issues? That's just good hygiene. We've all been there with weird dependency errors.
