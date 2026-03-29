# PORTFOLIO_BUILD_SPEC.md

Deterministic build specification for Taeyang Han's personal portfolio.
Target executor: Sonnet 4.6 in VSCode — no improvisation, no deviation.

---

## 0. Build Philosophy & Constraints

**What this is:** A single-page static portfolio site (HTML + CSS + JS) for Taeyang Han (한태양 / Khairul Ammar Hakimi). No framework, no bundler, no node_modules. Raw files served directly on GitHub Pages or Vercel.

**Design identity:** "Bold Gradient" — high-energy, confident, technical. White base with vivid gradient accents (magenta, cyan, lime). Chunky sans-serif type (Inter 800). Bold weight hierarchy. Dark sections for contrast. Snappy motion (200-400ms max).

**What this is NOT:**
- Not a web app — no React, Next.js, Vue, or any framework
- Not calm/editorial — no muted palettes, no sage/earth tones, no serif fonts
- Not glassmorphism — no backdrop-blur, no frosted glass
- Not organic — no botanical motifs, no slow easing, no parallax
- Not over-engineered — no build step, no npm, no CMS, no analytics

---

## 1. File Structure

```
portfolio/
├── index.html          (semantic HTML, all 5 sections, ~250 lines max)
├── styles.css          (all design tokens + component styles, ~400 lines max)
├── script.js           (interactions + data arrays + rendering, ~200 lines max)
└── assets/
    ├── certs/          (certificate images: JPG/PNG, <500KB each)
    │   └── .gitkeep
    └── projects/       (project screenshots: 16:9 ratio recommended)
        └── .gitkeep
```

No other files. No package.json, no config files, no build artifacts.

---

## 2. Design Token System

Copy this entire block into the top of `styles.css` as `:root` custom properties. This is the single source of truth for every color, font, spacing, and timing value.

```css
:root {
  /* ── Base Colors ── */
  --white: #ffffff;
  --bg-primary: #fafafa;
  --bg-section: #f5f5f5;
  --text-primary: #111111;
  --text-secondary: #555555;
  --text-tertiary: #777777;
  --text-muted: #999999;
  --border-light: #e0e0e0;
  --border-subtle: rgba(0, 0, 0, 0.06);

  /* ── Accent: Magenta ── */
  --magenta: #FF2D7B;
  --magenta-gradient: linear-gradient(135deg, #FF2D7B, #FF6B9D);
  --magenta-tint-bg: #FFE0EC;
  --magenta-tint-text: #CC1155;

  /* ── Accent: Cyan ── */
  --cyan: #00D4FF;
  --cyan-gradient: linear-gradient(135deg, #00D4FF, #00A3CC);
  --cyan-tint-bg: #D4F4FF;
  --cyan-tint-text: #007799;

  /* ── Accent: Lime ── */
  --lime: #A8FF00;
  --lime-gradient: linear-gradient(135deg, #A8FF00, #7ACC00);
  --lime-tint-bg: #E8FFD4;
  --lime-tint-text: #448800;
  --lime-dark-text: #5C8A00;

  /* ── Dark Theme (hero project card, footer) ── */
  --dark-bg: #111111;
  --dark-bg-elevated: #1a1a2e;
  --dark-gradient: linear-gradient(135deg, #111111, #1a1a2e);
  --dark-text-primary: #ffffff;
  --dark-text-secondary: #aaaaaa;
  --dark-text-muted: #666666;
  --dark-surface-subtle: rgba(255, 255, 255, 0.08);
  --dark-surface-light: rgba(255, 255, 255, 0.1);

  /* ── Typography ── */
  --font-family: 'Inter', system-ui, -apple-system, sans-serif;
  --font-regular: 400;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  /* ── Card Radii ── */
  --radius-card: 12px;
  --radius-hero-card: 16px;
  --radius-pill: 999px;

  /* ── Card Hover ── */
  --hover-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  --hover-transform: translateY(-2px);
  --hover-transition: 200ms ease;

  /* ── Section Padding (desktop defaults, overridden at breakpoints) ── */
  --section-padding-y: 100px;
  --section-padding-x: 48px;

  /* ── Animation ── */
  --reveal-duration: 400ms;
  --reveal-easing: cubic-bezier(0.25, 0.1, 0.25, 1);
  --modal-enter: 200ms ease-out;
  --modal-exit: 150ms ease-in;
  --filter-transition: 300ms ease;
  --stagger-delay: 50ms;
}
```

---

## 3. Typography Setup

**Google Fonts import** — place this as the first `<link>` in `<head>` of `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
```

**Type hierarchy CSS classes** (defined in `styles.css`):

