(function($) {
	$(document).ready(function(){
		let showBanner = getCookie('showpromobanner');

		if (showBanner !== "false") {
			$('header .top_pannel').slideDown(500);
		}
		$('header .top_pannel .close-icon').click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			$('header .top_pannel').slideUp(500);
			document.cookie = "showpromobanner=false; expires=" + now.toUTCString() + "; path=/";
		});

		// MEGAMENU =================================================================================================
		var mobFlag = 0;

		megamenuToggle = function() {
			if ( $(window).width() > 1199 ) {
				$('#megamenu, .menu-user').removeClass('megamenu_mobile').addClass('megamenu_desktop');

				$('#megamenu_level__1, #megamenu-links').superfish();

				// $('#megamenu .level_1, #megamenu .level_2, #megamenu .level_3, #megamenu .level_3_1').removeAttr('style');

				$('#megamenu_mobile_toggle, .megamenu_trigger').off('.mobileMenu').removeClass('off active');

				$('.menu-content, .megamenu_mobile_close,#megamenu_mobile_toggle, #megamenu-links').removeClass('on');

				$('html, body').css('overflow', 'auto');

				mobFlag = 0;
				
				turnMenuDropdownSide();
			}
			else {
				// $('.menu-content, .megamenu_mobile_close').hide();
				$('#megamenu, .menu-user').removeClass('megamenu_desktop').addClass('megamenu_mobile');

				$('#megamenu_level__1, #megamenu-links').superfish('destroy');

				if ( mobFlag == 0 ) {
					menuMobile();
					mobFlag = 1;
				}
			}
		};

		menuMobile = function() {
			
			
			$('.megamenu_trigger').each(function(){
				$(this).parent('a.level_1__link').replaceWith(function() {
					return '<span class="level_1__link link-trigger">' + $(this).html() + '</span>';
				});
			});
			
			$('#megamenu_mobile_toggle').on('click.mobileMenu', function(){
				$(this).toggleClass('on');
				$('.menu-content, .megamenu_mobile_close').show().toggleClass('on');
				if ($(this).hasClass('on')){
					$('html, body').css({'overflow': 'hidden', 'position':'fixed', 'top': '0', 'left': '0', 'right': '0'});
				} else {
					$('html, body').removeAttr('style');
				}
			});
			
		
			$('.megamenu_trigger').on('click.mobileMenu', function() {
				var targetMenu = '#' + $(this).data('submenu');

				$(targetMenu).toggle().toggleClass('open-menu');

				$(this).toggleClass('active');
				
				var back_link = $(targetMenu).find('li.js-back_link');
				$(back_link).on('click', function() {
					$(targetMenu).hide().removeClass('open-menu');
					$('.megamenu_trigger').removeClass('active');
				});
				
				return false;
			});
			
			
			
			$('.megamenu_mobile_close').on('click', function() {
				$('.menu-content, .megamenu_mobile_close, #megamenu_mobile_toggle').removeClass('on');
				$('html, body').css({'overflow': 'auto', 'position':'static'});
				
				$('.is-megamenu, .is-simplemenu').each(function(){
					$(this).hide().removeClass('open-menu');
				});
				
				$('.megamenu_trigger').each(function(){
					$(this).removeClass('active');
				});
			});
			
		};
		
		

		// WATCH MENU DROP SIDE   ====================================================================================
		turnMenuDropdownSide = function() {
			$('#megamenu .is-simplemenu').each(function(i){
				if ( ($(this).offset().left + 470) > $(window).width() ){
					$(this).find('.droped_linklist').addClass('left_side');
				}
			});
		};

		// STICKY MENU  ==============================================================================================
		stickyHeader = function() {

			var target = $('.stickUpHeader');
			var pseudo = $('#pseudo_sticky_block');
			var stick_class = 'megamenu_stuck';
			$('body .megamenu_stuck').siblings().wrap('<div class="container container-xl">');
			$(window).on('load scroll resize', function() {
				
				if ( $(window).width() > 1199 ) {
				
					var scrolledValue = parseInt( $(window).scrollTop() );
					var offsetValue = parseInt( pseudo.offset().top );
					var headHeight = target.outerHeight();
						
					if ( scrolledValue > offsetValue ) {
						target.addClass( stick_class );
						pseudo.css({ 'height' : headHeight });
					}
					else {
						target.removeClass( stick_class );
						pseudo.css({ 'height' : 0 });
					}
					
				}
				else {
					target.removeClass( stick_class );
					pseudo.css({ 'height' : 0 });
				}
			});
			
			
			$(window).on('load', function() {
				setTimeout(function(){
					$(window).trigger('scroll')
				}, 180 );
			});
		};

		stickyHeader();
		megamenuToggle();
		
		// CART TOGGLE  ===========================================================================================
		var headerCartWrapper = $('header .cart_content_wrap');
		
		$('.js_cart_link_toggle').on('click', function(e){
			if ( headerCartWrapper.hasClass('open') ){
				headerCartWrapper.removeClass('open');
				$(this).removeClass('open');
				$('html, body').removeAttr('style');
			} else {
				headerCartWrapper.addClass('open');
				$(this).addClass('open');
				$('html, body').css({'overflow': 'hidden', 'position':'fixed', 'top': '0', 'left': '0', 'right': '0'});
			}
		});
		
		$('.js_cart_close').on('click', function(e){
			headerCartWrapper.removeClass('open');
			$('.js_cart_link_toggle').removeClass('open');
			$('html, body').removeAttr('style');
		});
		


		// SEARCH TOGGLE  ===========================================================================================
		var headerSearchForm = $('header .search_form_wrap');
		
		$('.search_toggle').on('click', function(e){
			if ( headerSearchForm.hasClass('open') ){
				headerSearchForm.removeClass('open');
				$(this).removeClass('open');
			} else {
				headerSearchForm.addClass('open');
				$(this).addClass('open');
			}
		});
		
		$('header .search_form_overlay').on('click',function (e) {
			if ( headerSearchForm.hasClass('open') ) {
				headerSearchForm.removeClass('open');
				$('.search_toggle').removeClass('open');
				$('.icon-search-reset').trigger('click');
				$('.icon-search-reset').removeClass('active');
			}
		});
		
		$('.search_form_close').on('click', function(e){
			headerSearchForm.removeClass('open');
			$('.search_toggle').removeClass('open');
			$('.icon-search-reset').trigger('click');
			$('.icon-search-reset').removeClass('active');
			$('#search_result_container').removeClass('active').html('');
		});
		
		// DATA TARGET ATTRIBUTE
		$('[data-target]').on('click', function(){
			const targetSelector = this.getAttribute('data-target');
			$(this).toggleClass('active');
			$(targetSelector).toggleClass('active');
		});

		// FOOTER NEWSLETTER FORM
		$('.footer_newsletter_form').each(function (){   
			$(this).on('submit', function(e){
				var formCookie = $(this).attr('class');
				$.cookie('footerformSended', formCookie);
			});
		});
		
		if( document.location.href.indexOf('?customer_posted=true') > 0 && $.cookie('footerformSended') == 'footer_newsletter_form') {
			$('.footer_newsletter_form .form_wrapper').hide();
			$('.footer_newsletter_form .alert-success').show();
		}
		
	
		
	});
})(jQuery);

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
   