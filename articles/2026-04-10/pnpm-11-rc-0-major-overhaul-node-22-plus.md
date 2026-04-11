---
layout: article
title: 'pnpm 11 RC 0: Major Overhaul with Node.js 22+ Requirement & New Features'
description: 'The first release candidate for pnpm 11 drops, bringing a Node.js 22+ requirement, pure ESM, a SQLite-backed store, native publish flow, and enhanced supply-chain protection.'
photo: 'https://opengraph.githubassets.com/39025bc60a161d9b6720d64065bc6012d2d4240745f14339e4c37ae37fe86c2d/pnpm/pnpm/releases/tag/v11.0.0-rc.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, build-tools, release]
significance: 4
---

## Summary & Key Takeaways

- pnpm 11 RC 0 is released, requiring Node.js 22+ and dropping support for older Node.js versions.
- The package manager is now pure ESM, and the standalone executable needs glibc 2.27.
- Supply-chain protection is enabled by default, with a 1-day minimum release age and blocking of exotic subdependencies.
- A new SQLite-backed store index (store v11) promises faster installations by reducing filesystem syscalls.
- Global installs are now isolated, each with its own directory, package.json, node_modules, and lockfile.
- pnpm now features a native publish flow, no longer delegating to the npm CLI for many commands.
- New commands like `pnpm ci`, `pnpm sbom`, and `pnpm clean` are introduced, along with `pn`/`pnx` aliases.
- HTTP and I/O operations are faster due to `undici` with Happy Eyeballs and other optimizations.

Wow, pnpm 11 is shaping up to be a massive release! The Node.js 22+ requirement and pure ESM transition are significant breaking changes that will force many projects to upgrade their environments, but they also push the ecosystem forward. I'm particularly excited about the SQLite-backed store and the native publish flow; these sound like huge wins for performance and reliability. The enhanced supply-chain protection by default is also a critical improvement. This release solidifies pnpm's position as a leading package manager, and we're eager to see how the community adopts these changes.
