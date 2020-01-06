$(document).ready(function(){
    $('.fancybox').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $('.header .wrapper').append('<div class="resp-menu"><span></span></div>');
    $('.header-right').prepend('<div class="close-menu"></div><div class="logo"><img src="../clubprimeassets/img/logo-white.png"></div>')
    // $('.navigation .buy-now').clone().appendTo('.header-right');
    $('.resp-menu, .header-right .close-menu').click(function(){
        $('.header-right').toggleClass('show');
    });
    $('.navigation ul li a').click(function(){
        $('.header-right').toggleClass('show');
    })
    // $(document).on("scroll", onScroll);
    //smoothscroll
    $('.navigation a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('current');
        })
        $(this).addClass('current');
        var target = this.hash,
            menu = target;
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-30
        }, 500, 'swing');
    });
})
$(window).on('load resize', function () {
    if ($(window).width() < 959) {
        $('.banner .right .form').detach().insertAfter('.banner');
    }
    else {
        $('.form').detach().appendTo('.banner .right');
    }
});