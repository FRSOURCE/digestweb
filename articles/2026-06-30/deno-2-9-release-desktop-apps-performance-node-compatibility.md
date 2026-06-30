---
layout: article
title: 'Deno 2.9 Released: Desktop Apps, Faster Starts, & Node.js 26 Compatibility'
description: 'Deno 2.9 is a massive release, introducing `deno desktop` for native app creation, significantly faster cold starts, improved lockfile migration, and targeting Node.js 26 compatibility.'
photo: 'https://picsum.photos/id/5/800/450'
original_url: https://javascriptweekly.com/issues/792
source_name: 'JavaScript Weekly'
source_author: ''
tags: [deno, nodejs, release, tooling]
significance: 4
---

## Summary & Key Takeaways

- Deno 2.9 has been released, featuring `deno desktop` for native, self-contained apps.
- It includes quick migration tools for npm, pnpm, Yarn, and Bun lockfiles.
- Significant improvements have been made to the test runner.
- Cold starts are approximately 2x faster in this version.
- The release targets compatibility with Node.js 26.
- VS Code team adopted a Go-based TypeScript 7 compiler, reducing type-checking from 36s to 5s.
- npm 12 preview hard-errors on unrecognized keys in `.npmrc` files.
- npm now locks 'high impact accounts' for 72 hours after email/2FA changes.

## Our Commentary

Deno 2.9 is a _huge_ release. `deno desktop` is a bold move, potentially opening up a whole new avenue for web developers to build native applications. The performance gains and lockfile migration tools are also incredibly welcome. I'm also genuinely impressed by the VS Code team's adoption of the Go-based TypeScript 7 compiler; those speed improvements are just wild. It feels like the tooling landscape is just constantly accelerating.
