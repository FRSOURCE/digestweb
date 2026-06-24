---
layout: article
title: 'Moebius Image Inpainting AI Runs in Browser with WebGPU'
description: 'Simon Willison successfully ported the Moebius 0.2B image inpainting model to run directly in the browser using WebGPU, showcasing a powerful client-side AI application.'
photo: 'https://static.simonwillison.net/static/2026/inpainter.jpg'
original_url: https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, web-platform, browser, wasm]
significance: 3
---

## Summary & Key Takeaways

- The Moebius 0.2B image inpainting model has been successfully ported to run in the browser.
- The port leverages WebGPU for efficient execution of the AI model client-side.
- The original model required PyTorch and NVIDIA CUDA, highlighting the achievement of web compatibility.
- Simon Willison used Claude Code for web as an AI assistant during the porting process.
- A live demo is available, allowing users to try the inpainting tool directly in their browser.

## Our Commentary

This is seriously impressive. Porting a PyTorch/CUDA model to WebGPU in the browser is no small feat, and doing it with the help of an AI coding assistant? That's a glimpse into the future of development. The demo is slick, and the performance is surprisingly good for a client-side AI. It makes me wonder how many other "desktop-only" AI tools could be brought to the web. This is a huge win for accessibility and privacy in AI.
