---
layout: article
title: 'pnpm 11.28.12 Delivers Security Fixes and Bug Resolutions'
description: 'This patch release for pnpm addresses a security vulnerability related to registry URLs and resolves numerous bugs concerning peer dependencies and deployment.'
photo: 'https://opengraph.githubassets.com/d69e4296d531117f024d1f31c08b72e103a3c97a06bba873356206a6355c9836/pnpm/pnpm/releases/tag/v11.28.12'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.28.12
source_name: 'pnpm Releases'
source_author: ''
tags: [build-tools, nodejs, release]
significance: 1
---

## Summary & Key Takeaways

- A security fix prevents pnpm from sending requests to unintended registries when environment variables are used in URLs.
- The bundled `node-gyp` no longer ships a flagged `undici` version.
- Numerous bugs related to peer dependencies, `pnpm deploy`, and `frozen-lockfile` are resolved.
- Fixes improve behavior with `nodeLinker: hoisted` configurations.
- Remote resolution now requires `pnpr 0.1.0-alpha.20` or newer.

## Our Commentary

Security fixes are always important, even in patch releases. It's good to see pnpm addressing potential vulnerabilities and ensuring safer package management.
