---
layout: article
title: 'Bun v1.4.1 Delivers HTTP/2, Offline Installs, and Major Performance Boosts'
description: "Bun's latest v1.4.1 release introduces HTTP/2 support, offline installation capabilities, enhanced WebSocket controls, and significant performance gains across various core functionalities."
photo: 'https://bun.com/og/blog/bun-v1.4.1.png'
original_url: https://bun.com/blog/bun-v1.4.1
source_name: 'Bun Blog'
source_author: 'Jarred Sumner'
tags: [bun, release, build-tools, performance]
significance: 3
---

## Summary & Key Takeaways

• Bun v1.4.1 introduces HTTP/2 support for `Bun.serve`.
• New `bun install --offline` and `--prefer-offline` options are now available.
• WebSocket connections gain `pause()` and `resume()` methods.
• `crypto.argon2` is now implemented for secure hashing.
• Tree-shaking through dynamic imports and smarter CommonJS to ESM conversion are improved.
• Compiled executables are smaller, start faster, and support `--compile --bytecode`.
• Performance is boosted with up to 9x faster Buffer reads/writes and 2x faster AsyncLocalStorage.
• The release includes numerous bugfixes and Node.js compatibility enhancements.

## Our Commentary

Bun just keeps shipping. This isn't a major version bump, but the feature list is absolutely stacked. HTTP/2 in `Bun.serve` is huge. Offline installs are a godsend for CI/CD. And the performance numbers? 9x faster Buffer reads? That's just wild. We're seeing a relentless pace of innovation here, and it's genuinely exciting to watch.
