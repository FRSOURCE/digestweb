---
layout: article
title: 'pnpm 12.4.1 Enhances Installation Reliability Across Platforms'
description: "pnpm's latest patch, 12.4.1, significantly improves installation success rates by addressing issues with hard links, Android compatibility, and Docker builds."
photo: 'https://opengraph.githubassets.com/5ff104fd4e608a06805cc56e962fb21263990fc1360bd8b765351413ca577fef/pnpm/pnpm/releases/tag/v12.4.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.4.1
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, dx]
significance: 2
---

## Summary & Key Takeaways

- pnpm 12.4.1 fixes installation failures on filesystems that refuse hard links or clones.
- It now falls back to copying files when hard linking or cloning is not permitted.
- Critical installation issues on Android devices have been resolved.
- The update addresses problems with preserving `node_modules` during Docker builds.
- Repeat installs are now faster due to various optimizations.
- It correctly handles package tarballs with files at the archive root.

## Our Commentary

This pnpm update is a big deal for anyone hitting those obscure filesystem errors or struggling with Android builds. We've all been there, scratching our heads at "Operation not permitted." It's good to see these edge cases getting solid fixes. Reliability is everything.
