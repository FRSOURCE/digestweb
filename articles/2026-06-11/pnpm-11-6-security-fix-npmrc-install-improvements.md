---
layout: article
title: 'pnpm 11.6: Critical Security Fix for .npmrc & Install Improvements'
description: 'pnpm 11.6 introduces a vital security fix, preventing environment variable expansion in project `.npmrc` files to safeguard secrets. It also improves `pnpm install` efficiency.'
photo: 'https://opengraph.githubassets.com/f47eae5251ff759940cd98035ca601ced61ba3f97feaa80a2a5d699fa309f9ab/pnpm/pnpm/releases/tag/v11.6.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.6.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, security, dx]
significance: 2
---

## Summary & Key Takeaways

- Implemented a security fix to prevent environment variables from expanding in project `.npmrc` files.
- This change mitigates the risk of leaking sensitive information like npm tokens to malicious registries.
- Users may need to migrate authentication tokens from committed `.npmrc` files to user-level or global configs.
- `pnpm install` now avoids full re-resolution when `pnpm-lock.yaml` is missing but `node_modules` is up-to-date.

## Our Commentary

This security fix is a big deal. We've all probably committed an `.npmrc` with some sensitive info at some point, or at least relied on env vars there. The fact that it requires user action means it's not just a silent patch; it's a necessary shift in how we manage secrets with pnpm. The install improvement is a nice bonus, too.
