---
layout: article
title: 'Bun v1.4.4: Faster Formatting, Checks, Installs, and SQL Performance'
description: "Bun's latest release, v1.4.4, delivers substantial performance boosts for `bun fmt`, `bun check`, and `bun install`. It also introduces new features for `Bun.SQL` and `Bun.Glob`, alongside numerous bug fixes."
photo: 'https://bun.com/og/blog/bun-v1.4.4.png'
original_url: https://bun.com/blog/bun-v1.4.4
source_name: 'Bun Blog'
source_author: 'Jarred Sumner'
tags: [bun, release, tooling, performance]
significance: 3
---

## Summary & Key Takeaways

- Bun v1.4.4 fixes 271 issues and addresses 544 community upvotes.
- `bun fmt` is now 3x to 6x faster than `oxfmt`.
- `bun check` sees 1.4x to 7.8x speed improvements on large projects.
- `bun install` now supports Yarn Berry lockfiles and is up to 3.2x faster for hoisted installs from a warm cache.
- `Bun.SQL` uses up to 48% less CPU per query and gains new features like `query.cancel()` and user-defined functions.
- WebSocket handling in `Bun.serve` is rewritten to behave like npm's `ws` on Node.js.
- JavaScriptCore upgrade brings 54x faster `toLocaleString` and faster `Headers` iteration.
- The dev server features a redesigned error overlay.

## Our Commentary

Bun keeps pushing. The sheer volume of fixes and performance gains in a minor release is wild. I'm particularly interested in the `bun fmt` speedup; that's a daily driver for many. The `Bun.SQL` improvements are also a big deal for database-heavy applications. It feels like they're just relentlessly chipping away at every possible bottleneck. We're seeing a pattern here, and it's impressive.
