---
layout: article
title: 'Bun v1.3.14: Image API, HTTP/3, and 7x Faster Installs'
description: "Bun's latest release introduces a built-in image processing API, experimental HTTP/2 and HTTP/3 clients, and dramatically speeds up warm installs."
photo: 'https://picsum.photos/id/552/800/450'
original_url: https://bun.com/blog/bun-v1.3.14
source_name: 'Bun Blog'
source_author: 'Jarred Sumner'
tags: [bun, release, tooling, performance]
significance: 3
---

## Summary & Key Takeaways

- Bun v1.3.14 addresses 92 issues and introduces a new `Bun.Image` built-in image processing API.
- Warm installs are now 7x faster due to an isolated linker's global store.
- Experimental HTTP/2 and HTTP/3 clients are available for `fetch()`, and HTTP/3 (QUIC) is supported in `Bun.serve()`.
- The `fs.watch()` implementation has been rewritten for Linux and macOS, improving reliability.
- Other additions include the `--no-orphans` CLI flag, `process.execve()`, `Bun.Terminal` on Windows via ConPTY, and builds for FreeBSD and Android.
- The release also features a shared SSL_CTX cache, smaller binaries, and numerous bugfixes and Node.js compatibility improvements.

## Our Commentary

This Bun release is absolutely stacked. The `Bun.Image` API is a huge surprise and a genuinely exciting addition, potentially simplifying image manipulation workflows significantly within the Bun ecosystem. And 7x faster warm installs? That's a game-changer for developer experience, especially in CI/CD environments. The experimental HTTP/2 and HTTP/3 support also shows Bun's ambition to be at the forefront of web technology. It feels like Bun is not just catching up but actively innovating and pushing the boundaries of what a JavaScript runtime can be. We're seeing a rapid evolution here that keeps us on our toes.
