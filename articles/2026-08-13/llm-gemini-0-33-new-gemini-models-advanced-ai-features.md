---
layout: article
title: 'llm-gemini 0.33: New Gemini Models & Advanced AI Features'
description: 'The latest llm-gemini plugin release adds support for Gemini 3.7 Flash and other new models, alongside compatibility updates enabling reasoning traces and server-side tools.'
photo: 'https://static.simonwillison.net/static/2026/gemini-3.7-flash-high-pelican.jpg'
original_url: https://simonwillison.net/2026/Aug/13/llm-gemini/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, google, release]
significance: 3
---

## Summary & Key Takeaways

- The plugin now supports Gemini 3.7 Flash, 3.6 Flash, and 3.5 Flash Lite models.
- Two new embedding models, `gemini-embedding-2` and `gemini-embedding-001`, are also supported.
- Compatibility with LLM 0.32 enables reasoning traces for model outputs.
- Server-side tools can now be activated using a specific pattern.
- An interesting SVG rendering discrepancy for AI-generated images was noted across browsers.

## Our Commentary

Integrating with the latest Gemini Flash models is a big deal for anyone using `llm-gemini`. The speed improvements from Flash models are often quite noticeable. What really caught my eye, though, was the detail about the SVG rendering differences between Safari, Firefox, and Chrome for AI-generated images. It's a stark reminder that even with advanced AI, the web platform's quirks can still throw a wrench in things. I genuinely don't know how many times I've seen something render perfectly in one browser only to break in another. It's a classic web dev problem, now with an AI twist.
