# Zhe Wang — personal website

An Astro-based research website with a publication-focused homepage and a Markdown-powered blog.

## Local development

```bash
npm install
npm run dev
```

The local site runs at `http://localhost:4321`.

## Build checks

```bash
npm run check
npm run build
```

The production-ready static site is generated in `dist/`.

## Update the profile

- Personal details, news, social links, and publications: `src/data/site.ts`
- Profile image: add `public/profile.jpg`, then set `profileImage: '/profile.jpg'` in `src/data/site.ts`
- Résumé: replace `public/resume.pdf`

## Write a blog post

Add a Markdown file under `src/content/blog/`:

```md
---
title: "Post title"
description: "One-sentence summary."
publishedAt: 2026-11-14
tags: ["LLM post-training", "Reinforcement learning"]
draft: true
featured: false
---

Your article begins here.
```

Draft posts appear during local development but are excluded from production builds. Change `draft` to `false` when a post is ready to publish.

The Markdown pipeline supports syntax-highlighted code blocks and LaTeX-style math through KaTeX.

## GitHub and deployment

No deployment workflow is enabled yet, so pushing the repository will not publish the website. After the repository name, GitHub username, and optional custom domain are confirmed, configure Astro's `site`/`base` settings and add the GitHub Pages workflow.
