(function(window, document, $, waterdreamer, undefined) {
	'use strict';

	var Configurator = waterdreamer.Configurator = function () { };
	
	Configurator.prototype.init = function() {
		this.enable();
	};

	Configurator.prototype.enable = function() {
		var next = document.getElementById('configuratorNext'),
			navbar = document.getElementById('navBar'),
			prev = document.getElementById('configuratorPrev'),
			steps = document.getElementById('configuratorSteps'),
			stepsNum = $('> li', steps).length,
			i = 0;

		next.addEventListener("click", function(e) {
			e.preventDefault();

			if (i < 3) {
				i ++;
	
				$('li', navbar).eq( i - 1 ).addClass('is-active--line').addClass('is-dot-inactive');
				$('li', navbar).eq( i ).addClass('is-active');
				
				$('> li', steps).addClass('is-hidden');
				$('> li', steps).eq(i).removeClass('is-hidden').addClass('is-active');
				
				waterdreamer.helper.goToTarget('#configurator');
			}
			
			if (i > 0) {
				$(prev).removeClass('is-inactive');
			}
			
			
			if (i === $('li', navbar).length - 1) {
				$(next).addClass('is-inactive');
			}
		});
		
		prev.addEventListener("click", function(e) {
			e.preventDefault();

			if (i > 0) {
				i --;
	
				$('li', navbar).eq( i ).removeClass('is-active--line').removeClass('is-dot-inactive');
				$('li', navbar).eq( i + 1 ).removeClass('is-active');
				
				$('> li', steps).addClass('is-hidden');
				$('> li', steps).eq(i).removeClass('is-hidden').addClass('is-active');
				
				$(next).removeClass('is-inactive');
				
				waterdreamer.helper.goToTarget('#configurator');
			}

			if (i === 0) {
				$(prev).addClass('is-inactive');
			}
		});
	};

	waterdreamer.configurator = new Configurator();

}(window, document, jQuery, window.waterdreamer = window.waterdreamer || {}));