---
layout: article
title: 'Deno 2.8.1 Patch Release Adds Browser Field Map Support'
description: 'Deno v2.8.1 is a patch release primarily focused on bug fixes, with a notable addition of support for the `browser` field map in `package.json`.'
photo: 'https://opengraph.githubassets.com/37a8e794849673644e98e94677217ab8c88e9bf736e2ba6fb9431f30ef2afacc/denoland/deno/releases/tag/v2.8.1'
original_url: https://github.com/denoland/deno/releases/tag/v2.8.1
source_name: 'Deno Releases'
source_author: ''
tags: [deno, release, nodejs]
significance: 1
---

## Summary & Key Takeaways

- Introduces support for the `browser` field map in `package.json` for bundling.
- Fixes various issues related to Node.js compatibility, including `module.enableCompileCache` and `fs.exists`.
- Addresses several core runtime bugs and inspector issues.
- Improves error handling for `.node` addon imports via ESM.
- Corrects credential handling for `TLSSocket` and `createSecureContext`.

## Our Commentary

Another Deno patch. The `browser` field map support is a nice touch for compatibility, but it's mostly just a lot of little fixes. I'm always a bit wary of how many `fix(ext/node)` entries these releases have. It feels like a constant game of whack-a-mole to keep up with Node.js parity.
