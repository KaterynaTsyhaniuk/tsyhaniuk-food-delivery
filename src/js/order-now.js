import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formOrderElem: document.querySelector('.order-form'),
  inputMailElem: document.querySelector('.order-input-email'),
  inputTelElem: document.querySelector('.order-input-tel'),
  inputTextElem: document.querySelector('.order-input-text'),
  openModalOrderNowBtns: document.querySelectorAll('.order-now-js'),
  closeModalOrderNowBtn: document.querySelector('.modal-order-close-btn'),
  backdropOrderNow: document.querySelector('.backdrop-order-now'),
  submitOrderButton: document.querySelector('.form-order-btn'),
  spanValidText: document.querySelector('.order-valid-notification-text'),
  spanValidTel: document.querySelector('.order-valid-notification-tel'),
  spanValidEmail: document.querySelector('.order-valid-notification-email'),
};

// Логіка для відкриття/закриття модального вікна

document.addEventListener('DOMContentLoaded', () => {
  refs.openModalOrderNowBtns.forEach(button => {
    button.addEventListener('click', () => {
      refs.backdropOrderNow.classList.remove('is-hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  refs.closeModalOrderNowBtn.addEventListener('click', () => {
    refs.backdropOrderNow.classList.add('is-hidden');
    document.body.style.overflow = '';
  });

  refs.backdropOrderNow?.addEventListener('click', event => {
    if (event.target === refs.backdropOrderNow) {
      refs.backdropOrderNow.classList.add('is-hidden');
      document.body.style.overflow = 'auto';
    }
  });

  const savedData = loadFromLS('orderFormData');

  if (savedData) {
    refs.inputTextElem.value = savedData.name || '';
    refs.inputTelElem.value = savedData.phone || '';
    refs.inputMailElem.value = savedData.email || '';
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

refs.formOrderElem.addEventListener('input', () => {
  const formData = new FormData(refs.formOrderElem);
  const userData = {
    name: formData.get('user-name'),
    phone: formData.get('user-phone'),
    email: formData.get('user-email'),
  };

  saveToLS('orderFormData', userData);
});

// Обробка сабміту форми
refs.formOrderElem.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(refs.formOrderElem);
  const userData = {
    name: formData.get('user-name'),
    phone: formData.get('user-phone'),
    email: formData.get('user-email'),
  };

  localStorage.removeItem('orderFormData'); // Видаляємо дані з LocalStorage після сабміту
  refs.formOrderElem.reset(); // Очищаємо форму
  clearOrderValidTextSpan();
  clearOrderValidTelSpan();
  clearOrderValidEmailSpan();
  refs.submitOrderButton.classList.remove('input-success');

  try {
    // Відправка даних через Axios
    await sendFormData({ userData });
    iziToast.success({
      timeout: 5000,
      title: '',
      message:
        '<div class="custom-icon-container"><svg class="back-to-top-btn-icon" width="20" height="20"><use href="./img/star.svg#icon-star"></use></svg></div>Thank you for choosing us!',
      position: 'bottomCenter',
      messageColor: '#000',
      backgroundColor: '#bbf330',
      icon: 'none',
    });
  } catch (error) {
    iziToast.error(iziToastErrorObj); // Виведення помилки за допомогою iziToast
  }
});

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

function onInputTextValidity() {
  if (
    refs.inputTextElem.validity.patternMismatch ||
    refs.inputTextElem.value.trim().length <= 0
  ) {
    refs.inputTextElem.style.borderColor = '#E74A3B';
    refs.spanValidText.style.color = '#E74A3B';
    refs.spanValidText.textContent = 'Please, fill this field';
  } else {
    refs.inputTextElem.style.borderColor = '#7eb101';
    refs.spanValidText.style.color = '#7eb101';
    refs.spanValidText.textContent = 'Success!';
  }
  checkFormValidity();
}

function onInputTelValidity() {
  if (
    refs.inputTelElem.validity.patternMismatch ||
    refs.inputTelElem.value.trim().length <= 0
  ) {
    refs.inputTelElem.style.borderColor = '#E74A3B';
    refs.spanValidTel.style.color = '#E74A3B';
    refs.spanValidTel.textContent = 'Invalid phone number';
  } else {
    refs.inputTelElem.style.borderColor = '#7eb101';
    refs.spanValidTel.style.color = '#7eb101';
    refs.spanValidTel.textContent = 'Success!';
  }
  checkFormValidity();
}

function onInputEmailValidity() {
  if (
    refs.inputMailElem.validity.patternMismatch ||
    refs.inputMailElem.value.trim().length <= 0
  ) {
    refs.inputMailElem.style.borderColor = '#E74A3B';
    refs.spanValidEmail.style.color = '#E74A3B';
    refs.spanValidEmail.textContent = 'Invalid email, try again';
  } else {
    refs.inputMailElem.style.borderColor = '#7eb101';
    refs.spanValidEmail.style.color = '#7eb101';
    refs.spanValidEmail.textContent = 'Success!';
  }
  checkFormValidity();
}

// Функція для перевірки всіх полів та активації кнопки
function checkFormValidity() {
  const isTextValid =
    !refs.inputTextElem.validity.patternMismatch &&
    refs.inputTextElem.value.trim().length > 0;
  const isTelValid =
    !refs.inputTelElem.validity.patternMismatch &&
    refs.inputTelElem.value.trim().length > 0;
  const isEmailValid =
    !refs.inputMailElem.validity.patternMismatch &&
    refs.inputMailElem.value.trim().length > 0;

  if (isTextValid && isTelValid && isEmailValid) {
    refs.submitOrderButton.classList.add('input-success');
    refs.submitOrderButton.removeAttribute('disabled');
    refs.submitOrderButton.style.borderColor = '#7eb101';
  } else {
    refs.submitOrderButton.classList.remove('input-success');
    refs.submitOrderButton.setAttribute('disabled', 'disabled');
    refs.submitOrderButton.style.borderColor = '#E74A3B';
  }
}

// Прикріпляємо події до полів форми
refs.inputTextElem.addEventListener('input', onInputTextValidity);
refs.inputTelElem.addEventListener('input', onInputTelValidity);
refs.inputMailElem.addEventListener('input', onInputEmailValidity);

function clearOrderValidTextSpan() {
  refs.spanValidText.textContent = '';
  refs.inputTelElem?.classList.remove('input-success');
  refs.spanValidText?.classList.remove('notif-error');
}
function clearOrderValidTelSpan() {
  refs.spanValidTel.textContent = '';
  refs.inputTelElem?.classList.remove('input-success');
  refs.spanValidTel?.classList.remove('notif-error');
}
function clearOrderValidEmailSpan() {
  refs.spanValidEmail.textContent = '';
  refs.inputMailElem?.classList.remove('input-success');
  refs.spanValidEmail?.classList.remove('notif-error');
}
