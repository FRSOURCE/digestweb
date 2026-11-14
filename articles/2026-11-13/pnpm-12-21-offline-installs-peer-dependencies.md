---
layout: article
title: 'pnpm 12.21 Enhances Offline Installs and Peer Dependency Handling'
description: 'This minor pnpm release improves offline installation for tarball and Git dependencies, alongside crucial fixes for peer dependency consistency and deployment issues.'
photo: 'https://opengraph.githubassets.com/2ffc7b88fa519e8bfa5b40cc71121781f3174edfdb6840650f1b5716ebae5e72/pnpm/pnpm/releases/tag/v12.21.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.21.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- pnpm 12.21.0 now prepares tarball and Git dependencies for offline installs.
- Repeated installs will consistently retain their peer dependency choices.
- Several issues related to `lockfile.format: v13` and `nodeLinker: hoisted` have been resolved.
- Fixes address `pnpm deploy` failures in specific configurations.
- pnpm now resolves locally if a `pnpr` server refuses a setting.

## Our Commentary

I'm always happy to see improvements in package managers. Offline install prep for tarballs and Git dependencies is a nice quality-of-life bump. The peer dependency consistency fix is also a big deal; those issues can be a real headache.
