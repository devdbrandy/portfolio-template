/**
 * Simple wrapper for query selector
 * @param {string} selector - Html element selector
 * @return {HTMLElement}
 */
const $ = selector => document.querySelector(selector);

const $menuBtn = $('.burger');
const $menu = $('.menu');
const $menuNav = $('.menu-nav');
const $menuBranding = $('.menu-branding');
const $navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    $menuBtn.classList.add('st-1');
    setTimeout(() => $menuBtn.classList.add('st-2'), 500);

    $menu.classList.add('show');
    $menuNav.classList.add('show');
    $menuBranding.classList.add('show');
    $navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    $menuBtn.classList.remove('hover');
    $menuBtn.classList.remove('st-2');
    setTimeout(() => $menuBtn.classList.remove('st-1'), 500);

    $menu.classList.remove('show');
    $menuNav.classList.remove('show');
    $menuBranding.classList.remove('show');
    $navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}

$menuBtn.addEventListener('click', toggleMenu);
$menuBtn.addEventListener('mouseover', () => $menuBtn.classList.add('hover'));
$menuBtn.addEventListener('mouseout', () => $menuBtn.classList.remove('hover'));
