// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });

 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
   breakpoints: {
     640: {
       slidesPerView: 2,
       spaceBetween: 20,
    },
     768: {
       slidesPerView: 4,
       spaceBetween: 40,
    },
     1024: {
       slidesPerView: 5,
       spaceBetween: 50,
    },
  },
});

