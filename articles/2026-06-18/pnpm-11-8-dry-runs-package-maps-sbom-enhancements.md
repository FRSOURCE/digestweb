---
layout: article
title: 'pnpm 11.8: Dry Runs, Package Maps, and SBOM Enhancements'
description: "pnpm's latest minor release introduces a --dry-run option for installs, Node.js package map generation, and improved SBOM capabilities."
photo: 'https://opengraph.githubassets.com/910bff01aeab90eb91e31cb890fcabd20c038fd03b58c3930110b78c8bf11db5/pnpm/pnpm/releases/tag/v11.8.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.8.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Adds a --dry-run option to `pnpm install` for previewing changes without disk writes.
- Improves `pnpm run --no-bail` exit code consistency for failed scripts.
- Supports generating Node.js package maps at `node_modules/.package-map.json`.
- Enhances SBOM generation by marking `devDependencies` as "excluded" scope.
- Introduces per-package SBOM generation with `--out` and `--split` flags.

## Our Commentary

The `--dry-run` for `pnpm install` is a long-awaited feature that will save so much time and anxiety. We've all been there, wondering what an install will _actually_ do. The SBOM improvements are also a big win for supply chain security, which is becoming increasingly critical.
