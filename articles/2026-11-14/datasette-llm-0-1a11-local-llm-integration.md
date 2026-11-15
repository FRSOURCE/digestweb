---
layout: article
title: 'Datasette-LLM 0.1a11: Local LLM Integration via OpenAI Endpoints'
description: "Datasette's LLM plugin now supports OpenAI-compatible endpoints, enabling seamless integration with local models like Ollama and LM Studio."
photo: 'https://static.simonwillison.net/static/2026/lmstudio-datasette-agent.webp'
original_url: https://simonwillison.net/2026/Nov/14/datasette-llm/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, tooling, release]
significance: 2
---

## Summary & Key Takeaways

- The `datasette-llm` plugin has released version 0.1a11.
- This update introduces support for OpenAI-compatible API endpoints.
- Users can now connect Datasette to local LLMs like LM Studio, Ollama, or `llama.cpp`.
- The integration allows running Datasette Agent instances powered by local models.
- This enhances flexibility for developers working with private or self-hosted AI models.

## Our Commentary

I'm always impressed by Simon Willison's work on Datasette. This update for `datasette-llm` is a smart move. Local LLM integration is becoming crucial for privacy and cost-efficiency. We've seen `llama.cpp` hit v1.0.0 recently, and now Datasette can tap into that local power. It feels like a quiet but important step towards more decentralized AI development. No more relying solely on cloud APIs for every experiment. This is good for DX, good for experimentation. I like it.
