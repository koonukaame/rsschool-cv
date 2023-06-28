const button = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__list');

function toggleMenu() {
  menu.classList.toggle('_open');
  button.classList.toggle('nav__burger_open');
}

button.addEventListener('click', showMenu);