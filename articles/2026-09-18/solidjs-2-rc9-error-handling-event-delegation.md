---
layout: article
title: 'SolidJS 2.0 RC.9: Enhanced Error Handling & Event Delegation'
description: 'SolidJS 2.0 Release Candidate 9 introduces a new client error hook and refines delegated event handling for improved stability and debugging.'
photo: 'https://opengraph.githubassets.com/df385be918da661b9102f5bfe09d36d5e23dea7587db6083f4d112a801ae772f/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, frameworks]
significance: 2
---

## Summary & Key Takeaways

- Introduces `configureClientErrors({ onError })` for comprehensive client-side error monitoring.
- Provides a dedicated seam for applications or error monitors to catch otherwise unhandled component failures.
- Moves delegated event handlers off Solid 1's `$$<type>` key to `_$$<type>` to prevent conflicts with older runtimes.
- Ensures compatibility and isolation when multiple Solid versions coexist on a single page.
- The error hook machinery is pay-for-use, only included if `createErrorBoundary` or `configureClientErrors` are imported.

## Our Commentary

We're seeing SolidJS 2.0 really mature in its release candidate phase. The new client error hook is a big deal for robust applications; it's the kind of foundational improvement that makes debugging less of a nightmare. And that event delegation fix? I've seen enough weird conflicts with embedded widgets to know that's a welcome change. It's all about stability and making sure things just work.
