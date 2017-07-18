(function ($) {

	new WOW().init();

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("navbar-default");
		} else {
			$(".navbar-fixed-top").removeClass("navbar-default");
		}
	});

	//jQuery to smooth scroll
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	
	//jQuery to collapse menu on outside click
	$(document).click(function(e) {
		if (!$(e.target).is('a')) {
	    	$('.collapse').collapse('hide');	    
	    }
	});

})(jQuery);
