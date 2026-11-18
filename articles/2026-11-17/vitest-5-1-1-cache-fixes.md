---
layout: article
title: 'Vitest v5.1.1 Released with Cache Features & Bug Fixes'
description: 'Vitest v5.1.1 includes new environment variables for fs module caching, alongside various bug fixes for reruns, context leaks, and diff improvements.'
photo: 'https://opengraph.githubassets.com/ff40cb016670d799096e196529acacf7b827fc99ab6f7c448f6ea9210fa120ff/vitest-dev/vitest/releases/tag/v5.1.1'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.1.1
source_name: 'Vitest Releases'
source_author: ''
tags: [vitest, testing, release, tooling]
significance: 1
---

## Summary & Key Takeaways

- Vitest v5.1.1 introduces new environment variables for fs module caching.
- It fixes issues with rerunning tests on file changes after config restarts.
- Improvements were made to prevent context leaks in `expect` calls.
- The release enhances diffs for asymmetric matchers.
- It addresses problems with applying `--shard` before test runs.
- Fixture teardown errors are now reported only once.
- Timeout errors now throw specific error classes instead of generic `Error` objects.

## Our Commentary

Vitest continues its steady march of improvements. The `fs` module cache variables are a nice touch for performance, and the bug fixes, especially around reruns and `expect` context, are crucial for a stable testing experience. It's the kind of release that makes your daily dev life just a little bit smoother, even if it's not headline-grabbing.
