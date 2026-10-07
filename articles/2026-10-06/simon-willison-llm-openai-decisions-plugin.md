---
layout: article
title: "Simon Willison's `llm-openai-decisions` Plugin for OpenAI's New API"
description: "Simon Willison introduces `llm-openai-decisions`, a new plugin integrating with OpenAI's Jev-style Decisions API, supporting image input and offering similar functionality to Jev."
photo: 'https://picsum.photos/id/768/800/450'
original_url: https://simonwillison.net/2026/Oct/6/llm-openai-decisions/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, openai, tooling]
significance: 2
---

## Summary & Key Takeaways

- Simon Willison released `llm-openai-decisions` plugin, version 0.1a0.
- The plugin integrates with OpenAI's new Jev-style Decisions API, announced at DevDay.
- It was built by GPT-6 Astra, inspired by the `llm-typesafe` plugin for Jev.
- OpenAI's `gpt-6-luna` decision model supports both text and image input.
- Pricing for OpenAI's model is 10 cents per million input tokens, compared to Jev's 4.2 cents.
- The API conceptually mirrors Jev, supporting yes/no, choices, and scores.
- Installation is via `llm install llm-openai-decisions`.
- An example demonstrates querying an image attachment for mammals.

## Our Commentary

Simon Willison is just out here building the future, isn't he? I love seeing how quickly these integrations pop up. The fact that GPT-6 Astra built this plugin is a whole other layer of meta-cool. It makes me wonder how many of our future dev tools will be self-generated. The pricing difference is interesting, but the image input is a big win for OpenAI here. We're watching the ecosystem mature at warp speed.
