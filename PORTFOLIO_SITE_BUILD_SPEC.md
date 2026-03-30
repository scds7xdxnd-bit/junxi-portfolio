# PORTFOLIO_SITE_BUILD_SPEC.md

**Subject:** Junxi — Boxer / Fashion Creative
**Author:** Opus 4.6 architectural spec
**Consumer:** Sonnet 4.6 (execute file-by-file, zero improvisation)
**Date:** 2026-03-30

---

## 0. Build Philosophy & Constraints

### What This Site IS

A curated visual space for a young male creative (early 20s, East Asian) who trains boxing/muay thai seriously and dresses in dark avant-garde fashion. The site communicates identity through photography — not words, not credentials, not social proof. It is a gallery in a converted warehouse: raw surfaces, precise lighting, deliberate emptiness.

### What This Site IS NOT

- Not a résumé or CV
- Not a blog or writing platform
- Not a social media feed clone
- Not a freelancer "hire me" page
- Not an e-commerce store
- Not a tech demo or framework showcase

### Emotional Target

Controlled intensity. Quiet confidence. The person who walks into a room and doesn't need to introduce themselves. The tension between fighting discipline and fashion sensibility IS the design — brutalist structure holding beautiful content.

### Subject Visual Identity → Design Rules

| Identity trait | Design rule |
|---|---|
| All-black wardrobe dominant | Near-black background (#0a0a0a), never pure black |
| Avant-garde boots, silver accessories | Sharp edges, no border-radius on images, metallic accents rare |
| Boxing gym calligraphy (洪协) | Chinese characters acceptable as section titles |
| Waterfront night photography | Moody, low-key lighting feel — no bright UI elements |
| White sculptural gel nails | Warm off-white (#f0ede8) reserved for rare highlight moments |
| Lean athletic build, controlled posture | Generous whitespace, nothing cramped, every element earns its place |
| Venum gear, Tony Jaa gloves | Equipment is identity — detail shots treated as editorial, not product |
| Wolf cut / layered mullet | Textural, layered — reflected in overlapping grid layouts |

---

## 1. Stack Decision

### Decision: Plain HTML / CSS / JS

**Justification:**

1. **Zero build tooling.** The site is a single page with 5 sections, ~23 images, and one lightbox interaction. There is no routing, no dynamic content, no CMS, no API calls. A framework adds complexity with zero benefit.

2. **Maximum performance.** No JavaScript framework overhead. No hydration. No bundle splitting needed. The browser loads one HTML file, one CSS file, one JS file. Lighthouse 100 is trivially achievable on code — the bottleneck will be images alone.

3. **Pure craftsmanship.** This is a portfolio for a creative. The code should reflect the same intentionality as the design. Hand-written CSS custom properties, semantic HTML landmarks, vanilla JS intersection observers. No abstractions between intent and output.

4. **Deployment simplicity.** Vercel serves static files with zero configuration. Drop files, deploy. No build step, no `next.config.js`, no `astro.config.mjs`.

5. **Maintainability.** Anyone can read and edit three files. No dependency updates, no breaking changes from upstream frameworks.

### File Structure

```
portfolio_junxi/
├── index.html              (single page, all sections)
├── styles.css              (all styles, CSS custom properties)
├── script.js               (lightbox, nav scroll, animations, mobile menu)
├── images/
│   ├── boxing/
│   │   ├── boxing-gym-mirror-guard.webp
│   │   ├── boxing-gym-mirror-guard.jpg        (fallback)
│   │   ├── boxing-hand-wrap-trainer.webp
│   │   ├── boxing-hand-wrap-trainer.jpg
│   │   ├── boxing-hand-wrap-close.webp
│   │   ├── boxing-hand-wrap-close.jpg
│   │   ├── boxing-trainer-pads.webp
│   │   ├── boxing-trainer-pads.jpg
│   │   ├── boxing-post-session.webp
│   │   ├── boxing-post-session.jpg
│   │   ├── boxing-guard-stance.webp
│   │   ├── boxing-guard-stance.jpg
│   │   ├── boxing-gym-wide.webp
│   │   ├── boxing-gym-wide.jpg
│   │   ├── boxing-ring-action.webp
│   │   ├── boxing-ring-action.jpg
│   │   ├── boxing-cooldown.webp
│   │   ├── boxing-cooldown.jpg
│   │   ├── boxing-gloves-detail.webp
│   │   └── boxing-gloves-detail.jpg
│   ├── fashion/
│   │   ├── fashion-candlelight.webp
│   │   ├── fashion-candlelight.jpg
│   │   ├── fashion-hotel-room.webp
│   │   ├── fashion-hotel-room.jpg
│   │   ├── fashion-airport.webp
│   │   ├── fashion-airport.jpg
│   │   ├── fashion-salon-back.webp
│   │   ├── fashion-salon-back.jpg
│   │   ├── fashion-beanie-turtleneck.webp
│   │   └── fashion-beanie-turtleneck.jpg
│   ├── night/
│   │   ├── night-harbor-skyline.webp
│   │   ├── night-harbor-skyline.jpg
│   │   ├── night-camo-beanie.webp
│   │   ├── night-camo-beanie.jpg
│   │   ├── night-profile-silhouette.webp
│   │   └── night-profile-silhouette.jpg
│   ├── detail/
│   │   ├── detail-nails-white.webp
│   │   ├── detail-nails-white.jpg
│   │   ├── detail-gloves-tony-jaa.webp
│   │   ├── detail-gloves-tony-jaa.jpg
│   │   ├── detail-boots-racer.webp
│   │   └── detail-boots-racer.jpg
│   ├── lifestyle/
│   │   ├── lifestyle-ceramics-market.webp
│   │   ├── lifestyle-ceramics-market.jpg
│   │   ├── lifestyle-salon-mirror.webp
│   │   └── lifestyle-salon-mirror.jpg
│   └── og-image.jpg            (1200×630, for Open Graph)
├── favicon.svg                 (monochrome, letter "J" abstract mark)
├── robots.txt
├── sitemap.xml
└── vercel.json
```

---

## 2. Design System

### 2.1 CSS Custom Properties (complete — copy-paste into `:root`)

```css
:root {
  /* ─── Colors ─── */
  --color-bg:              #0a0a0a;
  --color-surface:         #141414;
  --color-surface-elevated:#1a1a1a;
  --color-text-primary:    #e8e4e0;
  --color-text-secondary:  #8a8580;
  --color-accent:          #c43e2a;
  --color-accent-muted:    rgba(196, 62, 42, 0.15);
  --color-white-nail:      #f0ede8;
  --color-border:          rgba(232, 228, 224, 0.08);

  /* ─── Typography: Families ─── */
  --font-display:          'Cormorant Garamond', Georgia, serif;
  --font-body:             'Manrope', system-ui, sans-serif;
  --font-mono:             'JetBrains Mono', 'Courier New', monospace;

  /* ─── Typography: Sizes (fluid) ─── */
  --text-xs:               clamp(0.6875rem, 0.6rem + 0.25vw, 0.8125rem);   /* 11-13px */
  --text-sm:               clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);      /* 12-14px */
  --text-base:             clamp(0.9375rem, 0.875rem + 0.25vw, 1.0625rem); /* 15-17px */
  --text-lg:               clamp(1.125rem, 1rem + 0.5vw, 1.375rem);        /* 18-22px */
  --text-xl:               clamp(1.5rem, 1.25rem + 1vw, 2.25rem);          /* 24-36px */
  --text-2xl:              clamp(2rem, 1.5rem + 2vw, 3.5rem);              /* 32-56px */
  --text-hero:             clamp(3rem, 2rem + 5vw, 6rem);                  /* 48-96px */

  /* ─── Typography: Weights ─── */
  --weight-light:          300;
  --weight-regular:        400;
  --weight-medium:         500;
  --weight-semibold:       600;

  /* ─── Typography: Tracking ─── */
  --tracking-tight:        -0.03em;
  --tracking-tighter:      -0.05em;
  --tracking-normal:       0.01em;
  --tracking-wide:         0.08em;

  /* ─── Typography: Line Height ─── */
  --leading-tight:         1.1;
  --leading-snug:          1.3;
  --leading-normal:        1.6;

  /* ─── Spacing (8px base) ─── */
  --space-1:               0.25rem;   /* 4px */
  --space-2:               0.5rem;    /* 8px */
  --space-3:               0.75rem;   /* 12px */
  --space-4:               1rem;      /* 16px */
  --space-6:               1.5rem;    /* 24px */
  --space-8:               2rem;      /* 32px */
  --space-12:              3rem;      /* 48px */
  --space-16:              4rem;      /* 64px */
  --space-24:              6rem;      /* 96px */
  --space-32:              8rem;      /* 128px */
  --space-48:              12rem;     /* 192px */

  /* ─── Layout ─── */
  --max-width:             1440px;
  --gutter:                1.5rem;    /* 24px mobile, override at breakpoints */
  --nav-height:            3.5rem;    /* 56px mobile */
  --nav-height-desktop:    4rem;      /* 64px */

  /* ─── Motion ─── */
  --ease-out:              cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-soft:         cubic-bezier(0.33, 1, 0.68, 1);
  --duration-fast:         0.2s;
  --duration-normal:       0.4s;
  --duration-slow:         0.6s;

  /* ─── Radius ─── */
  --radius-none:           0;
  --radius-sm:             2px;
  --radius-pill:           9999px;

  /* ─── Shadows ─── */
  --shadow-nav:            0 1px 0 var(--color-border);

  /* ─── Nav scrolled ─── */
  --nav-bg-scrolled:       rgba(10, 10, 10, 0.85);
  --nav-blur:              blur(12px);

  /* ─── Z-index ─── */
  --z-nav:                 100;
  --z-mobile-menu:         200;
  --z-lightbox:            300;
}

/* ─── Breakpoint overrides ─── */
@media (min-width: 768px) {
  :root {
    --gutter: 2rem;        /* 32px tablet */
  }
}
@media (min-width: 1024px) {
  :root {
    --gutter: 3rem;        /* 48px desktop */
  }
}
```

### 2.2 Typography Decisions

**Display Font: Cormorant Garamond**
- Source: Google Fonts
- Why: The most editorial serif of the candidates. Has an excellent true italic (not oblique). High-contrast letterforms render beautifully at 72px+ on dark backgrounds. Feels luxury-editorial, not corporate. The light weight (300) at display sizes creates elegant thin strokes that echo the "controlled intensity" energy.
- Weights loaded: 300, 300 italic, 400, 400 italic
- Usage: Hero name, section titles, pull quotes. NEVER body text.
- Tracking: `--tracking-tight` (-0.03em) at `--text-2xl`, `--tracking-tighter` (-0.05em) at `--text-hero`

**Body Font: Manrope**
- Source: Google Fonts
- Why: Geometric sans with warmth — the rounded terminals prevent clinical sterility while the geometric structure keeps it modern. Excellent numeric glyphs for metadata. Pairs with Cormorant Garamond through contrast (humanist serif + geometric sans). Variable font available for optimal file size.
- Weights loaded: 400, 500, 600
- Usage: Body text, navigation, labels, buttons, metadata
- Tracking: `--tracking-normal` (0.01em) body, `--tracking-wide` (0.08em) uppercase labels

**Monospace: JetBrains Mono**
- Source: Google Fonts
- Weights loaded: 400
- Usage: Dates, metadata captions ("Guangzhou, 2025"), scroll indicator text, copyright line

### 2.3 Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Manrope:wght@400;500;600&family=JetBrains+Mono&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Manrope:wght@400;500;600&family=JetBrains+Mono&display=swap">
```

All fonts use `font-display: swap` (handled by Google Fonts `&display=swap` parameter).

---

## 3. Photo Manifest

Every image used on the site. Sonnet must use these exact filenames as placeholder paths. Actual image files will be provided separately and optimized per the pipeline in Section 6.

| # | Filename (no extension) | Category | Suggested Placement | Alt Text Draft | Aspect |
|---|---|---|---|---|---|
| 1 | `boxing-gym-mirror-guard` | boxing | Boxing gallery — large hero image (8/12 cols) | Junxi in guard stance reflected in a boxing gym mirror, Chinese calligraphy banners visible on walls | portrait |
| 2 | `boxing-hand-wrap-trainer` | boxing | Boxing gallery — medium (4/12 cols, row 2 left) | Trainer wrapping Junxi's hands before a session, gym equipment in background | landscape |
| 3 | `boxing-hand-wrap-close` | boxing | Boxing gallery — medium (4/12 cols, row 2 right) | Close-up of hands being wrapped with red hand wraps, focused and deliberate | square |
| 4 | `boxing-trainer-pads` | boxing | Boxing gallery — row 3 (4/12 cols, left) | Junxi throwing combinations on trainer's pads, mid-action | landscape |
| 5 | `boxing-post-session` | boxing | Boxing gallery — row 3 (4/12 cols, center) | Post-training peace sign in front of gym mirror, relaxed smile | portrait |
| 6 | `boxing-guard-stance` | boxing | Boxing gallery — row 3 (4/12 cols, right) | Tight guard stance front-on, Venum gear visible, intense focus | portrait |
| 7 | `boxing-gym-wide` | boxing | Boxing gallery — full-bleed row 4 (12/12 cols) | Wide shot of Chinese boxing gym interior, heavy bags and ring visible, red and gold accents | landscape |
| 8 | `boxing-ring-action` | boxing | Boxing gallery — optional additional row | Junxi in the ring during sparring, motion blur on gloves | landscape |
| 9 | `boxing-cooldown` | boxing | Boxing gallery — optional additional row | Seated cooldown on gym bench, towel over shoulders, catching breath | portrait |
| 10 | `boxing-gloves-detail` | boxing | Boxing gallery — detail accent (inline with row 2) | Tony Jaa Majestic 12oz boxing gloves close-up, red leather with gold branding | square |
| 11 | `fashion-candlelight` | fashion | About section — primary portrait (right side, 60% width) | Junxi in candlelight, sharp jawline and earrings highlighted, dark background | portrait |
| 12 | `fashion-hotel-room` | fashion | Style gallery — large image (7/12 cols) | Full-length mirror shot in hotel room, all-black outfit, silver accessories | portrait |
| 13 | `fashion-airport` | fashion | About section — secondary portrait (below primary or offset) | Airport departure hall, headphones on, compression tee, travel bag | landscape |
| 14 | `fashion-salon-back` | fashion | Style gallery — medium (5/12 cols) | Back view at salon showing wolf cut / layered mullet, fresh cut | portrait |
| 15 | `fashion-beanie-turtleneck` | fashion | Style gallery — medium (5/12 cols, row 2) | Dark beanie and turtleneck against muted background, silver chain visible | portrait |
| 16 | `night-harbor-skyline` | night | Style gallery — full-bleed divider (12/12 cols) | Night harbor panorama with city skyline reflections on water | landscape |
| 17 | `night-camo-beanie` | night | Style gallery — medium (6/12 cols) | Waterfront at night, camo military jacket and beanie, city lights behind | portrait |
| 18 | `night-profile-silhouette` | night | Hero section — background image (full-viewport) | Profile silhouette against harbor lights at night, sharp outline | portrait |
| 19 | `detail-nails-white` | detail | Style gallery — detail accent (4/12 cols) | Close-up of white sculptural gel nails, textured matte finish | square |
| 20 | `detail-gloves-tony-jaa` | detail | Boxing gallery — inline detail | Tony Jaa Majestic gloves resting on gym bench, red leather worn from training | landscape |
| 21 | `detail-boots-racer` | detail | Style gallery — detail accent (4/12 cols) | Racer × New Rock boots, avant-garde silhouette, dark leather | portrait |
| 22 | `lifestyle-ceramics-market` | lifestyle | Contact footer — closing image | Browsing ceramics at a market, hands reaching for a piece, natural light | landscape |
| 23 | `lifestyle-salon-mirror` | lifestyle | Style gallery — lifestyle accent | Salon mirror selfie, mid-haircut, relaxed expression | portrait |

### Hero Image Selection

**Primary hero:** `night-profile-silhouette` — the waterfront profile silhouette. Strongest opening statement: moody, cinematic, identity without face-forward confrontation. Loaded eagerly (no lazy-load).

### About Section Images

- **Primary:** `fashion-candlelight` — the candlelight portrait. Intimate, reveals face, warm tone.
- **Secondary:** `fashion-airport` — the airport shot. Environmental, shows lifestyle dimension.

---

## 4. Component Registry

Every file that Sonnet will create or modify:

| # | Name | Location | Responsibility | Max Lines |
|---|---|---|---|---|
| 1 | index.html | `/index.html` | Single-page HTML: all sections, semantic landmarks, meta tags, structured data, image markup | 450 |
| 2 | styles.css | `/styles.css` | All styles: reset, custom properties, typography, layout, components, animations, responsive, reduced-motion, print | 650 |
| 3 | script.js | `/script.js` | Lightbox, nav scroll behavior, mobile menu toggle, scroll-reveal animations (IntersectionObserver) | 200 |
| 4 | favicon.svg | `/favicon.svg` | Monochrome SVG favicon — abstract "J" lettermark | 10 |
| 5 | robots.txt | `/robots.txt` | Allow all crawlers, reference sitemap | 5 |
| 6 | sitemap.xml | `/sitemap.xml` | Single URL entry for the one-page site | 10 |
| 7 | vercel.json | `/vercel.json` | Cache headers for images, disable git auto-deploy | 15 |

**Total new files: 7**

---

## 5. Surface Specs

### 5.1 Navigation

**HTML:** `<header>` containing `<nav id="site-nav">` with `aria-label="Main navigation"`

**Structure:**
```
┌─────────────────────────────────────────────────┐
│  JUNXI (logo/name, left)     MENU LINKS (right) │
└─────────────────────────────────────────────────┘
```

**Layout rules:**
- Fixed position, top: 0, full width
- Height: `--nav-height` (56px mobile), `--nav-height-desktop` (64px desktop)
- Horizontal padding: `--gutter`
- Flexbox: `justify-content: space-between; align-items: center`
- `max-width: var(--max-width)` centered with auto margins

**Design tokens:**
- Background: `transparent` initially → `var(--nav-bg-scrolled)` on scroll (JS adds class `.nav--scrolled`)
- Backdrop filter on scrolled: `var(--nav-blur)` (blur 12px)
- Bottom border on scrolled: `var(--shadow-nav)`
- Transition: background `var(--duration-normal) var(--ease-out)`
- z-index: `var(--z-nav)`

**Logo/name (left):**
- Text: "JUNXI" in `--font-body`, `--weight-semibold`, `--text-sm`
- Letter-spacing: `--tracking-wide`
- Color: `--color-text-primary`
- Is an `<a href="#hero">` link

**Nav links (right, desktop only):**
- Links: "ABOUT", "TRAINING", "STYLE", "CONTACT"
- Font: `--font-body`, `--weight-medium`, `--text-xs`
- Letter-spacing: `--tracking-wide`
- Text-transform: uppercase
- Color: `--color-text-secondary` → `--color-text-primary` on hover
- Transition: color `var(--duration-fast) var(--ease-out)`
- Gap between links: `--space-8` (32px)

**Hamburger (mobile, < 1024px):**
- Button with `aria-label="Open menu"`, `aria-expanded="false"`
- Three horizontal lines, 20px wide, 2px thick, `--color-text-primary`
- Tap target: 44px × 44px minimum
- Toggles `.menu--open` on the mobile menu overlay

**Interaction:**
- Scroll detection: JS adds `.nav--scrolled` class when `window.scrollY > 50`
- Smooth scroll to sections on link click (CSS `scroll-behavior: smooth` on `<html>`, offset by nav height using `scroll-margin-top`)
- Active link highlighting: optional, via IntersectionObserver on sections

**Mobile behavior:** Logo left, hamburger right. Nav links hidden. Hamburger opens full-screen mobile menu (see Surface 5.10).

**Accessibility:**
- Skip link before nav: `<a href="#main-content" class="skip-link">Skip to content</a>`
- Skip link visually hidden, visible on focus
- All links have visible focus states: `outline: 2px solid var(--color-accent); outline-offset: 2px`

---

### 5.2 Landing Hero

**HTML:** `<section id="hero" class="hero" aria-label="Introduction">`

**Layout rules:**
- Full viewport height: `min-height: 100vh; min-height: 100svh` (safe viewport for mobile)
- CSS Grid: single column, content centered vertically and horizontally
- `position: relative` for background image layering
- Overflow hidden

**Background image:**
- `night-profile-silhouette` as a `<picture>` element inside the hero, positioned absolutely
- `object-fit: cover; object-position: center 20%` (keep face area visible)
- Dim overlay: `::after` pseudo-element with `background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 100%)`
- Image loaded eagerly: `loading="eager"` `decoding="async"`

**Content slots:**
- Name: "JUNXI" (decision: name-only hero, no tagline — maximum confidence, minimum words)
- Font: `--font-display`, `--weight-light` (300), `--text-hero` (clamp 48px–96px)
- Letter-spacing: `--tracking-tighter` (-0.05em)
- Color: `--color-text-primary`
- Text-align: center
- `text-shadow: 0 2px 40px rgba(0,0,0,0.5)` for legibility over image

**Scroll indicator:**
- Positioned at bottom center, `bottom: var(--space-8)`
- Text: "SCROLL" in `--font-mono`, `--text-xs`, `--color-text-secondary`
- Below text: SVG chevron (24×24, stroke `--color-text-secondary`, stroke-width 1.5)
- Animation: `translateY(0) → translateY(6px)`, 2s ease-in-out, infinite
- `aria-hidden="true"` (decorative)

**Mobile behavior:**
- Same layout, naturally responsive via `clamp()` font sizing
- `100svh` prevents address bar overlap on mobile browsers
- Scroll indicator hidden below 480px if viewport is short (`@media (max-height: 600px)`)

**Design tokens used:** `--color-bg`, `--color-text-primary`, `--color-text-secondary`, `--font-display`, `--font-mono`, `--text-hero`, `--text-xs`, `--weight-light`, `--tracking-tighter`, `--space-8`, `--ease-out-soft`

**Interaction:** None beyond scroll indicator animation. Hero is static presence, not performance.

---

### 5.3 About Section

**HTML:** `<section id="about" class="about">`

**Layout rules:**
- Desktop (≥1024px): CSS Grid, `grid-template-columns: 5fr 7fr` (asymmetric ~40% text / 60% image, favoring image)
- Tablet (≥768px): `grid-template-columns: 1fr 1fr` (50/50)
- Mobile (<768px): single column, image first, text below
- `max-width: var(--max-width)` centered
- Horizontal padding: `--gutter`
- Vertical padding: `--space-24` (96px) top and bottom
- Column gap: `--space-12` (48px)

**Content slots — Text (left column on desktop):**
- Section label: "ABOUT" in `--font-body`, `--weight-medium`, `--text-xs`, `--tracking-wide`, uppercase, `--color-accent`
- Heading: Short line in `--font-display`, `--weight-regular` (400), `--text-2xl`, `--color-text-primary`, italic
  - Example text (Sonnet must write final copy in this tone): *"I train. I dress how I want. I'm building something."*
- Body: 2–3 short paragraphs. `--font-body`, `--weight-regular`, `--text-base`, `--leading-normal`, `--color-text-secondary`
  - Tone: direct, first person, no fluff. No "passionate about" language. No corporate bio.
  - Content direction: boxing discipline, personal style as self-expression, current chapter of life. Keep it under 150 words total.
  - Placeholder: Sonnet writes contextually appropriate placeholder text matching this tone.

**Content slots — Images (right column on desktop):**
- Primary image: `fashion-candlelight` — full width of column, natural aspect ratio preserved
- Secondary image: `fashion-airport` — offset below primary, indented `--space-8` from left edge of column (creates asymmetry)
- Gap between images: `--space-6` (24px)
- Both wrapped in `<figure>` with `<figcaption>` (captions optional, in `--font-mono`, `--text-xs`, `--color-text-secondary`)

**Mobile behavior:**
- Single column, images stack above text
- Primary image full-bleed (negative margins to break out of padding)
- Secondary image contained within padding
- Text below with `--space-8` top margin

**Asymmetry rule:** This section satisfies the first asymmetric layout requirement. The 5fr/7fr split and offset secondary image break the centered-content pattern.

**Design tokens used:** `--color-bg`, `--color-accent`, `--color-text-primary`, `--color-text-secondary`, `--font-display`, `--font-body`, `--font-mono`, `--text-xs`, `--text-base`, `--text-2xl`, `--weight-regular`, `--weight-medium`, `--tracking-wide`, `--leading-normal`, `--space-6`, `--space-8`, `--space-12`, `--space-24`, `--gutter`

---

### 5.4 Boxing Gallery

**HTML:** `<section id="training" class="gallery gallery--boxing">`

**Section title:**
- Text: "THE GYM" in `--font-display`, `--weight-light`, `--text-2xl`, `--color-text-primary`
- Below (optional): "拳" in `--font-display`, `--text-xl`, `--color-text-secondary`, as a decorative sub-element
- Left-aligned, padding-left: `--gutter`
- Margin-bottom: `--space-12` (48px) before grid

**Layout rules — Editorial masonry grid:**
- `max-width: var(--max-width)` centered
- Horizontal padding: `--gutter`
- CSS Grid with explicit template areas (NOT auto-flow masonry)
- Gap: `--space-4` (16px)

**Desktop grid (≥1024px), 12 columns:**
```
Row 1: boxing-gym-mirror-guard     spans cols 1-8  (large hero)
        boxing-gloves-detail        spans cols 9-12 (detail accent)
Row 2: boxing-hand-wrap-trainer    spans cols 1-6  (medium)
        boxing-hand-wrap-close      spans cols 7-12 (medium)
Row 3: boxing-trainer-pads         spans cols 1-4  (equal third)
        boxing-post-session         spans cols 5-8  (equal third)
        boxing-guard-stance         spans cols 9-12 (equal third)
Row 4: boxing-gym-wide             spans cols 1-12 (full-bleed)
```

**Tablet grid (≥768px, <1024px), 6 columns:**
```
Row 1: boxing-gym-mirror-guard     spans cols 1-6  (full width)
Row 2: boxing-hand-wrap-trainer    spans cols 1-3
        boxing-hand-wrap-close      spans cols 4-6
Row 3: boxing-trainer-pads         spans cols 1-3
        boxing-post-session         spans cols 4-6
Row 4: boxing-guard-stance         spans cols 1-3
        boxing-gloves-detail        spans cols 4-6
Row 5: boxing-gym-wide             spans cols 1-6  (full width)
```

**Mobile grid (<768px), single column:**
- All images stack vertically, full width
- Order: gym-mirror-guard, hand-wrap-trainer, hand-wrap-close, trainer-pads, post-session, guard-stance, gloves-detail, gym-wide
- Alternating: every 3rd image goes full-bleed (negative margin to break out of padding)

**Image implementation:**
- Each image in a `<figure>` element with `class="gallery__item"`
- `<picture>` with WebP source + JPG fallback
- Responsive `srcset`: 640w, 1024w, 1440w
- `loading="lazy"` `decoding="async"` on all
- `sizes` attribute matching grid column widths at each breakpoint
- No border-radius (squared edges = editorial)
- Cursor: `pointer` (opens lightbox)
- `data-lightbox-index="N"` attribute for lightbox JS

**Hover interaction:**
- `transform: scale(1.02)` with `transition: transform var(--duration-normal) var(--ease-out)`
- No overlay, no caption reveal on hover — clean

**Optional captions:**
- Monospace metadata below specific images: e.g., "广州, 2025" under gym-wide
- `--font-mono`, `--text-xs`, `--color-text-secondary`
- `margin-top: var(--space-2)`

**Design tokens used:** `--color-bg`, `--color-text-primary`, `--color-text-secondary`, `--font-display`, `--font-mono`, `--text-2xl`, `--text-xl`, `--text-xs`, `--weight-light`, `--space-2`, `--space-4`, `--space-12`, `--gutter`, `--duration-normal`, `--ease-out`

---

### 5.5 Style Gallery

**HTML:** `<section id="style" class="gallery gallery--style">`

**Section title:**
- Text: "STYLE" in `--font-display`, `--weight-light`, `--text-2xl`, `--color-text-primary`
- Below (optional): "穿" in `--font-display`, `--text-xl`, `--color-text-secondary`
- RIGHT-aligned (contrasts with boxing gallery's left-alignment — visual rhythm)
- Padding-right: `--gutter`
- Margin-bottom: `--space-12`

**Background:** Section background shifts to `--color-surface` (#141414) to create separation from boxing gallery above. Padding top/bottom: `--space-24`.

**Layout rules — Different grid rhythm than boxing (required):**
- `max-width: var(--max-width)` centered
- Horizontal padding: `--gutter`
- CSS Grid, gap: `--space-4`

**Desktop grid (≥1024px), 12 columns:**
```
Row 1: fashion-hotel-room          spans cols 1-7  (large, left-heavy)
        fashion-salon-back          spans cols 8-12 (medium, right)
Row 2: night-harbor-skyline        spans cols 1-12 (full-bleed panorama)
Row 3: fashion-beanie-turtleneck   spans cols 1-5  (medium)
        night-camo-beanie           spans cols 6-12 (large, right-heavy — asymmetry)
Row 4: detail-nails-white          spans cols 1-4  (small detail)
        detail-boots-racer          spans cols 5-8  (small detail)
        lifestyle-salon-mirror      spans cols 9-12 (small detail)
```

**Tablet grid (≥768px, <1024px), 6 columns:**
```
Row 1: fashion-hotel-room          spans cols 1-6  (full width)
Row 2: fashion-salon-back          spans cols 1-3
        fashion-beanie-turtleneck   spans cols 4-6
Row 3: night-harbor-skyline        spans cols 1-6  (full width)
Row 4: night-camo-beanie           spans cols 1-3
        detail-nails-white          spans cols 4-6
Row 5: detail-boots-racer          spans cols 1-3
        lifestyle-salon-mirror      spans cols 4-6
```

**Mobile grid (<768px):** Single column stack. Full-bleed for night-harbor-skyline and fashion-hotel-room.

**Asymmetry rule:** This section satisfies the second asymmetric layout requirement. The right-aligned title and the 7/5 + 5/7 alternating column splits create visual tension against the boxing gallery's left-aligned, center-weighted layout.

**Pull quote (between Row 2 and Row 3, desktop only):**
- Displayed in `--font-display` italic, `--text-xl` (28-36px), `--color-text-secondary`
- Left-aligned, `max-width: 60%`
- Example: *"the clothes are armor. the ring is where I test it."*
- Sonnet writes contextually appropriate placeholder in this tone
- Hidden on mobile (only appears ≥1024px)

**Image implementation:** Same as boxing gallery (shared `gallery__item` class, same `<picture>` pattern, same lightbox `data-lightbox-index` continuing from boxing numbering).

**Design tokens used:** `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--font-display`, `--text-2xl`, `--text-xl`, `--weight-light`, `--space-4`, `--space-12`, `--space-24`, `--gutter`, `--duration-normal`, `--ease-out`

---

### 5.6 Contact Footer

**HTML:** `<footer id="contact" class="footer">`

**Background:** `--color-surface` (#141414) — continuous from style gallery if it ends on surface, or shift back to surface.

**Layout rules:**
- `max-width: var(--max-width)` centered
- Horizontal padding: `--gutter`
- Vertical padding: `--space-24` top, `--space-12` bottom
- CSS Grid, single column, center-aligned content

**Content slots:**

**Closing image (top of footer):**
- `lifestyle-ceramics-market` — unexpected, human, textural
- Max-width: 480px, centered
- Aspect ratio preserved, `border-radius: var(--radius-sm)` (2px — the one exception, softening the closer)
- `margin-bottom: var(--space-12)`

**Social links:**
- Horizontal row, centered
- Icons only (no text labels): Instagram, and any other platforms
- SVG icons, 24×24, stroke `--color-text-secondary` → `--color-text-primary` on hover
- Each wrapped in `<a>` with `target="_blank" rel="noopener noreferrer"` and `aria-label="Instagram"` (etc.)
- Gap: `--space-6` (24px) between icons
- `margin-bottom: var(--space-8)`

**Optional email:**
- `<a href="mailto:junxi@example.com">` (Sonnet uses placeholder)
- Styled as pill button: `border-radius: var(--radius-pill)`, `border: 1px solid var(--color-border)`, `--font-body`, `--text-xs`, `--weight-medium`, `--tracking-wide`, uppercase
- Color: `--color-text-secondary` → `--color-text-primary` on hover, border → `--color-accent` on hover
- `margin-bottom: var(--space-12)`

**Copyright line:**
- `--font-mono`, `--text-xs`, `--color-text-secondary`
- Text: "© 2025 JUNXI" (Sonnet adjusts year to current)
- `margin-top: var(--space-8)`

**Constraint:** NO contact form. NO newsletter signup. NO "let's work together" CTA.

**Mobile behavior:** Same layout, naturally centered. Social icons and email wrap if needed (unlikely with only a few items).

---

### 5.7 Lightbox Component

**HTML:** `<div id="lightbox" class="lightbox" role="dialog" aria-label="Image viewer" aria-hidden="true">`

**Structure:**
```html
<div id="lightbox" class="lightbox" role="dialog" aria-label="Image viewer" aria-hidden="true">
  <div class="lightbox__overlay"></div>
  <button class="lightbox__close" aria-label="Close image viewer">&times;</button>
  <button class="lightbox__prev" aria-label="Previous image">&#8249;</button>
  <button class="lightbox__next" aria-label="Next image">&#8250;</button>
  <figure class="lightbox__content">
    <img class="lightbox__img" src="" alt="" />
    <figcaption class="lightbox__caption"></figcaption>
  </figure>
  <div class="lightbox__counter"></div>
</div>
```

**Layout:**
- Fixed position, `inset: 0`, covers entire viewport
- z-index: `var(--z-lightbox)` (300)
- Overlay: `--color-bg` at 0.92 opacity
- Image: centered (flexbox), `max-width: 90vw`, `max-height: 85vh`, `object-fit: contain`
- Close button: top-right, `--space-6` from edges
- Prev/Next buttons: vertically centered, `--space-6` from left/right edges
- Counter: bottom-center, "3 / 15" format

**Design tokens:**
- Overlay: `rgba(10, 10, 10, 0.92)`
- Close/nav buttons: `--color-text-secondary`, 48×48px touch target, `--text-xl` font size
- Hover: `--color-text-primary`
- Counter: `--font-mono`, `--text-xs`, `--color-text-secondary`
- Caption: `--font-mono`, `--text-sm`, `--color-text-secondary`, centered below image

**Interaction:**
- Open: click/tap any gallery image → lightbox appears, `aria-hidden="false"`, body gets `overflow: hidden`
- Close: click overlay, click × button, press Escape
- Navigate: click prev/next buttons, press ArrowLeft/ArrowRight
- Focus trap: Tab cycles through close, prev, next buttons only while lightbox is open
- On close: restore focus to the gallery image that opened the lightbox

**Animation:**
- Open: opacity 0→1, `var(--duration-normal) var(--ease-out)`
- Image swap (prev/next): crossfade, `var(--duration-fast)`
- Close: opacity 1→0, `var(--duration-fast)`

**Mobile behavior:**
- Prev/Next buttons hidden (use swipe gesture — optional, skip if complex)
- Or: prev/next visible as smaller buttons at bottom alongside counter
- Close button always visible, 48px target
- Image: `max-width: 95vw`, `max-height: 80vh`

**Accessibility:**
- `role="dialog"`, `aria-label="Image viewer"`
- `aria-hidden="true"` when closed, `"false"` when open
- Focus trapped inside lightbox when open
- ESC closes
- Arrow keys navigate
- All buttons have `aria-label`
- Image `alt` text populated from the gallery image's `alt`

---

### 5.8 Responsive Image System

**HTML pattern for every gallery/content image:**

```html
<picture>
  <source
    type="image/webp"
    srcset="
      images/boxing/boxing-gym-mirror-guard-640w.webp 640w,
      images/boxing/boxing-gym-mirror-guard-1024w.webp 1024w,
      images/boxing/boxing-gym-mirror-guard-1440w.webp 1440w
    "
    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 66vw"
  >
  <img
    src="images/boxing/boxing-gym-mirror-guard-1024w.jpg"
    srcset="
      images/boxing/boxing-gym-mirror-guard-640w.jpg 640w,
      images/boxing/boxing-gym-mirror-guard-1024w.jpg 1024w,
      images/boxing/boxing-gym-mirror-guard-1440w.jpg 1440w
    "
    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 66vw"
    alt="[descriptive alt text]"
    loading="lazy"
    decoding="async"
    width="1024"
    height="768"
  >
</picture>
```

**Rules:**
- `sizes` attribute must reflect actual layout width at each breakpoint (varies per grid position)
- Hero image: `loading="eager"` (above fold), all others `loading="lazy"`
- `width` and `height` attributes on `<img>` for aspect ratio calculation (prevents CLS)
- Fallback `src` is the 1024w JPG

**NOTE for Sonnet:** During initial build, use simplified paths without width suffixes:
```html
<img src="images/boxing/boxing-gym-mirror-guard.jpg" alt="..." loading="lazy" decoding="async">
```
The full `<picture>` + `srcset` pattern will be implemented after image optimization (Section 6). Sonnet should structure the HTML so the `<picture>` wrapper exists but the `srcset` attributes can be added later.

**Simplified initial pattern:**
```html
<picture class="gallery__picture">
  <source type="image/webp" srcset="images/boxing/boxing-gym-mirror-guard.webp">
  <img
    src="images/boxing/boxing-gym-mirror-guard.jpg"
    alt="[alt text from manifest]"
    loading="lazy"
    decoding="async"
    class="gallery__img"
  >
</picture>
```

---

### 5.9 Scroll Animation System

**Implementation:** Vanilla JS IntersectionObserver.

**CSS classes:**
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
}

.reveal--visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}
```

**JS logic:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      observer.unobserve(entry.target); // once only — no re-animation on scroll up
    }
  });
}, {
  threshold: 0.15,  // trigger at 15% visibility
  rootMargin: '0px'
});

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```

**Stagger effect:**
- Elements within a section that should stagger get `style="transition-delay: Nms"` inline
- Stagger: 100ms between siblings
- Example: section title (0ms), first paragraph (100ms), second paragraph (200ms), image (300ms)

**What gets `.reveal` class:**
- Section titles
- About text content
- Gallery images (each individually)
- Footer content
- Pull quote
- NOT: nav, hero (hero is visible immediately), skip link

**Reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
  }
  .reveal--visible {
    transition: none;
  }
  /* Also disable hero scroll indicator animation */
  .hero__scroll-indicator {
    animation: none;
  }
}
```

