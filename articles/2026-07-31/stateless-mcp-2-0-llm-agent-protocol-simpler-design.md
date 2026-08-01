---
layout: article
title: 'Stateless MCP 2.0 Revitalizes LLM Agent Protocol with Simpler Design'
description: 'The Model Context Protocol (MCP) 2.0 introduces a stateless specification, simplifying agent tool implementation, enhancing security, and reigniting interest in standardized LLM agent interactions.'
photo: 'https://raw.githubusercontent.com/simonw/til/refs/heads/main/llms/claude-add-custom-connector-dialog.webp'
original_url: https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [llm, ai, research, open-source]
significance: 3
---

## Summary & Key Takeaways

• MCP 2.0, or the 2026-07-28 Model Context Protocol, has been rolled out.
• The new specification introduces a stateless design, simplifying client and server implementations.
• Stateless MCP reduces complexity compared to the older stateful version.
• It makes MCP tools easier to audit and control, improving security.
• Smaller models can now drive MCP tools more effectively.
• Simon Willison developed mcp-explorer and datasette-mcp based on the new spec.
• The protocol provides a standard way to expose tools to LLM agent frameworks.

## Our Commentary

I'm genuinely excited about this shift to stateless MCP. Giving agents a full shell environment is a security nightmare, and this move makes tool integration much safer and more manageable. It feels like a step towards more robust and auditable agent systems, which is exactly what we need as these technologies mature. Simon's immediate dive into building tools around it really shows its potential.
