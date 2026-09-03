---
layout: article
title: 'Vite 8.3.0-beta.0: Rolldown Integration & New Hooks'
description: 'Vite releases its 8.3.0 beta, featuring new Rolldown watch options, server lifecycle hooks, top-level tsconfig support, and CSS style tag minification.'
photo: 'https://opengraph.githubassets.com/eca1495defbdcb08b4eceae237736dab1e62e5e0679ce7e163d5cac3f77a5eb5/vitejs/vite/releases/tag/v8.3.0-beta.0'
original_url: https://github.com/vitejs/vite/releases/tag/v8.3.0-beta.0
source_name: 'Vite Blog'
source_author: ''
tags: [vite, release, build-tools, dx]
significance: 2
---

## Summary & Key Takeaways

- Vite 8.3.0-beta.0 introduces Rolldown watch options in `server.watch`.
- New `closeServer` and `closePreviewServer` hooks are now available.
- A top-level `tsconfig` option simplifies configuration.
- CSS style tags are now minified for improved performance.
- Support for subpath imports in dynamic import statements is added.
- Assets in JavaScript now use `import.meta.ROLLDOWN_FILE_URL_*`.
- Warnings are added for unsupported hooks in plugins.

## Our Commentary

Vite 8.3.0-beta.0 is looking solid. The Rolldown integration continues to deepen, which is exciting for performance. I'm also a fan of the new `closeServer` and `closePreviewServer` hooks; these kinds of lifecycle events are always welcome for more robust tooling. It's good to see Vite keep pushing forward.
