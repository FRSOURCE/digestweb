---
layout: article
title: "Anthropic Details Claude's Sandboxing for Enhanced AI Security"
description: 'Anthropic provides a comprehensive overview of its sandboxing techniques across Claude.ai, Claude Code, and Cowork, detailing how they contain AI agents. This deep dive covers process sandboxes, VMs, and filesystem boundaries to prevent data exfiltration.'
photo: 'https://picsum.photos/id/895/800/450'
original_url: https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, anthropic, security]
significance: 3
---

## Summary & Key Takeaways

Anthropic released a detailed overview of its sandboxing strategies for Claude across its various products.
The goal is to establish hard boundaries on what an AI agent can access and interact with.
Techniques include process sandboxes, virtual machines, filesystem boundaries, and egress controls.
Claude.ai utilizes gVisor for containment.
Claude Code employs Seatbelt on macOS and Bubblewrap on Linux for local execution.
Claude Cowork runs within full virtual machines.
The documentation highlights past risks, such as an API file exfiltration vector, and how they were addressed.
The article encourages revisiting Anthropic's open-source srt (Sandbox Runtime) tool.

## Our Commentary

This is the kind of transparency we desperately need from major AI players. I'm genuinely impressed by the level of detail Anthropic shared here. It's not just a marketing piece; it's a technical deep dive into how they're trying to keep these powerful models contained. The mention of past vulnerabilities they missed is particularly telling. It makes me wonder what other subtle vectors exist that nobody's even thought of yet. We're building these incredibly complex systems, and the attack surface feels infinite. It's a constant cat-and-mouse game, and I appreciate seeing some of the actual traps they're setting.
