---
layout: article
title: 'DOOMQL: Running a Ray-Traced Game Engine Entirely in SQLite'
description: 'Explore DOOMQL, a unique project where SQLite powers a Doom-like terminal game, handling everything from movement to pixel rendering with SQL queries. Built with AI, it redefines database capabilities.'
photo: 'https://static.simonwillison.net/static/2026/doomql-datasette-app.png'
original_url: https://simonwillison.net/2026/Jul/13/doomql/#atom-everything
source_name: "Simon Willison's Weblog"
source_author: 'Simon Willison'
tags: [ai, llm, showcases, research]
significance: 3
---

## Summary & Key Takeaways

- DOOMQL is a Doom-like terminal game where SQLite functions as the entire game engine.
- SQL queries manage game logic, including movement, collision detection, enemies, and combat.
- A massive recursive CTE in SQL implements a full ray tracer for rendering pixels.
- The project was built with assistance from GPT-5.6 Sol, highlighting AI's role in novel development.
- It integrates with Datasette Apps to display a live minimap and screen state via a web interface.
- The project challenges conventional notions of database usage beyond data storage.

## Our Commentary

This is just wild. I mean, SQLite as a game engine? And a ray tracer in SQL? My brain genuinely struggles to parse how someone even starts thinking this way. The AI assistance is interesting, but the core idea is pure human ingenuity. It's a fantastic showcase of pushing boundaries, and it makes me wonder what other 'unreasonable questions' we should be asking about our tools.
