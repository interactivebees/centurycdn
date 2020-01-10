 $(window).on('load', function(){
            $('.tabs-block ul').mCustomScrollbar();

            $('.enquiry-form').addClass('open');
        });
        $(document).ready(function(){
            $('.banner').slick({
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000
            });
            $('.shop-now-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1
            });
            $('.pr-buttons a').click(function(){
                $('.pr-buttons a').not(this).removeClass('active');
                $(this).addClass('active');
            });
            $('#core').click(function(){
                $('.core-products').addClass('active');
                $('.surface-beauty, .century-doors').removeClass('active');
            });
            $('#surface').click(function(){
                $('.surface-beauty').addClass('active');
                $('.core-products, .century-doors').removeClass('active');
            });
            $('#doors').click(function(){
                $('.century-doors').addClass('active');
                $('.core-products, .surface-beauty').removeClass('active');
            });
            $('.core-products .tabs-block ul li').click(function(){
                var tab_id = $(this).attr('data-tab');
                $('.core-products .tabs-block ul li').removeClass('current');
                $('.core-products .tabbed-content').removeClass('current');
                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });
            $('.surface-beauty .tabs-block ul li').click(function(){
                var tab_id = $(this).attr('data-tab');
                $('.surface-beauty .tabs-block ul li').removeClass('current');
                $('.surface-beauty .tabbed-content').removeClass('current');
                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });
            $('.century-doors .tabs-block ul li').click(function(){
                var tab_id = $(this).attr('data-tab');
                $('.century-doors .tabs-block ul li').removeClass('current');
                $('.century-doors .tabbed-content').removeClass('current');
                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });
            $('.blogs-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true
            });
        });