| Class             | CSS Rules                                                                                       |
|-------------------|-------------------------------------------------------------------------------------------------|
| `.type-display`   | `font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: var(--text-primary)` |
| `.type-headline`  | `font-size: clamp(1.25rem, 3vw, 1.5rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.2; color: var(--text-primary)` |
| `.type-micro`     | `font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase`         |
| `.type-body`      | `font-size: 14px; font-weight: 400; line-height: 1.6; color: var(--text-secondary)`            |
| `.type-label`     | `font-size: 12px; font-weight: 600`                                                            |
| `.type-caption`   | `font-size: 11px; font-weight: 600`                                                            |

**Rules (enforced):**
- Inter only. No serif anywhere.
- `.type-micro` is always uppercase with `letter-spacing: 0.12em`.
- `.type-display` uses negative tracking `-0.03em`.
- Body text color is always `var(--text-secondary)`, never `var(--text-primary)`.
- Only use weights 400, 600, 700, 800. Never 300 or 500.

---

## 4. Data Schemas

### 4.1 Projects

Defined as a `const PROJECTS` array in `script.js`. Used by rendering logic to build project cards.

```js
const PROJECTS = [
  {
    id: "lifeos",
    name: "LifeOS",
    description: "A unified personal life management platform spanning 6 domains — finance, fitness, nutrition, learning, habits, and time.",
    tech_stack: ["Next.js", "Flask", "PostgreSQL", "Event-Driven Architecture"],
    status: "In Development",
    url: "",               // <!-- CONTENT: LifeOS project URL if public -->
    image_path: "",        // <!-- CONTENT: optional screenshot path e.g. "assets/projects/lifeos.png" -->
    is_hero: true,
    highlights: [
      "6 integrated life domains",
      "LP macro optimizer",
      "Event-driven architecture",
      "Custom design system"
    ]
  },
  {
    id: "xiaohongshu",
    name: "Xiaohongshu Content",
    description: "Documenting the LifeOS development journey — brother handles editing and posting.",
    tech_stack: ["Content Creation", "Xiaohongshu"],
    status: "Active",
    url: "",               // <!-- CONTENT: Xiaohongshu profile URL -->
    image_path: "",        // <!-- CONTENT: optional thumbnail -->
    is_hero: false,
    highlights: []
  }
  // <!-- CONTENT: add 1-3 more project objects here as needed -->
];
```

### 4.2 Certificates

Defined as a `const CERTIFICATES` array in `script.js`. Used by filter + rendering logic.

```js
const CERTIFICATES = [
  // Example entries — user replaces with real data:
  {
    id: "samsung-dream",
    name: "삼성글로벌꿈장학",
    category: "scholarship",   // ENUM: "scholarship" | "academic" | "leadership" | "cultural" | "language"
    date: "2024",
    issuer: "Samsung",
    image_path: "assets/certs/samsung-dream.jpg"
  },
  {
    id: "sogang-alumni",
    name: "서강동문장학",
    category: "scholarship",
    date: "2023",
    issuer: "Sogang University",
    image_path: "assets/certs/sogang-alumni.jpg"
  },
  {
    id: "pals-award",
    name: "PALS 우수상",
    category: "academic",
    date: "2024",
    issuer: "Sogang University",
    image_path: "assets/certs/pals-award.jpg"
  },
  {
    id: "pals-president",
    name: "PALS 회장",
    category: "leadership",
    date: "2024",
    issuer: "Sogang University",
    image_path: "assets/certs/pals-president.jpg"
  },
  {
    id: "topik",
    name: "TOPIK Certificate",
    category: "language",
    date: "2023",
    issuer: "NIIED",
    image_path: "assets/certs/topik.jpg"
  }
  // <!-- CONTENT: populate with all ~30+ certificate entries -->
];
```

**Category → Color mapping** (used in CSS and JS):

| Category      | CSS Variable for Border/Label       |
|---------------|-------------------------------------|
| `scholarship` | `var(--magenta)` / `var(--magenta-tint-text)` |
| `academic`    | `var(--cyan)` / `var(--cyan-tint-text)`       |
| `leadership`  | `var(--lime)` / `var(--lime-dark-text)`       |
| `cultural`    | `var(--magenta)` / `var(--magenta-tint-text)` |
| `language`    | `var(--cyan)` / `var(--cyan-tint-text)`       |

---

## 5. Section Specs

### 5.1 Hero Section

**Purpose:** Full-viewport opening. Name, tagline, photo placeholder, social links.

