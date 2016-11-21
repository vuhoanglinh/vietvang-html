 jQuery(function () {		
		
		//NICE SCROLL
		var nice = jQuery("html").niceScroll();

		
		//PARALLAX
		jQuery.stellar({
			horizontalScrolling: false,
			verticalOffset: 0
		});
});

jQuery("document").ready(function($){
            $('#logo').hide();
            var nav = $('#navigation');
            var position = nav.position();
            $(window).scroll(function () {
                if ($(this).scrollTop() > position.top) {
                    nav.addClass("fixed");
                    $('#logo').show();
                } else {
                    nav.removeClass("fixed");
                    $('#logo').hide();
                }
            });

});  