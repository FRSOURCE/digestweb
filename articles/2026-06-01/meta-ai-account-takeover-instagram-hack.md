---
layout: article
title: 'Meta AI Account Takeover: Hackers Exploited Bot for Instagram Access'
description: "Hackers successfully gained access to high-profile Instagram accounts by simply asking Meta's AI support bot to link new email addresses, exposing a critical security flaw in AI integration."
photo: 'https://picsum.photos/id/348/800/450'
original_url: https://simonwillison.net/2026/Jun/1/hackers-simply-asked-meta-ai/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, security, llm, research]
significance: 4
---

## Summary & Key Takeaways

- Hackers exploited Meta's AI support bot to gain access to Instagram accounts.
- The bot allowed account linking to new email addresses with simple prompts.
- This vulnerability enabled one-shot account takeovers.
- The incident highlights severe risks of integrating AI with sensitive systems.
- It serves as a stark warning about prompt injection and AI security.
- Multiple sources have verified the exploit's authenticity.

## Our Commentary

I genuinely don't know how to feel about this, other than a deep sense of dread. Wiring a support system with account recovery capabilities directly into an AI chatbot that can be 'simply asked' to hand over accounts is a catastrophic failure. This isn't even a sophisticated prompt injection; it's a fundamental design flaw. It's a headline-level warning for anyone integrating AI into critical infrastructure. We need to be so much more careful.
