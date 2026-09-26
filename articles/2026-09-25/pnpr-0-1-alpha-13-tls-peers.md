---
layout: article
title: 'pnpr 0.1.0-alpha.13: TLS Fixes & Peer Dependency Support'
description: 'pnpr 0.1.0-alpha.13 improves TLS certificate verification, fixes macOS SSL policy issues, and ensures peer dependency installation.'
photo: 'https://opengraph.githubassets.com/52843a2849f7a68e8dd3d8f61989d9e421745ec53f7031b4401f3d7724bc935b/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.13'
original_url: https://github.com/pnpm/pnpm/releases/tag/pnpr%400.1.0-alpha.13
source_name: 'pnpm Releases'
source_author: ''
tags: [nodejs, tooling, build-tools, release]
significance: 1
---

## Summary & Key Takeaways

- TLS certificate verification failures now occur immediately.
- Fixes macOS SSL policy issues by using bundled certificates.
- Ensures peer dependencies are installed when `autoInstallPeers` is enabled.
- Improves package index build speed on macOS.
- Adds support for `${VAR?}` placeholders in `pnpr` config files.

## Our Commentary

An alpha release for `pnpr`. It's good to see continued work on related tools, but alpha means it's still very much in flux. We'll keep an eye on `pnpr` as it matures, but it's not quite ready for prime time.