**HTML structure:**
```html
<header id="hero" class="hero">
  <div class="hero__container">
    <div class="hero__content">
      <span class="type-micro hero__micro" style="color: var(--magenta)">
        BUILDER · MULTILINGUAL · SYSTEMS THINKER
      </span>
      <h1 class="type-display hero__name">Taeyang Han</h1>
      <p class="hero__subtitle">한태양 · Khairul Ammar Hakimi</p>
      <p class="hero__oneliner">
        I build systems that help people manage their lives better.
      </p>
      <div class="hero__socials">
        <a href="" class="pill pill--social pill--github" target="_blank" rel="noopener">
          GitHub
        </a><!-- CONTENT: GitHub URL in href -->
        <a href="" class="pill pill--social pill--linkedin" target="_blank" rel="noopener">
          LinkedIn
        </a><!-- CONTENT: LinkedIn URL in href -->
        <a href="" class="pill pill--social pill--xiaohongshu" target="_blank" rel="noopener">
          小红书
        </a><!-- CONTENT: Xiaohongshu URL in href -->
      </div>
    </div>
    <div class="hero__photo">
      <!-- CONTENT: hero photo — recommended 400x500px min, PNG/JPG -->
      <img src="" alt="Photo of Taeyang Han" class="hero__photo-img">
    </div>
  </div>
  <!-- Decorative gradient blobs -->
  <div class="blob blob--1" aria-hidden="true"></div>
  <div class="blob blob--2" aria-hidden="true"></div>
  <div class="blob blob--3" aria-hidden="true"></div>
  <!-- Scroll indicator -->
  <div class="hero__scroll-indicator" aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </div>
</header>
```

**CSS rules:**
```css
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--white);
  overflow: hidden;
  padding: var(--section-padding-y) var(--section-padding-x);
}

.hero__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
}

.hero__content {
  flex: 1;
  max-width: 560px;
}

.hero__micro {
  display: inline-block;
  margin-bottom: 16px;
}

.hero__name {
  margin: 0 0 8px 0;
}

.hero__subtitle {
  font-size: 16px;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0 0 12px 0;
}

.hero__oneliner {
  font-size: 15px;
  font-weight: 400;
  color: var(--text-tertiary);
  margin: 0 0 24px 0;
  line-height: 1.5;
}

.hero__socials {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.hero__photo {
  flex-shrink: 0;
  width: 300px;
  height: 380px;
  border-radius: var(--radius-hero-card);
  overflow: hidden;
  background: var(--bg-section);
}

.hero__photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Social pills */
.pill--social {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 600;
  color: var(--white);
  text-decoration: none;
  transition: opacity var(--hover-transition);
}
.pill--social:hover { opacity: 0.85; }

.pill--github { background: var(--magenta-gradient); }
.pill--linkedin { background: var(--cyan-gradient); }
.pill--xiaohongshu { background: var(--lime-gradient); color: var(--dark-bg); }

/* Gradient blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.blob--1 {
  width: 280px; height: 280px;
  background: linear-gradient(135deg, var(--magenta), var(--cyan));
  opacity: 0.08;
  top: -60px; right: 10%;
}
.blob--2 {
  width: 200px; height: 200px;
  background: linear-gradient(135deg, var(--cyan), var(--lime));
  opacity: 0.06;
  bottom: 10%; left: -40px;
}
.blob--3 {
  width: 150px; height: 150px;
  background: linear-gradient(135deg, var(--lime), var(--magenta));
  opacity: 0.10;
  top: 40%; right: -30px;
}

/* Scroll indicator */
.hero__scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-muted);
  animation: bounce 2s ease infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}
```

**JS behavior:**
- On load: stagger fade-in + slide-up for `.hero__micro`, `.hero__name`, `.hero__subtitle`, `.hero__oneliner`, `.hero__socials`, `.hero__photo` — 300ms duration, 50ms stagger between each.

**Mobile behavior (max-width: 639px):**
```css
@media (max-width: 639px) {
  .hero__container {
    flex-direction: column;
    text-align: center;
  }
  .hero__socials { justify-content: center; }
  .hero__photo {
    width: 220px;
    height: 280px;
    order: -1;
  }
}
```

---

### 5.2 About Section

**Purpose:** Brief personal narrative with language/identity pills.

**HTML structure:**
```html
<section id="about" class="about section">
  <div class="section__container">
    <div class="about__layout">
      <div class="about__text">
        <span class="type-micro" style="color: var(--cyan)">ABOUT</span>
        <h2 class="type-headline about__headline">Builder, not a credential collector</h2>
        <p class="type-body about__body">
          <!-- CONTENT: 2-3 sentences about yourself. Direction:
               4th year Sogang University, Malaysian background.
               Builder mindset — learning CS through building, not credentials.
               President of 3 organizations, TA for 3 classes.
               Interests: systems thinking, optimization, language, fitness. -->
        </p>
      </div>
      <div class="about__markers">
        <div class="about__languages">
          <span class="pill pill--lang pill--lang-en">English</span>
          <span class="pill pill--lang pill--lang-ko">한국어</span>
          <span class="pill pill--lang pill--lang-zh">中文</span>
          <span class="pill pill--lang pill--lang-ms">Bahasa Melayu</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS rules:**
```css
.about {
  background: var(--bg-section);
}

