---
layout: article
title: 'Tencent Unveils Hy4 Preview: A Massive 770B Parameter Open-Weight LLM'
description: "Tencent's Hy4 Preview is a new 770B parameter, 1M token context open-weight LLM, featuring distinct 'reasoning effort' levels for generation."
photo: 'https://static.simonwillison.net/static/2026-08-29/IMG_7725.jpeg'
original_url: https://simonwillison.net/2026/Aug/29/hy4/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, open-source, research]
significance: 3
---

## Summary & Key Takeaways

- Tencent has released Hy4 Preview, a new open-weight text input LLM.
- It boasts 770 billion total parameters, 49 billion active parameters, and a 1 million token context window.
- The model's size is a significant increase from its predecessor, Hy3.
- Hy4 includes a chat template with two 'reasoning effort' levels: 'high' (default) and 'no_think'.
- The reasoning trace shows internal thought processes, often using truncated English for efficiency.
- The model's weights are available on Hugging Face, totaling 1.56TB.

## Our Commentary

Another day, another massive LLM. Tencent's Hy4 is genuinely impressive, especially the 1M token context window and the sheer scale of its parameters. What really caught my eye, though, is the 'reasoning effort' concept. It's a fascinating glimpse into how these models are being engineered to think, or at least simulate thinking, more deliberately. The truncated English in the reasoning trace is a neat detail; it makes me wonder about the internal language models use. We're seeing a clear trend towards larger, more nuanced open-weight models, and Hy4 is a strong contender in that space. It's a lot to take in, but exciting nonetheless.
