---
layout: article
title: 'Datasette Apps 0.2a0: AI Agents Can Now Debug Web Apps'
description: 'Datasette Apps 0.2a0 introduces a novel `app_debug()` tool, enabling AI agents to invisibly test web applications by executing JavaScript within sandboxed iframes.'
photo: 'https://picsum.photos/id/946/800/450'
original_url: https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, tooling, dx, javascript]
significance: 2
---

## Summary & Key Takeaways

- Datasette Apps 0.2a0 is released, improving interaction with Datasette Agent.
- A new `app_debug()` tool allows agents to open and test apps invisibly using JavaScript.
- The tool utilizes an `opacity: 0` iframe with `pointer-events: none` for sandboxed execution.
- Agents can now perform smoke tests and measure element dimensions within the app.
- An `app_list()` tool is also added for agents to list editable applications.

## Our Commentary

This `app_debug()` tool is genuinely clever. The idea of an AI agent invisibly interacting with a web app via a sandboxed iframe and JavaScript is a fascinating approach to automated testing and agent-driven development. It feels like a glimpse into a future where agents are far more integrated into our dev workflows. We're seeing some really creative uses of browser capabilities here.
