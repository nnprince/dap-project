$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.dap_header').addClass('dap_sticky-header')
        } else {
            $('.dap_header').removeClass('dap_sticky-header')
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>'],
    })

    $("a.dap_guide-play-btn").fancybox();

});



