---
layout: article
title: 'pnpm 11.12: Custom Fetchers & Peer Dependency Fixes'
description: 'This minor pnpm release introduces custom fetcher delegation and addresses critical issues with peer dependency resolution and the `pnpm outdated` command.'
photo: 'https://opengraph.githubassets.com/611b7ae8d1d43eb2a98087254bd79837a2d544ff740de80380b332e5029e17e1/pnpm/pnpm/releases/tag/v11.12.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.12.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release]
significance: 2
---

## Summary & Key Takeaways

- Custom fetchers can now delegate to built-in fetchers, improving flexibility.
- The `changed-packages` filter now correctly handles option-like values.
- `pnpm outdated` no longer checks the registry for local `link:`, `file:`, or `workspace:` references.
- A deadlock in peer dependency resolution has been fixed.
- Peer dependency auto-install now correctly picks versions that satisfy declared ranges.
- Fixes ensure consistent peer version resolution between fresh installs and existing lockfiles.

## Our Commentary

This 11.12 release for pnpm feels like a solid maintenance update. I'm always happy to see peer dependency resolution getting more robust; that's a common source of frustration. The custom fetcher delegation is a neat addition for advanced use cases. It's good to see the team ironing out these kinks.