.about__layout {
  display: flex;
  gap: 48px;
  align-items: flex-start;
}

.about__text {
  flex: 1;
}

.about__headline {
  margin: 12px 0 16px 0;
}

.about__body {
  margin: 0;
  max-width: 520px;
}

.about__markers {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about__languages {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Language pills */
.pill--lang {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 600;
}
.pill--lang-en { background: var(--magenta-tint-bg); color: var(--magenta-tint-text); }
.pill--lang-ko { background: var(--cyan-tint-bg); color: var(--cyan-tint-text); }
.pill--lang-zh { background: var(--lime-tint-bg); color: var(--lime-dark-text); }
.pill--lang-ms { background: #f0f0f0; color: var(--text-secondary); }
```

**JS behavior:** None specific. Scroll-reveal only (handled by global system).

**Mobile behavior (max-width: 639px):**
```css
@media (max-width: 639px) {
  .about__layout {
    flex-direction: column;
    gap: 24px;
  }
}
```

---

### 5.3 Projects Section

**Purpose:** Showcase built things. LifeOS as hero dark card, secondary projects in 2-col grid.

**HTML structure:**
```html
<section id="projects" class="projects section">
  <div class="section__container">
    <span class="type-micro" style="color: var(--magenta)">PROJECTS</span>
    <h2 class="type-headline" style="margin: 12px 0 32px 0;">What I've built</h2>

    <!-- Hero project card — rendered by JS from PROJECTS array (is_hero: true) -->
    <div id="hero-project" class="project-hero"></div>

    <!-- Secondary project cards — rendered by JS from PROJECTS array (is_hero: false) -->
    <div id="projects-grid" class="projects__grid"></div>
  </div>
</section>
```

**Hero project card (rendered by JS):**
```html
<!-- JS generates this inside #hero-project -->
<article class="project-hero__card">
  <div class="project-hero__content">
    <span class="type-micro" style="color: var(--lime)">HERO PROJECT</span>
    <h3 class="project-hero__title">{name}</h3>
    <p class="project-hero__desc">{description}</p>
    <ul class="project-hero__highlights">
      <li>{highlight}</li>
      <!-- for each highlight -->
    </ul>
    <div class="project-hero__tech">
      <span class="pill pill--tech-dark">{tech}</span>
      <!-- for each tech_stack item -->
    </div>
    <span class="pill pill--status">{status}</span>
  </div>
  <div class="blob blob--hero-1" aria-hidden="true"></div>
  <div class="blob blob--hero-2" aria-hidden="true"></div>
</article>
```

**Secondary project card (rendered by JS):**
```html
<!-- JS generates one per non-hero project inside #projects-grid -->
<article class="project-card">
  <h3 class="project-card__title">{name}</h3>
  <p class="project-card__desc">{description}</p>
  <div class="project-card__tech">
    <span class="pill pill--tech-light">{tech}</span>
  </div>
</article>
```

**CSS rules:**
```css
.projects {
  background: var(--white);
}

/* Hero project card */
.project-hero__card {
  position: relative;
  background: var(--dark-gradient);
  border-radius: var(--radius-hero-card);
  padding: 28px;
  overflow: hidden;
  margin-bottom: 24px;
}

.project-hero__title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 800;
  color: var(--dark-text-primary);
  margin: 12px 0 12px 0;
  letter-spacing: -0.02em;
}

.project-hero__desc {
  font-size: 14px;
  font-weight: 400;
  color: var(--dark-text-secondary);
  line-height: 1.6;
  margin: 0 0 16px 0;
  max-width: 560px;
}

.project-hero__highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-hero__highlights li {
  font-size: 12px;
  font-weight: 600;
  color: var(--dark-text-secondary);
  padding: 4px 12px;
  background: var(--dark-surface-subtle);
  border-radius: var(--radius-pill);
}

.project-hero__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.pill--tech-dark {
  display: inline-block;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: 10px;
  font-weight: 600;
  background: var(--dark-surface-light);
  color: #cccccc;
}

.pill--status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 700;
  background: var(--lime-tint-bg);
  color: var(--lime-dark-text);
}

/* Hero blobs */
.blob--hero-1 {
  width: 200px; height: 200px;
  background: linear-gradient(135deg, var(--magenta), var(--cyan));
  opacity: 0.12;
  top: -40px; right: -30px;
}
.blob--hero-2 {
  width: 140px; height: 140px;
  background: linear-gradient(135deg, var(--cyan), var(--lime));
  opacity: 0.08;
  bottom: -20px; left: 20%;
}

/* Secondary projects grid */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.project-card {
  background: #f8f8f8;
  border-radius: var(--radius-card);
  padding: 20px;
  transition: transform var(--hover-transition), box-shadow var(--hover-transition);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.project-card:hover {
  transform: var(--hover-transform);
  box-shadow: var(--hover-shadow);
}

.project-card__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 8px 0;
}

.project-card__desc {
  font-size: 13px;
  font-weight: 400;
  color: var(--text-tertiary);
  line-height: 1.5;
  margin: 0 0 12px 0;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pill--tech-light {
  display: inline-block;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: 10px;
  font-weight: 600;
  background: #f0f0f0;
  color: var(--text-secondary);
}
```

**JS behavior:**
- On load: read `PROJECTS` array, render hero card into `#hero-project` and secondary cards into `#projects-grid`.
- Secondary cards with a `url` value: wrap in `<a>` tag opening in new tab.

**Mobile behavior (max-width: 639px):**
```css
@media (max-width: 639px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 5.4 Certificates Section

**Purpose:** Filterable grid of achievements with category color-coding and lightbox modal.

**HTML structure:**
```html
<section id="certificates" class="certificates section">
  <div class="section__container">
    <span class="type-micro" style="color: var(--cyan)">CERTIFICATES & AWARDS</span>
    <h2 class="type-headline" style="margin: 12px 0 24px 0;">Recognition</h2>

    <!-- Filter bar -->
    <div class="cert-filters" role="tablist" aria-label="Certificate category filter">
      <button class="pill pill--filter active" data-filter="all" role="tab" aria-selected="true">All</button>
      <button class="pill pill--filter" data-filter="scholarship" role="tab" aria-selected="false">Scholarships</button>
      <button class="pill pill--filter" data-filter="academic" role="tab" aria-selected="false">Academic</button>
      <button class="pill pill--filter" data-filter="leadership" role="tab" aria-selected="false">Leadership</button>
      <button class="pill pill--filter" data-filter="cultural" role="tab" aria-selected="false">Cultural</button>
      <button class="pill pill--filter" data-filter="language" role="tab" aria-selected="false">Language</button>
    </div>

    <!-- Certificate grid — rendered by JS from CERTIFICATES array -->
    <div id="cert-grid" class="cert-grid"></div>
  </div>
</section>

<!-- Lightbox modal — one instance, reused -->
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Certificate viewer" hidden>
  <div class="lightbox__backdrop"></div>
  <div class="lightbox__content">
    <button class="lightbox__close" aria-label="Close">&times;</button>
    <img id="lightbox-img" class="lightbox__img" src="" alt="">
  </div>
</div>
```

**Certificate card (rendered by JS):**
```html
<!-- JS generates one per certificate inside #cert-grid -->
<article class="cert-card" data-category="{category}" tabindex="0" role="button" aria-label="View {name}">
  <span class="type-micro cert-card__category" style="color: {category_color}">{category_label}</span>
  <h3 class="cert-card__title">{name}</h3>
  <span class="cert-card__date">{date}</span>
</article>
```

**CSS rules:**
```css
.certificates {
  background: var(--bg-section);
}

/* Filter pills */
.cert-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.pill--filter {
  padding: 5px 14px;
  border-radius: var(--radius-pill);
  font-size: 11px;
  font-weight: 600;
  border: 1px solid var(--border-light);
  background: var(--white);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--hover-transition);
  min-height: 44px;   /* touch target */
}

.pill--filter.active {
  background: var(--text-primary);
  color: var(--white);
  border-color: var(--text-primary);
  font-weight: 700;
}

/* Certificate grid */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Certificate card */
.cert-card {
  background: var(--white);
  border-radius: var(--radius-card);
  padding: 16px;
  border-left: 3px solid transparent;
  cursor: pointer;
  transition: transform var(--hover-transition), box-shadow var(--hover-transition), opacity var(--filter-transition);
  min-height: 44px;   /* touch target */
}

.cert-card:hover {
  transform: var(--hover-transform);
  box-shadow: var(--hover-shadow);
}

.cert-card:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

/* Category border colors — applied via JS inline style */
.cert-card[data-category="scholarship"] { border-left-color: var(--magenta); }
.cert-card[data-category="academic"]    { border-left-color: var(--cyan); }
.cert-card[data-category="leadership"]  { border-left-color: var(--lime); }
.cert-card[data-category="cultural"]    { border-left-color: var(--magenta); }
.cert-card[data-category="language"]    { border-left-color: var(--cyan); }

.cert-card__category {
  display: block;
  margin-bottom: 6px;
}

.cert-card__title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 4px 0;
}

