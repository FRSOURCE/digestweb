---
layout: article
title: 'pnpm 12.7 Released: .nvmrc Support, Build Control, & Security Fixes'
description: 'pnpm 12.7 introduces .nvmrc support, granular control over package build scripts, a publish wait timeout, and critical security enhancements.'
photo: 'https://opengraph.githubassets.com/81b8bba9b31dc03eaffa2d40a6f9dd8723a585e80ba04a914c37ae9e16255193/pnpm/pnpm/releases/tag/v12.7.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.7.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, build-tools, release]
significance: 2
---

## Summary & Key Takeaways

- Adds `.nvmrc` and `.node-version` support for the global node shim.
- Introduces `pnpm install --allow-build` for selective script execution.
- A new `pnpm publish --publish-wait-timeout` option is available.
- `pnpm install --force` now skips platform-mismatched optional dependencies by default.
- Includes security fixes for bin shims and lifecycle scripts.
- Improves the creation of `pnpm-workspace.yaml` files.

## Our Commentary

pnpm just keeps shipping. The `.nvmrc` support is a nice quality-of-life improvement, and `--allow-build` is a solid security feature. It's these continuous, thoughtful updates that make a tool indispensable. We appreciate the consistent improvements.
