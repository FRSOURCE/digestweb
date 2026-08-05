---
layout: article
title: 'llm-anthropic 0.26: New Claude 5 Models and Server-Side Tools'
description: 'The `llm-anthropic` plugin updates to version 0.26, adding support for new Claude 5 models and server-side tools, leveraging features from LLM 0.32.'
photo: 'https://picsum.photos/id/740/800/450'
original_url: https://simonwillison.net/2026/Aug/4/llm-anthropic/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, release, open-source]
significance: 1
---

## Summary & Key Takeaways

`llm-anthropic 0.26` introduces support for new Claude 5 models: Fable, Sonnet, and Opus.
It adds server-side tools like WebSearch, WebFetch, CodeExecution, and AnthropicMCP.
Reasoning, tool calls, and results now stream as typed events.
Reasoning for CLI prompts displays to standard error by default.
The plugin requires `llm>=0.32` to function correctly.

## Our Commentary

This is a solid update for Claude users, bringing the latest models and server-side capabilities to the `llm` ecosystem. It's good to see the plugins keeping pace with the core tool's advancements. I appreciate the consistent effort to integrate new model features as they become available.
