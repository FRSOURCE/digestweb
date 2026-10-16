---
layout: article
title: 'Google OAuth Adds DPoP Support to Secure Refresh Tokens'
description: 'Google OAuth Platform now supports DPoP (Demonstrating Proof-of-Possession) to sender-constrain refresh tokens, enhancing security against malware and adversary-in-the-middle attacks.'
photo: 'https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/Gemini_Generated_Image_s1iz7fs1iz.2e16d0ba.fill-1200x600.jpg'
original_url: https://developers.googleblog.com/announcing-dpop-support-for-google-oauth-securing-refresh-tokens/
source_name: 'Google Developers Blog – AI'
source_author: ''
tags: [web-platform, security, ai, google]
significance: 3
---

## Summary & Key Takeaways

- Google OAuth now supports DPoP for enhanced security of refresh tokens.
- DPoP helps neutralize Infostealer malware and adversary-in-the-middle attacks.
- It cryptographically binds long-lived refresh tokens while keeping access tokens as standard Bearer tokens.
- This provides robust credential security without high API performance overhead.
- Google Cloud Secure Token Service (STS) can handle token delegation for multi-agent workloads.

## Our Commentary

DPoP support for Google OAuth is a big deal for security. Refresh tokens are often the weakest link, and sender-constraining them is a smart move against infostealers. I appreciate that they're doing this without adding significant performance overhead. The mention of multi-agent workloads also shows they're thinking ahead about how AI systems will interact with these security protocols. It's a solid, necessary upgrade.
