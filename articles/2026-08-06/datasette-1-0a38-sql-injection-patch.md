---
layout: article
title: 'Datasette 1.0a38 Patches SQL Injection Vulnerability'
description: 'Datasette 1.0a38 addresses a SQL injection vulnerability impacting instances that serve both public and private tables, advising administrators to disable `execute-sql` permissions.'
photo: 'https://picsum.photos/id/349/800/450'
original_url: https://simonwillison.net/2026/Aug/6/datasette/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [security, open-source, tooling]
significance: 2
---

## Summary & Key Takeaways

- Datasette 1.0a38 includes a critical SQL injection security fix.
- The vulnerability affects instances mixing public and private tables in the same database.
- Administrators are advised to disable the `execute-sql` permission for affected databases.
- The fix prevents unauthorized read-only access to private tables.
- A back-port of this fix is also available in Datasette 0.65.3.
- The specific vulnerable configuration is considered rare by the author.

## Our Commentary

Security fixes are always paramount. While Simon notes this specific configuration is rare, it's a good reminder that even well-designed tools can have subtle vulnerabilities when used in complex ways. I appreciate the clear advice on mitigation.
