(function(window, document, $, waterdreamer, undefined) {
	'use strict';

	var Configurator = waterdreamer.Configurator = function () { };
	
	Configurator.prototype.init = function() {
		this.enable();
	};

	Configurator.prototype.enable = function() {
		var next = document.getElementById('configuratorNext'),
			navbar = document.getElementById('navBar'),
			steps = document.getElementById('configuratorSteps');

		next.addEventListener("click", function(e) {
			e.preventDefault();
			
			$('> li', steps).addClass('is-hidden');
			$('> li', steps).next('li').removeClass('is-hidden').addClass('is-active');
			
			$('li', navbar).eq( $('> li.is-active', steps).index() ).addClass('is-active');
			
			waterdreamer.helper.goToTarget('#configurator');
			
			if ( $('> li.is-active', steps).index() == $(steps).length ) {
				$(next).removeClass('bg-navy').addClass('bg-gray--darker');
			}
		});
	};

	waterdreamer.configurator = new Configurator();

}(window, document, jQuery, window.waterdreamer = window.waterdreamer || {}));