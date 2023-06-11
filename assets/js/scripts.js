// swiper js
const curtains_slider_settings = {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 2,
  loop: true,
  pagination: {
    el: '.curtains-pagination',
    type: 'bullets',
  },
    autoplay: {
    delay: 2000,
  },
}

const curtains_slider = new Swiper('.curtains-slider', curtains_slider_settings);

const blinds_slider_settings = {
  speed: 600,
  spaceBetween: 10,
  slidesPerView: 2,
  loop: true,
  pagination: {
    el: '.blinds-pagination',
    type: 'bullets',
  },
    autoplay: {
    delay: 2000,
  },
}

const blinds_slider = new Swiper('.blinds-slider', blinds_slider_settings);
// const swiper = new Swiper('.swiper', {
//   speed: 400,
//   spaceBetween: 15,
//   slidesPerView: 2,
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//   },
//   navigation: {
//     nextEl: null,
//     prevEl: null,
//   },
//   autoplay: {
//     delay: 2000,
//   },
//   breakpoints:{
//     200: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//       nextEl: null,
//       prevEl: null,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//       nextEl: null,
//       prevEl: null,
//     }
//   }
// });

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
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1140: {
      slidesPerView: 6,
    }
  }
}

const logo_slider = new Swiper('.logo_slider', logo_slider_settings);


// product gallery
const product_slider_settings = {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 10,
  loop: true,
  // rewind: true,
  pagination: {
    el: '.gallery-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },
  autoplay: {
    delay: 2000,
  },
}
const product_slider = new Swiper('.product-gallery', product_slider_settings)



// add a class on scroll
function addClassOnScroll(Element, scrollAmount, classToBeadded) {
  const element = document.getElementById(Element),
    offset = scrollAmount,
    classList = classToBeadded

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= offset) {
      element.classList.add(classList);
    } else {
      element.classList.remove(classList);
    }
  });
}

// for navbar
addClassOnScroll('navbar', 60, 'navbar-bg-black')

// navmenu
var menuToggle = document.getElementById('menu-toggle')
var mainMenu = document.getElementById('main-menu')

menuToggle.addEventListener('change', function () {
  if (menuToggle.checked) {
    console.log('showing menu')

    mainMenu.classList.add('show-menu')
  }
  else {
    mainMenu.classList.remove('show-menu')
  }

})


