---
layout: article
title: 'pnpm 11.14 Introduces `pnpm doctor` & Enhanced Peer Dependency Support'
description: 'pnpm 11.14 ships with a new `pnpm doctor` command to diagnose installation issues, expands peer dependency specifier support, and enhances `pnpm run` with RegExp matching and a restored `--sequential` option.'
photo: 'https://opengraph.githubassets.com/732b2f8f0ecb146748ee0e5c9848999be3870a727945d28beed03b03db5e0abd/pnpm/pnpm/releases/tag/v11.14.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.14.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, build-tools, release, dx]
significance: 3
---

## Summary & Key Takeaways

- `peerDependencies` now accept dependency specifiers with schemes (e.g., `npm:`, `git:`).
- A new `pnpm doctor` command helps diagnose pnpm installations and environment issues.
- `pnpm doctor` checks PATH, store writability, link strategies, and registry connectivity.
- `pnpm run` now supports executing multiple scripts matching a regular expression.
- The `--sequential` (`-s`) CLI option for `pnpm run` has been restored.
- Fixed `pnpm install` failing when `pnpm-lock.yaml` is a symlink.

## Our Commentary

Okay, `pnpm doctor` is a huge win for developer experience. We've all spent too much time debugging environment issues, and a built-in diagnostic tool is just smart. The expanded peer dependency support is also a nice touch, making things more flexible. It's these kinds of DX improvements that really make a difference in daily workflow.
