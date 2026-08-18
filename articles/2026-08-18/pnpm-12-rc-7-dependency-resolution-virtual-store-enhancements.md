---
layout: article
title: 'pnpm 12 RC 7: Enhancements to Dependency Resolution and Virtual Store'
description: 'pnpm 12 RC 7 brings technical refinements to dependency resolution, virtual store behavior, and registry metadata handling, preparing for the upcoming major release.'
photo: 'https://opengraph.githubassets.com/b2da0d5270ba579d04cf3635a3b91817a74f72c0c7e2b29d821019af0dc6e81d/pnpm/pnpm/releases/tag/v12.0.0-rc.7'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.7
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- `node_modules/.modules.yaml` no longer records old registry information.
- `pnpm list` and `pnpm why` now use configured registries.
- `enableGlobalVirtualStore` now correctly sets `NODE_PATH` and `NODE_OPTIONS` for spawned processes.
- Phantom dependencies resolve correctly under the global virtual store for CommonJS and ESM.
- Registries can declare `supportsTimeField` for more efficient time-based resolution.

## Our Commentary

RC 7, huh? It's good to see the continued refinement of pnpm. The `NODE_PATH` and `NODE_OPTIONS` changes for the global virtual store are a big deal for consistency, especially with ESM. I'm always a little nervous about how many subtle ways package managers can break things, so these kinds of fixes are crucial. The registry `supportsTimeField` is a nice optimization for those using time-based resolution.
