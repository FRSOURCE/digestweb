---
layout: article
title: 'pnpm 11.18: Optional Dependency Fixes & Publish Config Support'
description: 'pnpm 11.18 addresses optional dependency issues, enhances GitHub Actions integration, and adds support for `publishConfig.name` for flexible package publishing.'
photo: 'https://opengraph.githubassets.com/f17b3db6b529371087a7b20703c89d65ce43de5ba55db87f79e6cdadaf40c88b/pnpm/pnpm/releases/tag/v11.18.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.18.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, dx, security]
significance: 2
---

## Summary & Key Takeaways

- Fixed an issue where optional dependencies could be left without their own required dependencies.
- `pnpm setup` now appends `PNPM_HOME` to GitHub Actions environment files for better CI integration.
- Added support for `publishConfig.name` to publish packages under a different name than their manifest.
- `pnpm self-update` no longer takes instructions from the project, enhancing security.

## Our Commentary

It's good to see pnpm continuing to refine its core. The fix for optional dependencies is crucial for reliability, and the `publishConfig.name` feature is a clever solution for monorepos with naming conflicts. The `pnpm self-update` hardening is also a smart move for supply chain security.
