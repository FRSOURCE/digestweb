---
layout: article
title: "React Tip: You Probably Don't Need to Lift State"
description: 'A quick React tip advises against lifting state by default, encouraging developers to keep state close to its usage unless sharing is explicitly required.'
photo: 'https://allthingssmitty.com/img/posts/sunset-home-office-min.jpg'
original_url: https://allthingssmitty.com/2026/03/30/you-probably-dont-need-to-lift-that-state/
source_name: 'Matt Smith'
source_author: 'Matt Smith'
tags: [react, tutorial, dx]
significance: 1
---

## Summary & Key Takeaways

- It advises against the common practice of lifting state by default.
- The core recommendation is to keep state as close as possible to the component where it is used.
- State should only be lifted when there is a genuine need to share it across multiple components.
- This approach can lead to simpler component trees and easier-to-manage applications.

## Our Commentary

A short article, but much needed. We often get into the habit of lifting state "just in case," but it quickly leads to prop drilling and overly complex components. It's a great reminder that simplicity and locality are often better defaults.
