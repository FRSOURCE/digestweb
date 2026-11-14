---
layout: article
title: 'pnpr 0.1.0-alpha.20 Centralizes Registries, Enhances Security'
description: 'This alpha release of pnpr introduces database-backed registry management, owner-limited package publishing, and token expiration, alongside critical security fixes.'
photo: 'https://opengraph.githubassets.com/662e28a1f8f18d6078f15b7745dee96d559d21d9fc0e7b770ab5821b85d74c20/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.20'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.20
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release, open-source]
significance: 2
---

## Summary & Key Takeaways

- `pnpr` now stores registries, accounts, and tokens in a database for consistency across replicas.
- Package publishing is now limited to package owners by default.
- Tokens will automatically expire after 90 days, improving security.
- This release includes several security fixes, preventing unauthorized logins and credential leaks.
- Upgrading from alpha.19 requires manual data migration due to breaking changes.

## Our Commentary

An alpha release with this many significant changes, especially around security and data persistence, is quite something. The manual migration from alpha.19 sounds like a pain, but the move to database-backed registries and token expiration are solid steps forward for a tool like this.