---

### 5.10 Mobile Menu

**HTML:** `<div id="mobile-menu" class="mobile-menu" aria-hidden="true">`

**Structure:**
```html
<div id="mobile-menu" class="mobile-menu" role="dialog" aria-label="Navigation menu" aria-hidden="true">
  <nav class="mobile-menu__nav" aria-label="Mobile navigation">
    <a href="#about" class="mobile-menu__link">ABOUT</a>
    <a href="#training" class="mobile-menu__link">TRAINING</a>
    <a href="#style" class="mobile-menu__link">STYLE</a>
    <a href="#contact" class="mobile-menu__link">CONTACT</a>
  </nav>
</div>
```

**Layout:**
- Full-screen overlay: `position: fixed; inset: 0`
- z-index: `var(--z-mobile-menu)` (200)
- Background: `var(--color-bg)` at full opacity
- Flexbox: center content vertically and horizontally
- Only visible at `< 1024px`

**Link styling:**
- `--font-display`, `--weight-light`, `--text-2xl`
- `--color-text-secondary` → `--color-text-primary` on hover
- Letter-spacing: `--tracking-tight`
- Vertical gap: `--space-8` (32px)
- Center-aligned

**Open animation:**
- Trigger: hamburger button click
- Menu: opacity 0→1, `var(--duration-normal) var(--ease-out)`
- Links: staggered fade-up (translateY 20px→0), 100ms stagger each
- Body: `overflow: hidden`

