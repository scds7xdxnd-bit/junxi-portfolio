(function () {
  'use strict';

  // ── Hero entrance sequence ───────────────────────────────────
  var heroName = document.querySelector('.hero__name');
  if (heroName) {
    var text = heroName.textContent.trim();
    heroName.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement('span');
      span.className = 'hero__char';
      span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      span.style.animationDelay = (0.4 + i * 0.1) + 's';
      heroName.appendChild(span);
    }
  }

  // ── Nav scroll ───────────────────────────────────────────────
  var nav = document.getElementById('site-nav');
  var lastScrollY = 0;
  var ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(function () {
        nav.classList.toggle('nav--scrolled', lastScrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Active nav link tracking ─────────────────────────────────
  var navLinks = document.querySelectorAll('.nav__link');
  var sections = [];
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      var section = document.getElementById(href.slice(1));
      if (section) sections.push({ el: section, link: link });
    }
  });

  if (sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = sections.find(function (s) { return s.el === entry.target; });
        if (match) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.classList.remove('is-active'); });
            match.link.classList.add('is-active');
          }
        }
      });
    }, { threshold: 0.2, rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(function (s) { sectionObserver.observe(s.el); });
  }

  // ── Mobile menu ──────────────────────────────────────────────
  var hamburger = document.querySelector('.nav__hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileLinks = mobileMenu.querySelectorAll('.mobile-menu__link');

  function openMenu() {
    mobileMenu.removeAttribute('aria-hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    hamburger.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    mobileLinks[0] && mobileLinks[0].focus();
  }

  function closeMenu() {
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    hamburger.classList.remove('is-open');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', function () {
    hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  mobileMenu.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); return; }
    if (e.key === 'Tab') {
      var first = mobileLinks[0];
      var last  = mobileLinks[mobileLinks.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  // ── Lightbox ─────────────────────────────────────────────────
  var lightbox  = document.getElementById('lightbox');
  var lbImg     = lightbox.querySelector('.lightbox__img');
  var lbCaption = lightbox.querySelector('.lightbox__caption');
  var lbCounter = lightbox.querySelector('.lightbox__counter');
  var lbClose   = lightbox.querySelector('.lightbox__close');
  var lbPrev    = lightbox.querySelector('.lightbox__prev');
  var lbNext    = lightbox.querySelector('.lightbox__next');
  var lbOverlay = lightbox.querySelector('.lightbox__overlay');

  var galleryItems = Array.from(
    document.querySelectorAll('[data-lightbox-index]')
  ).sort(function (a, b) {
    return +a.dataset.lightboxIndex - +b.dataset.lightboxIndex;
  });

  var images = galleryItems.map(function (item) {
    var img = item.querySelector('img');
    return { src: img.src, alt: img.alt };
  });

  var currentIndex = 0;
  var focusOrigin  = null;

  function showImage(index) {
    var total = images.length;
    currentIndex = ((index % total) + total) % total;
    lbImg.classList.add('is-fading');
    var next = currentIndex;
    setTimeout(function () {
      lbImg.src = images[next].src;
      lbImg.alt = images[next].alt;
      lbCaption.textContent = images[next].alt;
      lbCounter.textContent = (next + 1) + ' / ' + total;
      lbImg.classList.remove('is-fading');
    }, 200);
  }

  function openLightbox(index) {
    focusOrigin = document.activeElement;
    currentIndex = index;
    lbImg.src = images[index].src;
    lbImg.alt = images[index].alt;
    lbCaption.textContent = images[index].alt;
    lbCounter.textContent = (index + 1) + ' / ' + images.length;
    lightbox.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function () { lbImg.src = ''; lbImg.alt = ''; }, 400);
    if (focusOrigin) focusOrigin.focus();
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(+item.dataset.lightboxIndex);
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(+item.dataset.lightboxIndex);
      }
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbOverlay.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', function () { showImage(currentIndex - 1); });
  lbNext.addEventListener('click', function () { showImage(currentIndex + 1); });

  lightbox.addEventListener('keydown', function (e) {
    if (e.key === 'Escape')      { closeLightbox(); return; }
    if (e.key === 'ArrowLeft')   { showImage(currentIndex - 1); return; }
    if (e.key === 'ArrowRight')  { showImage(currentIndex + 1); return; }
    if (e.key === 'Tab') {
      var focusable = [lbClose, lbPrev, lbNext];
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  // ── Scroll reveal ─────────────────────────────────────────────
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

}());
