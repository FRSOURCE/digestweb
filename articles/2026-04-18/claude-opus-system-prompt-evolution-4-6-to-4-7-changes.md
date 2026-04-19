---
layout: article
title: 'Claude Opus System Prompt Evolution: 4.6 to 4.7 Changes Revealed'
description: "Simon Willison details the subtle yet impactful changes Anthropic made to Claude Opus's system prompt between versions 4.6 and 4.7. This analysis offers a rare glimpse into how LLM providers fine-tune model behavior."
photo: 'https://picsum.photos/id/662/800/450'
original_url: https://simonwillison.net/2026/Apr/18/opus-system-prompt/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, anthropic, research]
significance: 2
---

## Summary & Key Takeaways

- Simon Willison analyzed the system prompt changes for Anthropic's Claude Opus model between versions 4.6 and 4.7.
- Key refinements include explicitly identifying Claude, emphasizing brevity, and improving instruction following.
- Anthropic also adjusted how the model should handle internal "thought" blocks and removed some redundant instructions.
- These subtle modifications aim to make Claude more helpful, direct, and aligned with user expectations.
- The analysis highlights the continuous effort by LLM providers to fine-tune model behavior through prompt engineering.

## Our Commentary

This is fascinating. We often treat LLMs as black boxes, but Simon's dive into Claude's system prompt changes pulls back the curtain a little. It's a reminder that even minor tweaks to the underlying instructions can significantly alter a model's personality and performance. The shift towards brevity and directness is a common user request, and it's cool to see Anthropic responding to that. It also makes you wonder what other subtle changes are happening under the hood that we don't get to see. This kind of transparency, even if reverse-engineered, is invaluable for developers building on these platforms.
