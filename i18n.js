(function () {
  'use strict';

  var translations = {
    en: {
      'page.title':       'Junxi \u2014 Fighter & Creative Based in Guangzhou',
      'page.description': 'Junxi. Boxer and Muay Thai practitioner from Guangzhou. Trained without compromise. Dressed with precision.',
      'nav.about':    'ABOUT',
      'nav.training': 'TRAINING',
      'nav.style':    'STYLE',
      'nav.contact':  'CONTACT',
      'nav.lang':     '\u4e2d\u6587',
      'hero.subtitle': 'FIGHTER \u00b7 CREATIVE',
      'hero.scroll':  'SCROLL',
      'about.label':  'ABOUT',
      'about.heading': '<em>I train without excuse. I dress with precision. Neither is up for debate.</em>',
      'about.body1': 'Five days a week, no exceptions. Guard up before the bell \u2014 never during, never after. Discipline isn\u2019t punishment. It\u2019s the only honest standard there is.',
      'about.body2': 'All black. Layered. Every piece chosen \u2014 nothing worn without reason. Not fashion as expression, but as an extension of how I carry myself through the world.',
      'about.body3': 'Guangzhou. Built in the ring, shaped by the mirror. Not searching for a direction \u2014 setting one.',
      'training.title': 'THE GYM',
      'style.title':    'STYLE',
      'style.quote':    '\u201cthe ring earns it. the wardrobe wears it.\u201d',
      'footer.email':     'Contact Me',
      'footer.copyright': '\u00a9 2026 JUNXI',

      // ── Image quotes ─────────────────────────────────────────────
      'img.0':  'Champions are made from something deep inside \u2014 a desire, a dream, a vision. \u2014 Muhammad Ali',
      'img.1':  'The fight is won or lost far away from witnesses. \u2014 Muhammad Ali',
      'img.2':  'You have power over your mind, not outside events. Realize this and you will find strength. \u2014 Marcus Aurelius, Meditations',
      'img.3':  'It does not matter how slowly you go, as long as you do not stop. \u2014 Confucius',
      'img.4':  'Do not pray for an easy life. Pray for the strength to endure a difficult one. \u2014 Bruce Lee',
      'img.5':  'I fear not the man who has practiced 10,000 kicks once. I fear the man who has practiced one kick 10,000 times. \u2014 Bruce Lee',
      'img.6':  'Strength does not come from physical capacity. It comes from an indomitable will. \u2014 Mahatma Gandhi',
      'img.7':  'To conquer oneself is greater than conquering a thousand men in battle. \u2014 The Dhammapada',
      'img.8':  'Style is a way to say who you are without having to speak. \u2014 Rachel Zoe',
      'img.9':  'The most courageous act is still to think for yourself. Aloud. \u2014 Coco Chanel',
      'img.10': 'Elegance is not about being noticed. It\u2019s about being remembered. \u2014 Giorgio Armani',
      'img.11': 'A man should look as if he has bought his clothes with intelligence, put them on with care, and then forgotten all about them. \u2014 Hardy Amies',
      'img.12': 'The secret of getting ahead is getting started. \u2014 Mark Twain',
      'img.13': 'The details are not the details. They make the design. \u2014 Charles Eames',
      'img.14': 'In character, in manner, in style \u2014 the supreme excellence is simplicity. \u2014 Longfellow',
      'img.15': 'Knowing others is wisdom. Knowing yourself is enlightenment. \u2014 Lao Tzu, Tao Te Ching',
      'img.about1': 'There is a crack in everything. That\u2019s how the light gets in. \u2014 Leonard Cohen',
      'img.about2': 'Be yourself; everyone else is already taken. \u2014 Oscar Wilde',
      'img.footer': 'The secret of change is to focus all energy not on fighting the old, but on building the new. \u2014 Socrates'
    },
    zh: {
      'page.title':       '\u541b\u718a \u2014 \u62f3\u624b\u4e0e\u9020\u578b\u5e08 \u4f4d\u4e8e\u5e7f\u5dde',
      'page.description': '\u541b\u718a\u3002\u5e7f\u5dde\u62f3\u51fb\u4e0e\u6cf0\u62f3\u7ec3\u4e60\u8005\u3002\u8bad\u7ec3\u4e0d\u59a5\u534f\uff0c\u7740\u88c5\u6709\u6807\u51c6\u3002',
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
      'training.title': '训练',
      'style.title':    '\u98ce\u683c',
      'style.quote':    '\u300c\u62f3\u53f0\u78e8\u7783\uff0c\u8863\u88c5\u627f\u8f7d\u3002\u300d',
      'footer.email':     '\u8054\u7cfb\u6211',
      'footer.copyright': '\u00a9 2026 \u541b\u718a',

      // ── 图片引言 ─────────────────────────────────────────────────
      'img.0':  '\u51a0\u519b\u7531\u5185\u800c\u751f\u2014\u2014\u6e34\u671b\u3001\u68a6\u60f3\u3001\u613f\u666f\u3002\u2014 \u7a46\u7f55\u9ed8\u5fb7\u00b7\u963f\u91cc',
      'img.1':  '\u80dc\u8d1f\u65e9\u5728\u65e0\u4eba\u89c1\u8bc1\u4e4b\u5904\u5df2\u5206\u9ad8\u4e0b\u3002\u2014 \u7a46\u7f55\u9ed8\u5fb7\u00b7\u963f\u91cc',
      'img.2':  '\u4f60\u80fd\u638c\u63a7\u7684\u662f\u5185\u5fc3\uff0c\u800c\u975e\u5916\u7269\u3002\u660e\u767d\u8fd9\u4e00\u70b9\uff0c\u4f60\u4fbf\u627e\u5230\u4e86\u529b\u91cf\u3002\u2014 \u9a6c\u53ef\u00b7\u5965\u52d2\u7559\u300a\u6c89\u601d\u5f55\u300b',
      'img.3':  '\u4e0d\u6015\u6162\uff0c\u53ea\u6015\u7ad9\u3002\u2014 \u5b54\u5b50',
      'img.4':  '\u4e0d\u8981\u7948\u6c42\u5b89\u9038\u7684\u751f\u6d3b\uff0c\u8981\u7948\u6c42\u627f\u53d7\u827f\u96be\u7684\u529b\u91cf\u3002\u2014 \u674e\u5c0f\u9f99',
      'img.5':  '\u6211\u4e0d\u6015\u7ec3\u8fc7\u4e00\u4e07\u79cd\u8e22\u6cd5\u7684\u4eba\uff0c\u6211\u6015\u7684\u662f\u628a\u4e00\u79cd\u8e22\u6cd5\u7ec3\u4e86\u4e00\u4e07\u6b21\u7684\u4eba\u3002\u2014 \u674e\u5c0f\u9f99',
      'img.6':  '\u529b\u91cf\u4e0d\u6765\u81ea\u4f53\u80fd\uff0c\u800c\u6765\u81ea\u4e0d\u5c48\u7684\u610f\u5fd7\u3002\u2014 \u7518\u5730',
      'img.7':  '\u6218\u80dc\u81ea\u5df1\uff0c\u80dc\u8fc7\u6c99\u573a\u4e0a\u51fb\u8d25\u5343\u519b\u3002\u2014 \u300a\u6cd5\u53e5\u7ecf\u300b',
      'img.8':  '\u98ce\u683c\u662f\u65e0\u9700\u8a00\u8bed\u4fbf\u80fd\u8bf4\u660e\u4f60\u662f\u8c01\u7684\u65b9\u5f0f\u3002\u2014 \u96f7\u5207\u5c14\u00b7\u4f50\u4f0a',
      'img.9':  '\u6700\u52c7\u656c\u7684\u884c\u4e3a\uff0c\u4ecd\u662f\u72ec\u7acb\u601d\u8003\uff0c\u5e76\u5927\u58f0\u8bf4\u51fa\u3002\u2014 \u53ef\u53ef\u00b7\u9999\u5948\u513f',
      'img.10': '\u4f18\u96c5\u4e0d\u662f\u88ab\u6ce8\u610f\uff0c\u800c\u662f\u88ab\u94ed\u8bb0\u3002\u2014 \u4e54\u6cbb\u00b7\u963f\u739b\u5c3c',
      'img.11': '\u7537\u4eba\u7684\u7740\u88c5\u5e94\u5982\u6b64\uff1a\u4ee5\u667a\u6167\u9009\u8d2d\uff0c\u7528\u5fc3\u7a7f\u6234\uff0c\u7136\u540e\u5fd8\u8bb0\u81ea\u5df1\u7684\u6253\u626e\u3002\u2014 \u54c8\u8fea\u00b7\u827e\u7c73\u65af',
      'img.12': '\u9886\u5148\u7684\u79d8\u8bc0\uff0c\u662f\u5f00\u59cb\u884c\u52a8\u3002\u2014 \u9a6c\u514b\u00b7\u5410\u6e29',
      'img.13': '\u7ec6\u8282\u4e0d\u53ea\u662f\u7ec6\u8282\uff0c\u7ec6\u8282\u6210\u5c31\u8bbe\u8ba1\u3002\u2014 \u67e5\u5c14\u65af\u00b7\u4f0a\u59c6\u65af',
      'img.14': '\u65e0\u8bba\u54c1\u683c\u3001\u4e3e\u6b62\u3001\u98ce\u683c\uff0c\u5353\u8d8a\u7684\u6781\u81f4\u662f\u7b80\u6d01\u3002\u2014 \u6717\u8d39\u7f57',
      'img.15': '\u77e5\u4eba\u8005\u667a\uff0c\u81ea\u77e5\u8005\u660e\u3002\u2014 \u8001\u5b50\u300a\u9053\u5fb7\u7ecf\u300b',
      'img.about1': '\u4e07\u7269\u7686\u6709\u88c2\u7f1d\uff0c\u90a3\u662f\u5149\u7167\u8fdb\u6765\u7684\u5730\u65b9\u3002\u2014 \u83b1\u6602\u7eb3\u5fb7\u00b7\u79d1\u6069',
      'img.about2': '\u505a\u4f60\u81ea\u5df1\uff1b\u522b\u4eba\u90fd\u5df2\u7ecf\u6709\u4eba\u505a\u4e86\u3002\u2014 \u5965\u65af\u5361\u00b7\u738b\u5c14\u5fb7',
      'img.footer': '\u6539\u53d8\u7684\u79d8\u8bc0\uff0c\u662f\u5c06\u5168\u90e8\u7cbe\u529b\u6295\u5165\u5efa\u8bbe\u65b0\u7684\uff0c\u800c\u975e\u5bf9\u6297\u65e7\u7684\u3002\u2014 \u82cf\u683c\u62c9\u5e95'
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

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.setAttribute('alt', t[key]);
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
