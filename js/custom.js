/*global $, window, WOW*/

$(function () {
    
    "use strict";
    
    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        headerInner = $(".header-inner"),
        upperBar = $(".upper-bar"),
        progressCheck = false;
        
    
    /*========== Loading  ==========*/
    $(".loading").animate({
        "top": "-100%" 
    }, 700, function () {
        $(this).remove();
    });
    
    /*========== Navbar Animation On Scroll  ==========*/
    function activeNavbar() {
        
        if (win.scrollTop() > 70) {
            headerInner.addClass("active-nav");
        } else {
            headerInner.removeClass("active-nav");
        }
        
    }
    
    activeNavbar();
    
    win.on("scroll", function () {
        activeNavbar();
    });
    
    /*========== Mobile Menu  ==========*/
    $(".header-inner .menu-toggle").on("click", function () {
        headerInner.toggleClass("menu-active");
    });
	
	$(".header-inner .navbar .nav li a").on("click", function (e) {
		if ($(this).attr('href').charAt(0) === "#") {
			e.preventDefault();
		}
		$(this).next().slideToggle();
    });	
	
	/*========== Start Scroll For Link To Go Section  ==========*/
    $(".home .main-btn").on("click", function (e) {
		if ($(this).attr('href').charAt(0) === "#") {
			e.preventDefault();
		}
        var selector = $(this); 
        htmlBody.animate({
            scrollTop: $(selector.attr("href")).offset().top - 100
        }, 900);
    });
	
	$(".header .main-btn").on("click", function (e) {
         if ($(this).attr('href').charAt(0) === "#") {
             e.preventDefault();
         }
         var selector = $(this);
         htmlBody.animate({
             scrollTop: $(selector.attr("href")).offset().top
         }, 600);
     });
	
	/*========== Start Owl Carousel Js Slider  ==========*/
    if ($('.home2.owl-carousel')[0]) {
        
        $(".home2.owl-carousel").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
			autoHeight: true,
			autoplayHoverPause: true,
            autoplay: true,
            loop: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
	
	$(".home2").on("translate.owl.carousel", function() {
        $(".home2 .home-content h5").removeClass("animated fadeInUp").css("opacity", "0");
        $(".home2 .home-content h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".home2 .home-content p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".home2 .home-content .my-btn").removeClass("animated fadeInUp").css("opacity", "0");
        $(".home2 .home-image img").removeClass("animated fadeInUp").css("opacity", "0");
    });
    $(".home2").on("translated.owl.carousel", function(){
        $(".home2 .home-content h5").addClass("animated fadeInUp").css("opacity", "1");
        $(".home2 .home-content h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".home2 .home-content p").addClass("animated fadeInUp").css("opacity", "1");
        $(".home2 .home-content .my-btn").addClass("animated fadeInUp").css("opacity", "1");
        $(".home2 .home-image img").addClass("animated fadeInUp").css("opacity", "1");
    });
    
    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();
	
	/*========== Add Class active To search Form  ==========*/
	$(".header-inner .nav-search .search-btn a").on("click", function (e) {
		e.preventDefault();
		$(".header-inner .search-form").toggleClass("active");
    });	
	
	/*========== Ajax Contact Form  ==========*/
	$('.contact-form').on("submit", function () {
		
		var myForm = $(this),
			data = {};
		
		myForm.find('[name]').each(function() {
			
			var that = $(this),
				name = that.attr('name'),
				value = that.val();
			
			data[name] = value;
			
		});
		
		$.ajax({
			
			url: myForm.attr('action'),
			type: myForm.attr('method'),
			data: data,
			success: function (response) {
				
				if (response == "success") {
								
					$(".contact-form").find(".form-message").addClass("success");
					$(".form-message span").text("Message Sent!");
					
				} else {
					
					$(".contact-form").find(".form-message").addClass("error");
					$(".form-message span").text("Error Sending!");
					
				}
			}
			
		});
		
		return false;
		
	});
	
	/*========== Scroll To Top  ==========*/
    function scrollUp() {
        if (win.scrollTop() >= 1100) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }
    
    scrollUp();
    
    win.on("scroll", function () {
        scrollUp();
    });
    
    scrollToTop.on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });
	
});