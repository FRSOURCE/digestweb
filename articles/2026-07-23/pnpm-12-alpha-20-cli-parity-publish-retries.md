---
layout: article
title: 'pnpm 12 Alpha 20: CLI Parity & Publish Retries'
description: "This alpha release of pnpm 12 brings CLI parity improvements, allowing --registry and --allow-build on more commands, and enhances 'pnpm publish --provenance' with retries."
photo: 'https://opengraph.githubassets.com/dcfe0a521821a830ad19b289e703526e9bb3c76896768fb2d25a2b1041c7a1c1/pnpm/pnpm/releases/tag/v12.0.0-alpha.20'
original_url: https://github.com/pnpm/pnpm/releases/tag/v12.0.0-alpha.20
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, release, dx]
significance: 1
---

## Summary & Key Takeaways

- CLI options like `--registry` and `--allow-build` are now universally accepted across more commands for better consistency.
- The `--dir` or `-C` option can now be placed anywhere on the command line.
- `pnpm publish --provenance` now includes retries with exponential backoff for Sigstore signing exchanges.
- `pnpm update --latest` correctly resolves dependencies declared via `npm:` aliases.

## Our Commentary

Alpha releases are always a bit of a mixed bag, but these CLI parity improvements for pnpm 12 are genuinely welcome. I've definitely hit those little inconsistencies where a flag works on one command but not another. The `publish --provenance` retries are also a smart move; flaky network conditions shouldn't derail a release. It's the small quality-of-life fixes that often make the biggest difference in daily dev work, and we're seeing a good chunk of those here.
