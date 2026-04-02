---
layout: article
title: 'esbuild v0.27.5 Improves TypeScript Support and Fixes Bugs'
description: 'This esbuild patch release addresses an async generator edge case, fixes a metafile regression, and enhances TypeScript compatibility with `es2025` target support and correct parameter property handling.'
photo: 'https://opengraph.githubassets.com/e31c2691717f9397b8a189c94f8d5a7bfe1bd6d621b8d92f4d9695094dcc4459/evanw/esbuild/releases/tag/v0.27.5'
original_url: https://github.com/evanw/esbuild/releases/tag/v0.27.5
source_name: 'esbuild Releases'
source_author: ''
tags: [build-tools, typescript, release, tooling]
significance: 2
---

## Summary & Key Takeaways

- This release fixes an async generator edge case where concurrent polling of async generators behaved incorrectly when transformed.
- It resolves a regression where `metafile: true` with build errors incorrectly threw an empty JSON string error.
- esbuild now implements correct `define` semantics for TypeScript parameter properties, aligning its output with TypeScript's `useDefineForClassFields` behavior.
- The update adds support for `es2025` as a compilation target in `tsconfig.json` files.

## Our Commentary

This esbuild update, while a patch, brings some welcome refinements. The fix for async generators is crucial for correctness, especially in complex async workflows. We're particularly pleased to see improved TypeScript compatibility, specifically with parameter properties and the `es2025` target. It's these continuous, incremental improvements that keep build tools like esbuild robust and reliable as the web platform and language features evolve. It shows a commitment to staying current with TypeScript's evolving landscape.
