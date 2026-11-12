---
layout: article
title: 'llm 0.37.2 Fixes API Key Security Vulnerability'
description: 'Version 0.37.2 of the `llm` tool addresses a security issue where OpenAI API keys could inadvertently be sent to third-party OpenAI-compatible API endpoints. Users are advised to update.'
photo: 'https://picsum.photos/id/916/800/450'
original_url: https://simonwillison.net/2026/Nov/11/llm/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, tooling, security, release]
significance: 1
---

## Summary & Key Takeaways

- `llm` version 0.37.2 has been released to fix a security vulnerability.
- The issue involved potential leakage of OpenAI API keys to other providers.
- This could occur when using `extra-openai-models.yaml` or specific model configurations.
- The fix prevents API keys from being sent to unintended OpenAI-compatible endpoints.
- Users of the `llm` tool are encouraged to update to this version.

## Our Commentary

Security fixes are always important, especially when API keys are involved. It's a good reminder that even well-intentioned features, like using OpenAI-compatible endpoints, can have unintended side effects if not carefully implemented. I appreciate the transparency in reporting this.
