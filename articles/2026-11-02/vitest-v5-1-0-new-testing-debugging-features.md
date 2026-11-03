---
layout: article
title: 'Vitest v5.1.0 Unleashes Powerful New Testing & Debugging Features'
description: "Vitest's latest release brings a suite of enhancements, including flags for running failed or changed tests, improved fake timers, interactive snapshot review, and advanced trace view capabilities for better debugging."
photo: 'https://opengraph.githubassets.com/b8bffa3ab477731f90158e4d8c52df18a28f0ef5e5e3727073601b487b20e045/vitest-dev/vitest/releases/tag/v5.1.0'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.1.0
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling, dx]
significance: 3
---

## Summary & Key Takeaways

- New `--last-failed` and `--since-last-run` flags streamline test execution.
- `vi.setSystemTime()` now supports `Temporal.Instant` and `Temporal.ZonedDateTime`.
- Per-retry/repeat attempt results are now exposed for more granular control.
- Fake timers have expanded support for `node:timers` and `node:timers/promise`.
- Developers can now interactively review failed snapshots directly.
- Browser module mocking is improved with import map support.
- The trace view is out of experimental, with new timeline and failure-only modes.
- An experimental pointer API and `aria` snapshot capture enhance UI testing.
- Coverage providers can now store data in the file system module cache.

## Our Commentary

Vitest just keeps getting better, doesn't it? The `--last-failed` and `--since-last-run` flags are absolute game-changers for iterative development. I'm also really excited about the interactive snapshot review; that's going to save so much time. It feels like they're really listening to what developers need for a smoother, faster testing workflow. This release is packed.
