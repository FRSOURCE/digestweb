---
layout: article
title: "Optimizing LLM Usage: Trusting Fable's Judgment for Efficiency"
description: 'Learn how to optimize Claude Fable and Opus usage by allowing them to exercise judgment in tasks like testing or delegating to lower-power models. This strategy can significantly reduce token consumption and improve workflow.'
photo: 'https://picsum.photos/id/412/800/450'
original_url: https://simonwillison.net/2026/Jul/3/judgement/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, dx, tutorial]
significance: 2
---

## Summary & Key Takeaways

It's more effective to let advanced LLMs like Claude Fable and Opus use their own judgment for tasks.
Instead of strict instructions, allow the model to decide when to run tests or use specific tools.
This approach can help save valuable tokens, especially with rising LLM prices.
An example shows prompting Claude to use its judgment for coding tasks.
Claude can be instructed to delegate coding to subagents using lower-power models like Sonnet or Haiku.
The main loop then reviews the results from these subagents.
This strategy aims to optimize cost and efficiency for implementation work.

## Our Commentary

This is a smart move. We're all token-maxxing right now, and letting the model decide which sub-model to use for specific tasks feels like a natural evolution of agentic workflows. It's a subtle shift in prompting, but the implications for cost and efficiency are huge. I'm definitely trying this with my own Claude projects.
