'use strict';

// ready
$(document).ready(function() {

    // adaptive menu
    $('.main-nav__toggle--js').click(function () {
        $(this).next().slideToggle();
    });
    // adaptive menu 

    // slider {http://idangero.us/swiper/}
    var mySwiper = new Swiper ('.swiper', {
        effect: 'coverflow',
        slidesPerView: 2,
        grabCursor: true,
        centeredSlides: true,
        spaceBetween:90,
        // slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            slideShadows : false
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
    })
    // slider

    // popup {magnific-popup}
    $('.popup-modal').magnificPopup({
		type: 'inline'
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
    // popup

    $('.number--js').appear(function() {
        $('.number--js').each(function(){
            var dataN = $(this).attr('data-number');
            $(this).animate({ num: dataN}, {
                duration: 2000,
                step: function (num){
                    this.innerHTML = (num).toFixed(1) + '%'
                }
            });
        });
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

});
// ready


// load
$(document).load(function() {});
// load

// scroll
$(window).scroll(function() {});
// scroll

// mobile sctipts
var screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (screen_width <= 767) {}
// mobile sctipts
