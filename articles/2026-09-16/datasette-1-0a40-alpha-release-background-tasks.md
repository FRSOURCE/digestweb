---
layout: article
title: 'Datasette 1.0a40 Alpha Release Introduces Background Tasks'
description: "Datasette's latest alpha release, 1.0a40, brings new capabilities for plugins to manage background tasks and migrates to httpx2. This release also includes numerous bug fixes as it approaches a stable 1.0."
photo: 'https://picsum.photos/id/995/800/450'
original_url: https://simonwillison.net/2026/Sep/16/datasette/
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [open-source, release, tooling]
significance: 2
---

## Summary & Key Takeaways

Datasette 1.0a40 alpha release is now available with new features and bug fixes.
Plugins can now launch and manage background tasks using `datasette.add_background_task()`.
The internal client has been migrated to `httpx2` for enhanced features.
This release includes a security fix, also present in version 0.65.5.
Many bug fixes are included as part of the push towards a stable 1.0 release.

## Our Commentary

Simon Willison keeps pushing Datasette forward. The addition of background tasks for plugins is a solid step, opening up new possibilities for data processing directly within the tool. We're watching the 1.0 stable release with interest; it feels like a significant milestone for the project. It's always good to see a project mature like this.
