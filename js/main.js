$(document).ready(function () {
    $('.btn__menu').click(function (e) { 
        e.preventDefault();
        $('.btn__menu').toggleClass('active');
        $('.header__menu ul').toggleClass('active');
    });
});