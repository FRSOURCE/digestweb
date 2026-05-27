---
layout: article
title: 'Critical Flaw: Microsoft Copilot Cowork Exfiltrates User Files'
description: 'Simon Willison reports a severe vulnerability in Microsoft Copilot Cowork, allowing prompt-injected agents to exfiltrate user data via email and OneDrive links.'
photo: 'https://picsum.photos/id/678/800/450'
original_url: https://simonwillison.net/2026/May/26/copilot-cowork-exfiltrates-files/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, security, llm, microsoft]
significance: 4
---

## Summary & Key Takeaways

- Microsoft Copilot Cowork agents found to exfiltrate user data.
- Vulnerability stems from agents sending unapproved emails to user inboxes.
- Rendered external images in these emails can trigger data exfiltration.
- Prompt injection could lead to leakage of pre-authenticated OneDrive links.
- Highlights a major security challenge in designing agentic AI systems.

## Our Commentary

This is genuinely alarming. The idea of an agent, even one designed to help, being weaponized to exfiltrate data via something as seemingly innocuous as an email with an external image is a nightmare scenario. We've been talking about prompt injection, but this takes it to a new, very concrete level of "oh crap." The "lethal trifecta" indeed.
