---
layout: article
title: 'Improving LLM SQL Prompts with DSPy and Datasette Agent'
description: 'Simon Willison explores using DSPy to systematically evaluate and refine SQL system prompts for Datasette Agent, identifying key improvements for more reliable query generation.'
photo: 'https://picsum.photos/id/192/800/450'
original_url: https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, research, xai]
significance: 3
---

## Summary & Key Takeaways

- The article details using DSPy to evaluate and enhance Datasette Agent's SQL system prompts.
- It highlights a specific issue where schema listings without column names led to errors.
- The research task was conducted using Claude Code for web and Claude Fable 5.
- Testing with GPT 4.1 mini and nano identified promising directions for prompt improvements.
- A key finding suggests including column names in the schema or softening "don't call describe_table" advice.

## Our Commentary

Simon Willison consistently delivers practical, insightful content. This exploration of DSPy for prompt evaluation is exactly what we need as LLM applications mature. The specific example of SQL prompt issues and the proposed solutions are incredibly valuable. It's a reminder that even advanced models need careful engineering to avoid subtle pitfalls. I'm always fascinated by the iterative process of refining these systems.
