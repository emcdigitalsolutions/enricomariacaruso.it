// ===== Cookie Banner =====
const cookieBanner = document.getElementById('cookieBanner');
if (cookieBanner) {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) {
    setTimeout(() => cookieBanner.classList.add('visible'), 800);
  }

  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'accepted');
    cookieBanner.classList.remove('visible');
  });

  document.getElementById('cookieReject').addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'rejected');
    cookieBanner.classList.remove('visible');
  });
}

// ===== Navigation =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navItems = navLinks.querySelectorAll('a');

// Scroll effect
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Active link highlighting
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = navLinks.querySelector(`a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ===== Scroll Animations =====
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// ===== Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number[data-count]');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => counterObserver.observe(el));

function animateCounter(el, target) {
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + I18N.t('form.sending');
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  const fd = new FormData(contactForm);
  const subject = (fd.get('_subject') || '').toString().trim();
  const body = (fd.get('message') || '').toString().trim();
  const payload = {
    site: 'enricomariacaruso',
    name: (fd.get('name') || '').toString().trim(),
    email: (fd.get('email') || '').toString().trim(),
    phone: '',
    message: (subject ? '[' + subject + '] ' : '') + body
  };

  // Servizio contatti Google Apps Script condiviso EMC (routing per 'site')
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxLCgN0-mHN86Dk37a5m-p2A3DgMjc8b__aCO_9oBA_amLUn5MlipebKalo5qNIoSWl/exec';

  try {
    await fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    // Con mode:'no-cors' la risposta è opaca: consideriamo l'invio riuscito
    formStatus.textContent = I18N.t('form.success');
    formStatus.className = 'form-status success';
    contactForm.reset();
  } catch {
    formStatus.textContent = I18N.t('form.error');
    formStatus.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + I18N.t('form.btn-send');
  }
});
