//Navigation script
(function($) { "use strict";
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});			
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
  })(jQuery);


  //Smoothescroll sections script
  $(document).ready(function(){
	$(".navbar ul li a, .f-info li a").on('click', function(event) {
	  event.preventDefault();
	  var hash = this.hash;
	  $('html, body').animate({
		scrollTop: $(hash).offset().top
	  }, 800, function(){
		window.location.hash = hash;
	  });
	});
  });




//Scrollspy 
$(document).ready(function() {
  $('body').scrollspy({ target: '#navbarSupportedContent'}) 
})


//Hero Wrapper Carousel 
$(".home-main-slider .owl-carousel").owlCarousel({
    loop:true,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:false,
	autoplayTimeout: 5000,
	smartSpeed: 1000,
	navText: [
        '<i class="ri-arrow-left-line"></i>',
        '<i class="ri-arrow-right-line"></i>'
    ],
    navContainer: '.home-main-slider .custom-nav',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//Parallax Scrolling Effect
let parallaxSection = document.getElementsByClassName('parallaxSection');
new simpleParallax(parallaxSection, {
  orientation: 'up',
  scale:1.5,
  delay:1
});


//Lenis smooth scroll website
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

//Current year value fetch
let yearspan = new Date();
let currentYear = document.getElementById("currentYear");
currentYear.innerHTML = yearspan.getFullYear();

//Testimonials carousel
$('.home-testimonials .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
    items:2,
	margin:10,
    lazyLoad: true,
	autoplay:true,
	navText: [
        '<i class="ri-arrow-left-line"></i>',
        '<i class="ri-arrow-right-line"></i>'
    ],
	autoplayTimeout: 5000,
	smartSpeed: 1000,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:1,
			nav:false
		},
		1000:{
			items:2,
			nav:true
		}
	}
})

//Aos Animation
  AOS.init();
