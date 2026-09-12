---
layout: article
title: 'SolidJS 2.0.0-rc.8: ESM-Only, SSR XSS Fixes & Enhanced DX'
description: 'SolidJS moves closer to 2.0 with a release candidate featuring ESM-only runtime, critical SSR XSS patches, and significant developer experience improvements.'
photo: 'https://opengraph.githubassets.com/0aea20fa371a0338302bd5b8ffaf23571861ec2804fb0d5e0a7121a2b5e651db/solidjs/solid/releases/tag/solid-js%402.0.0-rc.8'
original_url: https://github.com/solidjs/solid/releases/tag/solid-js%402.0.0-rc.8
source_name: 'SolidJS Releases'
source_author: ''
tags: [frameworks, solidjs, release, dx]
significance: 3
---

## Summary & Key Takeaways

- All runtime packages are now ESM-only, requiring Node.js 22.12+.
- Critical SSR XSS vulnerabilities in flow-control memos have been fixed.
- A new `componentNames` compiler option provides minification-safe component labels for improved diagnostics.
- The "Observe tier" introduces first-class interaction records and router-agnostic navigation attribution.
- Development-only diagnostics are now split from production observability wiring.
- The attribution engine is now a separate, opt-in import for smaller production bundles.
- Support for `/* ... */` style comments in tagged JSX templates has been added.
- Nested "use server" function declarations are now correctly extracted.

## Our Commentary

This RC is a big one. The move to ESM-only and Node 22.12+ is a breaking change that will require some migration effort, but it's a necessary step for modernizing the ecosystem. I'm particularly happy about the SSR XSS fix; security is paramount. The improved diagnostics and observability features are also a huge win for developer experience. It feels like Solid 2.0 is shaping up to be a very robust release.
