---
layout: article
title: 'SolidJS Compiler 2.0 RC.17: Stricter Syntax and Dev Warnings'
description: 'This SolidJS compiler release candidate introduces compile-time errors for deprecated Solid 1.x attribute forms and adds development warnings for uncommitted input overwrites.'
photo: 'https://opengraph.githubassets.com/d266c6540af749abe9cf8b712d37427eb80bbe273545784067a3b6db67198460/solidjs/solid/releases/tag/%40solidjs/compiler%402.0.0-rc.17'
original_url: https://github.com/solidjs/solid/releases/tag/%40solidjs%2Fcompiler%402.0.0-rc.17
source_name: 'SolidJS Releases'
source_author: ''
tags: [solidjs, frameworks, tooling, dx]
significance: 2
---

## Summary & Key Takeaways

- Solid 1.x attribute forms like `on:`, `attr:`, and `classList` now trigger compile errors on native elements.
- The compiler provides specific 2.0 replacements for deprecated attribute forms.
- Dev builds now warn about `UNCOMMITTED_INPUT_OVERWRITTEN` when DOM property bindings overwrite user edits.
- These checks run at compile time and add no runtime code.

## Our Commentary

Breaking changes are never fun, but enforcing the new 2.0 attribute forms at compile time is the right move. It's a clear signal for migration. The `UNCOMMITTED_INPUT_OVERWRITTEN` warning is also a fantastic addition for developer experience; I've seen that bug sneak into apps more times than I care to admit.
