---
layout: article
title: 'pnpm 11.4 Boosts Security: Stricter Integrity Checks & Credential Scoping'
description: 'pnpm v11.4 introduces critical security enhancements, making tarball integrity mismatches a hard failure by default and fixing a credential disclosure vulnerability.'
photo: 'https://opengraph.githubassets.com/6df6675a12a06edb8744c8ffa96360dbe834a6fafb5826482ed59a29fa874cfc/pnpm/pnpm/releases/tag/v11.4.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.4.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, security, release, dx]
significance: 3
---

## Summary & Key Takeaways

- Tarball integrity mismatches now cause a hard failure by default, preventing silent re-resolution and lockfile overwrites.
- A new `--update-checksums` flag allows refreshing locked integrity values from the registry.
- Fixed a credential disclosure issue where unscoped `_authToken` or `_auth` could be sent to unintended registries.
- Client TLS credentials (`cert`, `key`) are also now scoped to their declared registry.
- `pnpm runtime set` now saves to `devEngines.runtime` by default, use `--save-prod` for `engines.runtime`.

## Our Commentary

This is a big deal. Silently overwriting lockfile integrity was a gaping hole, and I'm glad they're mirroring Yarn's flag for a safer default. The credential fix is also crucial; it's a good reminder that even our build tools need constant vigilance. These are the kinds of security updates that truly matter for the ecosystem.
