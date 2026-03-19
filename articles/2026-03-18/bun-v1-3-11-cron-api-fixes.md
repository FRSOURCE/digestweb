---
layout: article
title: 'Bun v1.3.11: New Cron API & 100+ Bug Fixes'
description: 'Bun v1.3.11 introduces `Bun.cron` for native OS-level cron jobs and `Bun.sliceAnsi` for advanced string manipulation, alongside over 100 bug fixes and numerous Node.js compatibility improvements.'
photo: https://bun.com/logo.svg
original_url: https://bun.com/blog/bun-v1.3.11
source_name: 'Bun Blog'
source_author: 'Jarred Sumner'
tags: [bun, release, nodejs, dx]
significance: 2
---

## Summary
*   Bun v1.3.11 is a significant patch release, addressing 105 issues and improving Node.js compatibility.
*   **New `Bun.cron` API:** Enables scheduling OS-level cron jobs directly within Bun applications.
*   **New `Bun.sliceAnsi`:** Provides ANSI/grapheme-aware string slicing for better terminal output handling.
*   **Testing Improvements:** Adds `bun test --path-ignore-patterns` for more granular test execution.
*   **Performance & Size:** Smaller binary size on Linux (4 MB reduction).
*   **Compatibility:** Numerous fixes for `dgram`, `fs`, `http2`, bundler, CSS parsing, and Node.js API parity.

## Our Commentary

Jareed Sumner and Bun still keep their tremendous pace! It's hard to pin point one single best thing about this release - it looks like mainly maintenance stuff. Will be good to upgrade though! Wondering how much docker image size decresed with 4MB less in Linux build :-)

