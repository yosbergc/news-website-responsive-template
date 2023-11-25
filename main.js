const mobileMenuIcon = document.querySelector('.mobileMenuIcon');
const mobileMenuContainer = document.querySelector('.mobileMenuContainer');
const closeMenuIcon = document.querySelector('.closeMenuIcon');
const fondoOscuro = document.querySelector('.oscuro');
const heroImage = document.querySelector('.hero-section-image');
window.addEventListener('resize', resizeMenu);
closeMenuIcon.addEventListener('click', menuToggle)
mobileMenuIcon.addEventListener('click', menuToggle);
window.addEventListener('load', changeImageDesktop);
function menuToggle() {
    if (mobileMenuContainer.classList.contains('hide')) {
        mobileMenuContainer.classList.remove('hide');
        fondoOscuro.classList.remove('hide');
    } else {
        mobileMenuContainer.classList.add('hide');
        fondoOscuro.classList.add('hide');
    }
}
function resizeMenu() {
    if (window.innerWidth >= 1280) {
        mobileMenuContainer.classList.add('hide');
        fondoOscuro.classList.add('hide');
    }
    heroImage.setAttribute('src', 'assets/images/image-web-3-desktop.jpg');
}
function changeImageDesktop() {
    heroImage.setAttribute('src', 'assets/images/image-web-3-desktop.jpg');
}