/* ══════════════════════════════════════════════════════════
   1. DATA — PROJECTS
   ══════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    id: "proj-001",
    name: "LifeOS",
    description: "Unified personal life management platform — finance, health, habits, skills across 6 integrated domains. Features event-driven architecture, LP macro optimizer, and a custom Botanical Editorial design system.",
    tech_stack: ["Next.js", "Flask", "PostgreSQL", "Python", "TypeScript"],
    status: "In Development",
    url: "https://lifeos-wine.vercel.app",
    image_path: "assets/projects/lifeos.jpg",
    is_hero: true,
    highlights: [
      "6 integrated life domains",
      "LP macro optimizer",
      "Event-driven architecture",
      "Custom design system"
    ]
  },
  {
    id: "proj-002",
    name: "小红书 Content",
    description: "Documenting the LifeOS building journey on Xiaohongshu. Strategy, content creation, and audience growth with brother handling editing and posting.",
    tech_stack: ["Content Strategy", "Xiaohongshu"],
    status: "Active",
    url: "https://xhslink.com/m/6pTVib4GbZU",
    image_path: "assets/projects/xiaohongshu.jpg",
    is_hero: false,
    theme: "red",
    highlights: []
  },
  {
    id: "proj-003",
    name: "Personal Accounting System",
    description: "Full personal accounting system built from scratch since 2021 — my first ever project, continuously maintained and improved over 5 years.",
    tech_stack: ["Python", "Flask", "PostgreSQL"],
    status: "Active",
    url: "https://finance-app-private-alpha.fly.dev/",
    image_path: "assets/projects/accounting.jpg",
    is_hero: false,
    theme: "green",
    highlights: []
  }
];

/* ══════════════════════════════════════════════════════════
   2. DATA — CERTIFICATES
   ══════════════════════════════════════════════════════════ */

