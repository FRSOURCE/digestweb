---
layout: article
title: 'pnpm 11.1 Introduces Audit Signatures, GitHub Packages Support'
description: 'pnpm 11.1 enhances security with ECDSA registry signature verification and simplifies package installation from GitHub Packages and other named registries.'
photo: 'https://opengraph.githubassets.com/5b366b68d3c57c5bd20435cfb7fa9e0438f4b0167441579ae665ae857e4622f6/pnpm/pnpm/releases/tag/v11.1.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.1.0
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx]
significance: 3
---

## Summary & Key Takeaways

- pnpm 11.1 introduces `pnpm audit signatures` to verify ECDSA registry signatures for installed packages, respecting scoped registries.
- It adds built-in support for installing packages from the GitHub Packages npm registry using a `gh:` prefix.
- Users can configure additional named registries or override the `gh` alias in `pnpm-workspace.yaml`.
- A new `--no-runtime` flag allows skipping runtime entry installation without modifying the lockfile, useful for CI environments.
- New commands `pnpm bugs` and `pnpm owner` are added to manage package bug trackers and owners directly from the CLI.

## Our Commentary

This is a solid minor release for pnpm, packed with features that significantly improve security and developer workflow. The `audit signatures` are a crucial step towards more trustworthy package management, addressing a long-standing concern in the ecosystem. We particularly appreciate the streamlined GitHub Packages integration and the flexibility of named registries – these are quality-of-life improvements that will save developers time and headaches. The `--no-runtime` flag is also a smart addition for CI/CD pipelines, showing a good understanding of real-world deployment needs.
