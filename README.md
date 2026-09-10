# GW Pacific Website

GW Pacific corporate website prototype. The visual system is based on the supplied GW Pacific logo and is structured for later conversion into a GNUBOARD/PHP theme.

## Brand system

- GW Red: `#E60012`
- Pacific Blue: `#00A0E9`
- White / light gray dominant layout
- Dark charcoal used only for typography and the contact/footer section
- Vector logo: `assets/img/gwpacific-logo.svg`

## Stack

- PHP-ready HTML structure
- Static HTML preview
- CSS3 responsive layout
- Vanilla JavaScript
- Swiper 11
- GSAP + ScrollTrigger (lightweight reveal only)
- Google Fonts: Inter / Noto Sans KR

## Current homepage structure

1. Split hero + image slider
2. Company introduction
3. How We Work
4. Business
5. Selected Projects
6. Network & Experience
7. Contact CTA

`INDUSTRIES`, `PLATFORM`, and `INSIGHTS` are intentionally excluded. ABOUT is focused on company introduction only.

## Preview without PHP

Open `index.html` directly, or use VS Code Live Server.

```text
index.html
```

No PHP installation is required for this design-preview file.

## PHP preview

If PHP is installed:

```bash
php -S localhost:8080
```

Then open `http://localhost:8080`.

## Directory

```text
/
├─ index.html          # static design preview
├─ index.php           # PHP-ready homepage
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

The prototype deliberately avoids scroll-jacking. Browser-native vertical scrolling is preserved.

Included:
- Swiper hero slider with manual navigation and restrained autoplay
- Swiper project carousel
- GSAP/ScrollTrigger one-time reveal transitions
- Sticky responsive header
- Full-screen mobile navigation
- `prefers-reduced-motion` fallback

Removed from the first prototype:
- Lenis smooth-scroll override
- Scroll-driven scrub/parallax effects
- Custom cursor
- Magnetic button movement
- Business hover accordion
- Forced horizontal scroll interactions

This keeps the interaction layer closer to a production corporate website and improves mouse-wheel, trackpad, touch and mobile scrolling behavior.

## Image note

The current prototype uses external Unsplash images as temporary placeholders. Production should replace them with GW Pacific-owned project, exhibition, meeting and industrial photographs.

## GNUBOARD conversion plan

After the visual direction is approved, the next phase can split the prototype into a GNUBOARD theme:

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
