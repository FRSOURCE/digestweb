---
layout: article
title: "OpenAI Introduces 'Lockdown Mode' to Combat LLM Data Exfiltration"
description: "OpenAI rolls out 'Lockdown Mode' for ChatGPT, limiting outbound network requests to prevent sensitive data exfiltration from prompt injections."
photo: 'https://picsum.photos/id/777/800/450'
original_url: https://simonwillison.net/2026/Jun/5/openai-help-lockdown-mode/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, openai, security, llm]
significance: 3
---

## Summary & Key Takeaways

- OpenAI has launched "Lockdown Mode" for ChatGPT accounts.
- This mode aims to prevent data exfiltration from prompt injection attacks.
- It works by limiting outbound network requests from the LLM.
- Lockdown Mode does not prevent prompt injections from occurring within the content.
- The feature targets the "Lethal Trifecta" of LLM security vulnerabilities.
- Specifically, it cuts off the data exfiltration vector, making attacks harder.
- The mechanism relies on deterministic controls, not AI evaluation.
- Its existence implies default ChatGPT settings may not fully protect against determined exfiltration.

## Our Commentary

This is a big deal. We've been talking about prompt injection security for ages, and data exfiltration is the scariest part. It's good to see OpenAI taking concrete steps, even if it's not a silver bullet. The fact that it's a deterministic control, not AI-driven, makes me feel a lot better. It's a stark reminder, though, that the default settings might not be as secure as some users assume. I wonder how many businesses will immediately enable this. It feels like a necessary, if belated, addition to the LLM security toolkit.
