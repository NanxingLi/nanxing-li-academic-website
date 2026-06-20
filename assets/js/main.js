// One-page navigation, mobile menu, scroll state, and graceful image placeholders.
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = [...document.querySelectorAll('.site-nav a')];

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 40);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      header?.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.forEach((link) => link.addEventListener('click', () => {
      nav.classList.remove('open');
      header?.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Highlight the section currently nearest the top of the viewport.
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((section) => observer.observe(section));
  }

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      const fallback = document.createElement('div');
      fallback.className = 'image-fallback';
      fallback.innerHTML = `${image.dataset.fallback}<br><small>[PLACEHOLDER]</small>`;
      image.replaceWith(fallback);
    }, { once: true });
  });
});