const CERTIFICATES = [
  // ===== SCHOLARSHIPS =====
  {
    id: "sch-001",
    name: "삼성글로벌꿈장학 (Samsung Global Dream Scholarship)",
    category: "scholarship",
    date: "2024-1",
    issuer: "Samsung",
    image_path: "assets/certs/20241_삼성글로벌꿈장학.jpg"
  },
  {
    id: "sch-002",
    name: "리앤원장학 (Lee & Won Scholarship)",
    category: "scholarship",
    date: "2023-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20232_리앤원_장학.jpg"
  },
  {
    id: "sch-003",
    name: "서강동문장학 (Sogang Alumni Scholarship)",
    category: "scholarship",
    date: "2024-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20242_서강동문장학.jpg"
  },
  {
    id: "sch-004",
    name: "서강동문장학 (Sogang Alumni Scholarship)",
    category: "scholarship",
    date: "2025-1",
    issuer: "Sogang University",
    image_path: "assets/certs/20251_서강동문장학.jpg"
  },
  {
    id: "sch-005",
    name: "서강동문장학 (Sogang Alumni Scholarship)",
    category: "scholarship",
    date: "2025-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20252_서강동문장학.jpg"
  },

  // ===== ACADEMIC =====
  {
    id: "acd-001",
    name: "PALS 우수상 (Excellence Award)",
    category: "academic",
    date: "2024-1",
    issuer: "Sogang University",
    image_path: "assets/certs/20241_PALS_우수상_영어.jpg"
  },
  {
    id: "acd-002",
    name: "PALS 우수상 (Excellence Award)",
    category: "academic",
    date: "2024-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20242_PALS_우수상.jpg"
  },
  {
    id: "acd-003",
    name: "PALS 활동증명 (Activity Certificate)",
    category: "academic",
    date: "2024-1",
    issuer: "Sogang University",
    image_path: "assets/certs/20241_PALS_활동_영어.jpg"
  },
  {
    id: "acd-004",
    name: "그룹스터디 (Group Study)",
    category: "academic",
    date: "2024-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20242_그룹스터디.jpg"
  },
  {
    id: "acd-005",
    name: "디딤돌 멘토링 (Stepping Stone Mentoring)",
    category: "academic",
    date: "2025-1",
    issuer: "Sogang University",
    image_path: "assets/certs/20251_디딤돌_멘토링.jpg"
  },
  {
    id: "acd-006",
    name: "INTEC 우수상 (Excellence Award)",
    category: "academic",
    date: "2022-1",
    issuer: "INTEC Education College",
    image_path: "assets/certs/20221_INTEC_우수상.jpg"
  },
  {
    id: "acd-007",
    name: "INTEC Graduation Certificate",
    category: "academic",
    date: "2022-1",
    issuer: "INTEC Education College",
    image_path: "assets/certs/20221_INTEC_졸업.jpg"
  },

  // ===== LEADERSHIP =====
  {
    id: "ldr-001",
    name: "PALS 회장 (President)",
    category: "leadership",
    date: "2025-1",
    issuer: "Sogang University",
    image_path: "assets/certs/20251_PALS_회장.jpg"
  },
  {
    id: "ldr-002",
    name: "MSDC (Malaysian Students Diplomatic Corps)",
    category: "leadership",
    date: "2022-1",
    issuer: "MSDC Korea",
    image_path: "assets/certs/20221_MSDC.jpg"
  },
  {
    id: "ldr-003",
    name: "MSDC",
    category: "leadership",
    date: "2023-2",
    issuer: "MSDC Korea",
    image_path: "assets/certs/20232_MSDC.jpg"
  },
  {
    id: "ldr-004",
    name: "MSDC",
    category: "leadership",
    date: "2024-2",
    issuer: "MSDC Korea",
    image_path: "assets/certs/20242_MSDC.jpg"
  },
  {
    id: "ldr-005",
    name: "MSDC — Look East Policy Event",
    category: "leadership",
    date: "2023-1",
    issuer: "MSDC Korea",
    image_path: "assets/certs/20231_MSDC_LOOK_EAST_POLICY.jpg"
  },
  {
    id: "ldr-006",
    name: "MSDC — Hari Kebudayaan",
    category: "leadership",
    date: "2023-2",
    issuer: "MSDC Korea",
    image_path: "assets/certs/20232_MSDC_HARI_KEBUDAYAAN.jpg"
  },
  {
    id: "ldr-007",
    name: "MSDC — Majlis Anugerah Dirgahayu",
    category: "leadership",
    date: "2023-2",
    issuer: "MSDC Korea",
    image_path: "assets/certs/20232_MSDC_MAJLIS_ANUGERAH_DIRGAHAYU.jpg"
  },
  {
    id: "ldr-008",
    name: "KASUMA First Aid Committee",
    category: "leadership",
    date: "2022-1",
    issuer: "KASUMA",
    image_path: "assets/certs/20221_KASUMA.jpg"
  },
  {
    id: "ldr-009",
    name: "KASUMA Telematch",
    category: "leadership",
    date: "2022-1",
    issuer: "KASUMA",
    image_path: "assets/certs/20221_KASUMA_TELEMATCH.jpg"
  },
  {
    id: "ldr-010",
    name: "PALS 회장 (President)",
    category: "leadership",
    date: "2025-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20252_PALS_회장_ENG.jpg"
  },
  // ===== CULTURAL =====
  {
    id: "cul-001",
    name: "리앤원 아시안 펠로우십 수료 (Asian Fellowship — Completion)",
    category: "cultural",
    date: "2023-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20232_리앤원_아시안_펠로우십_수료.jpg"
  },
  {
    id: "cul-002",
    name: "리앤원 아시안 펠로우십 우수상 (Asian Fellowship — Excellence)",
    category: "cultural",
    date: "2023-2",
    issuer: "Sogang University",
    image_path: "assets/certs/20232_리앤원_아시안_펠로우십_우수상.jpg"
  },
  {
    id: "cul-003",
    name: "FITPPMK",
    category: "cultural",
    date: "2022-1",
    issuer: "PPMK",
    image_path: "assets/certs/20221_FITPPMK.jpg"
  },
  {
    id: "cul-004",
    name: "PPMKxMASAF",
    category: "cultural",
    date: "2023-1",
    issuer: "PPMK / MASAF",
    image_path: "assets/certs/20231_PPMKxMASAF.jpg"
  },
  {
    id: "cul-005",
    name: "PPMKxMSAJ",
    category: "cultural",
    date: "2024-1",
    issuer: "PPMK / MSAJ",
    image_path: "assets/certs/20241_PPMKxMSAJ.jpg"
  },
  {
    id: "cul-006",
    name: "Semarak Jiwa Merdeka",
    category: "cultural",
    date: "2024-2",
    issuer: "Malaysian Student Association",
    image_path: "assets/certs/20242_SEMARAK_JIWA_MERDEKA.jpg"
  },
  {
    id: "cul-007",
    name: "Wind Orchestra",
    category: "cultural",
    date: "2024-1",
    issuer: "Sogang University",
    image_path: "assets/certs/20241_WIND_ORCHESTRA.jpg"
  },

  // ===== LANGUAGE =====
  {
    id: "lng-001",
    name: "TOPIK (Korean Proficiency Test)",
    category: "language",
    date: "2024-1",
    issuer: "National Institute for International Education",
    image_path: "assets/certs/20241_TOPIK_성적표.jpg"
  },
  {
    id: "lng-002",
    name: "北京语言大学成绩单 (Beijing Language University Transcript)",
    category: "language",
    date: "2026-1",
    issuer: "Beijing Language and Culture University",
    image_path: "assets/certs/20261_北京语言大学成绩单.jpg"
  }
];

/* ══════════════════════════════════════════════════════════
   3. CATEGORY COLORS MAP
   ══════════════════════════════════════════════════════════ */

const CATEGORY_COLORS = {
  scholarship: { color: 'var(--magenta-tint-text)', label: 'Scholarship' },
  academic:    { color: 'var(--cyan-tint-text)',    label: 'Academic' },
  leadership:  { color: 'var(--lime-dark-text)',    label: 'Leadership' },
  cultural:    { color: 'var(--magenta-tint-text)', label: 'Cultural' },
  language:    { color: 'var(--cyan-tint-text)',     label: 'Language' }
};

