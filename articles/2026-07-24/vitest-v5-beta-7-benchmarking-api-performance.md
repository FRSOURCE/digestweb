---
layout: article
title: 'Vitest v5.0.0-beta.7: Benchmarking API & Performance Boosts'
description: "Vitest's latest beta introduces a pluggable benchmark provider API and crucial performance optimizations like a Node compile cache. It also includes breaking changes and various bug fixes."
photo: 'https://opengraph.githubassets.com/513e9cea1d6d7d613e87a40cb0b73adadd4d70c539457d9f7e09ca30c4609f79/vitest-dev/vitest/releases/tag/v5.0.0-beta.7'
original_url: https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-beta.7
source_name: 'Vitest Releases'
source_author: ''
tags: [testing, release, performance, dx]
significance: 3
---

## Summary & Key Takeaways

- Config resolution is now separated from server creation, introducing breaking changes.
- A new togglable `injectCjsGlobals` option has been added.
- `fsModuleCache` is promoted to a top-level configuration option.
- The benchmark system now features a pluggable provider API.
- Performance is improved by serving warm modules to workers and enabling a Node compile cache.
- The Node compile cache is now opt-in and worker caches persist on teardown.

## Our Commentary

Vitest keeps pushing. A pluggable benchmark API in a testing framework is a really interesting direction; it feels like they're building a comprehensive dev tool, not just a test runner. And the performance gains from the Node compile cache? That's just good news for everyone. We're seeing a lot of focus on speed in the tooling space, and Vitest is clearly leading the charge here.
