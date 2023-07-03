const button = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__list');
const link = document.querySelectorAll('.link');

function toggleMenu() {
  menu.classList.toggle('_open');
  button.classList.toggle('nav__burger_open');
}

function closeMenuOnLinkClick() {
  menu.classList.remove('_open');
  button.classList.remove('nav__burger_open');
}

button.addEventListener('click', toggleMenu);

link.forEach(link => {
  link.addEventListener('click', closeMenuOnLinkClick)
});