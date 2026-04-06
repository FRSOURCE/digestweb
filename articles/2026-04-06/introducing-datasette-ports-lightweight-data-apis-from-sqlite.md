---
layout: article
title: 'Introducing datasette-ports: Lightweight Data APIs from SQLite'
description: 'Discover `datasette-ports`, a new Datasette plugin that enables you to define named SQL queries as "ports," exposing them as simple JSON APIs via URLs. It offers a lightweight way to create micro-APIs from your SQLite databases.'
photo: 'https://picsum.photos/id/221/800/450'
original_url: https://simonwillison.net/2026/Apr/6/datasette-ports/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [tooling, open-source, web-platform]
significance: 1
---

## Summary & Key Takeaways

- `datasette-ports` is a new Datasette plugin designed to simplify data exposure.
- It allows users to define "ports," which are named SQL queries.
- These ports can be accessed via simple URLs, returning data in JSON format.
- The plugin provides a lightweight method for creating micro-APIs directly from SQLite databases.
- It aims to make it easier to expose specific data views or custom API endpoints without extensive coding.
- This tool enhances Datasette's capability as a platform for publishing and exploring data.
- Developers can quickly turn complex SQL queries into accessible web endpoints.
- The plugin streamlines the process of sharing and integrating data from SQLite databases.

## Our Commentary

Simon Willison continues to churn out incredibly useful tools for the Datasette ecosystem, and `datasette-ports` looks like another winner. The idea of turning SQL queries into simple, named API endpoints is brilliant in its simplicity. It really lowers the barrier to exposing data from SQLite databases, which is something many of us do regularly. While Datasette itself is a niche, this kind of lightweight API generation is a concept that could inspire similar approaches in other data-publishing tools. It's a testament to the power of focused, open-source development.
