# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DevNexus is a **single-page agency website** for a web development agency based in Pune, India. It is a static site built with vanilla HTML, CSS, and JS — no build tools, no frameworks, no package manager.

## Tech Stack

- **HTML/CSS/JS only** — no React, no bundler, no npm
- **Fonts**: Bebas Neue (display headings) + DM Sans (body) via Google Fonts import in CSS
- **CSS variables** defined in `:root` of `style.css` — dark theme with lime accent (`#C8FF00`)
- **Contact form** uses Web3Forms API (already has an access key embedded)
- Open `index.html` directly in a browser to preview — no dev server needed

## Architecture

Three files make up the entire site:

- `index.html` — All sections in one file: nav, hero, marquee, about, services, work/portfolio, process, team, reviews, articles, connect/CTA, footer, bottom marquee
- `style.css` — All styling; uses CSS custom properties, minified class names (`.rv`, `.svc-card`, `.rev-card`, etc.), and `@keyframes` for animations
- `script.js` — Minified/compact vanilla JS handling: custom cursor (`#cd`/`#cr`), navbar scroll, mobile menu toggle (`#nt`/`#nl`), IntersectionObserver-based reveal (`.rv` → `.vis`), stat counter animation (`.stat-num[data-t]`), parallax hero grid, 3D card tilt on hover

## Key Conventions

- **CSS class naming** uses short abbreviated names: `.rv` (reveal), `.svc-card` (service card), `.rev-card` (review card), `.sec-white`/`.sec-dark` (section backgrounds), `.p-step` (process step), `.btn-lime`/`.btn-ghost` (buttons)
- **JS element IDs** are also abbreviated: `cd` (cursor dot), `cr` (cursor ring), `nl` (nav links), `nt` (nav toggle)
- **Reveal animation**: elements with class `.rv` get `.vis` added via IntersectionObserver when scrolled into view
- **Stat counters**: elements with `.stat-num` and `data-t="<target>"` animate from 0 to target on scroll
- **Marquee**: uses duplicated `.marquee-content` divs (one with `aria-hidden="true"`) for seamless infinite scroll via CSS `@keyframes`

## Images

Team photos and project screenshots are stored as WhatsApp-exported JPEGs and PNGs directly in the root directory. Key image references in the HTML:
- `WhatsApp Image 2026-03-20 at 11.09.12 AM.jpeg` — Founder (Satish Gond)
- `WhatsApp Image 2026-04-05 at 2.24.42 PM.jpeg` — Team member (Sahil Patil)
- `WhatsApp Image 2026-04-05 at 3.33.29 PM.jpeg` — Team member (Priya Sharma)
- `WhatsApp Image 2026-04-05 at 3.55.45 PM.jpeg` — Team member (Sneha Kulkarni)
- `WhatsApp Image 2026-04-05 at 4.00.12 PM.jpeg` / `(1).jpeg` — Portfolio project screenshots
- `about-agency.png`, `article.png`, `stones.png` — Section images

## Live Project Links

- BookBazar: https://bookbazar.store/
- Coaching Dashboard: https://rainbow-marshmallow-509136.netlify.app/

## Design Direction

The design follows a PixelForge/modern agency aesthetic:
- **Dark background** (`#0A0A0A`) with **lime/neon green accent** (`#C8FF00`)
- Bold uppercase Bebas Neue headings, generous whitespace
- "VIEW MORE" rotated lime badges on section headers
- Custom dot cursor with trailing ring (hidden on mobile via media query)
- Glass-morphism cards, 3D tilt hover effects, IntersectionObserver reveals
- White sections (`.sec-white`) alternate with dark sections (`.sec-dark`)
