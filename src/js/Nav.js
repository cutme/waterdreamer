(function(window, document, $, waterdreamer, undefined) {
	'use strict';

	var Nav = waterdreamer.Nav = function () { };
	
	Nav.prototype.init = function() {
		this.enable();
	};

	Nav.prototype.enable = function() {
		var btn = document.getElementById('nav'),
			nav = $('.c-nav'),
			body = $('body'),
			top = $('.c-top');
		
		$(btn).on('click', function(e) {
			e.preventDefault();
			
			$(this).toggleClass('is-active');
			$('.c-nav').toggleClass('is-active');
			$(body).toggleClass('no-scroll');
		});
		
		$(window).on('scroll', function (e) {
			var scroll = $(window).scrollTop();
			
			if (scroll >= 25) {
				top.addClass('is-fixed');
			} else {
				top.removeClass('is-fixed');
			}
			
		});
	};

	waterdreamer.nav = new Nav();

}(window, document, jQuery, window.waterdreamer = window.waterdreamer || {}));