const button = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__list');
const link = document.querySelectorAll('.link');
const scrollLock = document.body;

function toggleMenu() {
  menu.classList.toggle('_open');
  button.classList.toggle('nav__burger_open');
  scrollLock.classList.toggle('lock');
}

function closeMenuOnLinkClick() {
  menu.classList.remove('_open');
  button.classList.remove('nav__burger_open');
  scrollLock.classList.remove('lock');
}

button.addEventListener('click', toggleMenu);

link.forEach(link => {
  link.addEventListener('click', closeMenuOnLinkClick)
});