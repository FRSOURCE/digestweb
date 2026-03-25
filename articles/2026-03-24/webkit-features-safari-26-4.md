---
layout: article
title: 'WebKit Features Arrive in Safari 26.4'
description: "WebKit's latest update for Safari 26.4 brings a collection of new features and improvements to the web platform, enhancing capabilities for developers and users alike."
photo: 'https://webkit.org/wp-content/uploads/gridlanes-for264-light.webp'
original_url: https://webkit.org/blog/17862/webkit-features-for-safari-26-4/
source_name: 'WebKit Blog'
source_author: ''
tags: [browser, web-platform, release]
significance: 2
---

## Summary & Key Takeaways

- WebKit has released its latest set of features for Safari 26.4.
- The update includes various new capabilities and improvements for the web platform:
  - CSS Grid Lanes — New display: grid-lanes enables masonry-style layouts
    natively, no JavaScript needed.
  - WebTransport — HTTP/3/QUIC-based alternative to WebSockets for
    low-latency bidirectional communication in games and live collaboration.
  - Keyboard Lock API — Fullscreen web apps can now capture keys like `Escape`, enabling proper keyboard handling for games and immersive tools.
  - Threaded scroll-driven animations — Now run on the compositor thread
    for smoother performance.
  - ReadableStream improvements — BYOB readers for memory-efficient binary
    data and for await...of async iteration support.
  - sizes attribute math functions — Responsive images can now use
    clamp(), min(), max() in the sizes attribute.
  - 191 bug fixes — Covering CSS zoom, SVG animation/rendering,
    accessibility (VoiceOver/Voice Control), and WebRTC improvements.

## Our Commentary

While the title is generic: "just another release", it's good to see faster pace in Safari development. It seems that Webkit is the first to ship with stable implementation of Grid Lanes!
