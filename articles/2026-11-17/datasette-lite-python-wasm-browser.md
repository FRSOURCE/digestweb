---
layout: article
title: 'Datasette Lite: Full Python App Runs in Browser with WebAssembly'
description: 'Datasette Lite, a complete rewrite using service workers and Pyodide, now runs the full server-side Python application directly in the browser, leveraging WebAssembly.'
photo: 'https://static.simonwillison.net/static/2026/datasette-lite-diag.webp'
original_url: https://simonwillison.net/2026/Nov/17/datasette-lite/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [wasm, web-platform, python, showcases]
significance: 3
---

## Summary & Key Takeaways

- Datasette Lite has been rewritten to run the full server-side Python application in the browser.
- It utilizes WebAssembly, Pyodide, and service workers for this functionality.
- The browser-based version is now almost indistinguishable from the server-side application.
- Users can browse SQLite databases, JSON, CSV, or SQL scripts directly in the client.
- It supports loading specific Datasette versions, commits, or branches from GitHub.
- Users can select from over 100 SQLite versions and install additional Datasette plugins.
- The tool is ideal for linking to demos, work-in-progress features, or bug reproductions without a server.

## Our Commentary

This is genuinely mind-blowing. Running a full server-side Python application like Datasette entirely in the browser with WebAssembly and service workers is a monumental achievement. It really pushes the boundaries of what the web platform can do. The ability to load specific versions and plugins via URL parameters makes it an incredible tool for demos and bug reproduction. I'm constantly amazed by the innovation happening in the Wasm space; it feels like we're just scratching the surface.
