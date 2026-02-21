# Khalil Briki — Portfolio Website

## Overview
A modern, elegant one-page website for Khalil Briki, an Afro-diasporic bassist, composer, and musical director based in Brazil, originally from Tunisia.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + Framer Motion
- **Backend**: Express.js (minimal, serves static content)
- **Styling**: Dark earth-tone theme (stone/amber palette), Playfair Display serif + DM Sans sans-serif
- **No database needed** — static portfolio content

## Project Structure
- `client/src/pages/home.tsx` — Main one-page site with all 7 sections
- `client/src/App.tsx` — Router setup
- `client/public/images/` — Generated images (hero portrait, pattern background)

## Sections
1. **Hero** — Full-screen with portrait, name, tagline, CTA buttons
2. **Artistic Profile** — Bio, multilingual info, key themes
3. **Projects** — Khalil Briki Octet, Swing Safado, Igara Silva, Banda El Said, Brazilian Jazz Scene
4. **Festivals** — Savassi Jazz, BDMG, BH Instrumental, SESC, CCBB, Fartura, Minas Tênis
5. **Education** — Teaching areas (musicalisation, bass technique, improvisation, etc.)
6. **Media** — YouTube/Spotify placeholders, press photos, press kit
7. **Contact** — Email, Instagram, WhatsApp

## Features
- Smooth scroll navigation with sticky navbar
- Fade-in scroll animations via Framer Motion
- Ambient sand particle canvas effect
- Parallax hero section
- Afro-futuristic geometric pattern overlay
- Responsive design (mobile-first)
- Dark theme default

## Running
- `npm run dev` starts the Express + Vite dev server on port 5000
