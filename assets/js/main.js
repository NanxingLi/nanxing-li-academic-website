// Shared site behaviour: mobile navigation, current year, and graceful image fallbacks.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Missing optional images become labelled boxes instead of broken-image icons.
  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      const fallback = document.createElement('div');
      fallback.className = 'image-fallback';
      fallback.innerHTML = `${image.dataset.fallback}<br><small>[PLACEHOLDER]</small>`;
      image.replaceWith(fallback);
    }, { once: true });
  });
});
