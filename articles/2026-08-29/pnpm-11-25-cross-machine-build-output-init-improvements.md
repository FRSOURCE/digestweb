---
layout: article
title: 'pnpm 11.25: Cross-Machine Build Output & Init Improvements'
description: "pnpm 11.25 introduces an experimental feature for reusing build output across machines and improves how 'pnpm init' pins the latest pnpm version."
photo: 'https://opengraph.githubassets.com/0bfed8b892e40c0ab150afb332c570993e40b054f9a9ebfe8fdff5760985db87/pnpm/pnpm/releases/tag/v11.25.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.25.0
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, performance, dx, release]
significance: 2
---

## Summary & Key Takeaways

- An opt-in proof of concept allows installs to reuse a dependency's build output across machines via pnpr.
- macOS and Windows x64 and arm64 support has been added for remote shared build artifacts.
- The audit.ignorePrune setting allows pnpm audit --fix to remove ignored GHSA entries no longer in reports.
- The experimental shared-artifact protocol is generalized to identify discriminated subjects.
- pnpm init now pins the latest pnpm version by default, instead of the version that ran the command.
- The version lookup for pnpm init is resilient to network issues or slow registries, falling back to the running version.

## Our Commentary

undefined
