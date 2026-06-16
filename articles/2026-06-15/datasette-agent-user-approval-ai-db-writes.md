---
layout: article
title: 'Datasette-Agent 0.3a0: User Approval for AI Database Writes'
description: 'Datasette-agent 0.3a0 introduces a new `execute_write_sql` tool requiring user approval for database modifications, alongside enhanced chat terminal features.'
photo: 'https://picsum.photos/id/290/800/450'
original_url: https://simonwillison.net/2026/Jun/15/datasette-agent/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, tooling, open-source]
significance: 2
---

## Summary & Key Takeaways

- `datasette-agent 0.3a0` has been released with new features.
- A new `execute_write_sql` tool allows AI agents to write to databases.
- This tool requires explicit user approval for all write operations.
- The chat terminal mode now supports these approval requests.
- New options include `--unsafe` for auto-approving actions and `--root` for elevated permissions.
- Tools can now provide plain text alternatives for CLI display.

## Our Commentary

This is a smart move. Giving AI agents direct write access to databases always felt a bit... dicey. The user approval mechanism is a crucial guardrail. I'm also intrigued by the `--unsafe` mode; it's a clear acknowledgment of the tension between convenience and control. We're still figuring out how much autonomy to give these things.
