---
layout: article
title: "Exploring 'Composites' for Better JavaScript Object Comparison"
description: "A look into the concept of 'composites,' a potential solution to JavaScript's challenges with comparing objects by value and using them as map keys."
photo: 'https://frontendmasters.com/blog/wp-json/social-image-generator/v1/image/9613'
original_url: https://frontendmasters.com/blog/arrays-objects-now-composites/
source_name: 'Frontend Masters Blog'
source_author: ''
tags: [javascript, web-platform, tutorial]
significance: 2
---

## Summary & Key Takeaways

- The article introduces the concept of 'composites' as a potential new data type or feature in JavaScript.
- It addresses the long-standing problem of comparing two objects that appear identical but return `false` due to reference equality.
- Another issue 'composites' aim to solve is the inability to reliably use objects as keys in `Map` or `Set` data structures.
- The discussion is based on a video by Matt Pocock, highlighting a fundamental challenge in JavaScript development.

## Our Commentary

The idea of 'composites' is genuinely exciting for JavaScript developers. We've all hit that wall where `{}` === `{}` is `false`, and it's a constant source of frustration and workarounds. The ability to compare objects by value and use them as reliable map keys would be a huge quality-of-life improvement. While this is based on an older video, the problem it addresses is evergreen. It makes me wonder if this concept is gaining traction in TC39 or if it remains a theoretical solution. It feels like a fundamental missing piece in the language.