**Close:**
- Click any link (smooth scroll to section)
- Click hamburger (now shows × state)
- Press Escape
- Opacity 1→0, `var(--duration-fast)`

**Hamburger animation:**
- Three lines → × (cross) when open
- Top line rotates 45°, bottom line rotates -45°, middle line opacity 0
- Transition: `var(--duration-fast) var(--ease-out)`

**Accessibility:**
- `role="dialog"`, `aria-label="Navigation menu"`
- `aria-hidden="true"` when closed
- Focus trap: Tab cycles through links + hamburger close
- ESC closes

---

## 6. Image Optimization Pipeline

### Tooling

Use **sharp** (Node.js) via a one-time script, or **squoosh-cli** if Node is unavailable.

### Process

1. Place original images in `images/_originals/` (not deployed)
2. Run optimization script to generate:
   - WebP at quality 80
   - JPG fallback at quality 85
   - Three sizes per image: 640w, 1024w, 1440w
3. Output to `images/{category}/` with naming convention:
   - `{name}-640w.webp`, `{name}-640w.jpg`
   - `{name}-1024w.webp`, `{name}-1024w.jpg`
   - `{name}-1440w.webp`, `{name}-1440w.jpg`

### Naming Convention

```
images/
  boxing/
    boxing-gym-mirror-guard-640w.webp
    boxing-gym-mirror-guard-640w.jpg
    boxing-gym-mirror-guard-1024w.webp
    boxing-gym-mirror-guard-1024w.jpg
    boxing-gym-mirror-guard-1440w.webp
    boxing-gym-mirror-guard-1440w.jpg
  fashion/
    ...
  night/
    ...
  detail/
    ...
  lifestyle/
    ...
```

