---
layout: article
title: 'Cypress 16.2.0: Find Elements with `cy.getByRole()` for Better Accessibility'
description: 'Cypress 16.2.0 introduces `cy.getByRole()`, allowing testers to find elements by their accessible role and name, aligning tests with user interaction.'
photo: 'https://storage.ghost.io/c/12/89/12899ca1-4786-4eea-b7e1-9c5268baa48a/content/images/2026/10/Cypress---getByRole---Blog-hero-1200--630@2x.png'
original_url: https://www.cypress.io/blog/find-elements-the-way-your-users-do-with-cy-getbyrole/
source_name: 'Cypress Blog'
source_author: ''
tags: [testing, accessibility, release, dx]
significance: 2
---

## Summary & Key Takeaways

- Cypress 16.2.0 adds the new `cy.getByRole()` command.
- This command finds elements based on their ARIA role and accessible name.
- It helps align tests with how users perceive and interact with the UI.
- By default, it only matches native elements, catching semantic HTML issues.
- The article explains why this approach is beneficial for robust testing.
- It also guides users on migrating from Cypress Testing Library.

## Our Commentary

This is a smart move from Cypress. Testing by role and accessible name is just _better_ for catching real-world accessibility regressions. We've seen too many tests pass while the user experience crumbles. This pushes developers towards more semantic HTML, which is always a win.
