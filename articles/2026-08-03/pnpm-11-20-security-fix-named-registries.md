---
layout: article
title: 'pnpm 11.20: Critical Security Fix for Named Registries'
description: 'pnpm 11.20 delivers a crucial security fix for projects using named registries, preventing package substitution risks and enhancing supply chain integrity.'
photo: 'https://opengraph.githubassets.com/0b61b1a6e8d896282427abd6352736dbe4c4578b2e4d36f6e224d770feff0a03/pnpm/pnpm/releases/tag/v11.20.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.20.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, security, release, nodejs]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11.20 provides a vital security update for users of named registries.
- The fix resolves a vulnerability where packages could be substituted from unintended sources.
- Lockfiles now include registry-qualified keys to ensure packages are sourced correctly.
- This update is essential for mitigating package-substitution risks in the supply chain.
- Projects using named registries will see lockfile changes that need to be committed.
- Ensure all collaborators are on this version or newer to maintain lockfile consistency.

## Our Commentary

Good to see this critical security fix land in the stable 11.x branch as well. It's a reminder that even seemingly minor version bumps can carry crucial updates. If you're on pnpm 11.x and use named registries, this is an immediate update.
