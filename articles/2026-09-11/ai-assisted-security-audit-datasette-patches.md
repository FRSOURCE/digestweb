---
layout: article
title: 'AI-Assisted Security Audit for Datasette Patches'
description: 'Datasette releases security patches 1.0a39 and 0.65.4. The audit process notably leveraged frontier AI models like Claude and GPT, highlighting a new approach to finding subtle bugs.'
photo: 'https://picsum.photos/id/743/800/450'
original_url: https://simonwillison.net/2026/Sep/11/datasette-security/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, security, release, tooling]
significance: 1
---

## Summary & Key Takeaways

• Datasette released security patch versions 1.0a39 and 0.65.4.
• These patches address issues for instances running on the public web, especially those mixing public and private tables.
• The audit was conducted by Alex Garcia and Simon Willison using Claude Fable 5.1, GPT-5.6, and GPT-6 Astra.
• Frontier AI models helped discover subtle bugs in the codebase.
• The team plans to integrate AI security audits into future development workflows.
• A productive workflow involved one person creating tests and the other implementing fixes.

## Our Commentary

This is fascinating. We've been talking about AI for code generation, but AI for security auditing? That's a whole new level of trust and capability. I'm genuinely curious about the types of "subtle bugs" these models found. It feels like a glimpse into the future of devops, where AI agents are constantly scrutinizing our code. There's something unsettling about agents churning away at 3am while nobody's watching, but also incredibly powerful.
