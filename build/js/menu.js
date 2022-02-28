const toggle = document.querySelector('.header__toggle');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('.body');

if (toggle && navList) {
  toggle.classList.add('header__toggle--working');
  toggle.classList.add('header__toggle--open');
  navList.classList.add('nav__list--close');

  toggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.classList.toggle('body--menu-open');
    toggle.classList.toggle('header__toggle--close');
    toggle.classList.toggle('header__toggle--open');
    navList.classList.toggle('nav__list--open');
    navList.classList.toggle('nav__list--close');
  });
}
