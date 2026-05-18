---
layout: article
title: 'pnpm 10.33.3 Improves Self-Update for Intel Macs'
description: 'This pnpm v10 patch ensures a smoother self-update experience for Intel macOS users transitioning to v11+, transparently switching to the JS-only package.'
photo: 'https://opengraph.githubassets.com/3bd838c89fb69b209b7363583a3d1300127c5e3ec56fc4e8e4f82b50d0201323/pnpm/pnpm/releases/tag/v10.33.3'
original_url: https://github.com/pnpm/pnpm/releases/tag/v10.33.3
source_name: 'pnpm Releases'
source_author: ''
tags: [release, tooling, nodejs]
significance: 1
---

## Summary & Key Takeaways

- When self-updating from pnpm v10's `@pnpm/exe` to v11+ on Intel macOS, `pnpm self-update` now transparently switches to the JS-only `pnpm` package from npm.
- This change prevents users from being left with a non-working pnpm binary on Intel Macs due to an upstream Node.js SEA bug.
- A warning is printed when this swap occurs, noting that the new install requires Node.js to be available on `PATH`.
- `pnpm self-update` (without a version argument) will no longer downgrade pnpm if the registry's `latest` dist-tag points to an older release than the currently active version.

## Our Commentary

It's good to see pnpm addressing the Intel Mac issue across both its current and previous major versions. This specific v10 patch focuses on a smoother transition for existing users, which is a thoughtful touch. While not a groundbreaking feature, it highlights a commitment to user experience, especially when dealing with platform-specific quirks and upstream dependencies.
