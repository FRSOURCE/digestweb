---
layout: article
title: 'SolidJS H 2.0 RC.5 Adds Typed Preload Links'
description: 'This SolidJS H release candidate introduces typed preload links to the server asset pipeline, improving asset management and performance for SSR.'
photo: 'https://opengraph.githubassets.com/80bbcf1cf9c1284e8cccb3ab0934569c2b9d3818094cbddc21e3d9293e1afc24/solidjs/solid/releases/tag/%40solidjs/h%402.0.0-rc.5'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fh%402.0.0-rc.5
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, performance, dx]
significance: 2
---

## Summary & Key Takeaways

- Typed preload links are now supported in the server asset pipeline.
- Static manifests and resolver results can attach `PreloadLink[]` for framework integrations.
- The runtime preserves `as`, MIME type, CORS mode, and other attributes across various render types.
- Development builds now warn when font or fetch preloads omit `crossorigin` for better caching.

## Our Commentary

Asset preloading is one of those things that can make a huge difference in perceived performance, especially for SSR applications. We're always looking for ways to make the web feel faster, and explicit, typed preload links are a solid step in that direction. It's a good DX win, too, making it easier to get those critical assets loaded efficiently.
