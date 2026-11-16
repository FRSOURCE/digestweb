---
layout: article
title: 'Vite v8.4.0 Beta 1: New Features & WASM Improvements'
description: "Vite's latest beta introduces several new features, including enhanced environment management, improved CSS handling, and better WebAssembly support. Developers can now explore these updates before the stable release."
photo: 'https://opengraph.githubassets.com/a242bf57d0a2286e8a7ebe68548aab5a28fd0610769816fb22b8791e81d23d35/vitejs/vite/releases/tag/v8.4.0-beta.1'
original_url: https://github.com/vitejs/vite/releases/tag/v8.4.0-beta.1
source_name: 'Vite Blog'
source_author: ''
tags: [build-tools, release, wasm, dx]
significance: 2
---

## Summary & Key Takeaways

- Introduces `environment.addSafeModule` and `server.fs.strict: 'extended'` for better control.
- Includes worker chunks in the build manifest and supports retrying failed CSS preloads.
- Adds support for subpath imports in CSS `url()` and skips emitting empty CSS files.
- Exposes the build manifest on the build environment and migrates `css.devSourcemap` to `dev.sourcemap.css`.
- Aligns module-runner stacktraces with V8 and serves WASM compressed in preview.
- Stabilizes `--configLoader` and deprecates `--configLoader=runner`.
- Supports bundled dev mode in SSR and source phase imports for WASM.
- Performance improvements include using native binaries for process start time on Windows.

## Our Commentary

This beta feels like a solid step forward. I'm particularly interested in the WASM improvements; it feels like Vite is really leaning into that future. The `environment.addSafeModule` stuff also hints at more robust security or isolation, which is always a good thing for complex projects. We're seeing a lot of refinement here, which is exactly what you want from a mature build tool.
