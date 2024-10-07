'use strict';

function lockScroll() {
  if (!document.body.classList.contains('scroll-locked')) {
    document.body.classList.add('scroll-locked');
  }
}

function unlockScroll() {
  if (document.body.classList.contains('scroll-locked')) {
    document.body.classList.remove('scroll-locked');
  }
}

document.getElementById('menu-close').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('active');
  document.getElementById('mobile-menu-wrapper').classList.remove('active');
  unlockScroll();
});

document.getElementById('menu-open').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('active');
  document.getElementById('mobile-menu-wrapper').classList.add('active');
  lockScroll();
});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    menuItems.forEach(i => i.classList.remove('active'));

    this.classList.add('active');

    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('mobile-menu-wrapper').classList.remove('active');
    unlockScroll();

    const link = this.querySelector('a');
    if (link) {
      const href = link.getAttribute('href');
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});
