---
layout: article
title: 'Run Any Nix Package Live in Your Browser with WebAssembly VM'
description: 'trynix.dev introduces a qemu-wasm powered x86_64 Linux VM, enabling users to boot any Nix package from the last 13 years directly in their browser. This innovation also allows for in-browser GitHub PR build previews.'
photo: 'https://picsum.photos/id/519/800/450'
original_url: https://simonwillison.net/2026/Sep/10/trynix/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [wasm, dx, tooling, browser]
significance: 3
---

## Summary & Key Takeaways

• trynix.dev allows running any Nix package from the past 13 years directly in the browser.
• It achieves this using a qemu-wasm powered x86_64 Linux virtual machine.
• The entire VM operates within the browser via WebAssembly.
• Packages are URL addressable, enabling direct links to specific versions like Python 3.6.2.
• A related tool, trynix-preview, offers GitHub Action integration.
• trynix-preview comments a link on pull requests to boot the PR's build in the browser.
• This system operates with "No servers, just browsers."

## Our Commentary

This is genuinely mind-blowing. A full x86_64 Linux VM, running Nix packages, entirely in the browser? And then using that for PR previews? The implications for developer experience and reproducible environments are massive. We've seen WASM push boundaries, but this feels like a new frontier. I'm picturing a future where entire dev environments are ephemeral, spun up instantly in a tab. The "no servers, just browsers" mantra is a powerful one.
