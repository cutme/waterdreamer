/*jshint expr:true */

(function(window, document, $, waterdreamer, undefined) {
	'use strict';
	
	function ns() {
		$('.js-niceSelect').removeClass('is-hidden').niceSelect();
	}
		

	$(document).ready(function() {
	
		waterdreamer.helper.exist('.js-niceSelect') && ns();
		waterdreamer.helper.exist('#configurator') && waterdreamer.configurator.init();
	
	});

		
}(window, document, jQuery, window.waterdreamer = window.waterdreamer || {}));

