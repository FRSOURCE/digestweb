---
layout: article
title: 'Datasette Apps: Host Custom HTML Applications in a Secure Sandbox'
description: 'Datasette introduces a new plugin, `datasette-apps`, allowing developers to embed sandboxed HTML+JavaScript applications directly within Datasette instances. These apps can interact with Datasette data via SQL queries, offering a powerful way to extend its UI.'
photo: 'https://static.simonwillison.net/static/2026/datasette-apps-card.jpg'
original_url: https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx, web-platform, open-source]
significance: 3
---

## Summary & Key Takeaways

- Datasette Apps is a new plugin for the Datasette ecosystem.
- It enables hosting self-contained HTML+JavaScript applications within Datasette.
- Apps run in a tightly constrained `<iframe>` sandbox for security.
- They can execute read-only SQL queries against Datasette data.
- Write queries are possible with additional configuration using stored queries.
- Security features include `sandbox` attributes and injected CSP headers.
- This prevents access to cookies/localStorage and external HTTP requests.
- The concept evolved from an attempt to build Claude Artifacts for Datasette Agent.

## Our Commentary

This is a genuinely clever move. We've seen the power of embedding custom UIs, but doing it with such a strong security model is impressive. I'm particularly intrigued by the origin story – starting as a way to integrate AI agent artifacts and then realizing its broader potential. It feels like a natural evolution for Datasette, turning it into an even more versatile platform.
