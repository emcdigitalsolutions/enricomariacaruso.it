(function() {
  'use strict';

  const EN = {
    // Nav
    "nav.chi-sono": "About Me",
    "nav.competenze": "Skills",
    "nav.esperienze": "Experience",
    "nav.games": "Games",
    "nav.contatti": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.title": "Full Stack Developer & Computer Science Teacher",
    "hero.subtitle-html": "Turning ideas into code, experience into teaching.<br>Over <span class=\"auto-exp\">15</span> years of passion for software development.",
    "hero.btn-contact": "Contact Me",
    "hero.scroll-aria": "Scroll down",

    // Chi Sono (Section 01)
    "about.title": "About Me",
    "about.p1-html": "I'm an IT professional with over <strong><span class=\"auto-exp\">15</span> years of experience</strong> in software development. Currently a <strong>high school teacher</strong>, I continue to pursue my passion for web development and technology through personal projects and professional collaborations.",
    "about.p2-html": "My career has taken me from the <strong>Scuola Normale Superiore in Pisa</strong> to <strong>CNR</strong>, and then to leading companies in <strong>Industry 4.0</strong>, where I gained expertise in IoT, Cloud Computing and full-stack development. I contributed to European projects, regional healthcare platforms and Digital Twin solutions for manufacturing.",
    "about.p3": "Today I combine my technical experience with a passion for teaching, training the next generation of digital professionals while developing modern, innovative web solutions.",
    "about.location": "Campobello di Licata (AG), Sicily",
    "about.degree": "Master's Degree in Computer Science",
    "about.university": "University of Pisa",
    "about.stat-exp": "Years of Experience",
    "about.stat-projects": "Completed Projects",
    "about.stat-tech": "Technologies",

    // Competenze (Section 02)
    "skills.title": "Skills",
    "skills.management": "Management & Methodologies",
    "skills.telemetry": "Telemetry",

    // Esperienze (Section 03)
    "exp.title": "Experience",
    "exp.current": "Current",
    "exp.job1-title": "High School Teacher",
    "exp.job1-desc": "Teaching computer science subjects, training the next generation of digital professionals.",
    "exp.job2-title": "IoT Specialist \u2013 Project Manager & Senior Developer",
    "exp.job2-desc": "Technical lead and developer of Cloud platforms and Alleantia ISC software. Project Manager of the EasyVia project. Development of Digital Twin and Edge Computing solutions with industrial protocols and cloud IoT platforms (Azure, AWS, Thingworx).",
    "exp.job3-title": "Senior Software Developer",
    "exp.job3-desc": "Senior developer of the Regional Health Information System for Collective Prevention (SISPC) of Tuscany Region.",
    "exp.job4-title": "Research Fellow",
    "exp.job4-desc": "Design of IT technologies for the census and cataloguing of manuscript codices. Implementation of Rich Text Editors for the transcription of pre-Islamic Arabic inscriptions in the DASI project.",
    "exp.job5-title": "Software Developer",
    "exp.job5-desc": "Developer in the SIUSA project and in the CUSTOM project, a Cloud Computing platform for tourism and cultural services.",
    "exp.job6-title": "Junior Software Developer",
    "exp.job6-desc": "Developer in the European project EFG (European Film Gateway). Information Retrieval, OAI-PMH protocol and Java development for the Metapub system.",

    // Education
    "edu.title": "Education",
    "edu.degree1": "Master's Degree in Computer Science",
    "edu.degree1-inst": "University of Pisa \u2013 Department of Computer Science",
    "edu.degree2": "Bachelor's Degree in Computer Science",
    "edu.degree2-inst": "University of Pisa \u2013 Department of Computer Science",
    "edu.degree3": "Technical Diploma in Computer Science",
    "edu.degree3-inst": "ITIS \u201cE. Torricelli\u201d \u2013 Sant'Agata di Militello (ME)",

    // Contatti (Section 04)
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Write to me!",
    "contact.position": "Location",
    "contact.website": "Website",
    "contact.form-name": "Name *",
    "contact.form-email": "Email *",
    "contact.form-subject": "Subject",
    "contact.form-message": "Message *",
    "contact.placeholder-name": "Your name",
    "contact.placeholder-email": "Your email",
    "contact.placeholder-subject": "Message subject",
    "contact.placeholder-message": "Write your message...",
    "contact.btn-send": "Send Message",

    // Form status messages (used by script.js via I18N.t())
    "form.sending": "Sending...",
    "form.success": "Message sent successfully! I'll reply as soon as possible.",
    "form.error": "An error occurred. Please try again or email me directly at emcdigitalsolution@gmail.com",
    "form.btn-send": "Send Message",

    // Footer
    "footer.text-html": "Designed and developed with <span class=\"heart\">&hearts;</span> by Enrico Maria Caruso",
    "footer.rights": "All rights reserved.",
    "footer.designed-by": "Designed and Developed by",

    // Cookie banner
    "cookie.text-html": "This website uses third-party services (Google Fonts, Font Awesome, FormSubmit) that may collect technical data such as your IP address. For more information, see the <a href=\"cookie-policy.html\">Cookie Policy</a>.",
    "cookie.accept": "Accept",
    "cookie.reject": "Decline",

    // Back to top
    "backtop-aria": "Back to top",

    // Lang switch
    "langswitch-aria": "Switch language",

    // === games.html keys ===
    "games.hero-desc": "A collection of 10 arcade games built from scratch with Vanilla JavaScript and Canvas API. Zero dependencies, single-file, mobile-responsive \u2014 playable right in your browser.",
    "games.zero-deps": "Zero Dependencies",
    "games.mobile": "Mobile Ready",

    // Game descriptions
    "games.stack-desc": "Tap to drop blocks and build the tallest tower. Perfect alignment triggers combo bonuses. 3 skins, progressive difficulty.",
    "games.color-desc": "Jump through obstacles matching your ball's color. Collect stars to switch colors. 3 obstacle types, 4-color system.",
    "games.invaders-desc": "Destroy waves of aliens before they reach the bottom. Shields, UFO bonuses, 3 alien types, progressive waves.",
    "games.void-desc": "Navigate asteroid fields, destroy rocks and survive wave after wave. Inertia physics, screen wrap, vector graphics.",
    "games.breaker-desc": "Break all the bricks with the ball. 4 brick types, 6 power-ups, 6 levels, multi-ball action and combo scoring.",
    "games.snake-desc": "Eat food to grow longer without hitting yourself. Bonus food for extra points. Wall wrap on Easy mode, D-pad on mobile.",
    "games.runner-desc": "Jump over obstacles and collect coins in this endless runner. Double jump, progressive speed, milestone rewards.",
    "games.blocks-desc": "Complete rows to clear them and score combos. 7 tetrominos, ghost piece, wall kicks, bag randomizer.",
    "games.2048-desc": "Slide tiles to merge equal numbers and reach 2048. Undo system, dynamic grid size, endless mode after winning.",
    "games.pong-desc": "Move your paddle and beat the AI. Angle-based bouncing, ball trail effect, progressive speed per rally.",
    "games.play": "Play Now",

    // === cookie-policy.html keys ===
    "cookie.page-title": "Cookie Policy",
    "cookie.last-update": "Last updated: February 2026",
    "cookie.h2-1": "1. What are cookies",
    "cookie.p1": "Cookies are small text files that websites send to the user's browser, where they are stored, and then retransmitted to those websites on subsequent visits. Cookies are used for various purposes and can have different characteristics.",
    "cookie.h2-2": "2. Data Controller",
    "cookie.p2": "The data controller is:",
    "cookie.p2-name": "Name:",
    "cookie.p2-email": "Email:",
    "cookie.p2-site": "Website:",
    "cookie.h2-3": "3. Types of cookies used",
    "cookie.h3-31": "3.1 Technical cookies (necessary)",
    "cookie.p31": "This website uses a technical cookie to store the user's preference regarding cookie consent:",
    "cookie.th-name": "Name",
    "cookie.th-purpose": "Purpose",
    "cookie.th-duration": "Duration",
    "cookie.th-type": "Type",
    "cookie.td-purpose": "Stores the user's choice on the cookie banner",
    "cookie.td-duration": "365 days",
    "cookie.td-type": "Technical / localStorage",
    "cookie.h3-32": "3.2 Third-party services",
    "cookie.p32": "This website uses the following third-party services that may collect user data (including IP address):",
    "cookie.th-service": "Service",
    "cookie.th-provider": "Provider",
    "cookie.th-privacy": "Privacy Policy",
    "cookie.td-gfonts-purpose": "Loading typographic fonts (Inter, Space Grotesk)",
    "cookie.td-fa-purpose": "Loading website icons",
    "cookie.td-fs-purpose": "Contact form management and email delivery",
    "cookie.td-gh-purpose": "Website hosting",
    "cookie.p32-extra": "When the user visits this website, the services listed above may receive the IP address and other technical browser information (user agent, language, etc.). This data may be transferred to servers located in the United States of America.",
    "cookie.h2-4": "4. Legal basis for processing",
    "cookie.p4-html": "The processing of data through the above-mentioned third-party services is based on the <strong>user's consent</strong> (Art. 6, par. 1, letter a of Regulation EU 2016/679 - GDPR), expressed through the cookie banner present on the website's homepage.",
    "cookie.h2-5": "5. User rights",
    "cookie.p5": "In accordance with the GDPR (Articles 15-22), the user has the right to:",
    "cookie.right1": "Access their personal data",
    "cookie.right2": "Request rectification or deletion",
    "cookie.right3": "Restrict processing",
    "cookie.right4": "Object to processing",
    "cookie.right5": "Request data portability",
    "cookie.right6": "Withdraw consent at any time",
    "cookie.p5-contact": "To exercise their rights, the user can contact the data controller at the email address:",
    "cookie.h2-6": "6. How to manage cookies",
    "cookie.p6": "The user can manage cookie preferences at any time:",
    "cookie.manage1": "By clicking the button below to reset preferences on this website",
    "cookie.manage2": "By modifying browser settings to block or delete cookies",
    "cookie.btn-reset": "Reset cookie preferences",
    "cookie.h2-7": "7. Supervisory authority",
    "cookie.p7": "The user has the right to file a complaint with the competent supervisory authority:",
    "cookie.p7-authority-html": "<strong>Italian Data Protection Authority (Garante per la Protezione dei Dati Personali)</strong><br>Piazza Venezia, 11 - 00187 Roma<br><a href=\"https://www.garanteprivacy.it\" target=\"_blank\" rel=\"noopener\">www.garanteprivacy.it</a>"
  };

  const cache = {};

  function cacheOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      cache[el.getAttribute('data-i18n')] = { el, original: el.textContent };
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (!cache[key]) cache[key] = { el, originalHtml: el.innerHTML };
      else cache[key].originalHtml = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!cache[key]) cache[key] = { el, originalPlaceholder: el.placeholder };
      else cache[key].originalPlaceholder = el.placeholder;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (!cache[key]) cache[key] = { el, originalAria: el.getAttribute('aria-label') };
      else cache[key].originalAria = el.getAttribute('aria-label');
    });
  }

  function apply(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (lang === 'en' && EN[key]) {
        el.textContent = EN[key];
      } else if (cache[key]) {
        el.textContent = cache[key].original;
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (lang === 'en' && EN[key]) {
        el.innerHTML = EN[key];
      } else if (cache[key]) {
        el.innerHTML = cache[key].originalHtml;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (lang === 'en' && EN[key]) {
        el.placeholder = EN[key];
      } else if (cache[key]) {
        el.placeholder = cache[key].originalPlaceholder;
      }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (lang === 'en' && EN[key]) {
        el.setAttribute('aria-label', EN[key]);
      } else if (cache[key]) {
        el.setAttribute('aria-label', cache[key].originalAria);
      }
    });
    document.documentElement.lang = lang;
    updateDynamicContent();
  }

  function switchTo(lang) {
    localStorage.setItem('site_lang', lang);
    apply(lang);
    // Update switcher UI
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
  }

  function t(key) {
    const lang = localStorage.getItem('site_lang') || 'it';
    if (lang === 'en' && EN[key]) return EN[key];
    if (cache[key]) return cache[key].original || '';
    return key;
  }

  function updateDynamicContent() {
    const years = new Date().getFullYear() - 2011;
    document.querySelectorAll('.auto-exp').forEach(el => { el.textContent = years; });
  }

  function init() {
    cacheOriginals();
    const saved = localStorage.getItem('site_lang') || 'it';
    if (saved !== 'it') {
      apply(saved);
    }
    // Update switcher UI
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === saved);
    });
    // Bind switcher clicks
    const switchBtn = document.getElementById('langSwitch');
    if (switchBtn) {
      switchBtn.addEventListener('click', () => {
        const current = localStorage.getItem('site_lang') || 'it';
        switchTo(current === 'it' ? 'en' : 'it');
      });
    }
  }

  // Public API
  window.I18N = { switchTo, t, init };

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
