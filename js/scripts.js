$(document).ready(function () {
    $('.header-menu').slicknav({
        prependTo: '.mobile-menu'
    });

    // $('.slicknav_btn').addClass('clearfix');
    $('.slicknav_btn').append('<i class="fa fa-bars" aria-hidden="true"></i>')
});

$(document).ready(function () {
    $('.slider-wrap').slick({
        dots: false
    });
});

$(document).ready(function () {
    $('.slider-customer-wrap').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });
});