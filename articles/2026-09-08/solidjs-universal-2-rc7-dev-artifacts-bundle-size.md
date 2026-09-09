---
layout: article
title: 'SolidJS Universal 2.0 RC.7 Streamlines Dev Artifacts & Reduces Bundle Size'
description: 'This release candidate for SolidJS Universal renames legacy client dev artifacts and removes an experimental patch channel, leading to bundle size reductions.'
photo: 'https://opengraph.githubassets.com/4bff353d3512fd8bf0d01b410f3a38f115c2cf2bd30d7fd54184ced79d398f03/solidjs/solid/releases/tag/%40solidjs/universal%402.0.0-rc.7'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Funiversal%402.0.0-rc.7
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, tooling, performance]
significance: 1
---

## Summary & Key Takeaways

- Legacy client dev artifacts are renamed to a consistent `.dev.{js,cjs}` convention.
- The experimental patch channel and patch-mode list driver have been removed.
- This removal results in store-family app bundles reclaiming up to ~900 B brotli.
- Compiler options and exports related to the patch driver are also removed.

## Our Commentary

It's always good to see frameworks cleaning up experimental features that didn't pan out. The bundle size reduction, even if minor, is a welcome bonus. Consistency in dev artifact naming is a small but appreciated quality-of-life improvement for developers.
