---
layout: article
title: 'Cloudflare Python Workers Now Generally Available, Powered by WebAssembly'
description: 'Cloudflare has announced the General Availability of Python support for its Workers platform, enabling developers to run Python code at the edge. This stable release leverages Pyodide and WebAssembly for high-performance execution.'
photo: 'https://picsum.photos/id/355/800/450'
original_url: https://simonwillison.net/2026/Sep/21/cloudflare-python-worker/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [nodejs, wasm, dx, release]
significance: 3
---

## Summary & Key Takeaways

- Cloudflare Python Workers are now generally available after a two-year preview.
- Python is now a fully supported language on the Cloudflare Developer Platform.
- The implementation uses Python compiled to WebAssembly via Pyodide.
- Code runs within Cloudflare's V8-based `workerd` runtime.
- Limitations include non-functional multiprocessing and threading in the WebAssembly VM.
- A local development tool, `pywrangler`, simulates the full stack.
- This release represents a significant investment in the Python ecosystem by Cloudflare.
- It expands the options for developers building serverless and edge applications.

## Our Commentary

Python on Cloudflare Workers, finally GA! This is a big deal for Pythonistas who want to dabble in edge computing without learning JavaScript. The WebAssembly/Pyodide approach is super clever, even with the threading limitations. I'm always impressed by how Cloudflare pushes the boundaries of what's possible at the edge. It makes me wonder if we'll see more languages become first-class citizens on these platforms, further blurring the lines between traditional backend and frontend development.
