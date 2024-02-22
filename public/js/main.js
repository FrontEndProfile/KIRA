
var swiper = new Swiper(".witness-slider", {
     slidesPerView: 1,
     centeredSlides: false,
     slidesPerGroupSkip: 1,
     grabCursor: true,
     keyboard: {
          enabled: true,
     },
     breakpoints: {
          375: {
               slidesPerView: 1.1,
               spaceBetween: 20,
          },
          575: {
               slidesPerView: 1.3,
               spaceBetween: 20,
          },
          767: {
               slidesPerView: 1.4,
               spaceBetween: 40,
          },
          991: {
               slidesPerView: 2.7,
               spaceBetween: 40,
          },
     },
     scrollbar: {
          el: ".swiper-scrollbar",
     },
});

var swiper = new Swiper(".mySwiper", {
     cssMode: true,
     navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
     },
     mousewheel: true,
     keyboard: true,
});
var swiper = new Swiper(".client-swiper", {
     cssMode: true,
     loop: true,
     navigation: {
          nextEl: ".next",
          prevEl: ".prev",
     },
     mousewheel: true,
     keyboard: true,
});

var swiper = new Swiper(".review-slider", {
     slidesPerView: 2.1,
     spaceBetween: 30,
     breakpoints: {
          375: {
               slidesPerView: 1.1,
               spaceBetween: 10,
          },
          575: {
               slidesPerView: 1.5,
               spaceBetween: 20,
          },
          767: {
               slidesPerView: 1.5,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 2.1,
               spaceBetween: 20,
          },
          1199: {
               slidesPerView: 2.1,
               spaceBetween: 30,

          },
     },
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
});
var swiper = new Swiper(".dribble-slider", {
     slidesPerView: 2.1,
     spaceBetween: 30,
     breakpoints: {
          375: {
               slidesPerView: 1.1,
               spaceBetween: 10,
          },
          575: {
               slidesPerView: 1.5,
               spaceBetween: 20,
          },
          767: {
               slidesPerView: 1.5,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 2.1,
               spaceBetween: 20,
          },
          1199: {
               slidesPerView: 2.1,
               spaceBetween: 30,

          },
     },
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
});