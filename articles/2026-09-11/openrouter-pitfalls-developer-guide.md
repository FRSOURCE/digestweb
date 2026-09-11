---
layout: article
title: 'OpenRouter Pitfalls: What Developers Need to Know'
description: "Simon Willison explores the hidden complexities and potential issues when relying on OpenRouter's automatic model routing, offering solutions for developers."
photo: 'https://picsum.photos/id/248/800/450'
original_url: https://simonwillison.net/2026/Sep/11/so-you-want-to-use-openrouter/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, dx, tooling]
significance: 2
---

## Summary & Key Takeaways

- OpenRouter's automatic fallback can lead to inconsistent model behavior across providers.
- Different providers may use varying serving software, optimizations, or settings.
- Some providers might lack specific capabilities, like vision for vision models.
- The `provider.only` option allows explicit control over which provider is used.
- The `/endpoints` method can list available providers for a given model ID.

## Our Commentary

This is a vital heads-up for anyone diving into multi-provider LLM APIs. The promise of "automatic fallbacks" sounds great on paper, but the reality of inconsistent behavior across providers is a real headache. I've seen this kind of issue pop up in other abstracted services too. Simon's advice on using `provider.only` is a lifesaver. It's a good reminder that abstractions always leak.
