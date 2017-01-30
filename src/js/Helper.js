(function(window, document, $, waterdreamer, undefined) {
	'use strict';

	var Helper = function() {
        return {
            exist: exist,
            goToTarget: goToTarget
        };
    };

    function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
    
    function goToTarget(target, offset) {
		offset = offset || 0;
		
		$('html, body').animate({
			scrollTop: $(target).offset().top + offset
		}, {
			duration: 1000
		});
	}
	
	waterdreamer.helper = new Helper();

}(window, document, jQuery, window.waterdreamer = window.waterdreamer || {}));