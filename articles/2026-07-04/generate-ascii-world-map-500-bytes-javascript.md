---
layout: article
title: 'Generate an ASCII World Map in 500 Bytes with JavaScript'
description: 'Discover a clever technique to render a credible ASCII world map using only 445 bytes of data, leveraging deflate compression and a concise JavaScript snippet.'
photo: 'https://static.simonwillison.net/static/2026/world-map-ascii.png'
original_url: https://simonwillison.net/2026/Jul/4/building-a-world-map-with-only-500-bytes/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [javascript, browser, performance, showcases]
significance: 2
---

## Summary & Key Takeaways

- Iwo Kadziela created an ASCII world map using only 445 bytes of data.
- The technique relies on deflate compression for data efficiency.
- A concise JavaScript snippet decompresses and renders the map in the browser.
- It demonstrates using `fetch()` with `data:` URIs for loading compressed data.
- The `DecompressionStream` API is central to the decompression process.

## Our Commentary

This is just pure web magic. I love seeing these kinds of highly optimized, almost "code golf" solutions that push the boundaries of what's possible with minimal resources. The `fetch('data:;base64,...')` trick combined with `DecompressionStream` is something I genuinely didn't know was possible. It's a fantastic reminder that there's always more to learn about browser capabilities.
