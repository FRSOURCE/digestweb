---
layout: article
title: "Meta's Muse Glimmer: New 30B Open-Weights Model for Local AI Agents"
description: "Meta releases Muse Glimmer, a 30B open-weights model under Apache 2.0. It's optimized for agentic task completion, reliable tool use, and multi-step reasoning, making it ideal for local AI development."
photo: 'https://static.simonwillison.net/static/2026/glimmer-pelican.png'
original_url: https://simonwillison.net/2026/Aug/10/introducing-muse-glimmer/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, open-source, release]
significance: 3
---

## Summary & Key Takeaways

Meta introduces Muse Glimmer, a 30B open-weights model with an Apache 2.0 license.
The model is specifically optimized for end-to-end agentic task completion.
It demonstrates strong performance in reliable tool use and multi-step reasoning.
Simon Willison tested Glimmer locally using LM Studio and his `llm-coding-agent` plugin.
The 30B size is practical for local machines with 32GB+ RAM, leaving room for other applications.
Glimmer also functions as a vision model, capable of describing images.
Its clean Apache 2.0 license is a notable improvement over previous Meta model licenses.
Benchmarks show strong success rates on full-task benchmarks like SWE-Bench.

## Our Commentary

Okay, Meta is back in the open-weights game with a proper Apache 2.0 license. That's a huge win for the community. We've been waiting for something like this, especially for local agentic workflows. The 30B size feels like a sweet spot for many of our machines. I'm genuinely excited to see how developers leverage Glimmer for complex, multi-step tasks. The focus on reliable tool use is exactly what we need to move beyond simple prompt-response loops. This could really accelerate local AI agent development.