.cert-card__date {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-muted);
}

/* Filter hidden state */
.cert-card--hidden {
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
  position: absolute;
  visibility: hidden;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox[hidden] {
  display: none;
}

.lightbox__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.lightbox__content {
  position: relative;
  background: var(--white);
  border-radius: var(--radius-hero-card);
  padding: 16px;
  max-width: 90vw;
  max-height: 90vh;
  animation: modal-enter var(--modal-enter) forwards;
}

.lightbox__close {
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--text-secondary);
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-pill);
}

.lightbox__close:hover {
  color: var(--text-primary);
}

.lightbox__img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-card);
}

@keyframes modal-enter {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

**JS behavior:** See Section 7 (Certificate Filter + Lightbox).

**Mobile behavior:**
```css
@media (max-width: 1023px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 639px) {
  .cert-grid {
    grid-template-columns: 1fr;
  }
  .cert-filters {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 8px;
  }
  .pill--filter {
    white-space: nowrap;
  }
}
```

---

### 5.5 Footer

**Purpose:** Minimal dark closing section.

**HTML structure:**
```html
<footer id="footer" class="footer">
  <div class="footer__container">
    <div class="footer__left">
      <span class="footer__name">Taeyang Han</span>
      <span class="footer__tagline">Built with intention</span>
    </div>
    <div class="footer__right">
      <a href="" class="footer__icon" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
      <!-- CONTENT: GitHub URL -->
      <a href="" class="footer__icon" target="_blank" rel="noopener" aria-label="LinkedIn">LI</a>
      <!-- CONTENT: LinkedIn URL -->
      <a href="" class="footer__icon" target="_blank" rel="noopener" aria-label="Xiaohongshu">XHS</a>
      <!-- CONTENT: Xiaohongshu URL -->
    </div>
  </div>
</footer>
```

**CSS rules:**
```css
.footer {
  background: var(--dark-bg);
  padding: 48px var(--section-padding-x);
}

.footer__container {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__name {
  font-size: 16px;
  font-weight: 800;
  color: var(--dark-text-primary);
  display: block;
}

.footer__tagline {
  font-size: 12px;
  font-weight: 400;
  color: var(--dark-text-muted);
  display: block;
  margin-top: 4px;
}

.footer__right {
  display: flex;
  gap: 12px;
}

.footer__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--dark-surface-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-text-secondary);
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
  transition: background var(--hover-transition);
}

.footer__icon:hover {
  background: var(--dark-surface-light);
}
```

**JS behavior:** None.

**Mobile behavior (max-width: 639px):**
```css
@media (max-width: 639px) {
  .footer__container {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
}
```

---

## 6. Cross-Cutting: Scroll Reveal System

**Implementation:** Vanilla JS using `IntersectionObserver`. No library.

**CSS (add to `styles.css`):**
```css
/* Scroll reveal — initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--reveal-duration) var(--reveal-easing),
              transform var(--reveal-duration) var(--reveal-easing);
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**JS (in `script.js`):**
```js
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el, i) => {
    el.style.transitionDelay = `${i % 5 * 50}ms`;  // stagger within visible group
    observer.observe(el);
  });
}
```

**Application:** Add `class="reveal"` to these elements:
- `.about__text`, `.about__markers`
- `#hero-project`, each `.project-card`
- `.cert-filters`, each `.cert-card`
- `.footer__left`, `.footer__right`

