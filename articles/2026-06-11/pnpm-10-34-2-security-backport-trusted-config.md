---
layout: article
title: 'pnpm 10.34.2: .npmrc Security Backport & Trusted Config Enforcement'
description: 'This pnpm 10.x patch backports the crucial `.npmrc` security fix, closes a configuration bypass, and ensures package manager bootstrap traffic uses only trusted config.'
photo: 'https://opengraph.githubassets.com/6f4eadcfb2c511b198ed5e0ee417eae2eafdf414b3d4d382d838ddc3985ed38a/pnpm/pnpm/releases/tag/v10.34.2'
original_url: https://github.com/pnpm/pnpm/releases/tag/v10.34.2
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, security]
significance: 1
---

## Summary & Key Takeaways

- Backported the security fix preventing environment variable expansion in project `.npmrc` files.
- Closed a bypass allowing project `.npmrc` to load repo-supplied files as trusted configuration.
- Ensured package-manager bootstrap traffic is resolved exclusively through trusted registry and network configurations.
- Users are advised to move sensitive tokens out of committed `.npmrc` files.

## Our Commentary

Yet another pnpm security backport. The sheer number of these recent pnpm releases focused on `.npmrc` security makes me wonder how long this vulnerability has been lurking. It's a good thing they're addressing it so thoroughly now.
