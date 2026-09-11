---
layout: article
title: '`wrapture`: A New Python Library for Monkey Patching & Observability'
description: "Discover `wrapture`, Graham Dumpleton's new Python library that combines monkey patching with advanced testing and observability features, including zero-code tracing."
photo: 'https://picsum.photos/id/828/800/450'
original_url: https://simonwillison.net/2026/Sep/11/wrapture/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [python, tooling, testing, dx]
significance: 3
---

## Summary & Key Takeaways

- `wrapture` is a new Python library for monkey patching, testing, and observability.
- It can be used for unit testing, similar to `unittest.mock`.
- The library supports recording method calls as timelines and displaying them as trees.
- It enables phased behavior changes for patched methods across multiple calls.
- `wrapture` allows live tracing of applications and zero-code tracing via TOML configuration.
- It provides instrumentation for numerous popular Python frameworks and libraries.
- Tools for recording and aggregating timing information are included.
- Traces can be exported to OpenTelemetry.

## Our Commentary

This `wrapture` library sounds like a Swiss Army Knife for Python developers. Monkey patching, testing, _and_ observability? That's a powerful combination. The idea of zero-code tracing via TOML is particularly appealing; it lowers the barrier to entry for getting deep insights into an application's behavior. I'm genuinely surprised there hasn't been more buzz around this. I'm definitely going to be checking this out.
