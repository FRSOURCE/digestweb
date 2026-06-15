---
layout: article
title: 'Vitest v5.0.0-beta.5 Previews Major Changes and New Features'
description: "Vitest's latest beta for v5.0.0 brings breaking changes like config file lookup adjustments and `runner` package inline, alongside new features such as browser UI trace display and a `--repeats` CLI option."
photo: 'https://opengraph.githubassets.com/53a8cad2710dac816c216043a43b000dcbadb90379a7c5201a79f0dd158022de/vitest-dev/vitest/releases/tag/v5.0.0-beta.5'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-beta.5
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, tooling]
significance: 3
---

## Summary & Key Takeaways

- Breaking changes include not looking up config files from ancestor directories and inlining the `@vitest/runner` package.
- The `happy-dom`/`jsdom` window object can now be mutated.
- New features for the browser UI include displaying nested mark traces.
- A `--repeats` CLI option has been added for running tests multiple times.
- Coverage thresholds can now be automatically updated with previous values as arguments.
- Several bug fixes address issues with mixed stdout/stderr logs, importOriginal, and transform time calculations.
- Browser testing improvements include waiting for orchestrator readiness and encoding iframe IDs.

## Our Commentary

Vitest moving towards v5 is exciting, especially with the browser UI improvements. Breaking changes are always a bit of a pain, but they often pave the way for better architecture. I'm particularly interested in how the `happy-dom`/`jsdom` window mutation will impact testing strategies. It feels like Vitest is maturing rapidly, solidifying its position as a strong alternative in the JS testing landscape.
