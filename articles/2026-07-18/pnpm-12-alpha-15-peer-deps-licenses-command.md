---
layout: article
title: 'pnpm 12 Alpha 15: Improved Peer Deps & New Licenses Command'
description: 'pnpm 12 Alpha 15 brings enhancements to optional peer dependency resolution, introduces a `pnpm licenses` command, and addresses several critical bugs related to lockfile integrity and workspace command execution.'
photo: 'https://opengraph.githubassets.com/fde520b1db8ca5fd7719acab2cd0327d34d3cf1617f593c5511405559b694100/pnpm/pnpm/releases/tag/v12.0.0-alpha.15-1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-alpha.15-1
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, build-tools, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Optional peer dependencies declared via `peerDependenciesMeta` now resolve more consistently.
- The `pnpm licenses` command has been added to the Rust `pacquet` port for listing package licenses.
- Fixed an issue where `pnpm version -r` could write invalid versioning-ledger entries.
- Resolved incorrect failures of `pnpm install --frozen-lockfile` with auto-install-peers enabled.
- Pacquet workspace commands now correctly honor project filters.
- Addressed a lockfile corruption issue during non-frozen re-installs.

## Our Commentary

An alpha release, but these are some solid improvements for pnpm. The peer dependency resolution fix sounds like a quality-of-life win, and a dedicated `pnpm licenses` command is genuinely useful for compliance. We've all been burned by lockfile issues, so those fixes are always welcome. It's good to see the Rust `pacquet` port getting more features too.
