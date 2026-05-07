---
layout: article
title: 'pnpm 11.0.7: Key Fixes for Windows, `node_modules`, and Git Tarball Security'
description: 'This patch release for pnpm 11 addresses critical issues including restoring execute bits for `node-gyp` shims, fixing `pnpx`/`pnx` aliases on Windows, and preventing `node_modules` recreation after `pnpm fetch`. It also introduces a significant security enhancement by pinning the integrity of git-hosted tarballs in the lockfile.'
photo: 'https://opengraph.githubassets.com/49267e1b84aac7717a5de9655411035277cb3cbaef0cb796edc6f011933042a6/pnpm/pnpm/releases/tag/v11.0.7'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.7
source_name: 'pnpm Releases'
source_author: ''
tags: [release, tooling, build-tools, security]
significance: 2
---

## Summary & Key Takeaways

- pnpm 11.0.7 is a patch release addressing several important issues.
- It restores the execute bit on `node-gyp` shims, resolving permission denied errors on Windows.
- Fixes `pn`, `pnpx`, and `pnx` aliases failing in Git Bash / MSYS2 on Windows, which previously dropped users into an interactive prompt.
- Corrects an issue where `pnpm install` would recreate `node_modules` after `pnpm fetch` due to changes in hoist patterns.
- Introduces a security enhancement by pinning the integrity of git-hosted tarballs in the lockfile, preventing tampering or substitution.
- A new `gitHosted: true` field is added to lockfile resolutions for git dependencies.

## Our Commentary

It's always good to see build tools addressing platform-specific quirks, especially on Windows where things can get tricky. The fixes for `pnpx` aliases and `node_modules` recreation are solid quality-of-life improvements.

However, the most impactful change here is the pinning of git-hosted tarball integrity. This is a crucial security enhancement that we at digestweb are thrilled to see. Relying solely on URLs for git dependencies was a significant attack vector, and this change makes the supply chain much more robust. It's a small detail that makes a big difference for trust.
