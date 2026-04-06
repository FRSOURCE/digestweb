---
layout: article
title: "Localize Units and Currencies with JavaScript's Intl.NumberFormat"
description: 'Discover how the `Intl.NumberFormat` API in JavaScript can effortlessly format numbers with various currencies and units, handling locale-specific conventions.'
photo: 'https://picsum.photos/id/70/800/450'
original_url: https://www.stefanjudis.com/today-i-learned/intl-can-localize-units-too/
source_name: 'Stefan Judis'
source_author: 'Stefan Judis'
tags: [javascript, web-platform, tutorial, dx]
significance: 2
---

## Summary & Key Takeaways

- The `Intl.NumberFormat` API in JavaScript can format numbers with currencies and units.
- It automatically handles locale-specific formatting, such as currency symbol placement and decimal separators.
- Examples demonstrate formatting currencies like EUR and JPY, and units like "kilometer-per-hour" and "kilobyte" in different locales.
- The API supports various `unitDisplay` options, including `long` for full unit names.
- Developers are advised to use this built-in language feature instead of implementing custom currency/unit logic.

## Our Commentary

This is a fantastic "Today I Learned" moment for many, including us! The `Intl` object is a powerhouse, and it's easy to overlook its full capabilities. We've all probably written some clunky custom logic for currency or unit formatting at some point, only to realize the browser could do it better and more correctly.

The examples showing how Japanese Yen symbols move or how French translates "kilobyte" are great illustrations of why relying on `Intl` is crucial for true internationalization. It's a small detail that makes a huge difference in user experience and correctness. A solid reminder to always check the platform APIs before rolling your own.
