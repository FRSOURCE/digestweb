---
layout: article
title: 'Deno v2.7.6: CPU Flamegraphs & Node.js Compat Boosts'
description: 'Deno v2.7.6 introduces `--cpu-prof-flamegraph` for interactive SVG flamegraphs, improves CJS/ESM auto-detection, and adds more Node.js compatibility features, alongside numerous bug fixes.'
photo: https://opengraph.githubassets.com/4e72dd978993c9b3f0ad5e24c61ad75bb92fa6301347ae5dd9e3ab44201c77cd/denoland/deno/releases/tag/v2.7.6
original_url: https://github.com/denoland/deno/releases/tag/v2.7.6
source_name: 'Deno Releases'
source_author: ''
tags: [deno, release, nodejs, dx]
significance: 2
---

## Summary & Key Takeaways
*   Deno v2.7.6 is a patch release packed with new features and fixes.
*   **Performance Tooling:** Adds `--cpu-prof-flamegraph` to generate interactive SVG flamegraphs for CPU profiling.
*   **Module Handling:** `deno eval` now auto-detects CJS vs. ESM modules.
*   **Node.js Compatibility:** Further enhances Node.js compatibility with additions like `MIMEType`, `Symbol.dispose` for `ChildProcess`, and improved `child_process` test passing.
*   **Core Updates:** Updates V8 to 146.8.0 and adds a cloneable resource registry for structured cloning.
*   **Bug Fixes:** Addresses numerous issues across core, CLI, coverage, console, crypto, fetch, FFI, and NAPI extensions.

## Out Commentary

Good to see Deno still broadens compatibility layer with Node.js. That helps migrating projects and reusing existing libraries!
