---
layout: article
title: 'Qwen 3.8 27B LLM: Excellent, But Defaults to Overthinking'
description: "Simon Willison reviews Alibaba's new Qwen 3.8 27B LLM, praising its capabilities for its size but pointing out a default 'xhigh' reasoning effort that leads to excessive token consumption and slow generation for simple tasks."
photo: 'https://static.simonwillison.net/static/2026/qwen-thinking-bicycle-27b.jpg'
original_url: https://simonwillison.net/2026/Aug/16/qwen-38-27b/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, research, open-source]
significance: 2
---

## Summary & Key Takeaways

• Qwen 3.8 27B is a new Apache 2 licensed, vision-capable LLM from Alibaba.
• It's an excellent size for running on reasonably specced laptops.
• Benchmarks from Qwen show significant improvements over previous versions.
• The model defaults to an "xhigh" reasoning effort, leading to extensive internal thought processes.
• This default causes the model to "wildly overthink" even simple prompts.
• Overthinking results in high token usage and significantly longer generation times.
• Increasing the context length can mitigate issues caused by the default reasoning effort.

## Our Commentary

This is such a classic LLM quirk, and Simon nails it. We've seen models that are _too_ eager to please, but 'wildly overthinking' is a new level of hilarious frustration. It's a crucial heads-up for anyone looking to deploy Qwen 3.8 locally; that default setting could burn through context windows and compute cycles faster than you can say 'pelican riding a bicycle.' It makes me wonder how many other models have similar hidden 'personality traits' that aren't immediately obvious from benchmarks alone. This kind of practical, hands-on testing is invaluable.
