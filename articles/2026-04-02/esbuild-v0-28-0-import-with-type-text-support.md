---
layout: article
title: "esbuild v0.28.0 Ships Stage 3 `import with { type: 'text' }` Support"
description: "esbuild's latest release introduces support for the `import with { type: 'text' }` proposal, aligning with Deno and Bun. It also enhances security by adding integrity checks for fallback binary downloads."
photo: 'https://opengraph.githubassets.com/99436b208752c1092ab8f8c4514aaf1136133fb44dbad5869eebd8de7b6f4d4a/evanw/esbuild/releases/tag/v0.28.0'
original_url: https://github.com/evanw/esbuild/releases/tag/v0.28.0
source_name: 'esbuild Releases'
source_author: ''
tags: [build-tools, web-platform, release, tooling]
significance: 3
---

## Summary & Key Takeaways

- esbuild v0.28.0 introduces support for the `import ... with { type: 'text' }` proposal, which has reached Stage 3 in TC39.
- This feature allows importing text files directly, behaving similarly to esbuild's existing text loader.
- The release also adds integrity checks to the fallback download path for esbuild's platform-specific packages, enhancing security and reliability during installation.
- The Go compiler has been updated from 1.25.7 to 1.26.1, bringing internal changes like a new garbage collector and more aggressive stack allocation.
- The WebAssembly build now consistently uses sign extension and non-trapping floating-point to integer conversion instructions.

## Our Commentary

This is a solid release from esbuild. The `import with { type: 'text' }` proposal reaching Stage 3 and being implemented in major tools like esbuild, Deno, and Bun is a clear signal of its importance for the web platform. It streamlines how we handle non-JS assets.
We're particularly pleased to see the integrity checks added to the fallback download path. Supply chain security is paramount, and even small improvements like this contribute to a more robust ecosystem. It's a breaking change, but a necessary one for peace of mind.
The Go compiler update is mostly under the hood, but it's a reminder of the complex dependencies in modern build tools. It's good to see esbuild keeping up with its underlying tech stack.
