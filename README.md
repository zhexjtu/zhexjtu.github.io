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
- Profile image: add `public/images/profile/zhe-wang.jpg`, then set `profileImage: '/images/profile/zhe-wang.jpg'` in `src/data/site.ts`
- Résumé: replace `public/resume.pdf`

## Images

Keep all website images under `public/images/`:

```text
public/images/
├── profile/          # Headshot
├── publications/     # Paper teaser figures and screenshots
└── blog/             # Images used in blog posts
```

Recommended publication filenames are already noted in `src/data/site.ts`:

```text
public/images/publications/atla.webp
public/images/publications/hpdt.webp
public/images/publications/pgrad.webp
public/images/publications/st-maml.webp
```

After adding a file, uncomment its `image` property in `src/data/site.ts`. For example:

```ts
image: '/images/publications/atla.webp',
```

For publication cards, use a 4:3 teaser figure or cropped screenshot around 1200 × 900 pixels. WebP is preferred for photographs and dense screenshots; PNG is appropriate when small text or line diagrams must remain sharp. Keep each file below roughly 700 KB when practical. A focused paper figure or architecture diagram usually works better than a screenshot of an entire PDF page.

For blog posts, create a directory named after the post and reference images with their public path:

```text
public/images/blog/practical-guide-to-rlvr/training-loop.webp
```

```md
![RLVR training loop](/images/blog/practical-guide-to-rlvr/training-loop.webp)
```

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
