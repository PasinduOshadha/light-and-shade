// add class to navbar on scroll
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

$(document).ready(function () {
  var carousel_slider_settings = {
    autoplay: true,
    responsiveClass:true,
    loop: true,
    autoplayTimeout: 4000,
    margin: 10,
    dots: true,
    dotsEach: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      320: {
        items: 2,
        // autoWidth: true,
        margin: 10,
        // center: true
      },
      769: {
        items: 3,
        margin: 30
      },
      // 1100: {
      //   items: 4,
      //   nav: true
      // },
      1300: {
        items: 4,
        nav: true
      }
    }

  }

  $(".curtains-slider").owlCarousel(carousel_slider_settings);        // curtains slider
  $(".blinds-slider").owlCarousel(carousel_slider_settings);          // blind slider


  // testimonial slider settings
  var testimonial_slider_settings = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 10,
    dots: true,
    dotsEach: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    items: 1,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      }
    }
  }
  $(".testimonial-slider").owlCarousel(testimonial_slider_settings);

  // logo slider
  var logo_slider_settings = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 6000,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 6
      }
    }
  }

  $('.logo-slider').owlCarousel(logo_slider_settings)
});



// smart product finder
let step = 1;


//step increment
const nextBtn = document.querySelector('.next-btn')
if(nextBtn){
  nextBtn.addEventListener('click', e => {
    document.querySelector('.step-' + step).classList.remove('show')
    step < 4 ? step++ : '';
    document.querySelector('.step-' + step).classList.add('show')
  
  })
}


//step decremnt
const prevBtn = document.querySelector('.prev-btn')

if(prevBtn){
  prevBtn.addEventListener('click', e => {
    //e.preventDefault();
    document.querySelector('.step-' + step).classList.remove('show')
    step > 1 ? step-- : ''
    document.querySelector('.step-' + step).classList.add('show')
  })
}

// AOS 
AOS.init({
  once: true
});



// pre loader
// jQuery("body").prepend('<div id="preloader">Loading...</div>');
// jQuery(document).ready(function() {
//     jQuery(".page-loader").remove();
// });

$(window).on('load', function() {
  $(".page-loader").fadeOut("fast");
});



