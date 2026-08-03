---
layout: article
title: 'pnpm 12 Beta 4: Critical Security Fix for Named Registries'
description: 'pnpm 12 Beta 4 addresses a critical security vulnerability where packages from named registries could be substituted, enhancing supply chain security. Users of named registries should update.'
photo: 'https://opengraph.githubassets.com/b063c209a5b0802139bc59321da6cf9bd6e50af170a3f0b60776380a1911da5b/pnpm/pnpm/releases/tag/v12.0.0-beta.4'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-beta.4
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, security, release, nodejs]
significance: 2
---

## Summary & Key Takeaways

- pnpm 12 Beta 4 includes a crucial security fix for projects utilizing named registries.
- The vulnerability allowed for potential package substitution from unintended registries.
- Lockfiles now record registry-qualified keys to pin packages to their correct source.
- This change prevents a package-substitution risk, improving supply chain security.
- Users of named registries will see a lockfile diff upon updating, which should be committed.
- All team members should update to this version or newer to maintain lockfile consistency.

## Our Commentary

This is a big deal for anyone relying on private registries. The idea that a package could be swapped out from a different source is genuinely unsettling. We've seen enough supply chain attacks to know this kind of fix is absolutely essential. It's a beta, but the security implications make it a must-mention.
