const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    console.log('open');
  } else {
    navMain.classList.add('main-nav--close');
    console.log('close');
  }
});
