# CCsphere — chenchiwang.github.io

Personal website built with **Next.js 14** (App Router) + **Tailwind CSS**, deployed to GitHub Pages via GitHub Actions.

## Stack

- **Framework**: Next.js 14 (static export)
- **Styling**: Tailwind CSS + custom dark theme
- **Content**: Markdown files in `content/`
- **Deploy**: GitHub Actions → GitHub Pages

## Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout + Navbar
│   ├── page.tsx            # Home
│   ├── blog/               # Blog list & posts
│   ├── projects/           # Deutsch notes list & pages
│   ├── about/              # About page
│   └── components/         # Navbar, Footer
├── content/
│   ├── blog/               # Blog posts (.md)
│   └── projects/           # Deutsch learning notes (.md)
├── lib/
│   └── markdown.ts         # Markdown utilities (gray-matter + remark)
├── public/                 # Static assets
└── .github/workflows/      # GitHub Actions CI/CD
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Deploy

Push to `main` branch → GitHub Actions automatically builds and deploys to GitHub Pages.

**First-time setup**: In your GitHub repo settings, go to **Settings → Pages → Source** and set it to **GitHub Actions**.

## Add New Content

**New blog post** — create `content/blog/YYYY-MM-DD-title.md`:
```markdown
---
title: "Your Title"
date: 2025-01-01
categories: blog
---

Your content here...
```

**New Deutsch note** — create `content/projects/Title.md`:
```markdown
---
title: "Deutsch Cheat Sheet - Topic"
date: 2025-01-01
categories: Deutsch
---

Your notes here...
```

## Cleanup (before first build)

Remove old Jekyll files that are no longer needed:
```bash
rm -rf _config.yml Gemfile Gemfile.lock _layouts _include about.md index.html
rm -rf pages/ blog/ projects/ assets/ _pages/
```

> `_posts/` and `_projects/` content has been migrated to `content/blog/` and `content/projects/`.
