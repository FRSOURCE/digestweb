---
layout: article
title: 'pnpr 0.1.0-alpha.22: Registry Proxy Updates and Access Control'
description: 'This alpha release for the pnpr registry proxy removes platform variants and significantly enhances access control for various package types.'
photo: 'https://opengraph.githubassets.com/834beeca8eb82822898099f6bde242ecf90a55896b7355f730f6ca651644296a/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.22'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.22
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, open-source]
significance: 1
---

## Summary & Key Takeaways

- Removes platform variants, aligning with pnpm's recent changes for package archives.
- Enhances access control by enforcing package grants on owner changes and upload sessions.
- Improves security by verifying caller permissions for private routes in cached lockfile verdicts.
- Returns freed memory to the operating system for better resource management.
- Adds specific access control and security checks for Cargo, PyPI, and OCI registries.

## Our Commentary

`pnpr` is still in alpha, and this release seems to be playing catch-up with some of the pnpm changes, particularly around platform variants. The focus on access control and security for registry operations is good, but it's definitely a tool for a very specific audience. I'm curious to see how it evolves.
