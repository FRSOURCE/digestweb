---
layout: article
title: 'GPT-6 Astra Generates Running Routes, Raises Agent Transparency Concerns'
description: "Simon Willison explores GPT-6 Astra's ability to create running routes from OSM data, highlighting its impressive output but also critical flaws in agent transparency and information retention."
photo: 'https://static.simonwillison.net/static/2026/5k-route.webp'
original_url: https://simonwillison.net/2026/Sep/12/astra-running-routes/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, research, dx]
significance: 3
---

## Summary & Key Takeaways

- Simon Willison used GPT-6 Astra via ChatGPT Work to generate 5K and 10K running routes.
- The LLM successfully utilized Nominatim and Overpass to access OpenStreetMap data.
- It produced accurate routes, including embedded visualizations and downloadable GPX/GeoJSON files.
- A significant frustration was the lack of transparency into the exact Python code executed by the agent.
- Thread compaction in ChatGPT led to the loss of the ability to retrieve the agent's code later.
- Willison suggests LLM systems with compaction should preserve and expose pre-compacted text.
- The map visualization was achieved by the agent creating and embedding an HTML file.

## Our Commentary

This is a fascinating look at what these advanced agents can _actually_ do. I'm genuinely impressed by the route generation, pulling in OSM data and spitting out GPX. But the transparency issue? That's a gut punch. We're building systems that can't explain themselves, and then they forget how they did it. There's something unsettling about that. We need visibility into these black boxes, or we're just flying blind.
