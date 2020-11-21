/*
background_menu_scroll
*/
$(document).scroll(function(e) {
    $(window).scrollTop() > 200 ? $('.header').addClass('nav__color') : $('.header').removeClass('nav__color');
});

/*
animate_text
*/
jQuery(document).ready(function(){

	"use strict";
		animate_text();
	
});

 new WOW().init();



function animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.animation_text_word');
	
		animateSpan.typed({
			strings: ["Iliya Popov", "Junior QA Engineer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
	
}



