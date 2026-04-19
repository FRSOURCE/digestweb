---
layout: article
title: 'Track Claude System Prompts with Git: A Timeline of LLM Evolution'
description: "Simon Willison shares a clever method to extract and track Claude's system prompts over time using a Python script and Git. This creates a transparent timeline of how LLM instructions evolve."
photo: 'https://picsum.photos/id/781/800/450'
original_url: https://simonwillison.net/2026/Apr/18/extract-system-prompts/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, anthropic, tooling]
significance: 2
---

## Summary & Key Takeaways

- Simon Willison developed a method to extract and track the system prompts of various Claude models (Opus, Sonnet, Haiku).
- The process involves querying the Anthropic API, extracting the core system prompt from the `tool_use_system_prompt` field.
- He then commits these extracted prompts to a Git repository, creating a historical timeline of changes.
- This "git blame" approach allows developers to observe how LLM providers fine-tune model instructions over time.
- The article includes the Python script used for this extraction, enabling others to replicate the process.

## Our Commentary

This is brilliant. The idea of using Git to track LLM system prompts is such a simple yet powerful concept. It addresses a real pain point: the lack of transparency around how these models are updated. We're constantly adapting our prompts and applications to new model versions, and having a historical record of the underlying system instructions could be a game-changer for debugging and understanding behavioral shifts. It's a fantastic example of community-driven transparency, and we hope more people adopt similar methods for other models. This kind of open-source tooling is exactly what the AI ecosystem needs.
