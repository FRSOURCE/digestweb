---
layout: article
title: 'Muru: AI-Assisted Rust Server for Python Web Apps'
description: 'Graham Dumpleton, creator of mod_wsgi, unveils Muru, a new Rust-based server for Python ASGI/WSGI applications. It leverages AI assistance and offers advanced features for both development and production environments.'
photo: 'https://picsum.photos/id/636/800/450'
original_url: https://simonwillison.net/2026/Nov/21/muru/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, tooling, release, open-source]
significance: 3
---

## Summary & Key Takeaways

Muru is a new AI-assisted Rust server designed for Python ASGI and WSGI web applications.
It is developed by Graham Dumpleton, known for creating mod_wsgi two decades ago.
The project aims to provide optimal tools for running Python apps in both development and production.
Dumpleton is publishing an extraordinarily detailed development log as he builds Muru.
Key features include import-once/fork-many, HTTPS in development, and canary deployments without a service mesh.
Muru is designed for efficient scaling, seamless Kubernetes integration, and better container tenancy.
The server emphasizes releases over restarts and dynamic scaling based on worker reports.
An accompanying post discusses AI as a 'lifestyle choice' integrated into the development process.

## Our Commentary

Graham Dumpleton, the mod_wsgi legend, is back with Muru. A Rust server for Python apps, AI-assisted. Honestly, the sheer volume of his devlog posts is staggering. Who has that much energy to document _everything_? It's a wild ride to follow. I'm genuinely fascinated by his 'AI as a lifestyle choice' piece. It's not just a gimmick; he's really leaning into it, but still stressing the human element for quality. We often see AI as a black box, but this shows a developer's journey with it. It feels... raw. And I like that. This isn't just a new tool; it's a peek into a new way of working.
