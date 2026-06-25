---
layout: article
title: 'Scaling Cypress E2E Tests with Harness CI Smart Orchestration'
description: "Learn how to optimize large Cypress end-to-end test suites by integrating with Harness CI's smart orchestration features."
photo: 'https://storage.ghost.io/c/12/89/12899ca1-4786-4eea-b7e1-9c5268baa48a/content/images/2026/06/Harness-Cypress.png'
original_url: https://www.cypress.io/blog/run-cypress-at-scale-in-harness-ci-with-smart-orchestration/
source_name: 'Cypress Blog'
source_author: ''
tags: [testing, tooling]
significance: 1
---

## Summary & Key Takeaways

- Large Cypress E2E test suites can experience significant run time increases, impacting developer velocity.
- Harness CI's Smart Orchestration aims to reduce test execution times for growing suites.
- It identifies and runs only relevant tests based on code changes, prioritizing critical paths.
- The system can distribute tests across multiple runners for parallel execution.
- This approach helps maintain fast feedback loops even as test coverage expands.

## Our Commentary

We've all been there: the test suite that starts fast and then slowly becomes a behemoth. The idea of "smart orchestration" to only run relevant tests is compelling. I wonder how effective these systems truly are in practice, especially with complex dependency graphs. It feels like a constant battle to keep CI fast.
