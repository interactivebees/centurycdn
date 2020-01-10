$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 40){
        $('.main-header').addClass('fixed');
    } else{
        $('.main-header').removeClass('fixed');
    }
});
$(document).ready(function(){
    $('#cssmenu > ul > li').each(function(){
        var menuName = $(this).children('a').text();
        $(this).addClass(convertToSlug(menuName));
    });

    //mega menu
    var menu_mega = jQuery('.products');
    var menu_megabox = jQuery('.products-menu');
    var block = false;
    menu_mega.mouseenter(function(){
        if (!block){
            menu_mega.addClass('active');
            menu_megabox.addClass('active', function(){
                block = false;
            });
        }
    });
    menu_mega.mouseleave(function(){
        if (!block){
            menu_mega.removeClass('active');
            menu_megabox.removeClass('active', function(){
                block = false;
            });
        }
    });
    menu_megabox.mouseenter(function(){
        menu_mega.addClass('active');
        menu_megabox.addClass('active');
    });
    menu_megabox.mouseleave(function(){
        menu_mega.removeClass('active');
        menu_megabox.removeClass('active');
    });

    //Mobile Nav
    $('.menu-toggle').click(function(){
        //$(this).toggleClass('open');
        $('.navigation-mobile').toggleClass('open');
    });
    $('.submenu-button').click(function(e){
        $('.submenu-button').not(this).next('.sub-menu').slideUp('fast');
        $(this).next('.sub-menu').slideToggle('fast');
    });
    $('a.forul').click(function(e){		
	
		$('a.forul').not(this).next("span").next('.sub-menu').slideUp('fast');
		$(this).next("span").next('.sub-menu').slideToggle('fast');
    });
    $('.close-menu').click(function(){
        $(this).parent().removeClass('open');
        $('.menu-toggle').removeClass('open');
    });

    //Search
    $('.searchings .text-search').click(function(){
        $('.search-popup').addClass('open');
    });
    $('.searchings .voice-search').click(function(){
        $('.search-popup').addClass('open');
        $('.voice-block').show();
    });
    $('.search-popup .close').click(function(){
        $(this).parents('.search-popup').removeClass('open');
        $('.voice-block').hide();
    });

    //Enquiry Form
    $('.enquiry-form-link').click(function(){
        $('.enquiry-form').toggleClass('open');
    });
    $('.enquiry-form .close').click(function(){
        $(this).parents('.enquiry-form').removeClass('open');
    });

    //Chat
    $('.chat-popup-link').click(function(){
        $(this).toggleClass('active');
        $('.chat-popup-block').toggleClass('open');
    });
});

//smooth scroll
$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top - 100;
    $('body, html').animate({scrollTop: pos});
});

function convertToSlug(Text){
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
		.replace(/[^\w-]+/g,'');
}

$(window).on('load', function(){
    windoWidth = $(window).width();
    if(windoWidth < 1300){
        $('.section-logos ul').slick({
            slidesToShow: 4,
            autoplay: 3000,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false
                    }
                }
            ]
        });
    }
});