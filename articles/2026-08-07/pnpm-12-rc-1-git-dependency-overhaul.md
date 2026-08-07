---
layout: article
title: 'pnpm 12 RC 1: Major Git Dependency Handling Overhaul'
description: "pnpm's latest release candidate introduces significant changes to how Git dependencies are resolved, aiming for more consistent and reliable package management. It also includes minor CLI improvements."
photo: 'https://opengraph.githubassets.com/2b5e26a5bd4561e978111f5ad821b40af8d3e3bdf6060c54eb84eec8721c4957/pnpm/pnpm/releases/tag/v12.0.0-rc.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-rc.1
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, build-tools, release]
significance: 3
---

## Summary & Key Takeaways

- Git dependencies on known hosts (GitHub, GitLab, Bitbucket) are now treated as identities.
- All representations of the same repository resolve through the host's canonical HTTPS URL.
- Lockfiles will no longer record SSH URLs for these known hosts.
- Network probing for HTTPS vs. SSH at resolution time has been removed.
- Users can configure Git's URL rewriting for private hosted repositories over SSH.
- Interactive group selection added to `pnpm update --global --interactive`.
- `pnpm root -g` and `pnpm bin -g` now print warnings to stderr.

## Our Commentary

This is a big one for anyone dealing with complex monorepos or private Git dependencies. The previous behavior of `pnpm` sometimes recording SSH URLs that only worked on specific machines was a real pain point for CI/CD. We're genuinely excited about this change. It feels like a solid step towards more robust and predictable dependency management.
