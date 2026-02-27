# Khalil Briki — Portfolio Website

## Overview
A modern, elegant one-page website for Khalil Briki, an Afro-diasporic bassist, composer, and musical director based in Brazil, originally from Tunisia.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + Framer Motion + GSAP (ScrollTrigger)
- **Backend**: Express.js (minimal, serves static content)
- **Styling**: Dark theme with North African textile-inspired palette (terracotta red, indigo, teal, golden ochre, warm cream) — Playfair Display serif + DM Sans sans-serif
- **No database needed** — static portfolio content

## Project Structure
- `client/src/pages/home.tsx` — Main one-page site with all 7 sections
- `client/src/App.tsx` — Router setup
- `client/public/images/` — Generated placeholder images for projects without real photos
- `attached_assets/` — Real photos and pattern textures imported via `@assets/` alias

## Design System
### Color Palette (CSS custom properties)
- `--textile-red` / `--textile-red-deep` — Terracotta / deep red (from Tunisian embroidery)
- `--textile-indigo` — Deep navy/indigo (from textile patterns)
- `--textile-teal` — Teal/turquoise (from cultural textile accents)
- `--textile-ochre` — Golden ochre/amber (from Amazigh patterns)
- `--textile-cream` — Warm cream/beige (heading text, highlights)

### Decorative CSS Classes
- `.textile-band` — Multi-color gradient stripe divider (6px)
- `.textile-band-thin` — Subtle ochre/red gradient line (2px)
- `.geometric-divider` — Diamond/zigzag pattern band (24px)
- `.diamond-pattern` — Repeating SVG diamond grid background

### Pattern Images Used
- Amazigh pattern — Hero section overlay (subtle, 7% opacity)
- Tunisian embroidery — Hero right edge + Festivals left edge decoration
- Cultural textile — Contact section background texture

## Sections
1. **Hero** — Full-screen with portrait, Amazigh pattern overlay, name, tagline, CTA buttons
2. **Artistic Profile** — Bio, multilingual info, key themes with diamond pattern background
3. **Projects/Collaborations** — Each project has its own horizontal scroll gallery (GSAP ScrollTrigger pinned sections). Bordered by textile band dividers.
4. **Festivals** — Tunisian embroidery edge decoration, teal/ochre accented cards
5. **Education** — Indigo-tinted background with geometric divider, ochre-accented cards
6. **Media** — YouTube/Spotify with red/teal themed cards, diamond pattern background
7. **Contact** — Textile pattern background, multi-colored contact cards (ochre/red/teal)

## Key Components
- `ProjectScrollSection` — Per-project horizontal scroll gallery using GSAP ScrollTrigger
- `FadeInSection` — Framer Motion scroll-triggered fade-in wrapper
- `SandParticles` — Ambient canvas particle effect (warm ochre tones)
- `SectionLabel` — Decorative label with flanking gradient lines
- `SectionTitle` — Warm cream serif heading

## Features
- GSAP ScrollTrigger horizontal scroll galleries per collaboration
- North African textile pattern overlays and decorative dividers
- Smooth scroll navigation with sticky navbar (80px offset)
- Fade-in scroll animations via Framer Motion
- Ambient sand particle canvas effect
- Parallax hero section with Amazigh pattern + cinematic blend effects
- Responsive design (mobile-first)
- Dark theme with culturally-inspired accent colors

## Dependencies
- gsap (ScrollTrigger plugin)
- framer-motion
- React, Vite, TailwindCSS, Express

## Running
- `npm run dev` starts the Express + Vite dev server on port 5000
