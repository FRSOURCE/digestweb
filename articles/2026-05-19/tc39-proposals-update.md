---
layout: article
title: 'TC39 ECMAScript proposals update'
description: 'Several proposals have reached the Stage 4 (the last one): `Atomics.pause`'
photo: 'https://opengraph.githubassets.com/d18bcd7e51a967c89ac43c83db4d8485bf81d9ed1581748169758196decca198/tc39/proposals/commit/aa5330ff1f73b00363f0f0394eebcb27d41aad91'
original_url: https://github.com/tc39/proposals/commit/aa5330ff1f73b00363f0f0394eebcb27d41aad91
source_name: 'TC39 Proposals (commits)'
source_author: ''
tags: [javascript, web-platform, performance, release]
significance: 4
---

## Summary & Key Takeaways

- This means those proposals are finalized for inclusion in the next ECMAScript standard.
- `Atomics.pause` is designed to improve performance, by providing a hint to the CPU for busy-wait loops. [Click here to see the details](https://github.com/tc39/proposals/commit/aa5330ff1f73b00363f0f0394eebcb27d41aad91).
- The Explicit Resource Management proposal is introducing `using` declarations for deterministic resource cleanup. [Click here to see the details](https://github.com/tc39/proposals/commit/5adf344f5091c8726363594b44d54f14c97a52f6).
- The Joint Iteration proposal enables simultaneous iteration over multiple iterables. [Click here to see the details](https://github.com/tc39/proposals/commit/7e2d9a45e71525984d4c35313a3daeb4260773ef).

## Our Commentary

Some changes are coming to the next ECMAScript standard version! The `using` declaration is something you might use in the nearest future for file handles or database connections to avoid hussle of cleaning up after those operations. New `zip` and `zipKeyed` methods are something that was missing for long time when writing functional code :)
Overall, these are quality-of-life improvements and we're always happy to see those!
