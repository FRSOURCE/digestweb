---
layout: article
title: 'NES Emulator Baked Into LLM Weights: Play Mario in Qwen!'
description: 'Drew Breunig has embedded a functional Nintendo Entertainment System 6502 CPU emulator directly into the weights of the Qwen3.5-4B LLM, enabling games like Super Mario Bros to run within it.'
photo: 'https://picsum.photos/id/345/800/450'
original_url: https://simonwillison.net/2026/Oct/30/nesformer/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, research, showcases]
significance: 4
---

## Summary & Key Takeaways

- Drew Breunig embedded a working NES 6502 CPU emulator into Qwen3.5-4B's weights.
- This allows playing NES ROMs, such as Super Mario Bros, directly within the LLM.
- The project was inspired by Divyansh Agrawal's qwenputer.
- Opus 5.5 prompts were used to guide the model's development.
- The emulator uses conformance tests for the NES CPU released 15 years ago.

## Our Commentary

Okay, this is absolutely wild. An NES emulator _inside_ an LLM? My brain is genuinely struggling to process the implications. It's not just a cool hack; it's a profound demonstration of emergent computation and the unexpected capabilities of these models. We're moving beyond just text generation into something far more complex. I don't even know how to feel about it, but it's definitely pushing the boundaries of what I thought was possible.
