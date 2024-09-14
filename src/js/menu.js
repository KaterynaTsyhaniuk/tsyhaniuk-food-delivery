'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('menu-modal');
  const modalTitle = document.getElementById('menu-modal-title');
  const modalText = document.getElementById('menu-modal-text');
  const modalImg = document.querySelector('.menu-modal-img');
  const body = document.body;

  function openModal() {
    modal.classList.add('active');
    body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    body.style.overflow = 'auto';
  }

  document.querySelectorAll('.image-border-container-menu').forEach(item => {
    item.addEventListener('click', () => {
      // Перевіряємо розмір екрану перед відкриттям модального вікна
      if (window.innerWidth >= 768) {
        // 768px і більше
        modalTitle.textContent = item.getAttribute('data-modal-title');
        modalText.textContent = item.getAttribute('data-modal-text');

        const imgSrc = item.getAttribute('data-modal-img');
        modalImg.innerHTML = `<img src="${imgSrc}" alt="${item.getAttribute(
          'data-modal-title'
        )}" />`;

        openModal();
      } else {
        console.log('Модальне вікно не відкривається на мобільних пристроях.');
      }
    });
  });

  document
    .querySelector('.menu-modal-close')
    .addEventListener('click', closeModal);

  window.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
