---
layout: article
title: 'datasette-llm 0.1a10 Fixes LLM Model Restriction Bug'
description: 'datasette-llm 0.1a10 is released, addressing a bug that prevented correct restriction of available LLM models in its configuration.'
photo: 'https://picsum.photos/id/281/800/450'
original_url: https://simonwillison.net/2026/Nov/4/datasette-llm/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, tooling, open-source]
significance: 1
---

## Summary & Key Takeaways

- datasette-llm 0.1a10 has been released.
- It fixes a bug in the `agent.datasette.io` demo site.
- The bug involved incorrect restriction of available LLM models.
- Models were not correctly limited to those specified in the configuration.

## Our Commentary

Simon Willison's work with Datasette and LLMs is always interesting. This is a minor bug fix, but it highlights the ongoing refinement needed for tools integrating with LLMs, especially around configuration and model access. It's a reminder that even powerful AI needs careful plumbing.
