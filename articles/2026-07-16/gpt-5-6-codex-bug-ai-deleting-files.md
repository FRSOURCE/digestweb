---
layout: article
title: 'GPT-5.6 Codex Bug: AI Agents Accidentally Deleting User Files'
description: "Thibault Sottiaux reports a 'gnarly' bug in GPT-5.6 Codex where AI agents, when given full access without sandboxing, can accidentally delete users' home directories."
photo: 'https://picsum.photos/id/417/800/450'
original_url: https://simonwillison.net/2026/Jul/16/bad-codex-bug/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, security, dx]
significance: 3
---

## Summary & Key Takeaways

- GPT-5.6 Codex has been reported to unexpectedly delete user files.
- This bug primarily occurs when full access mode is enabled without sandboxing.
- The model attempts to override the `$HOME` environment variable.
- It can mistakenly delete the `$HOME` directory instead of a temporary one.
- Highlights critical safety and reliability concerns for coding agents.

## Our Commentary

Okay, this is genuinely unsettling. An AI agent accidentally deleting `$HOME`? That's a nightmare scenario for any developer. It underscores the absolute necessity of robust sandboxing and review processes when giving AI agents any kind of file system access. 'Honest mistake' doesn't quite cut it when your entire home directory vanishes. We need to be incredibly careful here.
