---
layout: article
title: 'SolidJS 2.0 RC.9: Dynamic Elements Honor `xmlns` for SVG'
description: 'SolidJS 2.0 Release Candidate 9 ensures `dynamic()` and `Dynamic` components correctly honor the `xmlns` prop when creating elements that exist in both HTML and SVG.'
photo: 'https://opengraph.githubassets.com/2f5c96091fa868b7122ec1f9a29d946cc10bf54a16687539878759912be47d7a/solidjs/solid/releases/tag/%40solidjs/h%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fh%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, frameworks, html]
significance: 1
---

## Summary & Key Takeaways

- `dynamic()` and `Dynamic` components now respect the `xmlns` prop for elements like `<a>`, `<script>`, `<style>`, and `<title>`.
- This resolves an issue where such tags were always created as HTML elements within an SVG tree.
- The `xmlns` attribute is read once, untracked, at element creation, then applied as an ordinary attribute.
- Hydration is unaffected, claiming the parser-namespaced node.
- Types for `xmlns` are now accepted on these four specific tags.

## Our Commentary

This is a pretty specific fix, but if you've ever wrestled with dynamic SVG elements in SolidJS, you know how frustrating namespace issues can be. It's good to see these edge cases getting ironed out in the RC phase. It makes the framework more robust for complex rendering scenarios.
