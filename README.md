# GW Pacific Website

GW Pacific corporate website prototype. The visual system is based on the supplied GW Pacific logo and is structured for later conversion into a GNUBOARD/PHP theme.

## Brand system

- GW Red: `#E60012`
- Pacific Blue: `#00A0E9`
- White / light gray dominant layout
- Dark charcoal used for high-contrast sections
- Vector logo: `assets/img/gwpacific-logo.svg`

## Design study

The current homepage was rebuilt after reviewing 20+ corporate and digital-product references across maritime, energy, engineering, consulting and modern frontend product sites.

Representative references included Wärtsilä, DNV, Kongsberg Maritime, Damen, Alfa Laval, Rolls-Royce, Siemens Energy, ABB, Jacobs, Worley, Saipem, TechnipFMC, Emerson, Honeywell, Schneider Electric, SLB, BCG, McKinsey, Vercel, Linear and Stripe.

The prototype does not copy a single reference. It combines:

- industrial photography and project-led storytelling
- large editorial typography
- asymmetric grid composition
- strong but controlled corporate brand color
- technical UI details inspired by modern frontend/product websites
- subtle borders, coordinates, status labels and data surfaces
- restrained motion that does not interfere with native scrolling

The requested `Next.js-like` feeling is interpreted as a modern frontend design language rather than migrating the project to React/Next.js. The implementation remains PHP/HTML/CSS/JS-ready.

## Stack

- Shared static HTML prototype
- PHP entry point (`index.php` serves `index.html`)
- CSS3 responsive layout
- Vanilla JavaScript
- Swiper 11
- GSAP + ScrollTrigger for lightweight reveals only
- Google Fonts: Inter / Noto Sans KR

## Current homepage structure

1. High-density split hero / industrial image slider
2. Company introduction
3. Continuous business-development process
4. Capability / business grid
5. Selected project carousel
6. Global network / experience visual
7. Contact CTA

`INDUSTRIES`, `PLATFORM`, and `INSIGHTS` are intentionally excluded. ABOUT remains focused on company introduction.

## Preview without PHP

Open `index.html` directly or use VS Code Live Server. No PHP installation is required for design review.

## PHP preview

If PHP is installed:

```bash
php -S localhost:8080
```

Then open `http://localhost:8080`.

## Directory

```text
/
├─ index.html
├─ index.php
├─ README.md
└─ assets/
   ├─ css/
   │  └─ style.css
   ├─ img/
   │  └─ gwpacific-logo.svg
   └─ js/
      └─ main.js
```

## Interaction policy

Browser-native vertical scrolling is preserved. No Lenis, scroll-jacking, forced horizontal scrolling, custom cursor or magnetic movement is used.

Included:

- Swiper hero slider with restrained autoplay and manual navigation
- Swiper project carousel
- top-of-page scroll progress indicator
- GSAP/ScrollTrigger one-time text and image-mask reveals
- one-time process-line animation
- sticky responsive navigation and active-section state
- full-screen mobile navigation
- `prefers-reduced-motion` fallback

## Image note

The prototype currently uses external Unsplash imagery as temporary layout assets. Production should replace these with GW Pacific-owned exhibition, buyer meeting, industrial-site and project photography.

## GNUBOARD conversion plan

After visual approval, the prototype can be split into a GNUBOARD theme structure:

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

Projects can then be managed through a dedicated GNUBOARD board skin and rendered automatically on the homepage.
