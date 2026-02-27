# Khalil Briki — Portfolio Website

## Overview
A modern, elegant one-page website for Khalil Briki, an Afro-diasporic bassist, composer, and musical director based in Brazil, originally from Tunisia.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + Framer Motion + GSAP (ScrollTrigger)
- **Backend**: Express.js (minimal, serves static content)
- **Styling**: Dark earth-tone theme (stone/amber palette), Playfair Display serif + DM Sans sans-serif
- **No database needed** — static portfolio content

## Project Structure
- `client/src/pages/home.tsx` — Main one-page site with all 7 sections
- `client/src/App.tsx` — Router setup
- `client/public/images/` — Generated placeholder images for projects without real photos
- `attached_assets/` — Real photos imported via `@assets/` alias

## Sections
1. **Hero** — Full-screen with portrait, name, tagline, CTA buttons
2. **Artistic Profile** — Bio, multilingual info, key themes
3. **Projects/Collaborations** — Each project has its own horizontal scroll gallery (GSAP ScrollTrigger pinned sections) with title, role, description, and photos. Projects with 1 photo show a static layout instead.
4. **Festivals** — Savassi Jazz, BDMG, BH Instrumental, SESC, CCBB, Fartura, Minas Tênis
5. **Education** — Teaching areas (musicalisation, bass technique, improvisation, etc.)
6. **Media** — YouTube/Spotify placeholders, press photos, press kit
7. **Contact** — Email, Instagram, WhatsApp

## Key Components
- `ProjectScrollSection` — Per-project horizontal scroll gallery using GSAP ScrollTrigger. Pins the section, translates photos horizontally on vertical scroll. Falls back to static image for single-photo projects.
- `FadeInSection` — Framer Motion scroll-triggered fade-in wrapper
- `SandParticles` — Ambient canvas particle effect

## Features
- GSAP ScrollTrigger horizontal scroll galleries per collaboration
- Smooth scroll navigation with sticky navbar (80px offset)
- Fade-in scroll animations via Framer Motion
- Ambient sand particle canvas effect
- Parallax hero section with cinematic blend effects
- Afro-futuristic geometric pattern overlay
- Responsive design (mobile-first)
- Dark theme default

## Dependencies
- gsap (ScrollTrigger plugin)
- framer-motion
- React, Vite, TailwindCSS, Express

## Running
- `npm run dev` starts the Express + Vite dev server on port 5000
