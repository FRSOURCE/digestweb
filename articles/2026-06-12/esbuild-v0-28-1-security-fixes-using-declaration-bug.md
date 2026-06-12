---
layout: article
title: 'esbuild v0.28.1: Security Fixes & `using` Declaration Bug Patch'
description: 'This release patches security vulnerabilities in the local dev server and Deno API, alongside fixing a critical minifier bug affecting `using` and `await using` declarations.'
photo: 'https://opengraph.githubassets.com/75220b15f36dc1254c0177b69818059c2e5f406e48173ab61fe7e01d5557ed97/evanw/esbuild/releases/tag/v0.28.1'
original_url: https://github.com/evanw/esbuild/releases/tag/v0.28.1
source_name: 'esbuild Releases'
source_author: ''
tags: [build-tools, release, security]
significance: 2
---

## Summary & Key Takeaways

- Fixed a directory traversal vulnerability in the local development server on Windows.
- Added integrity checks to the Deno API installation script to prevent binary tampering.
- Corrected a minifier bug that incorrectly inlined `using` and `await using` declarations, preventing proper resource disposal.
- Addressed an issue where module evaluation state was not preserved after an error.

## Our Commentary

Security fixes are always welcome, especially when they address potential directory traversal. The `using`/`await using` fix is also crucial; it's easy to overlook how minifiers can subtly break new language features. We're glad to see esbuild staying on top of these details.
