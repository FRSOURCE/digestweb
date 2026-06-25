---
layout: article
title: 'Simon Willison Converts MDN Browser Compat Data to SQLite DB'
description: 'Simon Willison created `simonw/browser-compat-db`, a project that converts comprehensive MDN browser compatibility data into a SQLite database, leveraging AI for scripting and GitHub Actions for CDN-hosted, CORS-enabled access.'
photo: 'https://picsum.photos/id/255/800/450'
original_url: https://simonwillison.net/2026/Jun/24/browser-compat-db/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, browser, web-platform, ai]
significance: 2
---

## Summary & Key Takeaways

- Simon Willison created `simonw/browser-compat-db` to convert MDN data.
- The project transforms browser compatibility data into a SQLite database.
- AI (Claude Code for web, Codex Desktop) assisted in script generation and workflow.
- A GitHub Actions workflow builds and publishes the database to a `db` orphan branch.
- The resulting ~66MB SQLite database is available via GitHub CDN with open CORS.
- It can be explored directly with Datasette Lite.

## Our Commentary

Simon Willison is a wizard. This is such a clever way to make browser compatibility data more accessible and queryable. The use of AI for scripting and GitHub Actions for hosting is a fantastic example of practical, modern tooling. I love seeing these kinds of open-source utility projects.
