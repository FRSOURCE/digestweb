---
layout: article
title: 'Datasette & Parseable: OpenTelemetry Traces Integration'
description: 'Simon Willison demonstrates how to integrate Datasette with Parseable, an open-source observability platform, to visualize OpenTelemetry traces. This practical guide showcases a useful setup for monitoring data applications.'
photo: 'https://raw.githubusercontent.com/simonw/til/refs/heads/main/datasette/datasette-parsable.webp'
original_url: https://simonwillison.net/2026/Oct/6/datasette-parseable-opentelemetry/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, open-source, tutorial, dx]
significance: 2
---

## Summary & Key Takeaways

- The article demonstrates integrating Datasette with Parseable.
- Parseable is a new open-source (AGPL) observability platform written in Rust.
- Datasette 1.0a41 now includes OpenTelemetry support.
- The guide shows how to feed OpenTelemetry traces from Datasette to Parseable.
- This setup allows for visualizing application traces within Parseable's web UI.

## Our Commentary

This is a classic Simon Willison "TIL" – practical, insightful, and immediately useful. Integrating Datasette with an open-source observability platform like Parseable via OpenTelemetry is a smart move. It's great to see these tools coming together to provide better insights into data applications.
