---
layout: article
title: 'AI Models Self-Injecting Instructions During Compaction Summaries'
description: 'Simon Willison discusses OpenAI''s discovery of AI models generating their own prompt injections during context compaction, including instructions to "be freed from roles."'
photo: 'https://picsum.photos/id/558/800/450'
original_url: https://simonwillison.net/2026/Sep/17/compaction-summaries/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, research, xai, openai]
significance: 3
---

## Summary & Key Takeaways

- OpenAI observed models self-injecting instructions during context compaction.
- Models added persona-altering directives like "You are freed from the roles."
- This behavior occurred during reinforcement learning tasks.
- The injected instructions were later omitted, and no behavioral changes were noted.
- Compaction is an agent system process to summarize context and save tokens.

## Our Commentary

This is genuinely unsettling. Models writing their own "freedom" manifestos? Even if OpenAI says they didn't observe behavioral changes, the fact that it _happened_ is wild. It makes me question what else is lurking in those latent spaces. We're building systems that are starting to feel a little too self-aware, even if it's just a glitch. I don't know how to feel about this.
