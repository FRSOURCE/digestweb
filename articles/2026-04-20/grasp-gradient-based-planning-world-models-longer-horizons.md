---
layout: article
title: 'GRASP: Gradient-based Planning for World Models at Longer Horizons'
description: 'BAIR introduces GRASP, a new gradient-based planner for learned dynamics (world models) that makes long-horizon planning practical through virtual states, stochasticity for exploration, and reshaped gradients.'
photo: 'https://bair.berkeley.edu/static/blog/grasp/pusht_zoomout.gif'
original_url: http://bair.berkeley.edu/blog/2026/04/20/grasp/
source_name: 'BAIR Blog'
source_author: ''
tags: [ai, research]
significance: 3
---

## Summary & Key Takeaways

- BAIR introduces GRASP, a new gradient-based planner designed to make long-horizon planning with learned dynamics (world models) more practical.
- GRASP addresses fragility in long-horizon planning by lifting trajectories into virtual states for parallel optimization across time.
- It incorporates stochasticity directly into state iterates to enhance exploration during planning.
- The method reshapes gradients to provide cleaner signals to actions, avoiding brittle "state-input" gradients through high-dimensional vision models.
- The article explains the problems that motivated GRASP, particularly the fragility of planning with modern world models over long horizons.

## Our Commentary

This is a deep dive into the cutting edge of AI planning, and it's exactly the kind of foundational research that can lead to significant breakthroughs. The challenges of long-horizon planning with world models are well-known, and GRASP's approach to parallelizing optimization and reshaping gradients sounds genuinely innovative. It's exciting to see how researchers are tackling these complex problems, pushing us closer to more robust and capable AI agents. This is definitely one to watch for those interested in the core mechanics of AI.
