---
layout: article
title: 'pnpm 11.2.2 Introduces Experimental Rust Install Engine'
description: "pnpm's latest minor release, 11.2.2, unveils an experimental, opt-in Rust port of its install engine, `pacquet`. This aims to delegate the materialization phase for potential performance gains."
photo: 'https://opengraph.githubassets.com/8684894e460198f21e7644b154c7f4899c8e3b39f2bcd493a44566ab43b1cad0/pnpm/pnpm/releases/tag/v11.2.2'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.2.2
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, open-source]
significance: 3
---

## Summary & Key Takeaways

- pnpm 11.2.2 introduces an experimental Rust port of its install engine, `pacquet`.
- `pacquet` handles the materialization phase of `pnpm install` when configured.
- This feature is opt-in and requires adding `@pnpm/pacquet` to `configDependencies`.
- pnpm still manages dependency resolution, with `pacquet` focusing on fetching and importing.
- CLI flags like `--no-runtime` are now correctly forwarded to `pacquet`'s install subcommand.
- Fixes were implemented for `pnpm up` and `add`/`remove` when `pacquet` is active.

## Our Commentary

This is a big deal, even if it's experimental. A Rust port of a core part of pnpm? That's a serious performance play. I'm curious how this will evolve and if it will eventually become the default. It feels like a direct challenge to other package managers. We've seen Rust rewrite parts of other tools, and it usually means a speed boost.
