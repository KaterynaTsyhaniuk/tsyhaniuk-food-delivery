'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Отримання посилань на елементи DOM
const refs = {
  formElem: document.querySelector('.subscribe-form'),
  inputMailElem: document.querySelector('.form-input-mail'),
  spanValidElem: document.querySelector('.valid-notification'),
  backDropElem: document.querySelector('.email-backdrop'),
  closeModalElem: document.querySelector('.modal-close-btn'),
  submitBtnElem: document.querySelector('.form-submit-btn'),
};

const STORAGE_KEY = 'email'; // Визначаємо ключ для зберігання email

// Збереження даних при кожному вводі
refs.formElem.addEventListener('input', () => {
  const formData = new FormData(refs.formElem);
  const email = formData.get('email').trim();
  checkInputValidity();
  saveToLS(STORAGE_KEY, email);
});

// Завантаження даних з LocalStorage при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  const email = loadFromLS(STORAGE_KEY);

  if (email && refs.formElem.elements.email) {
    refs.formElem.elements.email.value = email;
    checkInputValidity();
  }
});

// Обробка сабміту форми
refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(refs.formElem);
  const email = formData.get('email');

  localStorage.removeItem(STORAGE_KEY); // Видаляємо дані з LocalStorage після сабміту
  refs.formElem.reset(); // Очищаємо форму

  try {
    // Відправка даних через Axios
    await sendFormData({ email });
    showModal(); // Показ модального вікна при успішній відправці
    clearNotifField();
  } catch (error) {
    iziToast.error(iziToastErrorObj); // Виведення помилки за допомогою iziToast
  }
});

// Функція для збереження даних в LocalStorage
function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Функція для завантаження даних з LocalStorage
function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

// Перевірка валідності введеного email
function checkInputValidity() {
  if (!refs.inputMailElem) {
    console.error('Email input element not found');
    return;
  }

  const isValid = refs.inputMailElem.validity.valid;

  if (!isValid) {
    refs.submitBtnElem?.setAttribute('disabled', '');
    createErrorMailNotif();
  } else {
    refs.spanValidElem.textContent = 'Success!';
    refs.inputMailElem.classList.remove('input-error');
    refs.spanValidElem?.classList.remove('notif-error');
    refs.inputMailElem.classList.add('input-success');
    refs.submitBtnElem?.removeAttribute('disabled');
  }
}

function createErrorMailNotif() {
  refs.inputMailElem?.classList.add('input-error');
  refs.spanValidElem?.classList.add('notif-error');
  refs.spanValidElem.textContent = 'Try again! (example@email.com)';
}

// Функція для надсилання форми через Axios
async function sendFormData(data) {
  try {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      data
    );
    console.log('Form successfully submitted:', response.data);
  } catch (error) {
    throw new Error('Failed to send form data');
  }
}

// Очищення повідомлень про валідність
function clearNotifField() {
  refs.spanValidElem.textContent = '';
  refs.inputMailElem?.classList.remove('input-success');
  refs.spanValidElem?.classList.remove('notif-error');
}

// Показ модального вікна
function showModal() {
  if (refs.backDropElem) {
    refs.backDropElem.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }
}

// Закриття модального вікна
refs.closeModalElem?.addEventListener('click', () => {
  if (refs.backDropElem) {
    refs.backDropElem.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
  }
});

refs.backDropElem?.addEventListener('click', event => {
  if (event.target === refs.backDropElem) {
    refs.backDropElem.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
  }
});

// iziToast для повідомлення про помилку
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