**Hero section** uses its own load animation (not scroll-reveal) since it's visible on page load.

---

## 7. Cross-Cutting: Certificate Filter + Lightbox

### 7.1 Filter Logic

```js
const CATEGORY_COLORS = {
  scholarship: { color: 'var(--magenta-tint-text)', label: 'Scholarship' },
  academic:    { color: 'var(--cyan-tint-text)',    label: 'Academic' },
  leadership:  { color: 'var(--lime-dark-text)',    label: 'Leadership' },
  cultural:    { color: 'var(--magenta-tint-text)', label: 'Cultural' },
  language:    { color: 'var(--cyan-tint-text)',     label: 'Language' }
};

function renderCertificates() {
  const grid = document.getElementById('cert-grid');
  grid.innerHTML = CERTIFICATES.map(cert => {
    const cat = CATEGORY_COLORS[cert.category];
    return `
      <article class="cert-card reveal" data-category="${cert.category}"
               tabindex="0" role="button" aria-label="View ${cert.name}"
               data-image="${cert.image_path}">
        <span class="type-micro cert-card__category" style="color: ${cat.color}">
          ${cat.label}
        </span>
        <h3 class="cert-card__title">${cert.name}</h3>
        <span class="cert-card__date">${cert.date}</span>
      </article>`;
  }).join('');
}

function initFilters() {
  const buttons = document.querySelectorAll('.pill--filter');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.cert-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('cert-card--hidden', !match);
      });
    });
  });
}
```

### 7.2 Lightbox Logic

```js
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const backdrop = lightbox.querySelector('.lightbox__backdrop');

  function openLightbox(imagePath, altText) {
    img.src = imagePath;
    img.alt = altText;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    img.src = '';
  }

  // Delegate click on cert cards
  document.getElementById('cert-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card');
    if (card && card.dataset.image) {
      openLightbox(card.dataset.image, card.querySelector('.cert-card__title').textContent);
    }
  });

  // Also handle Enter/Space on focused cert cards
  document.getElementById('cert-grid').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.cert-card');
      if (card && card.dataset.image) {
        e.preventDefault();
        openLightbox(card.dataset.image, card.querySelector('.cert-card__title').textContent);
      }
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  backdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}
```

