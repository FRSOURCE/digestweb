---
layout: article
title: 'Enforcing AI Agent Diagnostics with Git Pre-Commit Hooks'
description: 'Geoffrey Huntley suggests using Git pre-commit hooks to ensure AI coding agents utilize diagnostic libraries, failing commits and injecting prompts when bypassed.'
photo: 'https://picsum.photos/id/585/800/450'
original_url: https://simonwillison.net/2026/Oct/13/geoffrey-huntley/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, dx, tooling, tutorial]
significance: 2
---

## Summary & Key Takeaways

- AI agents often bypass diagnostic libraries, leading to drift.
- A pre-commit hook can check for direct calls to observability modules.
- If bypassed, the commit fails, and the agent receives a prompt to use the library.
- This method ensures consistent diagnostic usage by AI coding agents.

## Our Commentary

This is such a clever, pragmatic solution to a very real problem with AI agents. We've all seen agents go off-script, and enforcing best practices at the commit level is brilliant. It's a great example of 'agentic engineering' in action – using automation to guide other automation. I love the idea of injecting a prompt directly into the agent's workflow. It's a bit meta, but highly effective.
