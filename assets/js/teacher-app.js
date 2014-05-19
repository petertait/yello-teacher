(function(){
	'use strict';
	var app = angular.module('myApp', ['onsen.directives']);
	
	$(function() {
		// Side Menu
		var snapper = new Snap({
		  element: document.getElementById('container'),
		  maxPosition: 90,
		  disable: 'left',
		  hyperextensible: false
		});
		// Toggle Menu
		$(document.body).on('click', '#right-side-menu', function(){
		    if( snapper.state().state=="right" ){
		        snapper.close();
		    } else {
		        snapper.open('right');
		    }
		});
	});
	
})();