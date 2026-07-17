---
layout: article
title: 'Mermaid to ASCII Art: Comparing WASM-Compiled Tools'
description: 'Simon Willison explores two tools for converting Mermaid diagrams to ASCII art, including a Go library compiled to WebAssembly with AI assistance. This highlights practical applications of WASM and AI in tooling.'
photo: 'https://picsum.photos/id/460/800/450'
original_url: https://simonwillison.net/2026/Jul/16/mermaid-ascii/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, wasm, ai]
significance: 1
---

## Summary & Key Takeaways

• Simon Willison previously built a Mermaid to ASCII tool based on Rust code.
• He discovered AlexanderGrooff/mermaid-ascii, a more fully-featured Go library.
• Claude Fable 5 was used to compile the Go library to WebAssembly.
• This allowed for a direct comparison of the two Mermaid to ASCII tools.
• The Go-based tool compiled to WASM includes support for colors.

## Our Commentary

I appreciate seeing these smaller, practical applications of WebAssembly and AI. It's not always about the headline-grabbing, browser-in-browser stuff. Sometimes it's just about making a useful little tool. The fact that Claude Fable 5 was used to compile the Go library to WASM is a neat detail; it shows how AI is becoming a quiet assistant in everyday dev tasks. We're seeing more and more of this.
