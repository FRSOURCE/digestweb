---
layout: article
title: 'pnpr 0.1.0-alpha.9: Scalable & Immutable Shared Artifacts'
description: 'pnpr 0.1.0-alpha.9 introduces S3-compatible horizontal scalability and immutability for signed shared build artifacts.'
photo: 'https://opengraph.githubassets.com/522cd0cfe7ebe47a0b861b34670f7a1d2fa6e46a020ac92256430e636917ba4a/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.9'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.9
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, open-source]
significance: 1
---

## Summary & Key Takeaways

- The signed shared-artifact cache is now horizontally scalable with S3-compatible storage.
- The experimental shared-artifact protocol is generalized to identify discriminated subjects.
- Published build artifacts are now immutable; publishing a different one over an existing key results in a 409 Conflict.
- Immutability applies to every consumer an artifact can reach, preventing later builds from taking precedence.
- pnpr reclaims unreferenced shared artifact blobs after ambiguous object-storage write failures.
- pnpm install --fix-lockfile now regenerates broken lockfile metadata while preserving compatible locked versions.

## Our Commentary

undefined
