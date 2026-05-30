---
layout: article
title: 'Run Python ASGI Apps in Browser with Pyodide & Service Workers'
description: 'Simon Willison showcases a breakthrough method to execute Python ASGI applications, like Datasette, entirely within the browser. By combining Pyodide (WebAssembly) with Service Workers, this approach enables full JavaScript execution within generated HTML, solving a long-standing challenge.'
photo: 'https://picsum.photos/id/680/800/450'
original_url: https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [python, wasm, browser, web-platform]
significance: 3
---

## Summary & Key Takeaways

A new method allows Python ASGI applications to run directly in the browser using Pyodide and Service Workers.
This approach addresses the limitation of previous methods where JavaScript in <script> tags would not execute.
The author used Claude Opus 4.8 in Claude Code to help develop this solution.
Demos are provided for a basic ASGI FastCGI app and a full Datasette instance running in the browser.
The technique leverages WebAssembly for Python execution and Service Workers for request interception and response handling.
This opens up possibilities for complex Python web applications to function entirely client-side.
The author plans to integrate this into Datasette Lite.

## Our Commentary

This is genuinely mind-bending. Running full-blown Python web apps in the browser, complete with script execution, feels like a significant leap. I remember the early days of Pyodide and thinking about the potential, but this takes it to another level. The fact that Claude helped figure this out is a wild detail; it makes me wonder how many other complex web dev problems could be accelerated by AI. We're seeing the lines blur between client and server in fascinating ways, and this pushes that boundary even further.
