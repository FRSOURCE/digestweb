---
layout: article
title: 'External Sandboxes for Safer AI Coding Agents'
description: 'Simon Willison explores a new pattern for safely sandboxing code executed by AI agents, introducing implementations using WebAssembly, containers, and QEMU.'
photo: 'https://static.simonwillison.net/static/2026/sandbox-proxy.png'
original_url: https://simonwillison.net/2026/Nov/17/external-sandboxes-for-coding-agents/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, security, wasm, research]
significance: 3
---

## Summary & Key Takeaways

- The article introduces an 'external sandbox' pattern for safely executing code from AI agents.
- This pattern runs agent code in a dedicated sandbox, separate from the agent itself.
- Three sandbox server implementations are released: `external-sandbox-v86` (Node.js/WebAssembly), `external-sandbox-container` (Python/Apple Containers), and `external-sandbox-quicksand` (Python/Microsoft Quicksand).
- All implementations offer a consistent localhost API for configuring agents like Pi, Claude Code, or Codex.
- An optional HTTP/HTTPS allow-list proxy controls agent code communication.
- A credential replacement mechanism allows authenticated API calls without exposing secrets to the agent.
- The approach aims to mitigate risks from mistakes or prompt injection attacks when using local AI models.

## Our Commentary

This is a critical piece of work. The security implications of AI agents executing code are massive, and 'external sandboxes' feel like a genuinely robust solution. I've been worried about prompt injection attacks, and this directly addresses that. The use of WebAssembly and containers for isolation is smart. It's a practical, open-source approach to a problem that's only going to get bigger. Simon Willison always delivers these deep, actionable insights.
