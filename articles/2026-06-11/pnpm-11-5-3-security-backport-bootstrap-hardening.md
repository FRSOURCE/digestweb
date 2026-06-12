---
layout: article
title: 'pnpm 11.5.3: .npmrc Security Backport & Bootstrap Hardening'
description: 'pnpm 11.5.3 backports the essential security fix for environment variables in `.npmrc` and strengthens the security of package manager bootstrap dependency resolution.'
photo: 'https://opengraph.githubassets.com/a7442d0ef20dde7ebdc94f807f034aca90b604bd708aae0441b576448c491ad8/pnpm/pnpm/releases/tag/v11.5.3'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.5.3
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, release, security]
significance: 1
---

## Summary & Key Takeaways

- Backported the security fix preventing environment variable expansion in project `.npmrc` files.
- Stopped expanding environment variables in repository-controlled registry/proxy destinations and credential values.
- Ensured package-manager bootstrap dependencies are resolved using only trusted configuration sources.
- Rejected env-lockfile records that lack registry package paths with integrity-only resolution.

## Our Commentary

More security backports from pnpm. This consistent patching across versions is commendable. It's a reminder that even seemingly minor configuration files can have major security implications if not handled carefully.
