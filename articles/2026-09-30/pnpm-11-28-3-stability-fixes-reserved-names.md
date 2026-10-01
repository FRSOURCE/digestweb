---
layout: article
title: 'pnpm 11.28.3: Critical Fixes for Stability & Reserved Names'
description: "pnpm's latest patch release, 11.28.3, resolves major issues like database corruption, security advisories, and proper handling of JavaScript's reserved object property names in package operations."
photo: 'https://opengraph.githubassets.com/5d2d407becc9f7c5b4feba1ba117a9a9479feac1b9649855f8ff2e8a90c694c3/pnpm/pnpm/releases/tag/v11.28.3'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.28.3
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, build-tools, nodejs, release]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11.28.3 updates `undici` to address a security advisory.
- It fixes "database disk image is malformed" errors when multiple pnpm processes share a store.
- The release ensures proper handling of JavaScript built-in object property names like `constructor` and `toString`.
- Previously, these names caused crashes or silent failures in various pnpm commands and operations.
- The update also prevents re-resolution of up-to-date lockfiles in specific peer dependency scenarios.
- POSIX bin shims now function correctly within Nix builds.
- pnpm now correctly passes unknown options to pinned pnpm versions.

## Our Commentary

This isn't just a patch; it's a _critical_ patch. The "database disk image is malformed" error sounds like a nightmare scenario for developers. And the `constructor` name issue? That's a subtle, insidious bug that could lead to all sorts of head-scratching. We're glad to see these core stability issues addressed. It makes you wonder how many projects were silently failing because of these edge cases.
