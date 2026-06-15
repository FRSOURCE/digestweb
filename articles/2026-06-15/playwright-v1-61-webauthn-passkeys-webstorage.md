---
layout: article
title: 'Playwright v1.61.0: WebAuthn Passkeys & Web Storage APIs'
description: 'Playwright v1.61.0 introduces new APIs for WebAuthn passkeys and Web Storage, significantly improving testing capabilities for modern web applications.'
photo: 'https://opengraph.githubassets.com/546cce7b60735d12da2bc41281a86f6a5d2687cf1dd2693fdf973fea9c3dcc0a/microsoft/playwright/releases/tag/v1.61.0'
original_url: https://github.com/microsoft/playwright/releases/tag/v1.61.0
source_name: 'Playwright Releases'
source_author: ''
tags: [testing, browser, release, dx]
significance: 3
---

## Summary & Key Takeaways

- Introduces a new WebAuthn passkeys API via `browserContext.credentials`.
- Allows tests to register and use virtual passkeys without real hardware.
- Adds a new WebStorage API for `localStorage` and `sessionStorage` access.
- New `apiResponse.securityDetails()` and `apiResponse.serverAddr()` mirror browser APIs.
- Enhanced video recording options for the test runner.

## Our Commentary

Playwright just keeps delivering. The WebAuthn passkeys API is a game-changer for testing modern authentication flows; no more faking it. And direct Web Storage access? Yes, please. These are quality-of-life improvements that make a real difference for developers.
