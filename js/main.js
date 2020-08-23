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

    // validate email
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    $('.submitForm').click(function (e) { 
        e.preventDefault();
        var name = $('input[name="name"]').val();
        var email = $('input[name="email"]').val();
        var subject = $('input[name="subject"]').val();
        var mess = $('textarea[name="mess"]').val();

        if(name.length > 0 && validateEmail(email)){
            alert('Chúng tôi đã nhận được thông tin của bạn. Chúng tôi sẽ chủ động liên lạc với bạn trong thời gian sớm nhất !!!')
            $('input[name="name"]').val('');
            $('input[name="email"]').val('');
            $('input[name="subject"]').val('');
            $('textarea[name="mess"]').val('');
        }else{
            alert('Vui lòng nhập lại !!!')
        }
    });
});
