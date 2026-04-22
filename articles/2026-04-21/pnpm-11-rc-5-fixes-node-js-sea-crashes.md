---
layout: article
title: 'pnpm 11 RC 5 Addresses Node.js v25.7+ SEA Executable Crashes'
description: 'This release candidate for pnpm 11 fixes critical regressions in the Single Executable Application (SEA) functionality when used with Node.js v25.7 and newer. It addresses issues with SEA blob format changes and module loading within CJS SEA entries.'
photo: 'https://opengraph.githubassets.com/d831f88822e058bb60728ec990a6f58efb6ab3b7157bb6bd67de05fe46c02ef4/pnpm/pnpm/releases/tag/v11.0.0-rc.5'
original_url: https://github.com/pnpm/pnpm/releases/tag/v11.0.0-rc.5
source_name: 'pnpm Releases'
source_author: ''
tags: [tooling, nodejs, release]
significance: 1
---

## Summary & Key Takeaways

- pnpm 11 RC 5 is a patch release candidate addressing regressions in the Single Executable Application (SEA) feature.
- It fixes crashes occurring with SEA executables on Node.js v25.7 and later versions.
- The update ensures `pnpm pack-app` correctly pins the Node.js version used for SEA blob creation to match the embedded runtime.
- It also resolves issues with module loading within CJS SEA entry points by using `Module.createRequire` instead of `await import()`.

## Our Commentary

This is a very specific fix, but an important one for anyone leveraging pnpm's SEA capabilities, especially with newer Node.js versions. It highlights the ongoing complexities of maintaining compatibility across different Node.js runtime changes, particularly around module systems and executable bundling. It's a reminder that even seemingly minor Node.js updates can have cascading effects on tooling.
