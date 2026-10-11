---
layout: article
title: 'pnpm 12.12.0: Remote Caching & Enhanced TypeScript Support'
description: 'pnpm 12.12.0 introduces remote caching for task results and dependency builds, compatible with Turborepo. It also adds a new setting to automatically link @types packages for peer dependencies, streamlining TypeScript workflows.'
photo: 'https://opengraph.githubassets.com/ef19181e125338d4f056c464b026ec175300e29d92194bcf844e43c288f06aa7/pnpm/pnpm/releases/tag/v12.12.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.12.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, dx, release]
significance: 3
---

## Summary & Key Takeaways

- Remote caching for task results and dependency builds is now available.
- This cache is compatible with the Turborepo Remote Cache API.
- A new `addMissingPeerTypes` setting automatically links `@types` packages for peer dependencies.
- `pnpm add --config` and `pnpm update` now manage configuration dependencies more robustly.
- The `remoteCache` setting configures the server and signing keys for caching.
- `pnpm pipeline --report` can record runs under a specified organization.
- A bug was fixed where `dangerouslyAllowAllBuilds` ignored `allowBuilds` denials.

## Our Commentary

Remote caching for pnpm? This is a huge deal for monorepos and CI/CD pipelines. We've seen the impact of similar features in other build tools, and bringing that to pnpm is a serious performance boost. I'm genuinely excited to see how this integrates with existing setups. The `addMissingPeerTypes` setting is also a quiet but powerful DX win for TypeScript users; it's those little quality-of-life improvements that really smooth out the rough edges of development.
