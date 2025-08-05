const menuToggle = document.querySelector('.menu-toggle');
const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const body = document.body;


// Open mobile menu (show drawer & overlay)
function openMobileMenu() {
mobileMenuDrawer.classList.add('show');
mobileMenuOverlay.classList.add('show');
menuToggle.setAttribute('aria-expanded', 'true');
body.style.overflow = 'hidden'; // prevent body scroll
mobileMenuDrawer.focus();
}


// Close mobile menu
function closeMobileMenu() {
mobileMenuDrawer.classList.remove('show');
mobileMenuOverlay.classList.remove('show');
menuToggle.setAttribute('aria-expanded', 'false');
body.style.overflow = '';
menuToggle.focus();
}


// Event listeners:
menuToggle.addEventListener('click', () => {
if (mobileMenuDrawer.classList.contains('show')) {
closeMobileMenu();
} else {
openMobileMenu();
}
});


mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);


// Close menu on link click inside menu
mobileMenuDrawer.querySelectorAll('a.mobile-link').forEach(link => {
link.addEventListener('click', closeMobileMenu);
});


// Close menu on ESC key press
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && mobileMenuDrawer.classList.contains('show')) {
closeMobileMenu();
}
});


// Smooth scrolling for all nav links (both desktop and mobile)
function smoothScroll(event) {
if(event.currentTarget.hash) {
event.preventDefault();
const target = document.querySelector(event.currentTarget.hash);
if(target) {
target.scrollIntoView({behavior: 'smooth'});
}
}
}
document.querySelectorAll('.nav-tabs a, .mobile-menu-tabs a').forEach(link => {
link.addEventListener('click', smoothScroll);
});


// Contact buttons scroll to footer and close mobile menu if open
function scrollToFooter() {
document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
if (mobileMenuDrawer.classList.contains('show')) {
closeMobileMenu();
}
}
document.getElementById('contact-button-navbar').addEventListener('click', scrollToFooter);
document.getElementById('contact-button-slide2').addEventListener('click', scrollToFooter);


// Search icon alert placeholder
document.querySelector('.search-icon').addEventListener('click', () => {
alert('Search functionality coming soon!');
});
