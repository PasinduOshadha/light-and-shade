// swiper js
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 15,
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
  },
});

// const prevBtn = document.querySelector('.swiper-button-prev')

// prevBtn.addEventListener('click', function () { 
//   swiper.slidePrev(500)
//  })

// testimonial slider
const testimonial_slider_settings = {
  // speed: 400,
  //spaceBetween: 0,
  // slidesPerView: 1,
  loop: true,
  // centeredSlides: true,
  pagination: {
    el: '.testimonial-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.testimonial-next',
    prevEl: '.testimonial-prev',
  },
  autoplay: false
  // autoplay: {
  //   delay: 2000,
  //   // enabled: false
  // },
}

const testimonial_slider = new Swiper('.testimonial-slider', testimonial_slider_settings);


// logo slider
// note: Because of nature of how the loop mode works (it will rearrange slides), 
//total number of slides must be >= slidesPerView * 2
const logo_slider_settings = {
  slidesPerView: 6,
  spaceBetween: 20,
  loop: true,
}

const logo_slider = new Swiper('.logo_slider', logo_slider_settings);
