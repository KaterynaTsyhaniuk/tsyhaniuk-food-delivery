'use strict';

// Функція для блокування скролу
function lockScroll() {
  if (!document.body.classList.contains('scroll-locked')) {
    document.body.classList.add('scroll-locked');
  }
}

// Функція для розблокування скролу
function unlockScroll() {
  if (document.body.classList.contains('scroll-locked')) {
    document.body.classList.remove('scroll-locked');
  }
}

// Закриття мобільного меню
document.getElementById('menu-close').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('active');
  document.getElementById('mobile-menu-wrapper').classList.remove('active');
  unlockScroll();
});

// Відкриття мобільного меню
document.getElementById('menu-open').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('active');
  document.getElementById('mobile-menu-wrapper').classList.add('active');
  lockScroll();
});

// Робота з пунктами меню
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Забороняємо стандартний перехід

    // Видалити клас active з усіх пунктів меню
    menuItems.forEach(i => i.classList.remove('active'));

    // Додати клас active до натиснутого пункту меню
    this.classList.add('active');

    // Закрити меню
    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('mobile-menu-wrapper').classList.remove('active');
    unlockScroll(); // Розблокуємо скрол

    // Переходити за посиланням після кліку
    const link = this.querySelector('a'); // Знайти посилання всередині пункту меню
    if (link) {
      const href = link.getAttribute('href'); // Отримати посилання
      setTimeout(() => {
        window.location.href = href; // Виконати перехід після затримки
      }, 300); // Додати затримку для плавного закриття меню
    }
  });
});
