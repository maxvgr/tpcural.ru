import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Navigation,
  Autoplay,
} from "swiper/modules";

new Swiper(".serviceSwiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 4,
  spaceBetween: -5,
  // loop: true,
  speed: 2000,

  breakpoints: {
    260: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".services .swiper-button-next",
    prevEl: ".services .swiper-button-prev",
  },
});

new Swiper(".clientsSwiper", {
  modules: [Navigation, Autoplay],

  slidesPerView: 4,
  spaceBetween: -5,
  // loop: true,
  speed: 2000,

  breakpoints: {
    260: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".our-clients .swiper-button-next",
    prevEl: ".our-clients .swiper-button-prev",
  },
});