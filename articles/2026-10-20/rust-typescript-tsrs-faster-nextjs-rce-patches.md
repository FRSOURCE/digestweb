---
layout: article
title: 'Rust Port of TypeScript (tsrs) Up to 8x Faster; Next.js RCE Patches'
description: 'A Rust port of TypeScript 7, `tsrs`, promises up to 8x faster compilation, while Next.js patches critical RCE flaws, and Node.js/Astro see notable updates.'
photo: 'https://picsum.photos/id/414/800/450'
original_url: https://javascriptweekly.com/issues/807
source_name: 'JavaScript Weekly'
source_author: ''
tags: [typescript, javascript, nodejs, bun]
significance: 4
---

## Summary & Key Takeaways

- Cloudflare and VoidZero's `tsrs`, a Rust port of TypeScript 7, claims up to 8x faster compilation and runs in WebAssembly.
- Next.js has patched two critical RCE flaws, urging users to upgrade to 16.4.1 or 15.5.28.
- Node.js security releases are due for 26.x, 24.x, and 22.x lines, with high-severity issues.
- Bun is previewing ahead-of-time JavaScript compilation with a draft PR for producing binaries.
- Node.js v26.12.0 and v24.22.0 releases include synchronous ES module loading and new `util.throttle`/`util.debounce`.
- Astro 7.4 adds a `--timings` flag for build analysis and experimental parallel prerendering.
- React Router 8.5 deprecates its own view transition API.

## Our Commentary

Okay, this JavaScript Weekly is absolutely packed. The `tsrs` Rust port of TypeScript is the real headline here; 8x faster compilation is a monumental leap for developer experience and build times. That's the kind of performance gain that changes workflows. Then we have critical RCE patches for Next.js – always a stark reminder to keep dependencies updated. Node.js and Astro also dropped some solid updates. It's a lot to digest, but it feels like the ecosystem is just buzzing with activity, pushing forward on all fronts, from raw speed to security.
