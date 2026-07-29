---
layout: article
title: 'pnpm 12 Beta 0: Enhanced Workspace Management & Configuration'
description: 'The latest pnpm beta introduces robust workspace protocol handling, improved update commands, and expanded configuration options for its Rust engine.'
photo: 'https://opengraph.githubassets.com/1107879bc7e5d4e394f9d59a19068f4928c576e3e0aae76a116ad9868233b6d1/pnpm/pnpm/releases/tag/v12.0.0-beta.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-beta.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, dx]
significance: 3
---

## Summary & Key Takeaways

- The Rust engine now reads more settings from `pnpm-workspace.yaml` and environment variables.
- `frozenLockfile` and `savePrefix` can now be configured via `pnpm-workspace.yaml`.
- `savePeer` and `saveCatalogName` settings are also supported by the Rust engine.
- `saveWorkspaceProtocol` setting is now fully supported, allowing flexible workspace specifier handling.
- `pnpm update --workspace` is now supported for re-pointing dependencies to local copies.
- `pnpm update --depth <number>` now applies depth per dependency for more granular updates.

## Our Commentary

This beta release for pnpm 12 is packed with some really thoughtful improvements. I'm particularly interested in the `saveWorkspaceProtocol` enhancements; managing workspace dependencies can be a real pain point, and more granular control here is a win. The `pnpm update --workspace` command also feels like a long-awaited feature for monorepo users.
