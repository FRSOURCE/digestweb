---
layout: article
title: 'pnpm 11: Major Updates for Performance, Security, and DX'
description: 'pnpm v11 introduces significant changes, including requiring Node.js 22+, enabling supply-chain protection by default, and overhauling global installs and the store index for improved performance and developer experience.'
photo: 'https://opengraph.githubassets.com/d23baa8f8f66bb31d0aeb2d0c187e048705021433e6e98d66d661c26e96ff865/pnpm/pnpm/releases/tag/v11.0.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release, dx]
significance: 3
---

## Summary & Key Takeaways

- pnpm v11 now requires Node.js 22+, dropping support for older versions, and is pure ESM.
- Supply-chain protection features like `minimumReleaseAge` and `blockExoticSubdeps` are enabled by default.
- The `allowBuilds` setting replaces several older build-dependency configurations.
- Global installs are now isolated, each with its own directory and virtual store.
- A new SQLite-backed store index (store v11) improves installation speed by reducing filesystem syscalls.
- pnpm's publish flow is now native, no longer delegating to the npm CLI for many commands.
- The `.npmrc` file is restricted to auth/registry settings, with other configurations moving to `pnpm-workspace.yaml` or `config.yaml`.
- Runtime installs are slimmer, excluding bundled npm, npx, and corepack.
- Several new commands have been introduced, including `pnpm ci`, `pnpm sbom`, and `pnpm clean`.

## Our Commentary

This is a substantial release for pnpm, pushing the ecosystem forward with a strong focus on security and performance. The Node.js 22+ requirement is a bold move, but it aligns with modern development practices. I'm particularly excited about the default supply-chain protections and the performance gains from the new store index. It feels like pnpm is really maturing into a robust, secure, and efficient package manager.
