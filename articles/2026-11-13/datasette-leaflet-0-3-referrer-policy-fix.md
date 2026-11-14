---
layout: article
title: 'datasette-leaflet 0.3 Fixes OpenStreetMap Referrer Policy'
description: "datasette-leaflet, a core plugin for Datasette, updates to 0.3 to correctly handle OpenStreetMap's referrer policy, ensuring proper tile requests from embedded maps."
photo: 'https://picsum.photos/id/359/800/450'
original_url: https://simonwillison.net/2026/Nov/13/datasette-leaflet/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, open-source]
significance: 1
---

## Summary & Key Takeaways

- `datasette-leaflet` version 0.3 addresses OpenStreetMap's referrer policy.
- It now sets `Referrer-Policy: strict-origin-when-cross-origin` for tile requests.
- This resolves issues where Datasette's default `no-referrer` policy violated OSM's terms.
- The plugin bundles Leaflet for other Datasette plugins to use.
- It ensures proper attribution and functionality for map visualizations.

## Our Commentary

It's a small but important fix for respecting external service policies. Details like referrer headers can easily be overlooked, so it's good to see the Datasette ecosystem being diligent about it.