### For Initial Build (Sonnet)

Use single-resolution paths: `images/boxing/boxing-gym-mirror-guard.webp` and `.jpg`. The responsive `srcset` variants are generated in the optimization step AFTER build. Sonnet should ensure the HTML uses `<picture>` with `<source type="image/webp">` so the swap to multi-resolution is a simple attribute addition.

### OG Image

- File: `images/og-image.jpg`
- Dimensions: 1200 × 630
- Content: composite of best boxing + fashion shot, or the hero image cropped to landscape
- Quality: 85, JPG only (no WebP — social platforms need JPG/PNG)

---

## 7. Accessibility Spec

### Semantic HTML Landmarks

```
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header>                    ← site nav lives here
    <nav aria-label="Main navigation">
  </header>
  <main id="main-content">
    <section id="hero">       ← aria-label="Introduction"
    <section id="about">      ← aria-label="About"
    <section id="training">   ← aria-label="Training gallery"
    <section id="style">      ← aria-label="Style gallery"
  </main>
  <footer id="contact">       ← aria-label="Contact and social links"
  <div id="lightbox">         ← role="dialog"
  <div id="mobile-menu">      ← role="dialog"
</body>
```

### Focus States

All interactive elements (links, buttons) get:
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

Use `:focus-visible` (not `:focus`) so mouse clicks don't show the ring.

