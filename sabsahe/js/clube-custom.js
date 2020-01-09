$(document).ready(function(){	

    $(function () {
        $(".slider2").responsiveSlides({
            auto: true,
            pager: true,
            nav: false,
            speed: 500,
            // maxwidth: 800,
            namespace: "transparent-btns"
        });

    });

    $(".t-c").click(function(){
        $(".toll-no").css("display" , "block");
        $(".miss-no").css("display" , "none");
        $(".wats-no").css("display" , "none");
        $(".header-right p").removeClass("active");
        $(this).addClass("active");
     })

     $(".m-c").click(function(){
        $(".miss-no").css("display" , "block");
        $(".toll-no").css("display" , "none");
        $(".wats-no").css("display" , "none");  
        $(".header-right p").removeClass("active");
        $(this).addClass("active");
     })

     $(".w-c").click(function(){
        $(".miss-no").css("display" , "none");
        $(".toll-no").css("display" , "none");
        $(".wats-no").css("display" , "block");
        $(".header-right p").removeClass("active");
        $(this).addClass("active");
     })
     //
     $('.center-menu > ul').slicknav({
          label: '',
     });

     $(".enq-but").click(function(){
         $(".enq-fo").fadeIn();
         $(".home").removeClass("form-dac");
     })

     $(".ec-close1").click(function(){
        $(".enq-fo").fadeOut();
        $(".home").addClass("form-dac");
    })
     //

     
    $(".product-slider").flexisel({
        visibleItems: 2,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 5000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:500,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:700,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems:2
            }
        }
    });

    $(".cus-slider").flexisel({
        visibleItems: 3,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 9000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:500,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:700,
                visibleItems: 2
            },
            tablet: { 
                changePoint:800,
                visibleItems:2
            }
        }
    });


    
    $(".ec-close").click(function(){
        $(".ec-form").fadeOut();
        $(".home").removeClass("form-dac");
    })

    $(".bec-part a").click(function(){
        $(".ec-form , .ec-form .enq-fo").fadeIn();
        $(".home").addClass("form-dac");

    })

    //
	
	
	//

  var heig = $(".header").height();
  
    $(".home .center-menu ul li a").not(".center-menu ul li:last-child a").each(function(){
    var linke = $(this).attr("href");
   // alert(linke);
	
	$(this).click(function(event){
	 event.preventDefault();
	
	$('html, body').animate({
        scrollTop: $(linke).offset().top  - heig
    }, 1000);
	$(".center-menu ul li a").removeClass("active");
	$(this).addClass("active");
	
	
	})
	})


    //

  var a = $(".banner-bottom").position().top - 300;
    //alert(a);
   var wid = $(window).width();
    $(window).scroll(function(){

        if(wid > 1201)
        {

        var b = $(window).scrollTop();
        if(b > a){
            $(".enqu-form .enq-fo").fadeOut();
        }
        else{
            $(".enqu-form .enq-fo").fadeIn();
        }

    }
    }) 

    });		
