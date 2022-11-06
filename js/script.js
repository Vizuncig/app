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

let link = document.querySelector('.help__button3');
let arrow = document.querySelector('.arrow down3');
let text = document.querySelector('.douc__text');

link.onclick = () => {
   arrow.classList.toggle('.up3')

};
