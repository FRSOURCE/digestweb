---
layout: article
title: 'pnpm 11 RC 1: Audit Changes & New DX Commands'
description: "pnpm's latest release candidate overhauls its security auditing process, moving from CVEs to GitHub Advisory IDs, and introduces new commands for documentation, connectivity testing, and package search."
photo: 'https://opengraph.githubassets.com/0dfc0475e299b2432bea888bde916113720fd7470ea03a13faa650c14fe017e4/pnpm/pnpm/releases/tag/v11.0.0-rc.1'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.1
source_name: 'pnpm Releases'
source_author: ''
tags: [release, tooling, build-tools, dx]
significance: 3
---

## Summary & Key Takeaways

- `pnpm audit` now utilizes npm's `/bulk` endpoint and relies on GitHub Advisory IDs (GHSAs) instead of CVEs for security advisories.
- Users must migrate their `auditConfig.ignoreCves` to `auditConfig.ignoreGhsas` and update CVE entries to their corresponding GHSAs.
- New commands `pnpm docs` (with alias `pnpm home`) are introduced to open package documentation or homepages in the browser.
- A native `pnpm ping` command has been added to provide a simple way to test registry connectivity.
- A native `pnpm search` command, along with its aliases (`s`, `se`, `find`), is now available.
- A patch fixed an issue where `pnpm store prune` was incorrectly removing packages used by globally installed pnpm, which could break it.

## Our Commentary

The shift from CVEs to GHSAs in `pnpm audit` is a notable change, especially for those managing security policies. It's a breaking change that requires migration, but it likely aligns with how security advisories are increasingly managed on GitHub. The new `docs`, `ping`, and `search` commands are excellent quality-of-life improvements. Anything that reduces context switching and external tool reliance for common tasks is a win for developer experience. We're always happy to see pnpm continuing to refine its core functionality and add thoughtful DX features.