### Skip Link

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  padding: var(--space-2) var(--space-4);
  background: var(--color-accent);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  z-index: 9999;
  text-decoration: none;
}
.skip-link:focus {
  top: var(--space-4);
}
```

### Alt Text

Every `<img>` must have a descriptive `alt` attribute. Drafts are in the Photo Manifest (Section 3). Sonnet uses those drafts verbatim.

### Color Contrast

| Combination | Ratio | Passes |
|---|---|---|
| `--color-text-primary` (#e8e4e0) on `--color-bg` (#0a0a0a) | 16.2:1 | WCAG AAA |
| `--color-text-secondary` (#8a8580) on `--color-bg` (#0a0a0a) | 5.1:1 | WCAG AA (large text) |
| `--color-text-secondary` (#8a8580) on `--color-surface` (#141414) | 4.1:1 | WCAG AA (large text) |
| `--color-accent` (#c43e2a) on `--color-bg` (#0a0a0a) | 4.7:1 | WCAG AA |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .reveal {
    opacity: 1;
    transform: none;
  }
}
```

### Keyboard Navigation

- Tab order follows DOM order (no `tabindex` hacks)
- Lightbox: ArrowLeft/ArrowRight navigate, Escape closes, Tab cycles through controls
- Mobile menu: Escape closes, Tab cycles through links
- Gallery images: Enter/Space opens lightbox (images are inside `<button>` or have `role="button" tabindex="0"`)

