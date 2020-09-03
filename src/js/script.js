
// Preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#goToTop').fadeIn('slow');
    } else {
        $('#goToTop').fadeOut('slow');
    }
});
$('#goToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 0, 'easeInOutExpo');
    return false;
});


// navbar

var fixHeight = function () {
    $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
    );
};
fixHeight();
$(window).resize(function () {
    fixHeight();
});
$('.navbar .navbar-toggler').on('click', function () {
    fixHeight();
});
$('.navbar-toggler, .overlay').on('click', function () {
    $('.mobileMenu, .overlay').toggleClass('open');
    $('.navbar .navbar-toggler span').toggleClass('fa fa-times fa-lg pl-1 pr-2 navbar-toggler-icon');
});


// search bar
$(".search-btn").on("click", () => {
    $(".navbar-brand").toggleClass("d-none");
    $(".search-bar").toggleClass("d-flex animated fadeIn");
    $(".search-btn").toggleClass('fa-times');
    $(".carousel").toggleClass(' pt-5'); // to maintain padding-top after navbar change
});
// search bar

// navbar

