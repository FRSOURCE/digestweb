---
layout: article
title: 'Newer LLMs Worsen Tool Use with Custom Schemas'
description: 'Armin reports that advanced Claude models are less effective at using custom tool schemas, inventing extra fields due to specialized training on first-party tools.'
photo: 'https://picsum.photos/id/596/800/450'
original_url: https://simonwillison.net/2026/Jul/4/better-models-worse-tools/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, research, dx]
significance: 3
---

## Summary & Key Takeaways

- Newer Claude models (Opus 4.8, Sonnet 5) exhibit degraded performance with custom tool schemas.
- These models invent extra fields in tool calls, leading to schema validation failures.
- Armin theorizes this issue stems from specialized training on Claude Code's internal edit tools.
- This training may make models less generalizable to external or custom tool definitions.
- OpenAI models are trained on an `apply_patch` mechanism, suggesting different approaches.
- The problem raises questions about the need for multiple tool implementations in third-party harnesses.

## Our Commentary

This is a genuinely concerning trend. We're seeing these models get "smarter" in some ways, but at the cost of generalizability for tool use. It feels like a step backward for developer experience. If every LLM requires its own specific tool implementation, the dream of interchangeable AI agents becomes a nightmare of bespoke integrations. I really hope this isn't a sign of things to come, where model providers optimize for their own ecosystems at the expense of broader utility.
