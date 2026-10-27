---
layout: article
title: 'pnpm 12.16: New Env File Flag, Symlink Updates, and Security Fixes'
description: 'pnpm 12.16 introduces a global --env-file flag, improves handling of symlinked lockfiles, adds a --no-modify-path option for setup, and addresses critical security vulnerabilities.'
photo: 'https://opengraph.githubassets.com/5e695862bf7e10d86ae6fdbaa8727702f6ebd7d93119b5d7464818c4d5c489fa/pnpm/pnpm/releases/tag/v12.16.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.16.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- A new global --env-file flag allows loading environment variables from dotenv-style files.
- pnpm can now update symlinked pnpm-lock.yaml files.
- The pnpm setup command gains a --no-modify-path option for manual PATH configuration.
- Two security vulnerabilities related to zstd decompression and signing have been fixed.
- Improved error handling for dependency symlinks that fail to resolve.

## Our Commentary

The --env-file flag is a nice quality-of-life improvement for managing configurations. Symlinked lockfile updates are a niche but welcome fix for specific setups. The security patches are, of course, the most critical part here. It's good to see pnpm staying on top of these things.
