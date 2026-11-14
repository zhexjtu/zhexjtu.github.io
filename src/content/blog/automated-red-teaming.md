---
title: "What Automated Red Teaming Actually Tests"
description: "A framework for thinking about jailbreak evaluations, stress testing, and useful safety feedback loops for language models."
publishedAt: 2026-11-07
tags: ["AI safety", "Evaluation"]
draft: true
featured: false
---

> Draft scaffold. Replace this note and add your own examples before publishing.

Automated red teaming is most useful when the evaluation is explicit about the threat model. A high attack-success rate does not mean much without knowing which capabilities, interfaces, and defenses were available to the attacker.

## Begin with the threat model

Describe the attacker’s access, budget, and objective.

## Separate attack quality from model vulnerability

Explain how to avoid conflating a weak generator with a robust target model.

## Turn failures into training data

Discuss deduplication, severity labeling, coverage, and the feedback loop into post-training.

## What good reporting looks like

List the metrics and artifacts that make an evaluation reproducible and useful.
