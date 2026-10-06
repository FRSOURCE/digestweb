---
layout: article
title: "Anthropic's Cowork Shifts to Cloud-Based VM for Improved UX"
description: "Anthropic's Cowork AI agent product is moving its model inference and VM execution entirely to the cloud. This architectural change aims to resolve user experience issues related to local resource consumption and session persistence."
photo: 'https://picsum.photos/id/984/800/450'
original_url: https://simonwillison.net/2026/Oct/5/felix-rieseberg/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, anthropic, dx]
significance: 2
---

## Summary & Key Takeaways

- Anthropic's Cowork product has updated its architecture.
- Model inference and the execution VM now run entirely in the cloud.
- The previous version ran the VM locally, causing performance and battery drain.
- This shift addresses issues like work stopping when a laptop closes.
- The desktop app now handles local file access via tool calls.
- The change aims to improve user experience and enable mobile use.

## Our Commentary

This is a fascinating architectural pivot for an AI agent. Running a VM locally for tool calls always felt like a heavy lift for users, so moving it to the cloud makes a lot of sense for performance and battery life. I'm curious about the security implications of cloud-based VMs for sensitive local data, even with the desktop app mediating access.
