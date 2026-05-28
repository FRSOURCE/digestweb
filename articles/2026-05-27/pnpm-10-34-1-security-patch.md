---
layout: article
title: 'pnpm 10.34.1 Patches Critical Package Integrity Vulnerability'
description: 'pnpm 10.34.1 addresses a critical security flaw where missing integrity fields in `pnpm-lock.yaml` could allow installation of tampered packages.'
photo: 'https://opengraph.githubassets.com/50602f3623cd46721d51368549c1c5718574242299a7555a604ee2afcd9ede21/pnpm/pnpm/releases/tag/v10.34.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v10.34.1
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, build-tools, open-source, dx]
significance: 1
---

## Summary & Key Takeaways

- pnpm 10.34.1 fixes a critical security vulnerability in package integrity verification.
- Previously, missing integrity fields in `pnpm-lock.yaml` could lead to unverified package installations.
- The update now rejects lockfile entries without an integrity field, preventing tampering.
- This closes a potential attack vector where malicious content could be served.

## Our Commentary

A patch release, but a crucial one. We're seeing more and more supply chain attacks, so a fix that prevents tampered packages from being installed, even with a modified lockfile, is a big win for security. It's a good reminder to keep our package managers updated.
