---
layout: article
title: 'Demystifying the HTML <dl> Element'
description: 'Simon Willison explores the often-misunderstood <dl> (description list) element, advocating for its proper use beyond simple key-value pairs and highlighting its versatility for structured content.'
photo: 'https://picsum.photos/id/616/800/450'
original_url: https://simonwillison.net/2026/May/23/on-the-dl/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [html, web-platform, tutorial, dx]
significance: 3
---

## Summary & Key Takeaways

The `<dl>` element is designed for associating names with values, not exclusively for definitions.
It is ideal for metadata, dialogue transcripts, and other structured content where items have descriptive values.
The `<dt>` element represents the 'name' or 'term', and `<dd>` represents the 'value' or 'description'.
Multiple `<dt>` elements can be associated with a single `<dd>`, and a single `<dt>` can have multiple `<dd>`s.
Proper semantic use of `<dl>` significantly improves accessibility and machine readability of content.
CSS can be effectively used to style `<dl>` elements to achieve various layout presentations.

## Our Commentary

I've always had a soft spot for the `<dl>` element, but I admit I often default to `<ul>` or `<div>` for lists that aren't strictly definitions. Simon's piece is a great reminder of its power. We often forget how much semantic richness HTML offers beyond the basics. There's something unsettling about how quickly we reach for generic divs when a more specific, meaningful tag exists. This makes me want to audit some of our older components. It's a good nudge for better web hygiene.
