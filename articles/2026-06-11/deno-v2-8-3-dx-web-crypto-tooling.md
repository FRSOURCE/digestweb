---
layout: article
title: 'Deno v2.8.3: New Features for DX, Web Crypto, & Tooling'
description: "Deno's latest minor release, v2.8.3, brings a host of new features including compile watch mode, enhanced LSP capabilities, and expanded Web Crypto API support."
photo: 'https://opengraph.githubassets.com/2765ebd6955fbb32e9b646a3d2ec10da446f722da92005de4ab4b5bf1d4af522/denoland/deno/releases/tag/v2.8.3'
original_url: https://github.com/denoland/deno/releases/tag/v2.8.3
source_name: 'Deno Releases'
source_author: ''
tags: [deno, release, dx, web-platform]
significance: 3
---

## Summary & Key Takeaways

- Introduced a watch mode for `deno compile`, enhancing the development workflow.
- Added support for `--env-file` in dependency and registry subcommands.
- Implemented `SubtleCrypto.supports()` and ML-DSA JWK import/export for Web Crypto API.
- Enhanced the Language Server Protocol (LSP) with debug code lenses, code actions, and improved import map diagnostics.
- `deno fmt` now supports JSON trailing comma configuration.
- Included OpenTelemetry auto-instrumentation for Node.js `http2` module.
- Added `deno x --ignore-scripts` for safer execution of scripts.

## Our Commentary

Deno just keeps shipping! This 2.8.3 release is surprisingly dense for a minor version. The compile watch mode is a huge DX win, and the LSP improvements are always welcome. I'm also intrigued by the `SubtleCrypto` additions; it shows a continued commitment to web platform parity.
