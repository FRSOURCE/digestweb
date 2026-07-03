---
layout: article
title: 'Simon Willison Unveils llm-coding-agent 0.1a0'
description: 'Simon Willison releases an experimental LLM-powered coding agent, built on his `llm` framework, capable of reading, editing files, and executing commands.'
photo: 'https://picsum.photos/id/522/800/450'
original_url: https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, tooling, open-source]
significance: 2
---

## Summary & Key Takeaways

- `llm-coding-agent 0.1a0` is an experimental coding agent built on Simon Willison's `llm` library.
- It functions as a Claude code style agent, equipped with file manipulation and command execution tools.
- The agent was developed using LLM prompts to generate its specification and then build it via TDD.
- It includes tools like `CodingTools_edit_file` for string replacement and `CodingTools_execute_command` for shell commands.
- A Python API `CodingAgent(...).run(...)` was also implemented, allowing programmatic interaction.
- The project is available as a "slop-alpha" on PyPI and can be run via `uvx`.

## Our Commentary

I'm always fascinated by Simon Willison's experiments. This `llm-coding-agent` feels like a peek into a future where our dev environments are far more autonomous. The idea of an agent writing its own spec and then building itself via TDD is just... wild. We're seeing these tools get genuinely useful, not just theoretical. But it also makes me wonder about the edge cases, the unexpected loops. What happens when it gets stuck? We're still figuring out how much control we want to cede.
