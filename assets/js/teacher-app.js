(function(){
	'use strict';
	var app = angular.module('myApp', ['onsen.directives']);
	
	$(function() {
		
		// Display Incompatible Modal
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		    $('body').addClass('safari-mac');
		}else {
		    $('body').addClass('not-safari');
		}
		// If App is Installed on iOS
		if (("standalone" in window.navigator) &&
		!window.navigator.standalone
		){
		    $('.ios-modal').show();
		}else {
			$('body').addClass('app-installed');
		}
		
		// Alert Modals for all Platforms
		$(document.body).on('click', '.close-notify-modal', function(){
			$(".notify-modal").fadeOut();
		});
		// Resize Window
		$(document.body).on('click', '.resize-window', function(){
			window.resizeTo('400', '780');
			$(".resize-modal").fadeOut();
		});
		
		// Open Login Modal
		$("#login-btn").click(function() {
			$('.dark-splash-overlay').fadeIn();
			$('.mini-modal-login').css('z-index', 20);
			$('.mini-modal-login .mini-modal').stop(true).animate({ 'top': '15%', 'opacity': '1' }, { queue: false, duration: 700 });
			return false;
		});
		
		// Checkboxes
		$(document.body).on('click', '.checkbox', function(){
		    $(this).toggleClass('checked');
		});
		$(document.body).on('click', '.checkbox', function(){
		    $(this).parent().parent().toggleClass('completed');
		});
		
		$(document.body).on('click', '.reset-register-btn', function(){
		    $('.checkbox').removeClass('checked');
		});
		

		$(document.body).on('click', '.active-timeline-nav', function(){
		    $('.snap-btn button').removeClass('current');
		    $('.snap-btn button.ss-clock').addClass('current');
		});
		
		// Hide Trip
		$(document.body).on('click', '.trips-wrap .main-delete.ss-delete', function(){
		    $(this).parent().fadeTo(500, 0.5);
		    $(this).removeClass('ss-delete');
		    $(this).addClass('ss-plus');
		});
		$(document.body).on('click', '.trips-wrap .main-delete.ss-plus', function(){
		    $(this).parent().fadeTo(500, 1);
		    $(this).removeClass('ss-plus');
		    $(this).addClass('ss-delete');
		});
		
		
		$(document.body).on('click', '.trips-wrap .main-hide.ss-hyphen', function(){
		    $(this).parent().slideUp(500);
		});
		
		// Side Menu
		var snapper = new Snap({
		  element: document.getElementById('container'),
		  minPosition: -90,
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
		// Close on opening new page
		$(document.body).on('click', '.snap-btn button', function(){
			$(".snap-btn button").removeClass('current');
		    $(this).addClass('current');
		    snapper.close();
		});
		
	});
	
})();