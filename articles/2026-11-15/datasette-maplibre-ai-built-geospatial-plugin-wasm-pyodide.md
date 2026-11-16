---
layout: article
title: 'Datasette-MapLibre: AI-Built Geospatial Plugin with WASM & Pyodide'
description: 'Simon Willison unveils a new Datasette plugin for geospatial data visualization, largely developed with Claude Fable 5.2. It integrates MapLibre GL and OpenFreeMap, featuring efficient SVG/WebGL rendering.'
photo: 'https://static.simonwillison.net/static/cors-allow/2026/datasette-maplibre.webp'
original_url: https://simonwillison.net/2026/Nov/15/datasette-maplibre/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, wasm, showcases]
significance: 3
---

## Summary & Key Takeaways

- Introduces `datasette-maplibre`, a new geospatial plugin for Datasette.
- The plugin combines MapLibre GL with the OpenFreeMap vector map server.
- A significant portion of the plugin's development was assisted by Claude Fable 5.2.
- Features include displaying SVG previews of GeoJSON shapes, loading WebGL previews on scroll.
- A comprehensive demo is available, working in Datasette Lite via Pyodide and WebAssembly.
- The demo allows viewing both GeoJSON shapes and lat/lon points on the same map.

## Our Commentary

This is genuinely fascinating. Simon Willison building a complex plugin almost entirely with Claude Fable 5.2? That's a powerful demonstration of AI's potential in development. I'm always a bit skeptical of "AI built this" claims, but Simon is meticulous. The fact it leverages Pyodide and WebAssembly for the demo is just icing on the cake. It makes me wonder how many developers are quietly using these tools to accelerate their work. We're seeing a real shift in how we approach coding.
