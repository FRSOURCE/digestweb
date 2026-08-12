---
layout: article
title: 'Researchers Stole LLM Reasoning Traces from Proprietary APIs'
description: 'A new paper revealed how researchers extracted encrypted chain-of-thought blocks from major LLM APIs, exposing a vulnerability that allowed them to recover hidden reasoning.'
photo: 'https://picsum.photos/id/914/800/450'
original_url: https://simonwillison.net/2026/Aug/11/stealing-reasoning-traces/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, research, openai]
significance: 3
---

## Summary & Key Takeaways

A paper details how researchers extracted encrypted chain-of-thought blocks from proprietary LLM APIs.
Anthropic, OpenAI, and Google models were found to return these encrypted reasoning traces.
Researchers discovered that models within the same family shared encryption keys.
This allowed them to replay traces into weaker models and jailbreak them.
The jailbreaking process recovered the stronger model's hidden reasoning in plaintext.
The vulnerability has since been acknowledged and fixed by the model providers.
The paper provides extensive details of extracted reasoning traces in its appendix.

## Our Commentary

This is wild. The idea that you could "steal" an LLM's internal reasoning, even if encrypted, is a fascinating peek behind the curtain. It makes me wonder what other hidden mechanisms are at play in these black-box models. The fact that it's fixed is good, but the implications for XAI and understanding how these systems "think" are huge. It's a reminder that even proprietary systems have exploitable surfaces, and transparency, even accidental, can be incredibly insightful.
