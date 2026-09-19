---
layout: article
title: 'SolidJS 2.0 RC.9: Async Store Setter Diagnostic & Client Error Hook'
description: 'SolidJS 2.0 Release Candidate 9 introduces a dev diagnostic for async store setters and a new client error hook for robust error handling.'
photo: 'https://opengraph.githubassets.com/6a58050809970943b9ed291b060d7845e851bd16bc435978808ef16c9077a7d3/solidjs/solid/releases/tag/solid-js%402.0.0-rc.9'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.9
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, dx, error-handling]
significance: 3
---

## Summary & Key Takeaways

- Adds a new dev diagnostic, `ASYNC_STORE_SETTER`, which throws when a store setter callback returns a Promise.
- This prevents silent data loss as store setters are synchronous transactions.
- Introduces `configureClientErrors({ onError })` as a client error hook for `solid-js` and `render`/`hydrate`.
- The client error hook provides a production-tier seam to catch component failures not handled by `createErrorBoundary`.
- Uncaught errors still report to the platform's `reportError`, ensuring existing monitors still function.

## Our Commentary

This is a big one for SolidJS 2.0. That `ASYNC_STORE_SETTER` diagnostic is a lifesaver; I've definitely seen developers (myself included) make that mistake, and having it throw in dev is just _good_. The client error hook is also a huge step forward for building truly resilient applications. It feels like SolidJS is really maturing its error story, which is something I always look for in a framework.
