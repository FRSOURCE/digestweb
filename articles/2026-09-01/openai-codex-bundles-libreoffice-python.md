---
layout: article
title: 'OpenAI Codex Desktop App Bundles LibreOffice, Python'
description: 'Simon Willison discovers that the OpenAI Codex desktop app (now ChatGPT) bundles full installations of LibreOffice, Python, and Node.js, revealing its operational complexity.'
photo: 'https://picsum.photos/id/462/800/450'
original_url: https://simonwillison.net/2026/Sep/1/codex-libreoffice/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, openai, tooling, open-source]
significance: 2
---

## Summary & Key Takeaways

- The OpenAI Codex desktop app (now ChatGPT) includes full installations of Python, Node.js, and LibreOffice.
- These components are found within the app's cache directory.
- The app uses 'skills' to leverage these native binaries for various tasks.
- This highlights the complex, multi-component nature of modern AI desktop applications.

## Our Commentary

This is a fascinating peek behind the curtain of how these 'AI-native' desktop apps actually work. Bundling entire runtimes and even an office suite just to get things done is... something. It really underscores the 'glue code' nature of many AI applications, where the LLM is just one piece of a much larger, often surprisingly conventional, software stack. It's a messy reality, and I appreciate Simon for digging it up.
