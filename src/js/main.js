import './_components.js';
import './components/jquery.js'
import './components/nice-select.js'

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

$(document).ready(function() {
  // select
  $('select').niceSelect();


  // slider
  const swiper = new Swiper( '.posts-list',{
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
});

//modal
document.addEventListener('DOMContentLoaded', function () {
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModalButton = document.getElementById('closeModal');
  const modal = document.getElementById('modal');

  const menu = document.getElementById('nav');
  const openMenuButton = document.getElementById('openMenu');
  const closeMenuButton = document.getElementById('closeMenu');

  const body = document.getElementById('body');

  function toggleElement(element, closeBtn, openBtns) {
    openBtns.forEach(openBtn => {
      openBtn.addEventListener('click', function () {
        element.classList.add('active');
        body.classList.add('overflow');

        if (openBtn === openMenuButton) {
          openMenuButton.classList.remove('active');
          closeMenuButton.classList.add('active');
        }
      });
    });

    closeBtn.addEventListener('click', function () {
      element.classList.remove('active');
      body.classList.remove('overflow');

      if (closeBtn === closeMenuButton) {
        closeMenuButton.classList.remove('active');
        openMenuButton.classList.add('active');
      }
    });

    element.addEventListener('click', function (event) {
      if (event.target === element && element !== menu) {
        element.classList.remove('active');
        body.classList.remove('overflow');
      }
    });
  }

  toggleElement(modal, closeModalButton, openModalButtons);
  toggleElement(menu, closeMenuButton, [openMenuButton]);
});
