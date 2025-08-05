// Mobile menu open/close logic
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

if (menuToggle && mobileMenuOverlay) {
  menuToggle.addEventListener('click', function () {
    mobileMenuOverlay.classList.add('open');
    mobileMenuOverlay.removeAttribute('hidden');
  });
}
if (mobileMenuClose && mobileMenuOverlay) {
  mobileMenuClose.addEventListener('click', function () {
    mobileMenuOverlay.classList.remove('open');
    mobileMenuOverlay.setAttribute('hidden', '');
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('open');
    mobileMenuOverlay.setAttribute('hidden', '');
  });
});

// Optional: for any button (not anchor) with .contact-btn, do smooth scroll.
document.querySelectorAll('.contact-btn').forEach(btn => {
  if (btn.tagName !== 'A') {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', '#footer');
      }
    });
  }
});
