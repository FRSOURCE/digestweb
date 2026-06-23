---
layout: article
title: 'OPFS + Pyodide Test Harness: Persistent SQLite in the Browser'
description: 'Simon Willison demonstrates a test harness for using the Origin Private File System (OPFS) with Pyodide to enable persistent SQLite file editing directly in the browser.'
photo: 'https://picsum.photos/id/198/800/450'
original_url: https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [web-platform, browser, wasm, python]
significance: 3
---

## Summary & Key Takeaways

- The article introduces a test harness for exploring OPFS with Pyodide.
- The goal is to enable Datasette Lite to edit persistent SQLite files in the browser.
- OPFS provides a mechanism for web applications to store private files on the user's system.
- The project leverages Pyodide to run Python applications, including SQLite, within the browser via WebAssembly.
- Claude Code for web assisted in building the playground UI for cross-browser testing.

## Our Commentary

Simon Willison is always at the forefront of exploring what's possible on the web, and this OPFS + Pyodide harness is a prime example. Persistent SQLite in the browser? That's a huge step for local-first applications and data management. It really pushes the boundaries of what we expect from web apps. I'm genuinely excited about the implications for tools like Datasette Lite. This is the kind of innovation that makes me love the web platform.
