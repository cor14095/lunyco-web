# Lunyco Web

Modern portfolio built with **Next.js 16 (App Router, Server Actions)**, **Tailwind CSS 4**, and **Shadcn/UI**.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with Perry-inspired color palette
- **UI Components:** Shadcn/UI
- **Font:** Inter (optimized with next/font)
- **Deployment:** AWS Amplify (SSR enabled)

## Project Structure

```
lunyco-web/
├── public/                     # Static assets
│   ├── images/                # Images (projects, OG, etc.)
│   ├── llm.txt                # LLM discovery file
│   ├── llms.txt               # Extended LLM info
│   └── humans.txt             # Credits and tech info
│
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── not-found.tsx      # 404 page
│   │   ├── globals.css        # Global styles & theme
│   │   ├── robots.ts          # Robots.txt generator
│   │   └── sitemap.ts         # Sitemap generator
│   │
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── navbar.tsx     # Navigation bar
│   │   │   ├── footer.tsx     # Footer
│   │   │   └── nav-links.tsx  # Reusable nav links
│   │   ├── sections/          # Page sections (future)
│   │   ├── ui/                # Shadcn/UI components
│   │   ├── contact-form.tsx   # Contact form
│   │   ├── post-card.tsx      # Blog post card
│   │   └── project-card.tsx   # Project card
│   │
│   ├── config/
│   │   ├── site.ts            # Site configuration
│   │   └── navigation.ts      # Navigation config
│   │
│   ├── content/               # Content data
│   │   ├── blog/              # Blog posts (mock)
│   │   └── projects/          # Projects (mock)
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── use-mounted.ts     # Client-side mount hook
│   │
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── structured-data.ts # SEO JSON-LD schemas
│   │
│   ├── server/
│   │   └── actions.ts         # Server Actions
│   │
│   └── types/
│       └── index.ts           # TypeScript types
│
└── todo/                      # Development notes
```

## Features

✅ **Modern Stack** - Next.js 16, React 19, TypeScript 5  
✅ **Beautiful UI** - Shadcn/UI with Perry-inspired teal/cyan palette  
✅ **Responsive** - Mobile-first design with Sheet navigation  
✅ **SEO Optimized** - JSON-LD structured data, sitemap, robots.txt  
✅ **LLM Friendly** - llm.txt and llms.txt for AI discovery  
✅ **Type Safe** - Full TypeScript coverage  
✅ **Performance** - ISR, font optimization, Turbopack  

## Development

```bash
# Install dependencies
npm ci

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck

# Lint
npm run lint
```

## Deployment

Deployed via **AWS Amplify** with SSR enabled.

## Color Palette

Perry the Platypus-inspired professional palette:
- **Primary:** Teal/Cyan (`oklch(0.65 0.16 192)`)
- **Accent:** Light Teal (`oklch(0.22 0.03 192)`)
- **Warning:** Orange (`oklch(0.65 0.20 35)`)
- Dark mode optimized with proper contrast ratios

## Author

**Alejandro Cortes**  
Full-Stack Engineer & AI Enthusiast  
📧 ale@lunyco.com  
🌐 https://lunyco.com

---

Built with ❤️ using Next.js 16 & Tailwind CSS 4