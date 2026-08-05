---
layout: article
title: 'LLM 0.32: Reasoning Traces, Server-Side Tools, and Smarter Logging'
description: "Simon Willison's LLM CLI tool gets a major update, introducing visible reasoning traces, server-side tools for code execution and web search, and enhanced logging."
photo: 'https://static.simonwillison.net/static/2026/best-thing-pelicans-card.jpg'
original_url: https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, tooling, release]
significance: 4
---

## Summary & Key Takeaways

LLM 0.32 introduces visible reasoning traces, showing how models "think" during execution.
New server-side tools like OpenAI's CodeInterpreter and WebSearch are now supported.
The default model for `llm prompt` is now the cost-effective GPT-5.6 Luna.
Content-addressable SQLite logs have been redesigned for better data management.
The `llm-anthropic` plugin also received substantial updates, including new Claude 5 models and server-side tools.
A new `llm openai endpoint` command allows one-off prompts against any OpenAI-compatible API.
This release significantly enhances the developer experience for interacting with LLMs locally and via various APIs.

## Our Commentary

This is a big one for anyone wrangling LLMs locally. I'm genuinely excited about the reasoning traces; seeing the model's "thought process" directly in the terminal is a game-changer for debugging and understanding. The server-side tools integration feels like a natural evolution, pushing the boundaries of what a CLI can do with these powerful models. We've been waiting for more robust tooling in this space, and Simon consistently delivers.
