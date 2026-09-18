---
layout: article
title: 'pnpm 12.5: Python Ecosystem, Package URLs & Platform Support'
description: 'pnpm 12.5 introduces first-class Python ecosystem support, accepts Package URLs for adding dependencies, and enhances platform-specific architecture configuration.'
photo: 'https://opengraph.githubassets.com/bc2d0de9d788f5852315bb98fe89c99df1a7389cb3224b127e380a9c2767f326/pnpm/pnpm/releases/tag/v12.5.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.5.0
source_name: 'pnpm Releases'
source_author: ''
tags: [pnpm, release, build-tools, tooling]
significance: 3
---

## Summary & Key Takeaways

- Python is now a first-class ecosystem, allowing pnpm to manage Python dependencies.
- `pnpm add` now accepts Package URLs (e.g., `pkg:npm/express@4.18.2`) for various ecosystems.
- `registries` entries can now specify the `ecosystem` they serve (npm, cargo, pypi).
- `supportedArchitectures` now accepts a list of platforms (e.g., `linux-x64`, `darwin-arm64`).
- Tasks can now be configured with machine-wide concurrency limits.
- Fixes an issue where one package's tarball could be reused for another.

## Our Commentary

This is a huge release for pnpm! Expanding beyond just Node.js to embrace Python and Cargo is a game-changer. I genuinely didn't expect pnpm to go this broad, but I'm here for it. The Package URLs are a neat abstraction, and the `supportedArchitectures` list is a much-needed improvement for cross-platform development. It feels like pnpm is trying to become a universal package manager, and I'm curious to see how that plays out.
