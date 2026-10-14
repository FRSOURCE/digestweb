---
layout: article
title: 'pnpm 12.13.0 Introduces Profile Commands & Network Store Format'
description: 'pnpm 12.13.0 adds new commands for user profiles and authentication tokens, a `storeIndexFormat` setting for network filesystems, and faster Python dependency resolution.'
photo: 'https://opengraph.githubassets.com/f291dda5bf9a49c80a0c9ed3401b8862819d1c0e7df36e41a3ba4c0ba0e7f513/pnpm/pnpm/releases/tag/v12.13.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.13.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- New `pnpm profile` command to view and update registry user profile settings.
- New `pnpm token` command to list, create, and revoke authentication tokens.
- `storeIndexFormat: files` setting for network filesystems to prevent SQLite locking issues.
- Faster Python dependency resolution is now included.
- `nodePackageMap` settings are grouped, with `mode: write-only` for other tools.
- Fixes for `pnpm setup` on macOS and install issues on virtiofs/SMB shares.

## Our Commentary

pnpm keeps getting better. The `profile` and `token` commands are nice quality-of-life additions, but the `storeIndexFormat: files` setting for network filesystems is a real problem-solver. Anyone who's tried to use pnpm stores over SMB knows the pain of SQLite locking. This is a smart solution. We're always looking for ways to improve DX, and these kinds of targeted fixes and features really deliver.
