---
layout: article
title: 'pnpm 11.15 Improves Peer Deps & Patches Security Vulnerability'
description: 'pnpm 11.15 enhances how optional peer dependencies are resolved and includes a crucial security update for `adm-zip` to mitigate excessive memory allocation risks from crafted ZIP archives.'
photo: 'https://opengraph.githubassets.com/7b21623fac866fc0b13d200d679fbbb73fc7adc33470096aed367b9c43253c30/pnpm/pnpm/releases/tag/v11.15.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.15.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, build-tools, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Optional peer dependencies declared via `peerDependenciesMeta` now resolve more effectively.
- The resolution mechanism now prioritizes satisfying versions already in the dependency graph.
- `adm-zip` has been updated to prevent excessive memory allocation from malicious ZIP archives.
- Fixed an issue where `pnpm version -r` could write invalid versioning-ledger entries.

## Our Commentary

Another pnpm release, and this one has a security fix, which is always good to see. The peer dependency resolution improvement is a recurring theme across these pnpm updates, suggesting it's a focus area. It's a solid minor release, nothing groundbreaking, but important for stability and security.
