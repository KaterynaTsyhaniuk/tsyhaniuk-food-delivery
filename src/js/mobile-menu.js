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
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function () {
    // Видалити клас active з усіх пунктів меню
    menuItems.forEach(i => i.classList.remove('active'));

    // Додати клас active до натиснутого пункту меню
    this.classList.add('active');

    // Закрити меню
    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('mobile-menu-wrapper').classList.remove('active');
    document.body.classList.remove('menu-open');

    // Переходити за посиланням після кліку
    const link = this.querySelector('a'); // Знайти посилання всередині пункту меню
    if (link) {
      const href = link.getAttribute('href'); // Отримати посилання
      window.location.href = href; // Виконати перехід
    }
  });
});
