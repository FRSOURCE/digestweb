---
layout: article
title: 'pnpm 12 RC 0: Enhanced Global Installs & Dependency Handling'
description: 'The first Release Candidate for pnpm v12 is out, bringing stricter sudo handling, improved `file:` and `link:` dependency management, and better concurrent install stability.'
photo: 'https://opengraph.githubassets.com/67da2ebe63280379a12d42cccf73b2329dd2ad906d3c6814607a504eff80e5c4/pnpm/pnpm/releases/tag/v12.0.0-rc.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, release]
significance: 2
---

## Summary & Key Takeaways

- `pnpm setup` and global modifications via `sudo` now explicitly fail with `ERR_PNPM_SUDO_NOT_SUPPORTED`.
- `file:` dependencies are now re-copied correctly when their source directory changes.
- Concurrent installs sharing a global virtual store no longer fail due to directory removal issues.
- `link:` dependencies under `enableGlobalVirtualStore` now ensure linked children are materialized.
- Headless installs (`--frozen-lockfile`) now correctly create command shims for hoisted workspace packages.

## Our Commentary

I'm glad to see pnpm tightening up its `sudo` behavior. It always felt a bit off that global commands could silently operate on the root user's home. This RC also addresses some long-standing quirks with `file:` and `link:` dependencies, which is a win for monorepo users. The concurrent install fixes are also a big deal for CI/CD pipelines. We're seeing a lot of polish here.
