---
layout: article
title: 'llm 0.32rc2: GPT-5.6 Luna Default & OpenAI Endpoint Command'
description: "Simon Willison's `llm` CLI tool releases 0.32rc2, switching its default model to GPT-5.6 Luna and introducing a new command for prompting arbitrary OpenAI-compatible endpoints."
photo: 'https://picsum.photos/id/46/800/450'
original_url: https://simonwillison.net/2026/Jul/30/llm-rc2/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, tooling, dx]
significance: 2
---

## Summary & Key Takeaways

- `llm` 0.32rc2 switches the default model for new users to GPT-5.6 Luna.
- GPT-5.6 Luna is a more recent and capable model, albeit slightly more expensive than the previous default.
- A new `llm openai endpoint` command allows prompting arbitrary OpenAI-compatible endpoints.
- This new command supports prompts, chats, and model listings without prior configuration.
- It offers a convenient way to test local models like those in LM Studio.

## Our Commentary

Simon Willison's `llm` tool continues to be an indispensable part of my AI workflow. The default model switch to GPT-5.6 Luna makes sense given the recent price drops, and the new `llm openai endpoint` command is a fantastic addition. I've been looking for a simple CLI to hit local OpenAI-compatible servers, and this fits the bill perfectly. It's these small, focused tools that often make the biggest difference in daily development.
