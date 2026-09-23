---
layout: article
title: 'llm CLI Tool Updates with GPT-6 Sol & Luna Support'
description: "Simon Willison's `llm` CLI tool gets an update, adding support for the latest OpenAI models and new features for conversation handling."
photo: 'https://picsum.photos/id/315/800/450'
original_url: https://simonwillison.net/2026/Sep/22/llm/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, ai, openai, release]
significance: 1
---

## Summary & Key Takeaways

`llm` 0.36 adds support for OpenAI's new `gpt-6-sol` and `gpt-6-luna` models.
Model plugins can now declare `supports_conversation = False` for single-turn models.
The `llm` chat interface will reject models that do not support conversations.
Reasoning traces in `llm logs` Markdown output are now wrapped in `<details>` tags.

## Our Commentary

It's good to see `llm` keeping pace with the rapid model releases. The `supports_conversation` flag is a smart addition; it helps manage expectations for models not designed for multi-turn interactions. We appreciate the continuous refinement of developer tools in this fast-moving AI landscape.
