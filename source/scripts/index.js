const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navToggle.classList.add('main-nav__toggle--close');
  } else {
    navMain.classList.add('main-nav--close');
    navToggle.classList.remove('main-nav__toggle--close');
  }
});


const contacts = document.querySelector('.contacts');

contacts.classList.remove('contacts--nojs');
