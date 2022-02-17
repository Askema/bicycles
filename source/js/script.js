'use strict';
var toggle = document.querySelector('.header__toggle');
var navList = document.querySelector('.nav__list');

toggle.classList.add('header__toggle--open');
navList.classList.add('nav__list--close');

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  toggle.classList.toggle('header__toggle--close');
  toggle.classList.toggle('header__toggle--open');
  navList.classList.toggle('nav__list--open');
  navList.classList.toggle('nav__list--close');
});
