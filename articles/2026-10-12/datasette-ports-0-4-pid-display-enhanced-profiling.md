---
layout: article
title: 'Datasette-Ports 0.4: PID Display for Enhanced Profiling'
description: 'Datasette-ports, a plugin for detecting Datasette instances, updates to version 0.4. It now supports the latest Datasette and displays process IDs, aiding in profiling with the new Python 3.15 profiler.'
photo: 'https://picsum.photos/id/886/800/450'
original_url: https://simonwillison.net/2026/Oct/12/datasette-ports/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, dx, release]
significance: 1
---

## Summary & Key Takeaways

- Datasette-ports plugin has been updated to version 0.4.
- The plugin detects and lists Datasette instances running on a machine.
- It now ensures compatibility with the latest version of Datasette.
- A new feature displays the Process ID (PID) for each detected instance.
- The PID display is useful for attaching the new Python 3.15 profiler.

## Our Commentary

It's always good to see tools evolve to integrate with new language features. The PID display in `datasette-ports` is a small but smart addition, directly leveraging the new Python 3.15 profiler. It's these little quality-of-life improvements that make a developer's day smoother, especially when debugging.
