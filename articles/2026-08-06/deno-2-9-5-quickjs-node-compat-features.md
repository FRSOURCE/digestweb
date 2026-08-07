---
layout: article
title: 'Deno 2.9.5: New Features, QuickJS Backend, and Node.js Compat Boosts'
description: 'Deno 2.9.5 introduces new features like unscoped package aliasing, workspace task flags, `textStream()`, and an experimental QuickJS backend, alongside numerous Node.js compatibility fixes.'
photo: 'https://opengraph.githubassets.com/5d3b14fa90df7de22346878d1582c903246fb3aacd0a60a1efc5be1828655321/denoland/deno/releases/tag/v2.9.5'
original_url: https://github.com/denoland/deno/releases/tag/v2.9.5
source_name: 'Deno Releases'
source_author: ''
tags: [deno, nodejs, release, web-platform]
significance: 2
---

## Summary & Key Takeaways

- Deno 2.9.5 introduces a `--unscoped` flag for aliasing packages.
- A new `--members` flag allows running tasks in workspace members only.
- The `Blob` and `Body` objects now support a `textStream()` method.
- An experimental QuickJS backend has been added, potentially improving performance.
- Numerous fixes enhance Node.js compatibility, including `v8.promiseHooks` and `node:test` tags.
- Security fixes address issues like `node:dns.getServers()` requiring `--allow-sys`.

## Our Commentary

Deno keeps pushing forward with both new features and Node.js compatibility. The experimental QuickJS backend is a fascinating development; I'm curious to see how that impacts performance and use cases. It feels like Deno is really trying to carve out its niche while still being a viable alternative for Node.js users.