### Touch Targets

All interactive elements: `min-height: 44px; min-width: 44px` on mobile. Achieved via padding, not font size.

---

## 8. SEO Spec

### Meta Tags (in `<head>`)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Junxi — Boxer & Creative</title>
<meta name="description" content="Portfolio of Junxi — boxing, muay thai training, and avant-garde personal style. Photography and visual storytelling.">
<meta name="theme-color" content="#0a0a0a">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="canonical" href="https://junxi.vercel.app/">
```

### Open Graph

```html
<meta property="og:type" content="website">
<meta property="og:title" content="Junxi — Boxer & Creative">
<meta property="og:description" content="Boxing, muay thai, and avant-garde style. A visual portfolio.">
<meta property="og:image" content="https://junxi.vercel.app/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://junxi.vercel.app/">
<meta property="og:site_name" content="Junxi">
```

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Junxi — Boxer & Creative">
<meta name="twitter:description" content="Boxing, muay thai, and avant-garde style. A visual portfolio.">
<meta name="twitter:image" content="https://junxi.vercel.app/images/og-image.jpg">
```

### JSON-LD (Person Schema)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Junxi",
  "url": "https://junxi.vercel.app",
  "image": "https://junxi.vercel.app/images/og-image.jpg",
  "description": "Boxer, muay thai practitioner, and fashion creative.",
  "knowsAbout": ["Boxing", "Muay Thai", "Fashion", "Personal Style"]
}
</script>
```

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://junxi.vercel.app/sitemap.xml
```

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://junxi.vercel.app/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 9. Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | 100 |
| Largest Contentful Paint | < 2.5s on 4G |
| Cumulative Layout Shift | < 0.1 |
| First Input Delay | < 100ms |
| Total page weight (initial) | < 3MB (hero + above-fold content) |
| Total page weight (full) | Lazy-loaded images add additional, acceptable |
| CSS file size | < 15KB minified |
| JS file size | < 8KB minified |
| HTML file size | < 25KB |
| Font loading | `font-display: swap` + preload critical fonts |
| Image formats | WebP primary, JPG fallback |
| HTTP requests (initial) | < 15 (HTML + CSS + JS + fonts + hero image + favicon) |

