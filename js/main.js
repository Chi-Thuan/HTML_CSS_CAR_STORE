$(document).ready(function () {
    $('.btn__menu').click(function (e) { 
        e.preventDefault();
        $('.btn__menu').toggleClass('active');
        $('.WrapAllPage').toggleClass('moveNav');
        $('.header__menu ul').toggleClass('active');
    });

    $('.overlayMenu').click(function (e) { 
        e.preventDefault();
        $('.btn__menu').toggleClass('active');
        $('.WrapAllPage').toggleClass('moveNav');
        $('.header__menu ul').toggleClass('active');
    });
});