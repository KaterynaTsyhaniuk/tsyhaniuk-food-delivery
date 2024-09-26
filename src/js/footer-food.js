'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Отримання посилань на елементи DOM
const refs = {
  formElem: document.querySelector('.subscribe-footer-form'),
  inputMailElem: document.querySelector('.footer-form-input-mail'),
  spanValidElem: document.querySelector('.footer-valid-notification'),
  backDropElem: document.querySelector('.email-backdrop'),
  closeModalElem: document.querySelector('.modal-close-btn'),
  submitBtnElem: document.querySelector('.footer-form-submit-btn'),
};

// Функція для збереження даних в LocalStorage
function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Функція для завантаження даних з LocalStorage
function loadFromLS(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : '';
}

// Виконання коду після завантаження DOM
window.addEventListener('DOMContentLoaded', () => {
  const email = loadFromLS('email');

  // Перевіряємо, чи існує поле вводу для email
  if (refs.inputMailElem && email) {
    refs.inputMailElem.value = email;
  }
});

// Перевірка валідності email при вводі
refs.formElem?.addEventListener('input', () => {
  checkInputValidity();
});

function checkInputValidity() {
  // Перевіряємо наявність поля вводу email
  if (!refs.inputMailElem) {
    console.error('Email input element not found');
    return;
  }

  const email = refs.inputMailElem.value.trim();
  const isValid = refs.inputMailElem.validity.valid;

  if (!isValid) {
    refs.submitBtnElem?.setAttribute('disabled', ''); // Забороняємо відправлення форми
    createErrorMailNotif(); // Створюємо повідомлення про помилку
  } else {
    if (refs.spanValidElem) {
      refs.spanValidElem.textContent = 'Success!';
    }
    refs.inputMailElem.classList.remove('input-error');
    refs.spanValidElem?.classList.remove('notif-error');
    refs.inputMailElem.classList.add('input-success');
    refs.submitBtnElem?.removeAttribute('disabled');
  }
}

// Повідомлення про помилку email
function createErrorMailNotif() {
  refs.inputMailElem?.classList.add('input-error');
  refs.spanValidElem?.classList.add('notif-error');
  if (refs.spanValidElem) {
    refs.spanValidElem.textContent = 'Try again! (example@email.com)';
  }
}

// Обробка події надсилання форми
refs.formElem?.addEventListener('submit', async event => {
  event.preventDefault(); // Забороняємо стандартну поведінку форми

  if (!refs.inputMailElem) {
    console.error('Email input element not found');
    return;
  }

  const email = refs.inputMailElem.value.trim();

  if (!refs.inputMailElem.validity.valid) {
    createErrorMailNotif(); // Створюємо помилку, якщо email невалідний
    return;
  }

  // Збереження email в LocalStorage
  saveToLS('email', email);

  // Очищення поля повідомлення
  clearNotifField();

  // Спроба надсилання даних і показ модального вікна
  try {
    await sendFormData({ email }); // Імітація запиту
    showModal();
    refs.formElem.reset(); // Очищуємо форму після успішної відправки
  } catch (error) {
    iziToast.error(iziToastErrorObj); // Виведення помилки за допомогою iziToast
  }
});

// Очищення повідомлень про валідність
function clearNotifField() {
  if (refs.spanValidElem) {
    refs.spanValidElem.textContent = '';
  }
  refs.inputMailElem?.classList.remove('input-success');
  refs.spanValidElem?.classList.remove('notif-error');
}

// Показ модального вікна
function showModal() {
  if (refs.backDropElem) {
    refs.backDropElem.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden'; // Забороняємо прокручування сторінки
  }
}

// Закриття модального вікна при натисканні на кнопку закриття
refs.closeModalElem?.addEventListener('click', () => {
  if (refs.backDropElem) {
    refs.backDropElem.classList.add('is-hidden');
    document.body.style.overflow = 'auto'; // Відновлюємо прокручування сторінки
  }
});

// Закриття модального вікна при натисканні на бекдроп
refs.backDropElem?.addEventListener('click', event => {
  if (event.target === refs.backDropElem) {
    refs.backDropElem.classList.add('is-hidden');
    document.body.style.overflow = 'auto'; // Відновлюємо прокручування сторінки
  }
});

// Імітація надсилання форми (сурогатний запит)
async function sendFormData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Тут можна зробити логіку успіху або помилки
      if (success) resolve();
      else reject(new Error('Failed to send form'));
    }, 1000); // Затримка 1 секунда для імітації запиту
  });
}

// Об'єкт iziToast для повідомлення про помилку
const iziToastErrorObj = {
  title: 'Error',
  message: 'Sorry, something went wrong...',
  backgroundColor: 'rgb(224, 55, 63)',
  titleColor: 'rgb(255, 255, 255)',
  messageColor: 'rgb(255, 255, 255)',
  theme: 'dark',
  progressBarColor: 'rgb(255, 255, 255)',
  position: 'bottomCenter',
};
