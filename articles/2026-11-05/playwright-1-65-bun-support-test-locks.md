---
layout: article
title: 'Playwright 1.65.0: Bun Support, New Reporters, and Test Locks'
description: 'Playwright v1.65.0 ships with experimental Bun support, a new failures reporter, and an exclusive test lock feature, enhancing testing workflows.'
photo: 'https://opengraph.githubassets.com/85ab305e1d07ea03f9b0ce65822872acd339850d1a126e872fec04d9a7de9034/microsoft/playwright/releases/tag/v1.65.0'
original_url: https://github.com/microsoft/playwright/releases/tag/v1.65.0
source_name: 'Playwright Releases'
source_author: ''
tags: [testing, tooling, release, bun]
significance: 3
---

## Summary & Key Takeaways

- Playwright v1.65.0 introduces experimental support for running tests with Bun.
- A new 'failures' reporter prints failures and successful retries as they occur.
- HTML, JSON, and JUnit reporters now support an `onlyFailures` option.
- A built-in `-exclusive-` test lock allows a single test to run without parallel interference.
- `test.skip()`, `test.fixme()`, `test.fail()`, and `test.slow()` now accept only a description.
- A new `PLAYWRIGHT_TRANSFORM_CACHE_DIR` environment variable is available.

## Our Commentary

Bun support in Playwright is a big deal, even if it's experimental. The testing landscape is getting wild with all these runtimes. I'm also really digging the new failures reporter; it's a small quality-of-life improvement that makes a huge difference when debugging. The exclusive test lock is a clever addition for those tricky integration scenarios.
