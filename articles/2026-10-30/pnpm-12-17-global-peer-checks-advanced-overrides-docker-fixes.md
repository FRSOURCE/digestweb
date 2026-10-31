---
layout: article
title: 'pnpm 12.17: Global Peer Checks, Advanced Overrides & Docker Fixes'
description: 'This pnpm release introduces global peer dependency checks, powerful new selectors for overrides, and critical fixes for file permissions in Docker environments.'
photo: 'https://opengraph.githubassets.com/c5881e54fe5d1a65c73cf7e849cb172ae6fc5339bc12e76d84a2e5ed36189a8b/pnpm/pnpm/releases/tag/v12.17.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.17.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, dx, release]
significance: 2
---

## Summary & Key Takeaways

- `pnpm peers check` now supports a `--global` flag for globally installed packages.
- `pnpm outdated` and `pnpm update` now inspect and update package manager and runtime versions in `devEngines` and `engines`.
- Cargo and Python dependencies are now inspected and updated by `pnpm outdated` and `pnpm update` when enabled.
- Overrides selectors gain `:prod`, `:optional`, `:peer` pseudo-selectors and `*` wildcard patterns.
- Files created by pnpm in a project now respect umask permissions, fixing Docker image issues.
- Repeat installs no longer miss changes to local dependencies.

## Our Commentary

This pnpm release feels like a solid step forward. The new override selectors with wildcards are genuinely powerful for complex monorepos. But the Docker file permissions fix? That's a huge quality-of-life improvement. I've seen so many developers struggle with that exact issue. It's the kind of fix that just makes things _work_ without you even realizing why they were broken before.
