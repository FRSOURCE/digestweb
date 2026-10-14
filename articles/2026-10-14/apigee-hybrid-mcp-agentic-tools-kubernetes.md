---
layout: article
title: 'Apigee Hybrid 1.17.0 Adds MCP Support for In-Cluster Agentic Tools'
description: 'Apigee hybrid 1.17.0 introduces native Model Context Protocol (MCP) support, enabling AI agent tools to run securely within your own Kubernetes cluster.'
photo: 'https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/Gemini_Generated_Image_bib6g3bib6.2e16d0ba.fill-1200x600.jpg'
original_url: https://developers.googleblog.com/announcing-mcp-support-in-apigee-hybrid-agentic-tools-that-run-in-your-own-cluster/
source_name: 'Google Developers Blog – AI'
source_author: ''
tags: [ai, tooling, open-source]
significance: 2
---

## Summary & Key Takeaways

- Apigee hybrid 1.17.0 now supports the Model Context Protocol (MCP).
- MCP allows AI agent tools to execute directly within a user's Kubernetes cluster.
- This architecture keeps AI agent request traffic and tool execution local.
- Configuration updates are pulled from the control plane, maintaining security.
- Developers can expose OpenAPI 3.0.x specs as discoverable MCP tools.
- Existing security policies and API products can be leveraged.
- End-to-end requests are traceable using W3C trace context headers.

## Our Commentary

This is a significant move for enterprise AI. Running agentic tools _inside_ your own Kubernetes cluster addresses major data privacy and security concerns. It's a practical step towards making AI agents viable for regulated industries. The OpenAPI integration is a smart touch for discoverability.
