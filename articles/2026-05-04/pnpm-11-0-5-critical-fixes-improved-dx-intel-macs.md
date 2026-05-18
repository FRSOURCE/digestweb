---
layout: article
title: 'pnpm 11.0.5: Critical Fixes & Improved DX for Intel Macs'
description: 'This patch release for pnpm 11 addresses a segfault issue on Intel Macs, enhances the `pnpm dlx` experience with interactive build prompts, and fixes global list command output.'
photo: 'https://opengraph.githubassets.com/9e93921794e10ca1d4a428b9e2ecf1d460af84f421871a3d9dfa1c6b27d2ba0e/pnpm/pnpm/releases/tag/v11.0.5'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.5
source_name: 'pnpm Releases'
source_author: ''
tags: [release, tooling, dx, nodejs]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11.0.5 drops the `darwin-x64` artifact for Intel Macs due to a Node.js SEA bug causing segfaults, advising users to install via `npm install -g pnpm` or stay on pnpm 10.x.
- `pnpm dlx` (and `pnpx`/`pnx`/`pnpm create`) now includes an interactive prompt to approve builds for packages with install scripts, preventing `ERR_PNPM_IGNORED_BUILDS`.
- `pnpm dlx` also now removes partially-populated cache directories upon install failure, ensuring clean subsequent runs.
- Fixes were implemented for `pnpm -g ls --json` and `pnpm -g ls --parseable` to correctly emit valid JSON and parseable output, restoring pnpm 10 behavior.
- `pnpm -g ls --depth=<n>` now errors when multiple isolated global installs are involved, as merging their transitive trees would be incoherent.

## Our Commentary

This pnpm patch release is more substantial than typical point updates. The fix for Intel Mac users is critical, preventing segfaults and providing clear guidance. We appreciate the improved `pnpm dlx` experience; the previous `ERR_PNPM_IGNORED_BUILDS` was a common frustration, and this change significantly smooths out the workflow for many. It's a good example of how even minor version bumps can deliver meaningful developer experience improvements.
