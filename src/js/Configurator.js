(function(window, document, $, waterdreamer, undefined) {
	'use strict';

	var Configurator = waterdreamer.Configurator = function () { };
	
	Configurator.prototype.init = function() {
		this.enable();
	};

	Configurator.prototype.enable = function() {
		var next = document.getElementById('configuratorNext'),
			navbar = document.getElementById('navBar'),
			steps = document.getElementById('configuratorSteps'),
			stepsNum = $('> li', steps).length,
			i = 0;

		next.addEventListener("click", function(e) {
			e.preventDefault();

			if (i < 3) {
				i ++;
	
				$('li', navbar).eq( i ).addClass('is-active');
				
				$('> li', steps).addClass('is-hidden');
				$('> li', steps).eq(i).removeClass('is-hidden').addClass('is-active');
				
				waterdreamer.helper.goToTarget('#configurator');
			}
		});
	};

	waterdreamer.configurator = new Configurator();

}(window, document, jQuery, window.waterdreamer = window.waterdreamer || {}));