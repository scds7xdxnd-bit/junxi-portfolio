(function () {
  'use strict';

  var translations = {
    en: {
      'page.title':       'Junxi \u2014 Fighter & Stylist',
      'page.description': 'Junxi. Boxer and Muay Thai practitioner from Guangzhou. Trained without compromise. Dressed with precision.',
      'nav.about':    'ABOUT',
      'nav.training': 'TRAINING',
      'nav.style':    'STYLE',
      'nav.contact':  'CONTACT',
      'nav.lang':     '\u4e2d\u6587',
      'hero.subtitle': 'FIGHTER \u00b7 STYLIST',
      'hero.scroll':  'SCROLL',
      'about.label':  'ABOUT',
      'about.heading': '<em>I train without excuse. I dress with precision. Neither is up for debate.</em>',
      'about.body1': 'Five days a week, no exceptions. Guard up before the bell \u2014 never during, never after. Discipline isn\u2019t punishment. It\u2019s the only honest standard there is.',
      'about.body2': 'All black. Layered. Every piece chosen \u2014 nothing worn without reason. Not fashion as expression, but as an extension of how I carry myself through the world.',
      'about.body3': 'Guangzhou. Built in the ring, shaped by the mirror. Not searching for a direction \u2014 setting one.',
      'training.title': 'THE GYM',
      'style.title':    'STYLE',
      'style.quote':    '\u201cthe ring earns it. the wardrobe wears it.\u201d',
      'footer.copyright': '\u00a9 2026 JUNXI'
    },
    zh: {
      'page.title':       '\u4fe8\u718a \u2014 \u62f3\u624b\u4e0e\u9020\u578b\u5e08',
      'page.description': '\u4fe8\u718a\u3002\u5e7f\u5dde\u62f3\u51fb\u4e0e\u6cf0\u62f3\u7ec3\u4e60\u8005\u3002\u8bad\u7ec3\u4e0d\u59a5\u534f\uff0c\u7740\u88c5\u6709\u6807\u51c6\u3002',
      'nav.about':    '\u5173\u4e8e',
      'nav.training': '\u8bad\u7ec3',
      'nav.style':    '\u98ce\u683c',
      'nav.contact':  '\u8054\u7cfb',
      'nav.lang':     'EN',
      'hero.subtitle': '\u62f3\u624b \u00b7 \u9020\u578b\u5e08',
      'hero.scroll':  '\u5411\u4e0b',
      'about.label':  '\u5173\u4e8e',
      'about.heading': '<em>\u8bad\u7ec3\uff0c\u6ca1\u6709\u501f\u53e3\u3002\u7740\u88c5\uff0c\u7cbe\u51c6\u5230\u4f4d\u3002\u4e24\u8005\u7686\u4e0d\u5bb9\u7f6e\u7591\u3002</em>',
      'about.body1': '\u6bcf\u5468\u4e94\u5929\uff0c\u4ece\u4e0d\u4f8b\u5916\u3002\u9644\u58f0\u524d\u5907\u597d\u9632\u5fa1\u2014\u2014\u9644\u58f0\u4e2d\u4e0d\u80fd\uff0c\u9644\u58f0\u540e\u4e5f\u4e0d\u884c\u3002\u81ea\u5f8b\u4e0d\u662f\u60e9\u7f5a\uff0c\u5b83\u662f\u552f\u4e00\u8bda\u5b9e\u7684\u6807\u51c6\u3002',
      'about.body2': '\u5168\u9ed1\u3002\u5c42\u53e0\u3002\u6bcf\u4e00\u4ef6\u90fd\u7ecf\u8fc7\u6311\u9009\u2014\u2014\u6ca1\u6709\u4e00\u4ef6\u662f\u968f\u610f\u7a7f\u4e0a\u7684\u3002\u8863\u670d\u4e0d\u662f\u8868\u8fbe\uff0c\u800c\u662f\u6211\u884c\u8d70\u4e8e\u4e16\u7684\u5ef6\u4f38\u3002',
      'about.body3': '\u5e7f\u5dde\u3002\u5728\u62f3\u53f0\u4e0a\u94f8\u9020\uff0c\u5728\u955c\u5b50\u524d\u6253\u78e8\u3002\u4e0d\u662f\u5728\u5bfb\u627e\u65b9\u5411\u2014\u2014\u800c\u662f\u5728\u8bbe\u5b9a\u65b9\u5411\u3002',
      'training.title': '\u62f3\u9986',
      'style.title':    '\u98ce\u683c',
      'style.quote':    '\u300c\u62f3\u53f0\u78e8\u7783\uff0c\u8863\u88c5\u627f\u8f7d\u3002\u300d',
      'footer.copyright': '\u00a9 2026 \u4fe8\u718a'
    }
  };

  var currentLang = localStorage.getItem('junxi-lang') ||
    (navigator.language && navigator.language.startsWith('zh') ? 'zh' : 'en');

  function applyTranslations(lang) {
    var t = translations[lang] || translations.en;

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t['page.title'];

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t['page.description']);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = t['nav.lang'];
    });

    currentLang = lang;
    localStorage.setItem('junxi-lang', lang);
  }

  function handleToggle() {
    applyTranslations(currentLang === 'en' ? 'zh' : 'en');
  }

  applyTranslations(currentLang);

  document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
    btn.addEventListener('click', handleToggle);
  });

}());
