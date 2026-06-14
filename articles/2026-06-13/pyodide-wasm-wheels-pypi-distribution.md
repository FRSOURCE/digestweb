---
layout: article
title: 'Pyodide Now Supports WASM Wheels on PyPI, Streamlining Package Distribution'
description: 'A long-awaited update allows Python packages compiled to WebAssembly for Pyodide to be published directly to PyPI. This significantly streamlines the distribution and installation of WASM-enabled Python libraries.'
photo: 'https://static.simonwillison.net/static/2026/luau-wasm.jpg'
original_url: https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [wasm, python, release, tooling]
significance: 4
---

## Summary & Key Takeaways

- Pyodide now supports publishing WebAssembly (WASM) wheels directly to PyPI.
- This eliminates a previous bottleneck where Pyodide maintainers manually hosted over 300 packages.
- Package maintainers can now build and publish Pyodide wheels just like native wheels.
- The change is based on PEP 783 and involved a pull request to PyPI itself.
- Simon Willison demonstrates this by packaging a Luau WebAssembly project.
- The `luau-wasm` package is now available on PyPI, installable via `micropip`.

## Our Commentary

This is a massive quality-of-life improvement for anyone working with Pyodide. We've heard the frustrations about package distribution for ages, and seeing this bottleneck finally cleared is genuinely exciting. It's a huge win for developer experience. Also, the mention of GPT-5.5 xhigh is a subtle nod to the future of dev workflows; I wonder how many of us will be using models like that for packaging tasks soon.
