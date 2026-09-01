---
layout: article
title: 'Cypress Test Replay Now Redacts Sensitive Network Data Locally'
description: "Cypress Test Replay now automatically redacts sensitive values from network logs on the user's machine before uploading to Cypress Cloud, addressing privacy concerns and enabling wider adoption."
photo: 'https://www.cypress.io/cypress_logo_social.png'
original_url: https://www.cypress.io/blog/test-replay-now-redacts-sensitive-network-data-before-upload/
source_name: 'Cypress Blog'
source_author: ''
tags: [testing, dx, security, release]
significance: 3
---

## Summary & Key Takeaways

- Cypress Test Replay now automatically redacts sensitive network data.
- Redaction occurs locally on the user's machine before data is uploaded to Cypress Cloud.
- This feature aims to alleviate privacy concerns for teams.
- It allows teams who previously disabled Test Replay due to data sensitivity to re-enable it.
- Redaction is enabled by default but can be turned off per project.
- The change maintains full CI debugging capabilities while protecting sensitive information.

## Our Commentary

This is a genuinely smart move from Cypress. Privacy and data security are paramount, and redacting sensitive data _before_ it leaves your machine is the right way to do it. I imagine this will be a huge relief for many teams who wanted the benefits of Test Replay but couldn't justify the data exposure. It's a good example of listening to user feedback and addressing real-world blockers.
