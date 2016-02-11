// iife to isolate scope, pass context and jQ
(function(window, $) {
	$(document).ready(function() {
		// add opacity 1 to anything with fade-in class, css will take care of the rest
	    $('.fade-in').css('opacity', '1');
	});
})(window, jQuery);
