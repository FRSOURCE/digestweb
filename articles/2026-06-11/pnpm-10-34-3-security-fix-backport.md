---
layout: article
title: 'pnpm 10.34.3: Backports Critical .npmrc Security Fix'
description: 'This patch release for pnpm 10.x backports the crucial security fix preventing environment variable leakage from project `.npmrc` files and closes a configuration bypass.'
photo: 'https://opengraph.githubassets.com/f4a288977dfcfb582735acdaad45c8e1a3a3b4a54bbc5126f642016795ff6918/pnpm/pnpm/releases/tag/v10.34.3'
original_url: https://github.com/pnpm/pnpm/releases/tag/v10.34.3
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, security]
significance: 1
---

## Summary & Key Takeaways

- Backported the security fix preventing environment variable expansion in project `.npmrc` files.
- Closed a bypass allowing project `.npmrc` to load repo-supplied files as trusted configuration.
- Improved warning messages for ignored environment variables in `.npmrc` to guide migration.
- Users may need to move authentication tokens out of committed `.npmrc` files.

## Our Commentary

Good to see pnpm backporting critical security fixes to older major versions. It shows a commitment to user security across the ecosystem. The bypass fix is also a smart move, closing another potential vector for malicious repos.
