const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 0,


   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // And if we need scrollbar

});
window.onload = function () {
   let link = document.querySelector('.help__button3');
   let arrows = document.querySelectorAll('.arrow');
   let text = document.querySelector('.douc__text');



   for (let arrow of arrows) {
      arrow.onclick = function () {
         arrow.classList.toggle('arrow__up')
      }
      link.onclick = function () {

         text.style.display = (text.style.display === 'none') ? 'block' : 'none';

      };
   };
};