/* ══════════════════════════════════════════════════════════
   4. RENDER PROJECTS
   ══════════════════════════════════════════════════════════ */

function renderProjects() {
  const heroContainer = document.getElementById('hero-project');
  const gridContainer = document.getElementById('projects-grid');

  PROJECTS.forEach(project => {
    if (project.is_hero) {
      const heroTag = project.url ? 'a' : 'article';
      const heroLinkAttrs = project.url ? `href="${project.url}" target="_blank" rel="noopener"` : '';
      heroContainer.innerHTML = `
        <${heroTag} class="project-hero__card reveal" ${heroLinkAttrs} style="text-decoration:none;color:inherit;display:block">
          <div class="project-hero__inner">
            <div class="project-hero__content">
              <span class="type-micro" style="color: var(--lime)">HERO PROJECT</span>
              <h3 class="project-hero__title">${project.name}</h3>
              <p class="project-hero__desc">${project.description}</p>
              <ul class="project-hero__highlights">
                ${project.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
              <div class="project-hero__tech">
                ${project.tech_stack.map(t => `<span class="pill pill--tech-dark">${t}</span>`).join('')}
              </div>
              <span class="pill pill--status">${project.status}</span>
            </div>
            ${project.image_path ? `
            <div class="project-hero__browser">
              <div class="project-hero__browser-bar">
                <span class="project-hero__browser-dot"></span>
                <span class="project-hero__browser-dot"></span>
                <span class="project-hero__browser-dot"></span>
                <div class="project-hero__browser-url">${project.url ? project.url.replace(/^https?:\/\//, '') : ''}</div>
              </div>
              <div class="project-hero__browser-screen">
                <img src="${project.image_path}" alt="${project.name} screenshot">
              </div>
            </div>` : ''}
          </div>
          <div class="blob blob--hero-1" aria-hidden="true"></div>
          <div class="blob blob--hero-2" aria-hidden="true"></div>
        </${heroTag}>`;
    } else {
      const tag = project.url ? 'a' : 'div';
      const linkAttrs = project.url ? `href="${project.url}" target="_blank" rel="noopener"` : '';
      const themeClass = project.theme ? ` project-card--${project.theme}` : '';
      gridContainer.innerHTML += `
        <${tag} class="project-card${themeClass} reveal" ${linkAttrs}>
          ${project.image_path ? `<div class="project-card__image"><img src="${project.image_path}" alt="${project.name} screenshot"></div>` : ''}
          <h3 class="project-card__title">${project.name}</h3>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__tech">
            ${project.tech_stack.map(t => `<span class="pill pill--tech-light">${t}</span>`).join('')}
          </div>
        </${tag}>`;
    }
  });
}

/* ══════════════════════════════════════════════════════════
   5. RENDER CERTIFICATES
   ══════════════════════════════════════════════════════════ */

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

/* ══════════════════════════════════════════════════════════
   6. FILTER LOGIC
   ══════════════════════════════════════════════════════════ */

function initFilters() {
  const buttons = document.querySelectorAll('.pill--filter');

  // Inject counts into filter labels
  buttons.forEach(btn => {
    const filter = btn.dataset.filter;
    if (filter === 'all') {
      btn.textContent = `All (${CERTIFICATES.length})`;
    } else {
      const count = CERTIFICATES.filter(c => c.category === filter).length;
      btn.textContent = `${btn.textContent.trim()} (${count})`;
    }
  });

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

/* ══════════════════════════════════════════════════════════
   7. LIGHTBOX
   ══════════════════════════════════════════════════════════ */

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

  document.getElementById('cert-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card');
    if (card && card.dataset.image) {
      openLightbox(card.dataset.image, card.querySelector('.cert-card__title').textContent);
    }
  });

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

/* ══════════════════════════════════════════════════════════
   8. SCROLL REVEAL
   ══════════════════════════════════════════════════════════ */

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
    el.style.transitionDelay = `${i % 5 * 50}ms`;
    observer.observe(el);
  });
}

/* ══════════════════════════════════════════════════════════
   9. HERO ANIMATION
   ══════════════════════════════════════════════════════════ */

function initStickyNav() {
  const nav = document.getElementById('site-nav');
  const hero = document.getElementById('hero');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      nav.classList.toggle('visible', !entry.isIntersecting);
    });
  }, { threshold: 0 });
  observer.observe(hero);

  // Smooth scroll for nav links
  nav.querySelectorAll('.site-nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initHeroAnimation() {
  const elements = [
    '.hero__micro',
    '.hero__name',
    '.hero__subtitle',
    '.hero__oneliner',
    '.hero__socials',
    '.hero__photo'
  ];

  elements.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 300ms var(--reveal-easing), transform 300ms var(--reveal-easing)`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 50);
    }
  });
}

/* ══════════════════════════════════════════════════════════
   10. INIT
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderCertificates();
  initFilters();
  initLightbox();
  initScrollReveal();
  initHeroAnimation();
  initStickyNav();
});
