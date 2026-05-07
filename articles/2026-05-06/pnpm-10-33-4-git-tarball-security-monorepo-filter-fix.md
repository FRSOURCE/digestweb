---
layout: article
title: 'pnpm 10.33.4: Enhanced Git Tarball Security and Monorepo Filter Fix'
description: 'This patch release for pnpm 10 introduces a critical security improvement by pinning the integrity of git-hosted tarballs in the lockfile, preventing supply chain attacks. It also fixes a regression where `--filter` arguments incorrectly included the workspace root in monorepo commands.'
photo: 'https://opengraph.githubassets.com/02c0dea6c78740fb1fc051db5c6dc6f36a3503d8a605e6c5ddbe45389a5de282/pnpm/pnpm/releases/tag/v10.33.4'
original_url: https://github.com/pnpm/pnpm/releases/tag/v10.33.4
source_name: 'pnpm Releases'
source_author: ''
tags: [release, tooling, build-tools, security]
significance: 2
---

## Summary & Key Takeaways

- pnpm 10.33.4 is a patch release focusing on security and filtering behavior.
- It pins the integrity of git-hosted tarballs in the lockfile, preventing tampering or substitution of dependencies.
- A new `gitHosted: true` field is added to lockfile resolutions for git dependencies, improving consistency.
- Fixes a regression where `pnpm --recursive --filter '!<pkg>'` commands incorrectly included the workspace root.
- The workspace root is now correctly excluded by default when only negative `--filter` arguments are provided.

## Our Commentary

It's great to see pnpm backporting critical security fixes like the git-hosted tarball integrity pinning to older major versions. This shows a strong commitment to user security across the board.

The `--filter` regression fix is also a welcome improvement for monorepo users. These kinds of subtle behavioral changes can be frustrating, so getting it right is important for developer experience. Overall, a solid maintenance release.
