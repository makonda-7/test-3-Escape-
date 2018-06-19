jQuery(function(){
	initMenu();
});

function initMenu() {
	var opener = jQuery('.menu-open');
	var page = jQuery('html');
	var classActive = 'menu-active';

	var clickHandler = function(e) {
		e.preventDefault();
		page.toggleClass(classActive);
	};
	opener.on('click', clickHandler);
}