### How to achieve:

- Zero framework overhead (plain HTML/CSS/JS)
- Lazy-load all images below fold
- Eager-load hero image only
- `font-display: swap` prevents FOIT
- Preload display font (Cormorant Garamond 300) for hero text
- CSS and JS are single files, no splitting needed
- `width` and `height` on all `<img>` prevents CLS
- `decoding="async"` on all images

---

## 10. Boundaries

### FORBIDDEN (do not include)

**Features:**
- Blog / writing section
- Project case studies
- Résumé / CV / timeline
- Testimonials
- Services / pricing
- Contact form
- Newsletter / mailing list
- E-commerce / shop
- CMS integration
- Analytics dashboard (Vercel Analytics can be added separately, outside this spec)
- Login / authentication
- Comments / guestbook
- Music player / Spotify embed
- Social media feed embeds (Instagram grid, etc.)
- Multi-language support
- Dark/light theme toggle
- Cookie banner
- Chatbot / AI assistant embed
- Any backend or database

**Motion:**
- Parallax scrolling
- Scroll-jacking
- Mouse-follow effects
- Infinite marquees
- Rotating 3D elements
- Particle effects
- Loading spinners (use CSS placeholder instead)
- Custom cursor

**Design:**
- Pure black (#000000) backgrounds
- Pure white (#ffffff) text
- Inter font (overused, generic)
- Purple gradients (generic AI aesthetic)
- Border-radius on gallery images (squared = editorial)
- Uniform grid layouts (all same-size images)
- Stock photography or placeholder images
- Lorem ipsum text
- "Passionate about" / "creative visionary" / corporate bio language
- Centered-content-only layouts (must have ≥2 asymmetric sections)

**Tech:**
- jQuery
- Bootstrap, Tailwind, or any CSS framework
- React, Vue, Angular, or any JS framework (beyond what plain static requires)
- npm packages for simple tasks (write vanilla JS)
- CSS preprocessors (Sass/Less — custom properties are sufficient)
- Build tools (Webpack, Vite, Parcel — not needed)

### REQUIRED (must include)

- Mobile-first CSS (`min-width` breakpoints, not `max-width`)
- Semantic HTML throughout (proper landmarks)
- CSS custom properties for ALL design tokens
- `@media (prefers-reduced-motion: reduce)` media query
- Lazy loading for below-fold images (`loading="lazy"`)
- `<picture>` elements with WebP + JPG fallback
- Lightbox keyboard accessibility (ArrowLeft, ArrowRight, Escape, focus trap)
- Skip-to-content link
- Visible focus states on all interactive elements (`:focus-visible`)
- JSON-LD Person structured data
- Open Graph meta tags
- Twitter Card meta tags
- Favicon (SVG, monochrome)
- ≥ 2 sections with asymmetric / grid-breaking layout
- Responsive typography using `clamp()`
- `font-display: swap` and font preloading
- `scroll-behavior: smooth` on `<html>`
- `scroll-margin-top` on sections (offset by nav height)
- `width` and `height` attributes on all `<img>` elements
- `decoding="async"` on all `<img>` elements
- `aria-label` on all sections and dialogs
- Hamburger menu `aria-expanded` toggling
- Body scroll lock when lightbox or mobile menu is open

---

## 11. Dependency Map (Build Order)

```
1. Project scaffolding
   └─ Create folder structure, vercel.json, robots.txt, sitemap.xml, favicon.svg
   └─ No dependencies

2. Design system (CSS custom properties + reset + base styles)
   └─ Depends on: (1)
   └─ Output: styles.css with :root variables, reset, typography utilities, base elements

3. Navigation component
   └─ Depends on: (2)
   └─ Output: nav HTML in index.html, nav styles in styles.css, scroll-aware JS in script.js

4. Landing hero section
   └─ Depends on: (2), (3) for scroll-margin-top
   └─ Output: hero HTML, hero styles

5. About section
   └─ Depends on: (2)
   └─ Output: about HTML, about styles

6. Lightbox component
   └─ Depends on: (2)
   └─ Output: lightbox HTML, lightbox styles, lightbox JS
   └─ MUST exist before galleries

7. Boxing gallery section
   └─ Depends on: (2), (6)
   └─ Output: boxing gallery HTML, gallery grid styles

8. Style gallery section
   └─ Depends on: (2), (6)
   └─ Output: style gallery HTML, additional gallery grid styles

9. Contact footer
   └─ Depends on: (2)
   └─ Output: footer HTML, footer styles

10. Mobile menu
    └─ Depends on: (3) for hamburger trigger
    └─ Output: mobile menu HTML, styles, JS

11. Scroll animation system
    └─ Depends on: all sections existing (3–9)
    └─ Output: .reveal classes added to HTML, animation CSS, IntersectionObserver JS
    └─ ADD LAST — animations are polish, not structure

12. SEO + meta
    └─ Depends on: (1) for index.html existing
    └─ Output: <head> meta tags, JSON-LD, OG tags

13. Performance audit
    └─ Depends on: all above
    └─ Run Lighthouse, verify image sizes, check font loading
    └─ Not a code step — a verification step
```

**DAG visualization:**
```
(1) ──→ (2) ──→ (3) ──→ (4)
              ├──→ (5)
              ├──→ (6) ──→ (7)
              │         └──→ (8)
              ├──→ (9)
              └──→ (10)
                     ↑
                    (3)
         (all) ──→ (11) ──→ (12) ──→ (13)
```

---

## 12. Sonnet Execution Instructions

### Pre-build Checklist

- [ ] Read this entire spec before writing any code
- [ ] Note all CSS custom property names — use them exclusively, never hardcode values
- [ ] Note the font names: Cormorant Garamond (display), Manrope (body), JetBrains Mono (mono)
- [ ] Note the image paths from the Photo Manifest — use those exact filenames

### File-by-File Build Order

---

#### Step 1: Create `/vercel.json`

```json
{
  "git": {
    "deploymentEnabled": {
      "main": false
    }
  },
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

**Verify:** File exists, valid JSON.

---

#### Step 2: Create `/favicon.svg`

Monochrome SVG. Abstract "J" lettermark. Color: `#e8e4e0`. Simple geometric design — a single stroke or minimal shape. No detail, no gradients.

**Verify:** Opens in browser tab, visible at 16×16 and 32×32.

---

#### Step 3: Create `/robots.txt`

Content per Section 8.

**Verify:** Accessible at `/robots.txt`.

---

#### Step 4: Create `/sitemap.xml`

Content per Section 8. Use `https://junxi.vercel.app/` as the URL (can be updated later).

**Verify:** Valid XML.

---

#### Step 5: Create `/styles.css` (~650 lines max)

Build in this order within the file:

1. **CSS Reset** (modern reset — `box-sizing: border-box`, margin reset, image defaults, `font-size: 100%`)
2. **Custom properties** (`:root` block from Section 2.1, including breakpoint overrides)
3. **Base styles** (`body`, `html`, `img`, `a`, `button` defaults)
4. **Typography utility classes** (optional, for consistent application)
5. **Skip link** styles
6. **Navigation** styles (default + `.nav--scrolled` + hamburger)
7. **Hero** styles
8. **About** styles (asymmetric grid)
9. **Gallery** base styles (shared between boxing and style)
10. **Gallery — Boxing** specific grid (`gallery--boxing`)
11. **Gallery — Style** specific grid (`gallery--style`)
12. **Pull quote** styles
13. **Footer** styles
14. **Lightbox** styles
15. **Mobile menu** styles
16. **Scroll reveal** classes (`.reveal`, `.reveal--visible`)
17. **Responsive breakpoints** (`@media (min-width: 768px)`, `(min-width: 1024px)`, `(min-width: 1440px)`)
18. **Reduced motion** media query
19. **Print** styles (optional — hide nav, lightbox, show all images)

**Key CSS rules to implement:**

```css
html {
  scroll-behavior: smooth;
  font-size: 100%;
}

body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-body);
  font-weight: var(--weight-regular);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Sections scroll offset for fixed nav */
section[id] {
  scroll-margin-top: var(--nav-height);
}
@media (min-width: 1024px) {
  section[id] {
    scroll-margin-top: var(--nav-height-desktop);
  }
}
```

**Verify:** Open `index.html` (even if empty) with this stylesheet linked. Background should be `#0a0a0a`, no white flash.

---

#### Step 6: Create `/script.js` (~200 lines max)

Build in this order:

1. **Nav scroll detection** — add/remove `.nav--scrolled` on `window.scrollY > 50`
2. **Mobile menu toggle** — hamburger button toggles `.menu--open`, manages `aria-expanded`, body scroll lock
3. **Lightbox** — open/close/navigate, keyboard events, focus trap, image loading
4. **Scroll reveal** — IntersectionObserver for `.reveal` elements
5. **Mobile menu link clicks** — close menu on link click, allow smooth scroll

**Structure:** IIFE or plain functions, no modules needed (single file, no bundler). Use `DOMContentLoaded` event.

**Key patterns:**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Nav scroll
  // 2. Mobile menu
  // 3. Lightbox
  // 4. Scroll reveal
});
```

**Verify:** Console has no errors. Nav scroll works. Hamburger placeholder button exists.

---

#### Step 7: Create `/index.html` (~450 lines max)

Build the full page in this order:

1. `<!DOCTYPE html>` + `<html lang="en">`
2. `<head>` — all meta tags per Section 8, font preloads per Section 2.3, stylesheet link, favicon link
3. Skip link
4. `<header>` with nav (Section 5.1)
5. `<main id="main-content">`
6. Hero section (Section 5.2)
7. About section (Section 5.3)
8. Boxing gallery section (Section 5.4) — use placeholder image paths from manifest
9. Style gallery section (Section 5.5) — use placeholder image paths from manifest
10. `</main>`
11. Footer (Section 5.6)
12. Lightbox HTML (Section 5.7)
13. Mobile menu HTML (Section 5.10)
14. JSON-LD script (Section 8)
15. `<script src="script.js"></script>` (before `</body>`)

**For all images:** Use the simplified `<picture>` pattern from Section 5.8. Use filenames from the Photo Manifest exactly. Include descriptive `alt` text from the manifest.

**About section placeholder text (Sonnet writes in this tone):**
- First person, direct, no fluff
- Mentions boxing/muay thai training, personal style, current chapter
- Under 150 words
- NO "passionate about" language
- Example opener: "I spend my mornings in the gym and my evenings in my own head."

**Verify at each section:**
- After hero: full-viewport dark section with centered text, scroll indicator at bottom
- After about: asymmetric two-column layout (or stacked on mobile)
- After boxing gallery: varied image grid (or stacked on mobile), images clickable (lightbox should open)
- After style gallery: different grid rhythm, background shift to `#141414`
- After footer: social icons centered, copyright at bottom
- Full page: navigation works (scroll to sections), lightbox opens/closes, mobile menu works at narrow viewport

