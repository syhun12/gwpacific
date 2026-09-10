# GW Pacific Website

GW Pacific corporate website prototype. The visual system is based on the supplied GW Pacific logo and is structured for later conversion into a GNUBOARD/PHP theme.

## Brand system

- GW Red: `#E60012`
- Pacific Blue: `#00A0E9`
- White / light gray dominant layout
- Dark charcoal used for high-contrast sections
- Vector logo: `assets/img/gwpacific-logo.svg`

## Design study

The current design direction was rebuilt after reviewing 20+ corporate and digital-product references across maritime, energy, engineering, consulting and modern frontend product sites.

Representative references included Wärtsilä, DNV, Kongsberg Maritime, Damen, Alfa Laval, Rolls-Royce, Siemens Energy, ABB, Jacobs, Worley, Saipem, TechnipFMC, Emerson, Honeywell, Schneider Electric, SLB, BCG, McKinsey, Vercel, Linear and Stripe.

The prototype combines industrial photography, large editorial typography, asymmetric grids, restrained corporate color, technical UI details, subtle data surfaces and lightweight motion. The requested `Next.js-like` feeling is treated as a visual/frontend design language rather than a migration to React/Next.js.

## Stack

- Static HTML design previews
- PHP entry points for every page
- CSS3 responsive layout
- Vanilla JavaScript
- Swiper 11
- GSAP + ScrollTrigger for lightweight reveals
- Google Fonts: Inter / Noto Sans KR

## Full page architecture

The site is no longer homepage-only. Current pages are:

```text
/
├─ index.html
├─ index.php
├─ about.html
├─ about.php
├─ business.html
├─ business.php
├─ projects.html
├─ projects.php
├─ project-detail.html
├─ project-detail.php
├─ contact.html
├─ contact.php
├─ README.md
└─ assets/
   ├─ css/
   │  ├─ style.css
   │  └─ subpage.css
   ├─ img/
   │  └─ gwpacific-logo.svg
   └─ js/
      └─ main.js
```

### Main

1. High-density split hero / industrial image slider
2. Company introduction
3. Continuous business-development process
4. Capability / business grid
5. Selected project carousel
6. Global network / experience visual
7. Contact CTA

### About

- Company introduction only
- Corporate positioning
- Operating approach
- Analysis / Connection / Execution philosophy

### Business

- B2B Business Development
- Market Research & Consulting
- Exhibition & Business Event
- Digital Marketing
- Detailed service scopes and workflow

### Projects

- Editorial project portfolio grid
- INAMARINE 2026
- SMM Hamburg 2026
- GASTECH 2025
- WeBUSAN

### Project Detail

Reusable project case-study template containing:

- large project hero
- location / year / field / scope information
- project overview
- work scope
- pre-show / on-site / post-show process

This page is intended to become the GNUBOARD project-board view skin later.

### Contact

- company and business contact information
- project inquiry guidance
- product / target / objective intake structure

`INDUSTRIES`, `PLATFORM`, and `INSIGHTS` remain intentionally excluded. ABOUT remains focused on company introduction only.

## Navigation

Primary navigation on the homepage now routes to the full subpages. In-page CTA buttons can still move directly to homepage sections where appropriate.

## Preview without PHP

Open any `.html` file directly or use VS Code Live Server. No PHP installation is required for design review.

Examples:

```text
index.html
about.html
business.html
projects.html
project-detail.html
contact.html
```

## PHP preview

If PHP is installed:

```bash
php -S localhost:8080
```

Then use the corresponding PHP routes such as `/about.php`, `/business.php`, `/projects.php` and `/contact.php`.

## Responsive behavior

The main page and every subpage are designed for desktop, tablet and mobile. Grid layouts collapse into single-column editorial layouts, project cards change from two-column to one-column, business scopes stack vertically and project metadata reorganizes for small screens.

## Interaction policy

Browser-native vertical scrolling is preserved. No Lenis, scroll-jacking, forced horizontal scrolling, custom cursor or magnetic movement is used.

Included:

- Swiper hero slider with restrained autoplay and manual navigation
- Swiper project carousel
- top-of-page scroll progress indicator
- GSAP/ScrollTrigger one-time text and image-mask reveals
- sticky responsive navigation
- full-screen mobile navigation
- `prefers-reduced-motion` fallback

## Image note

The prototype currently uses external Unsplash imagery as temporary layout assets. Production should replace these with GW Pacific-owned exhibition, buyer meeting, industrial-site and project photography.

## GNUBOARD conversion plan

After visual approval, the HTML/PHP prototypes can be split into a shared GNUBOARD theme structure:

```text
/theme/gwpacific/
├─ head.php
├─ tail.php
├─ index.php
├─ page/
│  ├─ about.php
│  ├─ business.php
│  └─ contact.php
├─ css/
├─ js/
└─ skin/
   └─ board/
      ├─ project-list/
      ├─ project-view/
      └─ inquiry/
```

Projects will then be managed through a GNUBOARD board and rendered automatically on the project list, detail page and homepage selected-project area.
