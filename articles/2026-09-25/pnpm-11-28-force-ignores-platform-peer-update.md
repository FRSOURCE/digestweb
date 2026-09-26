---
layout: article
title: 'pnpm 11.28 Update: Platform Ignorance & Peer Dependency Control'
description: 'pnpm 11.28 adds `forceIgnoresPlatform` for optional dependencies, `pnpm update --peer`, and addresses several bugs and security vulnerabilities.'
photo: 'https://opengraph.githubassets.com/3271300bebeec9846c43ee05c56ab975abeb4c4db6aae1c4407ce74e8c8104b5/pnpm/pnpm/releases/tag/v11.28.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.28.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, build-tools, release]
significance: 2
---

## Summary & Key Takeaways

- Introduces the `forceIgnoresPlatform` setting for optional dependencies.
- Adds `pnpm update --peer` for updating peer dependencies.
- Fixes bugs in `pnpm deploy`, `--filter`, and `nodeLinker: hoisted`.
- Includes security fixes for shell completion and bin shims.
- Addresses security concerns related to `userAgent` in `pnpm-workspace.yaml`.

## Our Commentary

Two pnpm releases back-to-back. It's a good sign of active development. The security fixes are always welcome, especially for a tool that touches so many parts of the system. It's reassuring to see this level of attention to detail.
