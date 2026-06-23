---
layout: article
title: 'pnpm 11.9 Enhances Package Integrity and SBOM Generation'
description: 'The latest pnpm update introduces automatic integrity checksum computation for on-demand tarballs and a new flag to exclude peer dependencies from SBOMs.'
photo: 'https://opengraph.githubassets.com/e49dac4e239a55bca0024a4d8e7bb53892a54cb232e2f88a67750994c371b6db/pnpm/pnpm/releases/tag/v11.9.0'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.9.0
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- pnpm now computes and stores integrity checksums for tarballs from registries that don't provide them initially.
- This ensures verifiability for all lockfile entries on subsequent installs.
- A new `--exclude-peers` flag has been added to `pnpm sbom` for more accurate Software Bill of Materials.
- The `pnpm audit --fix` now consolidates `minimumReleaseAgeExclude` entries for better readability.
- Non-deterministic peer resolution issues, particularly with optional transitive peers, have been addressed.

## Our Commentary

This pnpm update is a solid win for reliability and security. The automatic integrity checksums are a big deal for ensuring consistent builds, especially with those tricky on-demand registries. And the SBOM improvements? Crucial for supply chain security. We're seeing more and more focus on these foundational aspects of tooling, and I'm here for it. It's the kind of work that often goes unnoticed but prevents major headaches down the line.
