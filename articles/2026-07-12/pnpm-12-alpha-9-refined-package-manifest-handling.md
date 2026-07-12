---
layout: article
title: 'pnpm 12 Alpha 9: Refined Package Manifest Handling'
description: 'This alpha release of pnpm 12 focuses on internal fixes for `pacquet`, improving Node runtime pinning, and ensuring consistent `package.json` formatting and dependency management.'
photo: 'https://opengraph.githubassets.com/c71b2d87563087852191de726eda3f815522bbc9b4558ae11b1ca3a24aa72393/pnpm/pnpm/releases/tag/v12.0.0-alpha.9'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-alpha.9
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, dx, release]
significance: 1
---

## Summary & Key Takeaways

- Addresses `pacquet` issues related to Node runtime version pinning.
- Ensures `package.json` formatting, including indentation and final newlines, is preserved.
- Normalizes dependency fields by sorting entries and removing empty ones.
- Skips writing `package.json` if no changes are detected, preventing unnecessary file churn.
- Improves consistency in how manifest files are read and saved.

## Our Commentary

Alpha releases are always interesting to peek into. We're seeing a lot of focus on the nitty-gritty details here, like `package.json` formatting and avoiding unnecessary file writes. It's the kind of work that makes a tool feel solid, even if it's not flashy. I appreciate the attention to developer experience, especially the small things that prevent git diff noise.
