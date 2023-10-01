/// swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 1,
      depth: 400,
      modifier: 1,
      slideShadows: false,
    },
  pagination: {
      el: '.swiper-pagination',
      type: "fraction",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})
 ///


/// modal window
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const orderCallButton = document.querySelector('.order-call-button');
  const closeButton = document.querySelector('.close-button');
  const closeModalButton = document.getElementById('close-modal-button');
  const orderCallForm = document.getElementById('order-call-form');

  orderCallButton.addEventListener('click', function () {
      modal.style.display = 'block';
      modalOverlay.style.display = 'block';
      /* document.body.style.overflow = 'hidden'; // Запрет прокрутки заднего фона */
  });

  closeButton.addEventListener('click', function () {
      closeModal();
  });

  closeModalButton.addEventListener('click', function () {
      closeModal();
  });

  orderCallForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Ваш код обработки отправки формы
      // Закройте модальное окно после успешной отправки
      closeModal();
  });

  function closeModal() {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
      document.body.style.overflow = 'auto'; // Разрешение прокрутки заднего фона
  }
});
///


///burger
const burgerButton = document.getElementById('burger-button');
        const burgerMenu = document.querySelector('.burger-menu');

        burgerButton.addEventListener('click', () => {
            burgerMenu.classList.toggle('show-menu');
});
///