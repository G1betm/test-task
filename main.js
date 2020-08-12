document.addEventListener('DOMContentLoaded', function () {

  const navBtn = document.querySelector('.nav__btn');
  const nav = document.querySelector('.nav__list');

  navBtn.addEventListener('click', function() {
    navBtn.classList.toggle('close');
    nav.classList.toggle('active');
  })
});