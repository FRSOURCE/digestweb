---
layout: article
title: 'llm-echo 0.5: Enhanced Token Usage Simulation for LLM Debugging'
description: 'The `llm-echo` debug plugin receives an update, now accurately simulating token usage for tool calls, system prompts, and reasoning tokens.'
photo: 'https://picsum.photos/id/614/800/450'
original_url: https://simonwillison.net/2026/Oct/18/llm-echo/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, tooling, release]
significance: 1
---

## Summary & Key Takeaways

- `llm-echo` is a debug plugin that repeats back prompts without involving an actual LLM.
- The new release updates simulated token usage counts.
- It now accounts for tool calls, system prompts, and reasoning tokens.
- This helps developers understand token consumption in complex LLM interactions.

## Our Commentary

Simon Willison's `llm-echo` plugin is a neat little utility for debugging LLM interactions. We appreciate the attention to detail in simulating token usage, especially with the increasing complexity of tool calls and system prompts. It's a small but useful improvement for anyone deep in LLM development.
