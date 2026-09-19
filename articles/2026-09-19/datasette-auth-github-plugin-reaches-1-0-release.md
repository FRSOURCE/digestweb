---
layout: article
title: 'Datasette-Auth-GitHub Plugin Reaches 1.0 Release'
description: 'Simon Willison announces the 1.0 release of datasette-auth-github, a plugin for Datasette, featuring a fix for cookie expiration issues.'
photo: 'https://picsum.photos/id/95/800/450'
original_url: https://simonwillison.net/2026/Sep/19/datasette-auth-github/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [open-source, tooling]
significance: 1
---

## Summary & Key Takeaways

- The `datasette-auth-github` plugin has been promoted to version 1.0.
- The release addresses an issue where authenticated sessions were expiring too quickly.
- The fix ensures cookies now include a `Max-Age` parameter for persistent sessions.
- This plugin enables GitHub login functionality for Datasette instances.

## Our Commentary

Simon Willison is so good at just shipping things. A 1.0 release for a plugin might seem small, but it's a marker of stability and commitment. We appreciate the attention to detail, especially with something as finicky as cookie expiration. It's the little things that make a tool truly usable.
