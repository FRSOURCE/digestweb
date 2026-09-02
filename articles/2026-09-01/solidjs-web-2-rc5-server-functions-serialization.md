---
layout: article
title: 'SolidJS Web 2.0 RC.5 Enhances Server Functions & Serialization'
description: "This release candidate for SolidJS's web package introduces server function argument limits, improved error stack serialization, and better header bounds enforcement."
photo: 'https://opengraph.githubassets.com/1759a0314a55c90c4c3272ff25fe3b90e4c419d32acb91fa4b6b057d311268aa/solidjs/solid/releases/tag/%40solidjs/web%402.0.0-rc.5'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fweb%402.0.0-rc.5
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, performance, dx]
significance: 2
---

## Summary & Key Takeaways

- Server functions now have configurable `bodySizeLimit` and `maxArguments` to prevent oversized payloads.
- Error stack disclosure can be explicitly controlled with `serializeErrorStacks` regardless of `NODE_ENV`.
- The `selectedcontent` HTML element is added to JSX intrinsic element types.
- Redirect and revalidate helpers now enforce `Location` and `X-Revalidate` header bounds at the transport edge.

## Our Commentary

SolidJS continues to refine its server-side story, and these RC updates are all about robustness and security. I'm particularly glad to see the explicit control over error stack serialization; that's a common footgun. The argument limits for server functions are also a smart move to prevent abuse or accidental resource exhaustion. It's all about making the framework more resilient in production.
