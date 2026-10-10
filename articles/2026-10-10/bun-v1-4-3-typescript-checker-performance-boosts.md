---
layout: article
title: 'Bun v1.4.3: New TypeScript Checker & Major Performance Boosts'
description: "Bun's latest release introduces a blazing-fast TypeScript type checker, significant CPU and HTTP performance gains, and new experimental APIs."
photo: 'https://bun.com/og/blog/bun-v1.4.3.png'
original_url: https://bun.com/blog/bun-v1.4.3
source_name: 'Bun Blog'
source_author: 'Jarred Sumner'
tags: [bun, tooling, typescript, release]
significance: 3
---

## Summary & Key Takeaways

- Introduces `bun check`, a new built-in TypeScript type checker.
- `bun check` is reported to be 3x to 6.4x faster than `tsc`.
- Achieves 67–89% less idle CPU usage.
- Includes a JavaScriptCore upgrade for faster `JSON.parse`.
- Improves large `node:http` responses by up to 2.7x.
- Adds experimental `Bun.FetchSession` and `Bun.ModuleGraph` APIs.
- Introduces `CompressionStream` compression levels and `If-Range` support in `Bun.serve`.
- Fixes 166 issues and enhances Node.js compatibility.

## Our Commentary

We're seeing Bun continue its relentless march. A built-in TypeScript checker that's _that_ much faster than `tsc`? That's a bold claim. I'm genuinely curious how it holds up in real-world, complex projects. The idle CPU reduction is also a huge win for developer experience. It feels like they're trying to own the entire JS runtime and tooling stack, piece by piece. It's ambitious, maybe even a little scary how fast they're moving.
