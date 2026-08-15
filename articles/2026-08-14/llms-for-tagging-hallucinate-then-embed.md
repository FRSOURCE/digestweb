---
layout: article
title: 'LLMs for Tagging: Hallucinate, Then Embed'
description: 'Discover a novel approach to content tagging using LLMs. Instead of classifying against a fixed vocabulary, let models hallucinate tags and then map them to existing ones via vector embeddings.'
photo: 'https://picsum.photos/id/331/800/450'
original_url: https://simonwillison.net/2026/Aug/14/dont-classify-hallucinate/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, research, dx]
significance: 2
---

## Summary & Key Takeaways

- Traditional LLM tagging struggles with large, predefined tag vocabularies.
- Doug Turnbull's method suggests letting the LLM generate novel, "hallucinated" tags.
- These imagined tags are then mapped to existing concrete tags using vector embeddings.
- This approach avoids overwhelming the LLM with a massive tag list.
- It leverages the LLM's generative capabilities for better tag suggestions.
- An example prompt demonstrates how to guide the model's output format.

## Our Commentary

I've been wrestling with old blog content and its lack of proper tags for ages. This idea of letting the LLM just _imagine_ tags, then using embeddings to find the closest match in my existing vocabulary? That's genuinely brilliant. It sidesteps the context window limits and feels so much more organic than trying to force a classification. We're definitely trying this out for our own archives. It's a smart hack.
