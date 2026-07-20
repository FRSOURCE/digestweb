---
layout: article
title: 'pnpm 12 Alpha 17: Enhanced CLI, New Settings, and Force Install'
description: 'This alpha release of pnpm 12 introduces significant enhancements to `pnpm list` and `pnpm why` commands, alongside new configuration options and a `--force` flag for installs.'
photo: 'https://opengraph.githubassets.com/20a555fd0a36cd99134aeb15b9f804aa34ed4e34dd8d7711fa4bd91db17239a5/pnpm/pnpm/releases/tag/v12.0.0-alpha.17'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-alpha.17
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release, dx]
significance: 2
---

## Summary & Key Takeaways

- `pnpm list` and `pnpm why` are now feature-complete with many new options like `--only-projects`, `--json`, and search by version range.
- New settings include `cleanupUnusedCatalogs` for managing workspace entries and `enableModulesDir: false` to prevent `node_modules` creation.
- Command shims now set `NODE_PATH` consistently with isolated `nodeLinker` and hoist patterns.
- A new `extendNodePath: false` setting allows disabling this `NODE_PATH` behavior.
- The `--force` flag for `pnpm install` and `pnpm add` now installs optional dependencies regardless of host compatibility and relinks packages.
- `sharedWorkspaceLockfile: false` is now supported by the install family of commands.

## Our Commentary

This is a chunky alpha release. I'm always impressed by the sheer volume of features pnpm packs into its updates. The `--force` flag for optional dependencies is a nice touch, and the `list`/`why` command parity is a huge win for consistency. It feels like they're really refining the developer experience.
