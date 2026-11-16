---
layout: article
title: 'SolidJS HTML 2.0.0-rc.22: Trusted Types Policy Support'
description: 'This SolidJS HTML release candidate adds support for Trusted Types policies, enhancing security for applications enforcing strict content security.'
photo: 'https://opengraph.githubassets.com/b48c432d9403d7cc38b44c3f0a84ea9d83314ef4972f5f9a50d5d2397ef1c619/solidjs/solid/releases/tag/%40solidjs/html%402.0.0-rc.22'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fhtml%402.0.0-rc.22
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, web-platform]
significance: 2
---

## Summary & Key Takeaways

- A new `setTrustedTypesPolicy(policy)` function is introduced.
- This allows Solid to render on pages enforcing `require-trusted-types-for 'script'`.
- The runtime assigns `TrustedHTML` from the provided policy for compiled templates and server HTML.
- It's a no-op on the server, supporting isomorphic applications.

## Our Commentary

Trusted Types support is a big deal for web security, especially in enterprise environments. It's great to see SolidJS integrating this, making it easier for developers to build secure applications that comply with strict content security policies. This is a solid step forward for the framework's robustness.
