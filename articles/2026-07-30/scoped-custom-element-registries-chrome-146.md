---
layout: article
title: 'Scoped Custom Element Registries Land in Chrome 146'
description: 'Chrome 146 now supports Scoped Custom Element Registries, enabling developers to use the same tag names for different custom element versions without global namespace conflicts, greatly improving component modularity.'
photo: 'https://master.dev/blog/wp-json/social-image-generator/v1/image/10479'
original_url: https://master.dev/blog/same-name-different-component-with-scoped-custom-element-registries/
source_name: 'Frontend Masters Blog'
source_author: ''
tags: [web-platform, browser, html, dx]
significance: 3
---

## Summary & Key Takeaways

- Chrome 146 has introduced support for Scoped Custom Element Registries.
- This feature allows multiple versions of custom elements to share the same tag name.
- It eliminates conflicts within the global custom element namespace.
- The registry significantly improves component reuse and modularity.
- This is a major enhancement for web component development and micro-frontends.

## Our Commentary

This is a _huge_ win for web components and modular frontends. The global namespace collision problem has been a real headache, especially in micro-frontend architectures. Scoped registries finally provide a clean solution. We've been waiting for this for a long time, and it's going to unlock a lot of potential.
