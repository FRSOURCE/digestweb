---
layout: article
title: 'SolidJS Compiler 2.0 RC.7 Improves Hydration & Template Validation'
description: 'SolidJS Compiler 2.0 RC.7 brings fixes for hydration ID alignment, enhanced document-shell template validation, and removes the experimental patch channel.'
photo: 'https://opengraph.githubassets.com/aa8cb142aaa840ed3a06314e9b433c97f48ee542ce85f19113ba9a64569c8ced/solidjs/solid/releases/tag/%40solidjs/compiler%402.0.0-rc.7'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fcompiler%402.0.0-rc.7
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, release, tooling, dx]
significance: 2
---

## Summary & Key Takeaways

- Hydration IDs now remain aligned when intrinsic elements have a ref and reactive spread.
- Document-shell templates are validated correctly within the document context.
- The compiler no longer fails on root components owning the document shell in client mode.
- The experimental patch channel and its associated compiler option are removed.
- Store-family app bundles see up to ~900 B brotli size reduction.

## Our Commentary

Compiler improvements are often unsung heroes, but these fixes for hydration and template validation are crucial for building robust SolidJS applications. It's the kind of work that prevents headaches down the line. Removing experimental features also signals a maturing codebase, which is always a good sign.
