'use strict';

import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formElem: document.querySelector('.subscribe-footer-form'),
  inputMailElem: document.querySelector('.footer-form-input-mail'),
  spanValidElem: document.querySelector('.footer-valid-notification'),
  backDropElem: document.querySelector('.email-backdrop'),
  closeModalElem: document.querySelector('.modal-close-btn'),
  submitBtnElem: document.querySelector('.footer-form-submit-btn'),
};

const STORAGE_KEY = 'email';

window.addEventListener('DOMContentLoaded', () => {
  const savedEmail = loadFromLS(STORAGE_KEY);

  if (savedEmail) {
    refs.inputMailElem.value = savedEmail;
    checkInputValidity();
  }
});

refs.formElem.addEventListener('input', () => {
  const email = refs.inputMailElem.value.trim();
  checkInputValidity();
  saveToLS(STORAGE_KEY, email);
});

refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();

  const email = refs.inputMailElem.value.trim();

  if (!emailIsValid(email)) {
    createErrorMailNotif();
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  refs.formElem.reset();
  clearNotifField();

  try {
    await sendFormData({ email });
    showModal();
  } catch (error) {
    iziToast.error(iziToastErrorObj);
  }
});

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function checkInputValidity() {
  const email = refs.inputMailElem.value.trim();

  if (!emailIsValid(email)) {
    createErrorMailNotif();
  } else {
    refs.spanValidElem.textContent = 'Success!';
    refs.inputMailElem.classList.remove('input-error');
    refs.spanValidElem.classList.remove('notif-error');
    refs.inputMailElem.classList.add('input-success');
    refs.submitBtnElem.removeAttribute('disabled');
  }
}

function emailIsValid(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function createErrorMailNotif() {
  refs.inputMailElem.classList.add('input-error');
  refs.spanValidElem.classList.add('notif-error');
  refs.spanValidElem.textContent = 'Try again! (example@email.com)';
  refs.submitBtnElem.setAttribute('disabled', '');
}

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

function clearNotifField() {
  refs.spanValidElem.textContent = '';
  refs.inputMailElem.classList.remove('input-success');
  refs.spanValidElem.classList.remove('notif-error');
}

function showModal() {
  if (refs.backDropElem) {
    refs.backDropElem.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }
}

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
