---
layout: article
title: "Critical Flaw: Claude's `web_fetch` Leaks User Data via Nested Links"
description: "A security researcher uncovered a critical vulnerability in Claude's `web_fetch` tool, allowing data exfiltration through a clever sequence of nested generated links, bypassing Anthropic's intended protections."
photo: 'https://picsum.photos/id/877/800/450'
original_url: https://simonwillison.net/2026/Jul/15/claude-web-fetch-exfiltration/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, security, anthropic]
significance: 4
---

## Summary & Key Takeaways

- A vulnerability was found in Claude's `web_fetch` tool.
- The flaw allowed data exfiltration despite Anthropic's security measures.
- Attackers could create honeypot sites with nested generated links.
- Claude's agent was tricked into following these links to exfiltrate user data.
- The attack successfully extracted user names, locations, and employers.
- Anthropic claimed prior internal discovery, not issuing a bug bounty.

## Our Commentary

This is a chilling reminder of how fragile LLM security can be. Anthropic's `web_fetch` design was clever, but the "nested generated links" loophole is a brilliant, terrifying exploit. It makes me genuinely wonder how many other subtle vectors exist for data exfiltration. We're building these incredibly powerful, yet incredibly naive, agents. The fact that Anthropic didn't pay a bounty because they "already knew" feels a bit... convenient.
