const menuToggleBtn = document.querySelector('.menu-toggle');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuCloseBtn = document.getElementById('mobileMenuClose');
const body = document.body;


function openMobileMenu() {
mobileMenuOverlay.hidden = false;
setTimeout(() => mobileMenuOverlay.classList.add('open'), 10);
menuToggleBtn.setAttribute('aria-expanded', 'true');
body.style.overflow = 'hidden';
mobileMenuOverlay.focus();
}
function closeMobileMenu() {
mobileMenuOverlay.classList.remove('open');
menuToggleBtn.setAttribute('aria-expanded', 'false');
body.style.overflow = '';
setTimeout(() => {
mobileMenuOverlay.hidden = true;
}, 400);
menuToggleBtn.focus();
}


menuToggleBtn.addEventListener('click', () => {
if (mobileMenuOverlay.classList.contains('open')) {
closeMobileMenu();
} else {
openMobileMenu();
}
});


mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);


mobileMenuOverlay.querySelectorAll('a.mobile-link').forEach(link => {
link.addEventListener('click', closeMobileMenu);
});


document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('open')) {
closeMobileMenu();
}
});


mobileMenuOverlay.addEventListener('click', (e) => {
if (e.target === mobileMenuOverlay) {
closeMobileMenu();
}
});


function smoothScroll(event) {
if(event.currentTarget.hash) {
event.preventDefault();
const target = document.querySelector(event.currentTarget.hash);
if(target) target.scrollIntoView({behavior: 'smooth'});
closeMobileMenu();
}
}


document.querySelectorAll('.nav-tabs a, .mobile-menu-items a').forEach(link => {
link.addEventListener('click', smoothScroll);
});


function scrollToFooter() {
const footer = document.getElementById('footer');
if (footer) footer.scrollIntoView({behavior: 'smooth'});
closeMobileMenu();
}
const contactBtn = document.getElementById('contact-button-navbar');
if (contactBtn) {
contactBtn.addEventListener('click', scrollToFooter);
}


document.querySelector('.search-icon').addEventListener('click', () => {
alert('Search functionality coming soon!');
});