---

## 8. Responsive Layout System

### Global section container (in `styles.css`):
```css
.section {
  padding: var(--section-padding-y) var(--section-padding-x);
}

.section__container {
  max-width: 1120px;
  margin: 0 auto;
}
```

### Breakpoints:

| Breakpoint | Range                   | `--section-padding-y` | `--section-padding-x` |
|------------|------------------------|-----------------------|-----------------------|
| Desktop    | `min-width: 1024px`    | `100px`               | `48px`                |
| Tablet     | `640px` to `1023px`    | `72px`                | `32px`                |
| Mobile     | `max-width: 639px`     | `56px`                | `20px`                |

### Responsive overrides (in `styles.css`):
```css
@media (max-width: 1023px) {
  :root {
    --section-padding-y: 72px;
    --section-padding-x: 32px;
  }
}

@media (max-width: 639px) {
  :root {
    --section-padding-y: 56px;
    --section-padding-x: 20px;
  }
}
```

### Grid behavior per section:

| Section            | Desktop (>=1024)     | Tablet (640-1023)     | Mobile (<=639)        |
|--------------------|----------------------|-----------------------|-----------------------|
| Hero               | text left, photo right | text left, photo right (smaller) | stacked, centered    |
| About              | 2-col (text + pills) | 2-col                 | 1-col stacked         |
| Projects (secondary) | 2-col grid         | 2-col grid            | 1-col                 |
| Certificates       | 3-col grid           | 2-col grid            | 1-col                 |
| Footer             | row, space-between   | row, space-between    | stacked, centered     |

---

## 9. Boundaries

### FORBIDDEN — do not include in output:

- Blog / writing section
- Contact form
- Dark mode toggle
- Parallax or floating animations
- CMS or admin panel
- Resume/CV download button
- Analytics or tracking scripts
- Backend of any kind
- Any JavaScript framework or library (vanilla JS only)
- npm, node_modules, build steps, package.json
- Serif fonts of any kind
- Asymmetric border-radius / sharp corners
- Muted, desaturated, sage, or earth-tone colors
- Shadows as default card styling (use bg color shift; shadows only on hover)
- `font-weight: 300` or `font-weight: 500`
- `backdrop-filter: blur(...)` / glassmorphism
- External CSS frameworks (Bootstrap, Tailwind, etc.)
- `rgba(0,0,0,...)` shadows with opacity heavier than `0.08`
- Animation durations above `400ms`
- Service worker or PWA features
- Internationalization toggle
- Testimonials section
- Image optimization or lazy loading libraries

### REQUIRED — must be present in output:

- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- CSS custom properties for ALL design tokens (single source of truth in `:root`)
- Google Fonts loaded via `<link>` in `<head>` (Inter 400/600/700/800)
- All design tokens from Section 2 faithfully reproduced as CSS variables
- Pill shape (`border-radius: 999px`) on all buttons and pills
- Symmetric rounded corners (`12px` or `16px`) on all cards
- Gradient backgrounds on social link pills
- 3px colored left border on certificate cards matching category
- Dark card treatment for hero project (gradient dark bg)
- Gradient blob decorative elements in hero section
- Responsive at all 3 breakpoints (mobile <=639 / tablet 640-1023 / desktop >=1024)
- Scroll-reveal via IntersectionObserver (no library), 400ms snappy timing
- Lightbox modal for certificates via vanilla JS
- Filter functionality for certificate grid via vanilla JS
- Content slots clearly marked with `<!-- CONTENT: description -->` for user to fill in
- Accessible: semantic HTML, `alt` texts on images, `focus-visible` states, `aria-label` on interactive elements, min 44px touch targets
- Print-friendly: `@media print` hides animations/decorative blobs, shows clean content

---

## 10. Content Checklist

Before the site is complete, the user must supply:

- [ ] **Hero photo** — recommended 400x500px min, PNG/JPG, displayed in rounded container. Place at `assets/hero.jpg` (or update `src` in HTML).
- [ ] **GitHub URL** — insert in hero social pill `href` and footer icon `href`.
- [ ] **LinkedIn URL** — insert in hero social pill `href` and footer icon `href`.
- [ ] **Xiaohongshu URL** — insert in hero social pill `href` and footer icon `href`.
- [ ] **About section text** — 2-3 sentences in `.about__body`.
- [ ] **Project descriptions** — populate `PROJECTS` array in `script.js` (minimum: LifeOS + 1 more).
- [ ] **Project screenshots** (optional) — 16:9 ratio, place in `assets/projects/`.
- [ ] **Certificate images** — A4 ratio or square crop, JPG/PNG, <500KB each. Place in `assets/certs/`.
- [ ] **Populate `CERTIFICATES` array** — all ~30+ entries in `script.js` using the schema from Section 4.2.

