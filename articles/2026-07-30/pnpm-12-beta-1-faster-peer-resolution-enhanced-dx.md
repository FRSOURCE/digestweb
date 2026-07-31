---
layout: article
title: 'pnpm 12 Beta 1: Faster Peer Resolution & Enhanced DX'
description: 'The first beta for pnpm v12 arrives with substantial speedups for peer dependency resolution in large workspaces and new features for web-based login and manifest configuration.'
photo: 'https://opengraph.githubassets.com/1240d6fd4ccc6f6e78500c22c6a8387b8333dbb6332f8a51650356604adde1f7/pnpm/pnpm/releases/tag/v12.0.0-beta.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-beta.1
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, dx, release]
significance: 3
---

## Summary & Key Takeaways

- Peer resolution is significantly faster in large multi-importer workspaces, dropping resolution times by over 50%.
- The resolver's internal hash maps now utilize a faster hashing mechanism.
- `pnpm login` supports web-based authentication without an interactive terminal.
- A new `projects[].dependencyManifest` option enhances NAPI install configurations.
- The `save-prefix` setting now accepts `=` for explicit dependency versioning.
- `allowBuilds` entries can approve git-hosted packages by repository URL.

## Our Commentary

This is a solid beta release. We're always here for performance improvements, especially in large workspaces where every second counts. The non-interactive web login is a nice touch for CI/CD environments. I'm curious to see how the `save-prefix` change impacts existing workflows, but it feels like a move towards more explicit control.
