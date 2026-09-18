---
layout: article
title: 'Claude Code Adds AGENTS.md Support for Agent Customization'
description: 'Anthropic''s Claude Code now supports `AGENTS.md` for project instructions, building on an upcoming "mods" system to customize AI agent behavior.'
photo: 'https://picsum.photos/id/369/800/450'
original_url: https://simonwillison.net/2026/Sep/18/thariq-shihipar/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, anthropic, claude]
significance: 2
---

## Summary & Key Takeaways

- Claude Code version 2.1.277 now checks for and uses `AGENTS.md` if `CLAUDE.md` is not present.
- This feature is built on Claude Code's upcoming "mods" system for customizing the agent harness.
- `AGENTS.md` allows developers to provide project instructions for AI agents.
- Users will eventually be able to build custom versions of project instructions themselves.
- The source for the built-in mod is available for reference.

## Our Commentary

This is a pretty interesting move from Anthropic. Giving developers more control over how their AI agents interpret instructions via `AGENTS.md` and the "mods" system is a clear step towards more powerful and customizable AI workflows. I'm always looking for ways to make agents less opaque, and this feels like a good direction.
