---
layout: article
title: 'Avoiding "true, false, true" in JavaScript Function Arguments'
description: 'Matt Smith discusses the readability issues of using multiple boolean flags in JavaScript function arguments and shares alternative API design patterns for cleaner code.'
photo: 'https://allthingssmitty.com/img/posts/sunset-home-office-min.jpg'
original_url: https://allthingssmitty.com/2026/05/11/i-keep-tripping-over-true-false-true/
source_name: 'Matt Smith'
source_author: 'Matt Smith'
tags: [javascript, dx, tutorial]
significance: 2
---

## Summary & Key Takeaways

- The author highlights the common JavaScript anti-pattern of using multiple boolean flags as function arguments, like `createUser(user, true, false)`.
- This pattern leads to poor readability and makes function calls difficult to understand without checking the definition.
- The article explains why this approach is problematic for maintainability and developer experience.
- It suggests alternative API design patterns to improve clarity and reduce cognitive load, such as using an options object.

## Our Commentary

Oh, the classic boolean flag dilemma! We've all been there, staring at a function call like `doSomething(true, false, true)` and wondering what on earth each `true` or `false` actually means. Matt's post is a great, concise reminder of why this pattern is a readability nightmare and how simple refactors can make a huge difference in code clarity. It's a fundamental lesson in API design that every JavaScript developer should internalize. Sometimes the simplest changes have the biggest impact on developer experience.
