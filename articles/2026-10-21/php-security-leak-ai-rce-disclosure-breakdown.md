---
layout: article
title: 'PHP Security Leak: AI-Discovered RCEs & Disclosure Breakdown'
description: 'Simon Willison details a critical PHP security release, the leak of RCE vulnerabilities discovered by AI, and the breakdown in the coordinated disclosure process.'
photo: 'https://picsum.photos/id/825/800/450'
original_url: https://simonwillison.net/2026/Oct/21/php-security-release/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [security, ai, open-source, research]
significance: 3
---

## Summary & Key Takeaways

- A critical PHP security release addresses two remote code execution (RCE) vulnerabilities.
- The vulnerabilities were discovered by Wiz Research using AI tools like Gemini 4 Argon and GPT-5.6 Sol.
- Details of the CVEs and exploits leaked prematurely, disrupting the coordinated disclosure process.
- The article provides a timeline of the discovery and the disclosure breakdown.
- It highlights the challenges of managing security releases, especially with AI-assisted vulnerability discovery.

## Our Commentary

This is a wild story. AI discovering RCEs in PHP is one thing, but the entire coordinated disclosure process falling apart is a huge lesson for the security community. It makes me wonder about the future of vulnerability disclosure when AI can accelerate both discovery and exploitation. There's something unsettling about agents churning away at 3am while nobody's watching, finding these critical flaws.
