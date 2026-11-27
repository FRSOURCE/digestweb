---
layout: article
title: 'Vite 8.4.0 Ships with WASM, CSS, and SSR Enhancements'
description: "Vite's latest minor update brings new features like WASM source phase imports, improved CSS URL handling, and better SSR bundled dev mode."
photo: 'https://opengraph.githubassets.com/ec88880e06f4284f2316321086d5e68055bdc11548a53ccae552ab79bb291cea/vitejs/vite/releases/tag/v8.4.0'
original_url: https://github.com/vitejs/vite/releases/tag/v8.4.0
source_name: 'Vite Blog'
source_author: ''
tags: [build-tools, release, wasm, css]
significance: 2
---

## Summary & Key Takeaways

- Vite 8.4.0 introduces new features and bug fixes.
- It adds support for WASM source phase imports and compressed WASM serving in preview.
- CSS handling is improved with subpath imports in `url()` and better empty file skipping.
- Server-side rendering (SSR) now supports bundled dev mode.
- Plugin error messages now include the plugin name for easier debugging.
- The `--configLoader` option is stabilized, deprecating `--configLoader=runner`.
- Environment-specific safe module paths enhance security.
- Build manifest now includes worker chunks and is exposed on the build environment.

## Our Commentary

This is a solid minor release. We're seeing continued refinement in Vite, especially around WASM and SSR, which is great. The improved error messages for plugins are a small but meaningful DX win. I'm always a little nervous about `server.fs.strict: 'extended'` and `safe modules` because it implies more complexity, but security is paramount.
