---
layout: article
title: 'llm 0.33 Released: OpenAI Library Update & Template Improvements'
description: "Simon Willison's `llm` tool updates to 0.33, featuring OpenAI Python library 3.x support, improved embedding key handling, and template combining."
photo: 'https://picsum.photos/id/816/800/450'
original_url: https://simonwillison.net/2026/Aug/22/llm/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, tooling, release, dx]
significance: 2
---

## Summary & Key Takeaways

- `llm` 0.33 upgrades to the OpenAI Python library 3.x, switching HTTP client dependencies. - The release introduces `--key` support for `llm embed` and `llm embed-multi` commands. - Embedding models now use a consistent pattern for keys, mirroring regular LLM models. - The `llm prompt -t/--template` option can now be repeated to combine multiple templates. - Reasoning-capable Responses API models now support a `reasoning_summary` option.

## Our Commentary

Simon Willison's `llm` tool continues to be a quiet workhorse for local AI experimentation. This 0.33 release, while not flashy, brings some solid quality-of-life improvements. The ability to combine templates is particularly neat; it feels like a step towards more modular and reusable AI workflows. We appreciate the continuous refinement of these essential developer tools.
