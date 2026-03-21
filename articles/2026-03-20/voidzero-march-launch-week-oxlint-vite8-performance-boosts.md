---
layout: article
title: "VoidZero's March Launch Week: Oxlint & Vite 8 Deliver Massive Performance Boosts"
description: VoidZero announces significant updates, including Oxlint's near-100% ESLint plugin compatibility and Vite 8's new Rust-based Rolldown bundler, promising dramatic speed improvements for web development workflows.
photo: https://voidzero.dev/covers/update-march-launch-week-2026.jpg
original_url: https://voidzero.dev/posts/whats-new-march-launch-week-2026
source_name: VoidZero Blog
source_author: 
tags: [tooling, build-tools, javascript, typescript]
significance: 4
---

## Summary & Key Takeaways
*   Oxlint now supports JavaScript plugins, offering near-100% compatibility with the ESLint ecosystem and up to 100x faster linting.
*   Vite 8 introduces Rolldown, a new Rust-based bundler that replaces both esbuild and Rollup, unifying dev/prod and delivering 10-30x faster builds.
*   New features in Vite 8 include integrated Devtools, built-in tsconfig paths, automatic emitDecoratorMetadata, and Oxc-powered React transforms.
*   Real-world examples show significant build time reductions (e.g., Linear from 46s to 6s).

## Our Commentary
This is a monumental release for the web development ecosystem. The performance gains from both Oxlint and Vite 8 are staggering. We've been watching the Rustification of web tooling for a while, and this feels like a major inflection point. Oxlint's ability to run existing ESLint plugins is a game-changer; it removes the biggest barrier to adoption for many teams. And Vite 8's move to a single, super-fast Rust bundler for both dev and prod? That's a dream come true for consistency and speed. We anticipate this will set a new standard for build tool performance and developer experience. The impact on CI times and local feedback loops will be immense.
