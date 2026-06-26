---
layout: article
title: 'Deno 2.9.0 Ships with New CLI Tools, Desktop Features & More'
description: "Deno's latest release, 2.9.0, introduces a suite of new CLI commands like `deno watch` and `deno link`, alongside robust desktop application features and improved Node.js compatibility. It also enhances web platform API support and developer tooling."
photo: 'https://opengraph.githubassets.com/a6a381738ad2912f6239929520e714b4847f8565ed8f86cdfcc98e9ad0c6bd50/denoland/deno/releases/tag/v2.9.0'
original_url: https://github.com/denoland/deno/releases/tag/v2.9.0
source_name: 'Deno Releases'
source_author: ''
tags: [deno, release, tooling, web-platform]
significance: 3
---

## Summary & Key Takeaways

- Introduces new CLI subcommands: `deno link`, `deno unlink`, `deno watch`, and `deno list`.
- Adds comprehensive desktop application features, including various installer formats and Vite framework autodetection.
- Enhances Node.js compatibility with `node:test` mock implementations and providing Node on PATH.
- Implements the Web Locks API and expands WebCrypto algorithm support.
- Adds new formatting options and infers configuration from `.editorconfig`.
- Improves package management by seeding `deno.lock` from `bun.lock` and `package-lock.json`.
- Allows persistence of Web Storage and KV in compiled desktop applications.
- Disables Deno.serve automatic compression by default for better control.

## Our Commentary

Deno keeps pushing. The sheer volume of `feat` commits here is wild. I'm particularly interested in the desktop app features; it feels like Deno is carving out a unique niche there. Also, `deno watch` is a long-awaited addition. The Node.js compatibility efforts are relentless, which is good for adoption, but I wonder if it dilutes Deno's original vision.
