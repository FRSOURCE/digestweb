---
layout: article
title: 'pnpm 12.22.0 Released with Global Config & Improved Listing'
description: 'pnpm 12.22.0 introduces `globalPackagesConfig` for global settings, `pnpm why --ranges`, and lists workspace projects in dependency order, alongside a security fix.'
photo: 'https://opengraph.githubassets.com/d973bf1569ec5726d2d7504d231acc3918b1c3eca3024bef0c25b36678792e17/pnpm/pnpm/releases/tag/v12.22.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.22.0
source_name: 'pnpm Releases'
source_author: ''
tags: [pnpm, build-tools, release, dx]
significance: 2
---

## Summary & Key Takeaways

- pnpm 12.22.0 adds a `globalPackagesConfig` section to `config.yaml` for global package settings.
- The `pnpm why --ranges` command is introduced to list version ranges declared by direct dependents.
- `pnpm list --recursive` now sorts workspace projects by dependency order by default.
- A security fix addresses an issue where `pnpm install` could skip checks after registry changes.
- `pnpm approve-builds -g` and `pnpm add -g --allow-build` now save build decisions under `globalPackagesConfig.permissions`.
- File dependencies on local directories now resolve catalog specifiers against workspace catalogs.
- The experimental v13 lockfile format records declared specifiers for local directory packages.

## Our Commentary

pnpm keeps delivering solid updates. The `globalPackagesConfig` is a smart move for managing global packages more granularly, and `pnpm why --ranges` will be incredibly useful for debugging dependency trees. Sorting workspace projects by dependency order is a small but mighty DX improvement. And, of course, security fixes are always welcome. It's these consistent, thoughtful updates that make pnpm such a strong contender in the package manager space.
