---
layout: article
title: 'Bun v1.3.13: Performance Boosts, Testing Features & Node.js Compatibility'
description: 'Bun v1.3.13 introduces significant performance improvements, new testing flags like `--parallel` and `--isolate`, and enhanced Node.js compatibility, addressing 82 issues. It also adds SHA3 support and `ws+unix://` WebSocket client.'
photo: 'https://picsum.photos/id/22/800/450'
original_url: https://bun.com/blog/bun-v1.3.13
source_name: 'Bun Blog'
source_author: 'Jarred Sumner'
tags: [bun, release, nodejs, tooling]
significance: 2
---

## Summary & Key Takeaways

- Bun v1.3.13 fixes 82 issues, incorporating 381 community upvotes.
- New `bun test` flags include `--parallel`, `--isolate`, `--shard`, and `--changed` for more flexible testing.
- Memory usage for `bun install` tarball streaming is reduced by 17x, and source maps use 8x less memory.
- Gzip compression is 5.5x faster thanks to `zlib-ng` integration.
- `Bun.serve()` now supports `Range` requests, and `node:crypto` and WebCrypto include SHA3.
- A `ws+unix://` WebSocket client has been added, alongside numerous bugfixes and Node.js compatibility improvements.

## Our Commentary

Bun continues its relentless pace of development. This 1.3.13 release, while a minor version bump, is packed with substantial improvements. The memory optimizations for `bun install` and source maps are huge for DX, and the `bun test` enhancements show a commitment to a robust testing story. It's impressive how quickly Bun is closing the feature and compatibility gap with Node.js, while often outperforming it.
