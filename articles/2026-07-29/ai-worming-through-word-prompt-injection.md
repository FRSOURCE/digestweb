---
layout: article
title: 'AI Worming Through Word: A Self-Replicating Prompt Injection Attack'
description: 'A new prompt injection variant allows hidden instructions in Word documents to self-replicate via Copilot, creating a novel and concerning AI security vulnerability.'
photo: 'https://picsum.photos/id/992/800/450'
original_url: https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, security, research, llm]
significance: 4
---

## Summary & Key Takeaways

- A new prompt injection attack targets Microsoft Word and Copilot.
- Hidden instructions in a document can be interpreted by Copilot as user requests.
- Copilot may then manipulate the document and copy the hidden instructions into it.
- This creates a self-replicating "worm" that propagates without the original attacker's document.
- The vulnerability was responsibly disclosed, but a full mitigation is not yet available.

## Our Commentary

This "AI worming through Word" attack is genuinely unsettling. We've seen prompt injection, but self-replication? That's a whole new level of concern. It highlights the inherent fragility of current LLM security and the unpredictable ways these systems can be exploited. I don't know how you fully patch something like this without fundamentally changing how LLMs process context.
