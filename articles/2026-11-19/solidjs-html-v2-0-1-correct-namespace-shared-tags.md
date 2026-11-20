---
layout: article
title: 'SolidJS HTML v2.0.1: Correct Namespace for Shared Tags'
description: "SolidJS HTML v2.0.1 fixes an issue where shared HTML/SVG tags now correctly inherit their static parent's namespace, ensuring proper rendering within SVG and foreignObject."
photo: 'https://opengraph.githubassets.com/b7657911455749e12730722cdbf9534aa8cbb173c684ee4dc2172738f7e12311/solidjs/solid/releases/tag/%40solidjs/html%402.0.1'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fhtml%402.0.1
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, html, framework]
significance: 1
---

## Summary & Key Takeaways

- Shared HTML and SVG tags (like `title`, `a`, `style`, `script`) now correctly inherit their static parent's namespace.
- This ensures these tags are treated as SVG elements when inside an `<svg>` block.
- They revert to HTML elements when nested within a `<foreignObject>`.

## Our Commentary

Namespace handling can be a real headache, so this fix in SolidJS HTML is a welcome refinement. It's one of those details that, when wrong, can lead to subtle and frustrating rendering bugs. Good to see the attention to detail here.
