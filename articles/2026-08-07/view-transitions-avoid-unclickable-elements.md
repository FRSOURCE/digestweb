---
layout: article
title: 'View Transitions: Avoiding Unclickable Elements During Animations'
description: 'Learn about a crucial pitfall when implementing View Transitions: they can block interactivity during their animation. This article provides guidance on how to prevent elements from becoming unclickable.'
photo: 'https://master.dev/blog/wp-json/social-image-generator/v1/image/10617'
original_url: https://master.dev/blog/view-transitions-careful-not-to-make-stuff-unclickable/
source_name: 'Frontend Masters Blog'
source_author: ''
tags: [web-platform, ux, dx, browser]
significance: 2
---

## Summary & Key Takeaways

- View Transitions can inadvertently block user interactivity, such as clicks.
- This occurs while the transition animation is actively running.
- The article warns developers about this potential UX issue.
- It offers advice on how to manage or prevent elements from becoming unclickable.

## Our Commentary

View Transitions are fantastic for creating smooth, app-like experiences on the web, but this is exactly the kind of subtle gotcha that can trip up developers. We've definitely seen similar issues with other animations. It's a good reminder that performance and perceived performance are two different things, and blocking user input, even for a moment, can be incredibly frustrating. Always test your transitions for interactivity!