---

### Post-Build Verification Checklist

- [ ] Navigation: transparent at top, solid on scroll, hamburger on mobile
- [ ] Hero: full viewport, image behind text, scroll indicator animates
- [ ] About: asymmetric layout, images right-heavy, text left
- [ ] Boxing gallery: editorial grid, NOT uniform, images open lightbox
- [ ] Style gallery: different grid pattern than boxing, background shift
- [ ] Lightbox: opens, closes (×, ESC, overlay click), navigates (arrows, keyboard)
- [ ] Mobile menu: opens, closes, links scroll to sections
- [ ] Scroll reveal: elements fade up on scroll, only once
- [ ] Reduced motion: disable animations in OS settings, verify no movement
- [ ] Keyboard: Tab through all interactive elements, focus rings visible
- [ ] Skip link: Tab from top of page, "Skip to content" appears
- [ ] Mobile: all sections stack properly, no horizontal scroll, touch targets ≥ 44px
- [ ] Lighthouse: run audit, check against targets in Section 9
- [ ] HTML validation: no errors at validator.w3.org
- [ ] Alt text: every image has descriptive alt text
- [ ] Console: no JS errors

---

### Image Note for Sonnet

All image paths in the HTML should use the filenames from the Photo Manifest (Section 3). The actual image files will be provided and optimized separately. During development, the images won't load — this is expected. Focus on HTML structure, CSS layout, and JS functionality. Test layout with browser dev tools' "device mode" for responsive behavior.

If you need a visual reference during development, create simple colored placeholder divs via CSS:
```css
.gallery__img[src*="boxing"] { background: #1a1a1a; aspect-ratio: 3/4; }
.gallery__img[src*="fashion"] { background: #1a1a1a; aspect-ratio: 3/4; }
.gallery__img[src*="night"] { background: #1a1a1a; aspect-ratio: 16/9; }
.gallery__img[src*="detail"] { background: #1a1a1a; aspect-ratio: 1/1; }
.gallery__img[src*="lifestyle"] { background: #1a1a1a; aspect-ratio: 4/3; }
```

---

*End of build spec. Sonnet 4.6: execute file-by-file in the order specified. Do not improvise. Do not add features not in this spec. Do not deviate from the design tokens. Every decision has been made — your job is execution.*