---

## 11. Sonnet Execution Instructions

Build the site in this exact order. Do not deviate. Do not add files beyond these three.

### Step 1: `styles.css` (~400 lines max)

**Write in this order:**
1. `:root` block — all CSS custom properties from Section 2 (copy verbatim)
2. Reset — `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
3. `body` — `font-family: var(--font-family); color: var(--text-primary); background: var(--white); -webkit-font-smoothing: antialiased;`
4. Typography utility classes (`.type-display`, `.type-headline`, `.type-micro`, `.type-body`, `.type-label`, `.type-caption`)
5. `.section` and `.section__container` layout
6. `.reveal` and `.reveal.revealed` animation classes
7. Hero section styles (all `.hero*` classes, `.blob*` classes, `@keyframes bounce`, social pills)
8. About section styles
9. Projects section styles (hero card + grid + secondary cards)
10. Certificates section styles (filters, grid, card, hidden state)
11. Lightbox styles
12. Footer styles
13. Responsive overrides — tablet `@media (max-width: 1023px)` then mobile `@media (max-width: 639px)`
14. Print styles — `@media print { .blob, .hero__scroll-indicator { display: none; } .reveal { opacity: 1; transform: none; } }`

**Verification:** Open `styles.css` referenced from a blank HTML file — confirm no syntax errors in browser DevTools console.

### Step 2: `index.html` (~250 lines max)

**Write in this order:**
1. `<!DOCTYPE html>`, `<html lang="en">`
2. `<head>`: charset, viewport, title "Taeyang Han — Portfolio", Google Fonts `<link>` tags (3 total: preconnect x2 + font), `<link rel="stylesheet" href="styles.css">`
3. `<body>`:
   - `<header id="hero">` — full hero HTML from Section 5.1
   - `<main>`:
     - `<section id="about">` — about HTML from Section 5.2
     - `<section id="projects">` — projects HTML from Section 5.3
     - `<section id="certificates">` — certificates HTML from Section 5.4
   - `<footer id="footer">` — footer HTML from Section 5.5
   - Lightbox modal HTML from Section 5.4 (outside `<main>`, before `</body>`)
4. `<script src="script.js"></script>` before `</body>`

**Verification:** Open `index.html` in browser — confirm all 5 sections render, layout is correct at desktop width, Inter font loads, gradient blobs visible but contained (no horizontal scroll).

### Step 3: `script.js` (~200 lines max)

**Write in this order:**
1. `PROJECTS` data array (from Section 4.1, with content slot comments)
2. `CERTIFICATES` data array (from Section 4.2, with example entries)
3. `CATEGORY_COLORS` map (from Section 7.1)
4. `renderProjects()` — reads `PROJECTS`, generates hero card HTML into `#hero-project` and secondary cards into `#projects-grid`
5. `renderCertificates()` — reads `CERTIFICATES`, generates cert card HTML into `#cert-grid`
6. `initFilters()` — from Section 7.1
7. `initLightbox()` — from Section 7.2
8. `initScrollReveal()` — from Section 6
9. `initHeroAnimation()` — select hero child elements, stagger `classList.add('revealed')` with 50ms delays
10. `document.addEventListener('DOMContentLoaded', () => { ... })` — calls all init functions in order: `renderProjects()`, `renderCertificates()`, `initFilters()`, `initLightbox()`, `initScrollReveal()`, `initHeroAnimation()`

**Verification:**
- Scroll down — confirm `.reveal` elements fade in as they enter viewport
- Click filter pills — confirm grid filters correctly, "All" shows everything
- Click a cert card — confirm lightbox opens with image
- Click backdrop or press Escape — confirm lightbox closes
- Resize browser through all 3 breakpoints — confirm responsive behavior

### Final Verification Checklist

After all 3 files are complete:

- [ ] Resize through mobile → tablet → desktop — layout adapts at each breakpoint
- [ ] No horizontal scrollbar at any width (gradient blobs clipped by `overflow: hidden`)
- [ ] All text readable — especially lime accent uses `--lime-dark-text` on light backgrounds, never raw `--lime`
- [ ] Certificate filter "All" shows all cards; each category button filters correctly
- [ ] Lightbox opens on cert card click, closes on backdrop click and Escape key
- [ ] Hero social pills have gradient backgrounds, not flat colors
- [ ] Hero project card has dark gradient background
- [ ] Certificate cards have 3px colored left border
- [ ] All cards have symmetric rounded corners (12px or 16px)
- [ ] All pills have `border-radius: 999px`
- [ ] Print preview (`Ctrl+P`) shows clean content without blobs or animations
- [ ] No console errors in browser DevTools
