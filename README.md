# GW Pacific Website

GW Pacific corporate website prototype for later GNUBOARD/PHP conversion.

## Current design direction

The site was redesigned to reduce visual complexity and improve readability. Instead of a product-startup or AI-generated landing-page style, the current direction uses a conventional high-quality corporate website structure:

- large but simple photographic hero
- strong Korean headline hierarchy
- white / light-gray content surfaces
- Pacific Blue as the primary UI accent
- GW Red as a restrained secondary accent
- clear 3-column/2-column content grids
- native browser scrolling
- limited motion only for hero transitions and one-time section reveals
- no scroll-jacking, custom cursor, magnetic buttons, horizontal-scroll tricks, or excessive technical decoration

## Core service positioning

The website is centered on six service areas:

1. B2B 마케팅 / B2B Marketing
2. 고객 발굴 / Customer Development
3. 시장 조사 / Market Research
4. 행사 대행 / Exhibition & Event
5. 기술 사업화 / Technology Commercialization
6. 바우처 수행 / Export Voucher

The export-voucher role is also highlighted separately on the homepage as an important business area.

## Information architecture

```text
HOME
├─ ABOUT
│  └─ 기업소개
├─ BUSINESS
│  ├─ B2B 마케팅
│  ├─ 고객 발굴
│  ├─ 시장 조사
│  ├─ 행사 대행
│  ├─ 기술 사업화
│  └─ 바우처 수행
├─ PORTFOLIO
│  ├─ 수행내역 목록
│  └─ 수행내역 상세
└─ CONTACT
   ├─ 사업문의
   └─ 회사소개서
```

No Insights, News, PR-material archive, platform page, or industry page is included in this version.

## Portfolio privacy policy

Public portfolio pages intentionally do **not** disclose client-company or ordering-institution names.

Portfolio content is structured around:

- year
- region
- project type
- service scope
- execution process
- publicly shareable outcomes

The detail template labels the client as `Confidential` and avoids identifiable customer information.

## Pages

```text
index.html              # homepage static preview
index.php               # PHP entry, serves index.html
about.html              # company introduction
about.php                # PHP entry
business.html           # six service areas
business.php             # PHP entry
projects.html           # anonymized portfolio list
projects.php              # PHP entry
project-detail.html     # anonymized case-study template
project-detail.php       # PHP entry
contact.html            # inquiry + company profile CTA
contact.php               # PHP entry
```

## Assets

```text
assets/
├─ css/
│  ├─ style.css
│  └─ subpage.css
├─ img/
│  └─ gwpacific-logo.svg
└─ js/
   └─ main.js
```

## Interaction

- Swiper 11 is used only on the homepage hero.
- GSAP + ScrollTrigger are used only for small, one-time reveal transitions.
- Native vertical scrolling is preserved.
- `prefers-reduced-motion` is supported.
- Mobile navigation is responsive and full-screen.
- The portfolio is a normal responsive grid instead of a forced carousel.

## Design reference study

The redesign direction was informed by reviewing more than 20 corporate sites and GDWEB-selected corporate works, especially manufacturing, heavy industry, engineering, technology and holding-company websites.

Reference set included examples such as:

- Hyosung Heavy Industries
- Hyosung Advanced Materials
- Hyosung TNC
- Hyosung Group
- Sebang Group
- SK Networks
- DL Holdings
- Hanwha Ocean
- Doosan Enerbility
- HDC Labs
- Doosan Digital Innovation
- Next Aerospace
- Partron
- Nifco Korea
- Youyang
- Euhan Flowtech
- HCT
- Dongsung Chemical
- Dongsung Finetec
- KTS Engineering
- Sunil Electric
- WonKang Metal
- SIMPAC KDA
- Hanbit Industry
- Korea Electric/industrial references listed on GDWEB
- GST and other recent manufacturing references

The common design lessons applied here are clarity, strong photography, restrained brand color, simple navigation, large readable typography, and service/project information that can be understood without decorative UI.

## Preview

Without PHP, open `index.html` directly or use VS Code Live Server.

With PHP installed:

```bash
php -S localhost:8080
```

Then open `http://localhost:8080`.

## Prototype placeholders

The current images are temporary Unsplash assets used to establish layout. Production should replace them with GW Pacific-owned exhibition, meeting, research, industrial-site and business-development photographs.

The `회사소개서` buttons currently show a placeholder message. Connect the actual PDF when the file is ready.

The contact form is also a visual prototype. During GNUBOARD conversion it should be connected to a dedicated inquiry board or mail module.

## GNUBOARD conversion target

After design approval, split the static prototype into a theme structure such as:

```text
/theme/gwpacific/
├─ head.php
├─ tail.php
├─ index.php
├─ css/
├─ js/
└─ skin/
   └─ board/
      ├─ portfolio/
      └─ inquiry/
```

Portfolio posts can then be managed from GNUBOARD while enforcing anonymous public display fields.
