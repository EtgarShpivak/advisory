# Landing Page Redesign (index2.html) — Design Doc

**Date:** 2026-03-15
**Status:** Approved
**Approach:** Premium Brand — Editorial, magazine-style

## Overview

Redesign the advisory landing page as a standalone HTML file (`index2.html`). Keep all content context but make it shorter, more scannable, and visually premium. Editorial magazine aesthetic — large typography, generous whitespace, subtle interactions.

## Visual Direction

**Palette:**
- Dark: `#0b1120` (deep navy)
- Light: `#f7f5f0` (warm off-white)
- Accent: `#c9a84c` (warm gold)
- Text dark: `#e8e4dc`, Text light: `#1c1c1c`
- Muted: `#7a8594` / `#6b7280`

**Typography:**
- Headlines: `DM Serif Display` or `Instrument Serif`
- Body: `Inter`
- Code/output: `JetBrains Mono`

**Layout:**
- Full-width alternating dark/light sections
- Large headlines (5-7rem desktop)
- 120-160px section padding
- Max content width ~900px
- No navigation bar
- Sticky floating CTA pill

## Section Flow

1. **Hero** — Full-screen dark, abstract generated background, single headline + subline + CTA
2. **Social Proof Bar** — Testimonial snippet with name, thin trust strip
3. **Problem** — Large editorial type, 3 punchy pain points
4. **How It Works** — 3 large numbered steps, minimal text, callout bar
5. **About** — Large photo, short bio (2-3 lines), credentials as icon+number strip, stats row
6. **What We Work On** — Accordion (7 items), titles visible, expand for details
7. **Is This For You** — For/not-for grid, tightened copy
8. **Testimonials** — 2-3 large editorial quotes stacked vertically
9. **Pricing** — Dark section, large price, checklist, single CTA
10. **Contact** — Name + email + message form, WhatsApp secondary
11. **Footer** — Podcast link only

## Interactive Elements

- Accordion for "What We Work On"
- Sticky floating CTA (pill bottom-right, full-width bar on mobile)
- Fade-in on scroll
- Smooth anchor scrolling

## Generated Images

1. Hero background — abstract golden geometric planes on deep navy, 1920x1080
2. Optional section accent — warm gold abstract texture, 1920x200

## Mobile

- clamp() for responsive typography
- Accordion native mobile interaction
- Full-width sticky bottom bar
- 48px min touch targets

## SEO

- Keep JSON-LD, OG tags, meta tags
- Semantic HTML5
- Proper heading hierarchy
- Image alt tags
