---
layout: article
title: 'Bun v1.3.11: New Cron API & 100+ Bug Fixes'
description: 'Bun v1.3.11 introduces `Bun.cron` for native OS-level cron jobs and `Bun.sliceAnsi` for advanced string manipulation, alongside over 100 bug fixes and numerous Node.js compatibility improvements.'
photo: https://picsum.photos/id/921/800/450
original_url: https://bun.com/blog/bun-v1.3.11
source_name: 'Bun Blog'
source_author: ''
tags: [bun, release, nodejs, dx]
significance: 2
---

## Summary & Key Takeaways

## Summary & Key Takeaways
*   Bun v1.3.11 is a significant patch release, addressing 105 issues and improving Node.js compatibility.
*   **New `Bun.cron` API:** Enables scheduling OS-level cron jobs directly within Bun applications.
*   **New `Bun.sliceAnsi`:** Provides ANSI/grapheme-aware string slicing for better terminal output handling.
*   **Testing Improvements:** Adds `bun test --path-ignore-patterns` for more granular test execution.
*   **Performance & Size:** Smaller binary size on Linux (4 MB reduction).
*   **Compatibility:** Numerous fixes for `dgram`, `fs`, `http2`, bundler, CSS parsing, and Node.js API parity.

## Our Commentary

## Our Commentary
While a patch release, Bun v1.3.11 delivers more than just bug fixes. The introduction of `Bun.cron` is a powerful addition, simplifying the creation of scheduled tasks without external dependencies. `Bun.sliceAnsi` also highlights Bun's attention to detail in developer experience, especially for CLI tools. The continuous stream of bug fixes and Node.js compatibility improvements underscores Bun's rapid maturation and commitment to becoming a robust, high-performance JavaScript runtime. It's clear that the Bun team is not just chasing speed, but also comprehensive feature parity and stability.
