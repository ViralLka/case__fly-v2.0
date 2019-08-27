'use strict';

// ready
$(document).ready(function() {

    // anchor
    $(".anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top + 40}, 1000);
    });
    // anchor

    // adaptive menu
    $('.main-nav__toggle--js').click(function () {
        $(this).next().slideToggle();
    });
    // adaptive menu

    // mask phone {maskedinput}
    //$("[name=phone]").mask("+7 (999) 999-9999");
    // mask phone

    // slider {http://idangero.us/swiper/}
    // slider

    // select {select2}
    //$('select').select2({});
    // select

    // popup {magnific-popup}
    //$('.image-gallery').magnificPopup({});
    // popup

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
