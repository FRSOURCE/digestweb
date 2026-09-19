---
layout: article
title: 'Cypress Cloud: Test Replay Masks Sensitive Form Inputs by Default'
description: "Cypress Cloud's Test Replay now automatically masks sensitive form fields like passwords and payment details before data upload, enhancing privacy and security."
photo: 'https://www.cypress.io/cypress_logo_social.png'
original_url: https://www.cypress.io/blog/ctest-replay-now-masks-sensitive-form-inputs-by-default/
source_name: 'Cypress Blog'
source_author: ''
tags: [testing, dx, security, release]
significance: 2
---

## Summary & Key Takeaways

- Test Replay now replaces sensitive form input values with asterisks by default.
- This masking occurs before any Test Replay data is uploaded to Cypress Cloud.
- The feature is automatically enabled for all Cypress Cloud projects.
- It aligns with existing network data redaction principles to keep sensitive values out of captured artifacts.
- Aims to maintain the debugging experience while improving data privacy and compliance.

## Our Commentary

This is a really smart move by Cypress. Security and privacy are paramount, especially when dealing with test data that might contain sensitive information. Making this the default is the right call. It means developers can get the full debugging power of Test Replay without worrying about accidentally exposing credentials. Good stuff.
