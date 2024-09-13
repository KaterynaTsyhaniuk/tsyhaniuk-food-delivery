document.getElementById('menu-close').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('active');
  document.getElementById('mobile-menu-wrapper').classList.remove('active');
  document.body.classList.remove('menu-open');

  //   document.getElementById('menu-open').style.feel = 'green';
});

document.getElementById('menu-open').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('active');
  document.getElementById('mobile-menu-wrapper').classList.add('active');
  document.body.classList.add('menu-open');

  //   document.getElementById('menu-open').style.feel = 'yellow';
});
