---
layout: article
title: '2,000 Hackers vs. AI Assistant: A Prompt Injection Security Test'
description: 'Simon Willison reports on an experiment where 2,000 people attempted to hack an AI assistant via email. Despite 6,000 attempts, no secrets were leaked, offering insights into LLM prompt injection defenses.'
photo: 'https://picsum.photos/id/577/800/450'
original_url: https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, security, research]
significance: 3
---

## Summary & Key Takeaways

2,000 Hackers vs. AI Assistant: A Prompt Injection Security Test

- An experiment involved 2,000 people attempting to hack an AI assistant.
- The challenge focused on leaking secrets via email-based prompt injection.
- After 6,000 attempts, the AI assistant successfully resisted all attacks.
- The underlying model was Opus 4.6, with specific anti-injection rules.
- This suggests current frontier models are more resilient to injection attacks.
- Simon Willison still advises caution for production systems.

## Our Commentary

This is exactly the kind of practical security research we need for AI. 6,000 failed attempts is a strong signal, but I agree with Simon: no guarantees. The "Anti-Prompt-Injection Rules" are a good starting point, but the cat-and-mouse game with attackers will never end. It's a relief to see the labs' efforts paying off, but it also makes me wonder what sophisticated attacks are still out there. We need more of these public challenges.
