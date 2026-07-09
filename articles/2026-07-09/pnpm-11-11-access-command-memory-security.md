---
layout: article
title: 'pnpm 11.11: New Access Command, Memory Optimizations & Security Fixes'
description: "pnpm's latest minor release introduces a new `pnpm access` command for registry management, significantly reduces memory usage, and patches critical security vulnerabilities."
photo: 'https://opengraph.githubassets.com/120ebf1a2abe592294bd3814bd4c09eda8ef4735f264cc9df856504a1616977a/pnpm/pnpm/releases/tag/v11.11.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.11.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, dx, release]
significance: 2
---

## Summary & Key Takeaways

- Introduces the `pnpm access` command for managing package access and visibility on the registry.
- Allows `allowBuilds` entries for git-hosted packages to match by repository URL.
- Reduces peak memory usage during cold-cache dependency resolution by approximately 30%.
- Prevents crafted `pnpm-lock.yaml` files from writing package content outside the virtual store.
- Rejects symlinked `pnpm-lock.yaml` files to enhance security.

## Our Commentary

This is a solid minor release. The memory optimization is a big win for large projects, and the security fixes are absolutely critical. I'm always a fan of tools that prioritize both performance and hardening. The `pnpm access` command also seems like a useful addition for managing private packages.
