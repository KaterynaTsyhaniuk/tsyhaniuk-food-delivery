import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';

Swiper.use([Navigation, Keyboard]);

const aboutSwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.hero-button-next',
    prevEl: '.hero-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 1,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const upBorderElem = document.querySelector('.border-up');
  const upSwiperElem = document.querySelector('.swiper-up');
  const upButtonLeftElem = document.querySelector('.button-up-left');
  const upButtonRightElem = document.querySelector('.button-up-right');
  upBorderElem.classList.add('hero-border-visible');
  upSwiperElem.classList.add('hero-swiper-visible');
  upButtonLeftElem.classList.add('hero-button-left-visible');
  upButtonRightElem.classList.add('hero-button-right-visible');
});
