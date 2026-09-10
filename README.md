# GW Pacific Website

GW Pacific corporate website prototype. The current phase focuses on the visual system and homepage interaction layer before converting the layout into a full GNUBOARD theme.

## Stack

- PHP-ready HTML structure
- CSS3 responsive layout
- Vanilla JavaScript
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Swiper 11
- Google Fonts: Manrope / Noto Sans KR

## Current homepage structure

1. Hero slider
2. About GW Pacific
3. How We Work
4. Business
5. Featured Projects
6. Network & Experience
7. Contact CTA / inquiry drawer

The requested `INDUSTRIES`, `PLATFORM`, and `INSIGHTS` sections are intentionally excluded. ABOUT is kept focused on the company introduction.

## Run locally

PHP built-in server:

```bash
php -S localhost:8080
```

Then open `http://localhost:8080`.

A regular Apache/Nginx PHP host can also serve the project without a build step.

## Directory

```text
/
├─ index.php
└─ assets/
   ├─ css/
   │  └─ style.css
   └─ js/
      └─ main.js
```

## Interaction features

- Full-screen autoplay hero with fade transitions
- GSAP text entrance and ScrollTrigger reveal animations
- Scroll-driven process progress line
- Lenis smooth scrolling
- Interactive business accordion with image crossfade
- Swiper project carousel
- Custom desktop cursor and subtle magnetic CTA interactions
- Responsive mobile navigation
- Slide-in project inquiry panel
- `prefers-reduced-motion` accessibility fallback

## Image note

The prototype currently uses external Unsplash imagery as temporary design assets. For production, replace these with GW Pacific's own project, exhibition, meeting, and industrial photographs under a local assets directory.

## GNUBOARD conversion plan

The next implementation phase should split the prototype into a GNUBOARD theme structure, for example:

```text
/theme/gwpacific/
├─ head.php
├─ tail.php
├─ index.php
├─ css/
├─ js/
└─ skin/
   └─ board/
      ├─ project/
      └─ inquiry/
```

Recommended admin-managed fields for the project board include project name, English title, year, country/city, service category, thumbnail/gallery, featured flag, ordering value, and project description.
