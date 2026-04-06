---
layout: article
title: "Cleaning Up Claude's Code Pastes with Python"
description: "Learn how to easily clean up conversational filler and extra text from Claude's code outputs using a simple Python script and regular expressions. This improves the developer experience when integrating LLM-generated code."
photo: 'https://picsum.photos/id/64/800/450'
original_url: https://simonwillison.net/2026/Apr/6/cleanup-claude-code-paste/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, tooling, dx, tutorial]
significance: 2
---

## Summary & Key Takeaways

- Large Language Models like Claude often include conversational text or explanations around code blocks, making direct pasting difficult.
- This article presents a Python script designed to clean up such LLM outputs.
- The script utilizes regular expressions to identify and extract only the pure code content.
- It addresses common patterns where Claude might introduce code with phrases like "Here's the code:" or add surrounding commentary.
- The solution aims to streamline the process of integrating AI-generated code into development workflows.
- This practical tip enhances the developer experience by reducing manual cleanup efforts.
- The approach is adaptable and can be modified for outputs from other LLMs with similar formatting quirks.
- It highlights a common challenge in working with AI and offers a straightforward, effective remedy.

## Our Commentary

This is one of those small, practical tips that makes a huge difference in daily development. We've all been there, wrestling with LLM output that's 90% useful code and 10% conversational fluff. Simon's simple Python script is a lifesaver for anyone regularly pasting code from Claude or similar models. It's a great reminder that while AI is powerful, the human element of crafting good tooling around it is still crucial for a smooth developer experience. It also subtly points to the ongoing need for LLMs to produce cleaner, more directly usable output, but until then, this kind of utility is invaluable.
