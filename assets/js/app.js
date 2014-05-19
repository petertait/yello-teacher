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
		
		// Close mini modal l
		$(document.body).on('click', '.close-mini-modal, .dark-overlay', function(){
			$('.dark-overlay').fadeOut();
			$(".mini-modal, .mini-modal-login .mini-modal").stop(true).animate({ 'top': '-100%', 'opacity': '0' }, { queue: false, duration: 300 });
			return false;
		});	

	    // Checkboxes
	    $(document.body).on('click', '.checkbox', function(){
	        $(this).toggleClass('checked');
	    });
	    $(document.body).on('click', '.checkbox', function(){
	        $(this).parent().parent().toggleClass('completed');
	    });
	    
	    // Radio
	    $(document.body).on('click', '.radio-wrap', function(){
	    	$(this).siblings().removeClass('radio-active');
	        $(this).addClass('radio-active');
	    });
	    
	    // click Camera Capture Button
	    $(document.body).on('click', '.show-camera-capture', function(){
	        $('.camera-modal .flash').fadeIn(100, function(){
	            $('.camera-modal .flash').delay(150).fadeOut(130);
	            $('.bar-capture').stop(true).animate({ 'margin-bottom': -100, 'opacity': '0' }, { queue: false, duration: 400 }).css('z-index', -1);
	            $('.bar-capture-actions').stop(true).animate({ 'margin-bottom': 0, 'opacity': '1' }, { queue: false, duration: 700 }).css('z-index', 1);
	            $('.camera-modal .bar-nav .title').html('Captured Photo');
	            $('.camera-modal .bar-nav .show-camera').fadeIn(200);
	        });
	        $('.camera-modal').addClass('captured');
	        return false;
	    });
	    
	    // Show Camera
	    //$(document.body).on('click', '.show-camera, .camera-modal .ss-picture, .camera-modal .ss-usergroup, .camera-modal .ss-checkclipboard', function(){
	    $(document.body).on('click', '.show-camera', function(){
	        $('.bar-capture').stop(true).animate({ 'margin-bottom': 0, 'opacity': '1' }, { queue: false, duration: 500 }).css('z-index', 1);
	        $('.bar-capture-actions').stop(true).animate({ 'margin-bottom': -100, 'opacity': '0' }, { queue: false, duration: 500 }).css('z-index', -1);
	        $('.bar-paint').stop(true).animate({ 'margin-top': -120, 'opacity': '0' }, { queue: false, duration: 700 });
	        $('.camera-modal .front .bar-nav .title').html('Camera');
	        $('.camera-modal').removeClass('captured');
	        $('.camera-modal .bar-nav .show-camera').fadeOut(200);
	        return false;
	    });
	    $(document.body).on('click', '.paint-colours a', function(){
	    	$('.paint-colours a').removeClass('active');
	    	$(this).addClass('active');
	    });
	    $(document.body).on('click', '.camera-modal .ss-picture, .camera-modal .ss-usergroup, .camera-modal .ss-checkclipboard', function(){
	    	setTimeout(function() {
	    		$('.bar-capture').stop(true).animate({ 'margin-bottom': 0, 'opacity': '1' }, { queue: false, duration: 500 }).css('z-index', 1);
	    		$('.bar-capture-actions').stop(true).animate({ 'margin-bottom': -100, 'opacity': '0' }, { queue: false, duration: 500 }).css('z-index', -1);
	    		$('.bar-paint').stop(true).animate({ 'margin-top': -120, 'opacity': '0' }, { queue: false, duration: 700 });
	    		$('.camera-modal .front .bar-nav .title').html('Camera');
	    		$('.camera-modal').removeClass('captured');
	    		$('.camera-modal .bar-nav .show-camera').fadeOut(200);
	    	}, 300);
	        
	        return false;
	    });
	    
	    // Show paint bar
	    $(document.body).on('click', '.camera-modal .bar-tab .ss-draw', function(){
	    	$('.bar-paint').stop(true).animate({ 'margin-bottom': 0, 'opacity': '1' }, { queue: false, duration: 300 });
	    	$('.camera-modal').addClass('paint-captured');
	    });
	    
	    // Hide Captured toolbar
	    $(document.body).on('click', '.paint-captured.camera-modal .bar-tab .ss-draw, .show-camera', function(){
	    	$('.bar-paint').stop(true).animate({ 'margin-bottom': -150, 'opacity': '0' }, { queue: false, duration: 200 });
	    	$('.camera-modal').removeClass('paint-captured');
	    	
	    });
	    
	    // Click to flip camera
		$(document.body).on('click', '.camera-flip-btn', function(){
		    $('.camera-modal .flip-card').addClass('flipped');
		});
		$(document.body).on('click', '.scan-flip-btn', function(){
		    $('.camera-modal .flip-card').removeClass('flipped');
		});
		
		// Show Select Photos
		$(document.body).on('click', '.select-bar-tab .select-btn', function(){
		    $('.select-bar-tab').stop(true).animate({ 'bottom': -100 }, { queue: false, duration: 500 });
		    $('.select-actions-bar-tab').stop(true).animate({ 'bottom': 0 }, { queue: false, duration: 500 });
		    $('.selected').siblings().fadeTo(200, 0.5);
		    $('.photos-modal .bar-nav .icon-close, .photos-modal .bar-nav .icon-camera').fadeOut(200);
		    $('.photos-modal .bar-nav .cancel-select-btn').delay(100).fadeIn(200);
		});
		
		// Delete image
		$(document.body).on('click', '.select-actions-bar-tab .ss-trash', function(){
			$('.selected').fadeOut(500);
			$('.selected').siblings().fadeTo(500, 1);
		});
		
		// Hide Select Photos Bar
		$(document.body).on('click', '.photos-modal .bar-nav .cancel-select-btn', function(){
			$('.selected').fadeOut(500);
			$('.select-bar-tab').stop(true).animate({ 'bottom': 0 }, { queue: false, duration: 500 });
			$('.select-actions-bar-tab').stop(true).animate({ 'bottom': -100 }, { queue: false, duration: 500 });
			$('.photos-modal .photos-grid').removeClass('select-img');
			$('.selected').siblings().fadeTo(500, 1);
			$('.photos-modal .bar-nav .icon-close, .photos-modal .bar-nav .icon-camera').delay(100).fadeIn(200);
			$('.photos-modal .bar-nav .cancel-select-btn').fadeOut(200);
		});
		
	    // NHM Website
		$("#nhm-website").html('<object data="http://nhm.ac.uk"/>');
		
		// Open Login Modal
		$("#login-btn").click(function() {
			$('.dark-splash-overlay').fadeIn();
			$('.mini-modal-login').css('z-index', 20);
			$('.mini-modal-login .mini-modal').stop(true).animate({ 'top': '15%', 'opacity': '1' }, { queue: false, duration: 700 });
			return false;
		});
		
		// Open Group Modal
		$("#group-btn").click(function() {
			$('.mini-modal-group').css('z-index', 20);
			setTimeout(function() {
	            $(".mini-modal-group .mini-modal").css({overflow : 'auto'});
	            $(".mini-modal-group .mini-modal").css({'-webkit-overflow-scrolling' : 'touch'});
	        }, 400);
			$(".mini-modal-login .mini-modal").stop(true).animate({ 'top': '-100%', 'opacity': '0' }, { queue: false, duration: 700 });
			$('.mini-modal-group .mini-modal').delay(700).stop(true).animate({ 'top': '15%', 'opacity': '1' }, { queue: false, duration: 700 });
			return false;	
		});
		
		// Dark Overlay - Modal
		$(".splash-dark-overlay").click(function() {
			$('.dark-splash-overlay').fadeOut();
			$(".mini-modal-wrap .mini-modal").stop(true).animate({ 'top': '-100%', 'opacity': '0' }, { queue: false, duration: 600 });
			return false;
		});
		
		// Exit Yello Modal
		$(document.body).on('click', '.exit-yello-btn', function(){
			$('.dark-body-overlay').fadeIn();
			$('.mini-modal-exit').css('z-index', 20);
			$('.mini-modal-exit .mini-modal').stop(true).animate({ 'top': '15%', 'opacity': '1' }, { queue: false, duration: 700 });
			return false;
		});
		
		// Dark Overlay - Modal
		$(".dark-body-overlay").click(function() {
			$('.dark-body-overlay').fadeOut();
			$(".mini-modal-wrap .mini-modal").stop(true).animate({ 'top': '-100%', 'opacity': '0' }, { queue: false, duration: 600 });
			return false;
		});
		
		// Load more notifications
		$(document.body).on('click', '.load-more .btn', function(){
			$('.hidden-notifications').slideDown();
			$(this).addClass('load-even-more');
		});
		$(document.body).on('click', '.load-even-more', function(){
			$('.hidden-notifications-2').slideDown();
			$('.load-more').slideUp();
		});
		
		// Side Menu
		var snapper = new Snap({
		  element: document.getElementById('container'),
		  maxPosition: 90,
		  disable: 'right',
		  hyperextensible: false
		});
		// Toggle Menu
		$(document.body).on('click', '#left-side-menu', function(){
		    if( snapper.state().state=="left" ){
		        snapper.close();
		    } else {
		        snapper.open('left');
		    }
		});
		// Close on opening new page
		$(document.body).on('click', '.snap-btn button', function(){
			$(".snap-btn button").removeClass('current');
		    $(this).addClass('current');
		    snapper.close();
		});
		
		// Close on opening new page
		$(document.body).on('click', '.activity-scan-content .info-card', function(){
			//$(this).css("height","100%");
			var el = $('.activity-scan-content .info-card'),
			    curHeight = el.height(),
			    autoHeight = el.css('height', '100%').height();
			el.height(curHeight).animate({height: autoHeight}, 500);
			$('.info-card-fade').fadeOut();
        });
        
        // Play/Pause Button
        $(document.body).on('click', '.activity-audio-controls .audio-btn', function(){
        	$(this).toggleClass('ss-play').toggleClass('ss-pause');
        });
        
	});
	
})();