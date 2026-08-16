---
layout: article
title: 'pnpm 11.22: Cache Path & Config Refinements'
description: 'This minor pnpm release exposes the cache path for CI setups and refines how configuration settings are handled, preventing unsupported writes.'
photo: 'https://opengraph.githubassets.com/4c92b6cff37f2eeb9324062afccc3ba8c4b3e8e46309cb4fd8df355fee209785/pnpm/pnpm/releases/tag/v11.22.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.22.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, release]
significance: 1
---

## Summary & Key Takeaways

- `pnpm cache path` is added, printing the metadata cache directory for CI use.
- `--config.config-dir` and similar flags no longer read from `pnpm-workspace.yaml`.
- `pnpm config set` now prevents writing unsupported settings to `pnpm-workspace.yaml`.
- A new setting, `minimumReleaseAgeExcludePrune`, helps prune old lockfile entries.

## Our Commentary

This is a solid maintenance release. The `pnpm cache path` is a small but mighty addition for anyone dealing with CI pipelines; caching that lockfile verification log could save some precious seconds. I appreciate the stricter config handling too; it's always better when tools guide you away from misconfigurations rather than letting you shoot yourself in the foot. Not flashy, but important for stability.
