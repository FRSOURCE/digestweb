---
layout: article
title: "Why I Don't Chain Everything in JavaScript Anymore"
description: "Matt Smith shares his evolving perspective on JavaScript coding style, explaining why he's moved away from excessive method chaining, citing improved readability and debugging as key benefits."
photo: 'https://frontendmasters.com/blog/wp-json/social-image-generator/v1/image/9557'
original_url: https://frontendmasters.com/blog/why-i-dont-chain-everything-in-javascript-anymore/
source_name: 'Frontend Masters Blog'
source_author: ''
tags: [javascript, dx, tutorial, performance]
significance: 2
---

## Summary & Key Takeaways

- Matt Smith discusses his reasons for no longer chaining everything in JavaScript.
- He highlights that the initial code samples in his post illustrate his points effectively.
- A key reason mentioned is the inevitability of needing to log values between chained operations.
- The article suggests that breaking up chains can lead to more readable and debuggable code.

## Our Commentary

This article from Frontend Masters hits on a common dilemma in JavaScript development: the allure of method chaining versus the practicalities of debugging and readability. We've all been there, writing those beautifully concise, yet utterly opaque, chains of `.map().filter().reduce()`. Matt Smith's point about needing to log intermediate values is so relatable. It's a good reminder that sometimes, a few extra lines of code for clarity and easier debugging are far more valuable than striving for ultimate conciseness. It's a nuanced take on best practices, and we appreciate the honesty in admitting that coding styles evolve with experience.
