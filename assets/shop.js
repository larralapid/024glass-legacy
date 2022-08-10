// SWITCH CURRENCY
if ( typeof theme.shopCurrency != 'undefined') {
	theme.updateCurrencies = function (){
		if ($('#js-currency-switcher').length > 0) {
			Currency.convertAll(theme.shopCurrency, jQuery('.currency_selector li.active').attr('data-currency'));
		} else {
			return;
		}
	};
}

jQuery(function($){

	// Search forms
	$(document).on('submit', '.search_form', function(e) {
		var searchQuery = $(this).find('input').val().replace(/ /g, '+');
		var placeHolder = $(this).find('input').attr('placeholder').replace(/ /g, '+');

		if ( !(searchQuery.length && searchQuery != placeHolder) ) {
			e.preventDefault();
			e.stopPropagation();
		}
	});

	// Product quantity box
	$(document).on("focusout",".quantity_input",function(){var a=$(this).val();isNaN(parseFloat(a))&&!isFinite(a)||0==parseInt(a)||""==a?$(this).val(1):parseInt(a)<0?$(this).val(parseInt(a)-2*parseInt(a)):$(this).val(parseInt(a))}),$(document).on("click",".quantity_up",function(){var a=$(this).parent().find(".quantity_input");isNaN(parseFloat(a.val()))||!isFinite(a.val())||a.attr("disabled")?a.val(1):a.val(parseInt(a.val())+1)}),$(document).on("click",".quantity_down",function(){var a=$(this).parent().parent().find(".quantity_input");!isNaN(parseFloat(a.val()))&&isFinite(a.val())&&a.val()>1&&!a.attr("disabled")?a.val(parseInt(a.val())-1):a.val(1)});

	// RTE youtube wrapper
	$(document).ready(function() {
		if ( $('.rte').length ) {
			$('.rte iframe[src *= youtube]').wrap('<div class="rte_youtube_wrapper"></div>');
		}
	});
  
// UPDATE PRODUCT H2 TAG TO H1
  $(document).ready(function () {
    var txt = document.getElementsByClassName('collection_text')[0].getElementsByTagName('h2')[0].innerText;

    var replacer = document.createElement('h1');
    replacer.innerHTML = txt;

    document.getElementsByClassName('collection_text')[0].getElementsByTagName('h2')[0].replaceWith(replacer)
});
// finish updating h2 to h1 
  
	// Back to top button
	$(document).ready(function(){
		$(window).on('scroll', function(){
			if ( $(this).scrollTop() > 300 ) {
				$('#back_top').fadeIn("slow");
			}
			else {
				$('#back_top').fadeOut("slow");
			}
		});
		$('#back_top').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate( {scrollTop : 0}, 800 );
			$('#back_top').fadeOut("slow").stop();
		});
	});

	// Collection item hover effect
	(function ($) {
		var o = $(".collection_item");
		if (o.length > 0) {
			$(document).ready(function () {

				$('body').delegate('.collection_caption', 'mouseover', function () {
					$(this).addClass('rollOut');
				});

				$('body').delegate('.collection_caption', 'mouseout', function () {
					$(this).removeClass('rollOut');
				});

			});
		}
	})(jQuery);
	
	$('.footer_newsletter_form').formValidation();

	// Show/Hide password input
	$(document).ready(function(){
		$('[data-action="show-password"]').on('click', function () {
			var elm = $(this).closest('.input-group').children('input.js-visible-password');
			if (elm.attr('type') === 'password') {
				elm.attr('type', 'text');
				$(this).html('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="file_eye_el"><path d="M0.0999997 10.5C-0.1 11 0.2 11.6 0.7 11.8C1.2 12 1.8 11.7 2 11.2C3.6 8.00002 6.6 5.90002 10 5.90002C13.4 5.90002 16.5 8.00002 17.9 11.2C18.1 11.7 18.7 12 19.2 11.8H19.3C19.9 11.6 20.2 11 19.9 10.5C19.3 9.20002 18.5 8.00002 17.5 7.10002C17.1 6.70002 17 6.20002 17.3 5.80002L17.6 5.30002C17.9 4.80002 17.7 4.20002 17.2 3.90002C16.7 3.60002 16.1 3.80002 15.8 4.30002L15.7 4.50002C15.4 5.00002 14.8 5.10002 14.3 4.90002C13.5 4.60002 12.7 4.30002 11.9 4.10002C11.4 4.00002 11 3.60002 11 3.10002V2.90002C11 2.30002 10.5 1.90002 10 1.90002C9.4 1.90002 9 2.40002 9 2.90002V3.10002C9 3.60002 8.6 4.00002 8.1 4.10002C7.3 4.20002 6.5 4.50002 5.8 4.80002C5.3 5.00002 4.6 4.90002 4.3 4.40002L4.2 4.30002C4 3.80002 3.4 3.70002 2.9 3.90002C2.4 4.20002 2.2 4.80002 2.5 5.30002L2.8 5.70002C3.1 6.10002 3 6.70002 2.6 7.00002C1.5 8.00002 0.7 9.20002 0.0999997 10.5Z" /><path d="M19.9 10.6C18.2 6.6 14.3 4 10 4C5.7 4 1.8 6.6 0.2 10.6L0 11L0.2 11.4C1.9 15.4 5.7 18 10.1 18C14.4 18 18.3 15.4 19.9 11.4L20 11L19.9 10.6ZM10 16C6.6 16 3.6 14.1 2.2 11C3.6 7.9 6.6 6 10 6C13.4 6 16.4 7.9 17.8 11C16.4 14.1 13.4 16 10 16Z" /><path d="M10 8C8.4 8 7 9.3 7 11C7 12.7 8.3 14 10 14C11.7 14 13 12.7 13 11C13 9.3 11.7 8 10 8ZM10 12C9.5 12 9 11.6 9 11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11C11 11.6 10.6 12 10 12Z" /></svg>');
				console.log(2);
			} else {
				elm.attr('type', 'password');
				$(this).html('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="file_eye_el"><path d="M19.9213 6.33664C20.1557 5.81077 19.844 5.21824 19.2848 5.05073C18.7566 4.89251 18.1987 5.17332 17.9664 5.66527C16.4415 8.89505 13.3725 10.966 10.0416 10.966C6.6215 10.966 3.54948 8.90232 2.10083 5.68227C1.876 5.18253 1.32023 4.88805 0.785864 5.04012L0.728076 5.05657C0.155103 5.21963 -0.161611 5.82638 0.0839321 6.36027C0.677994 7.65193 1.46566 8.82793 2.44692 9.79417C2.80378 10.1456 2.90358 10.6891 2.64628 11.1163L2.37452 11.5674C2.08511 12.0479 2.25306 12.668 2.74729 12.9438C3.22751 13.2118 3.83775 13.0542 4.12169 12.589L4.23541 12.4027C4.52288 11.9316 5.1386 11.7753 5.64786 12.0022C6.39877 12.3366 7.2005 12.6011 8.01571 12.7778C8.51904 12.8869 8.90067 13.3108 8.90067 13.817V13.9866C8.90067 14.5463 9.3679 15 9.93786 15C10.5078 15 10.9751 14.5463 10.9751 13.9866V13.817C10.9751 13.3108 11.3565 12.887 11.8618 12.7872C12.6628 12.6289 13.4508 12.3976 14.1903 12.0598C14.7189 11.8183 15.372 11.963 15.6717 12.4541L15.754 12.589C16.038 13.0542 16.6482 13.2118 17.1284 12.9438C17.6227 12.668 17.7906 12.0479 17.5012 11.5674L17.2439 11.1403C16.9803 10.7027 17.0921 10.1451 17.4697 9.79728C18.5171 8.83258 19.3228 7.67903 19.9213 6.33664Z"/></svg>');
				console.log(3);
			}
			console.log(1);
		});
	});

	// Product quick view
	
		$(document.body).on('click', '.js_quick_view', function(e) {
		
			e.preventDefault();
		

			// CONSTRUCTING QUICK VIEW MODAL
				

			$(document.body).append("\n\t\t\t\t\u003cdiv id=\"product_quick_view\" style=\"display: none;\"\u003e\n\t\t\t\t\t\u003cdiv class=\"product_quick_wrapper row\"\u003e\n\t\t\t\t\t\t\u003cdiv class=\"quick_view__left col-12 col-md-7 col-lg-6 mb-3 mb-md-0\"\u003e\n\t\t\t\t\t\t\t\t\u003cdiv id=\"img_big\" class=\"swiper-container\"\u003e\n\t\t\t\t\t\t\t\t\t\u003cdiv class=\"swiper-wrapper\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\t\u003cdiv id=\"quick_view_gallery_pagination\" class=\"swiper-pagination\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\t\u003cdiv id=\"prev_quick_view_gallery\" class=\"swiper-button-prev\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\t\u003cdiv id=\"next_quick_view_gallery\" class=\"swiper-button-next\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\t\u003cdiv class=\"quick_view__right col-12 col-md-5 col-lg-6\"\u003e\n\t\t\t\t\t\t\t\u003cform action=\"\/cart\/add\" method=\"post\" enctype=\"multipart\/form-data\" id=\"product-actions\" class=\"quick_view_form\"\u003e\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\u003cdiv id=\"quick_view__availability\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\u003ch5 id=\"quick_view__name\"\u003e\u003c\/h5\u003e\n\t\t\t\t\t\t\t\t\u003cdiv id=\"quick_view__price\" class=\"product-price-container\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\u003cdiv id=\"quick_view_colors\" class=\"color_product__options\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\u003cdiv id=\"quick_view_size\" class=\"size_product__options\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\u003cp id=\"quick_view__variants\"\u003e\n\t\t\t\t\t\t\t\t\t\u003clabel for=\"\"\u003eOptions:\u003c\/label\u003e\n\t\t\t\t\t\t\t\t\t\u003cselect id=\"product-select\" name=\"id\" class=\"hidden\"\u003e\u003c\/select\u003e\n\t\t\t\t\t\t\t\t\u003c\/p\u003e\n\t\t\t\t\t\t\t\t\u003cdiv id=\"quick_view__form\" class=\"mt-2\"\u003e\n\t\t\t\t\t\t\t\t\t\u003clabel for=\"\"\u003eQty: \u003c\/label\u003e\n\t\t\t\t\t\t\t\t\t\u003cdiv class=\"quantity_box\"\u003e\n\t\t\t\t\t\t\t\t\t\t\u003cinput min=\"1\" class=\"form-control quantity_input\" type=\"text\" name=\"quantity\" value=\"1\" \/\u003e\n\t\t\t\t\t\t\t\t\t\t\t\u003cdiv class=\"quantity_modifier quantity_up\"\u003e\n\t\t\t\t\t\t\t\t\t\t\t\t\u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"\u003e\u003cpath d=\"M6.41699 6.41699V2.91699H7.58366V6.41699H11.0837V7.58366H7.58366V11.0837H6.41699V7.58366H2.91699V6.41699H6.41699Z\" fill=\"#797B7E\"\/\u003e\u003c\/svg\u003e\n\t\t\t\t\t\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\t\t\t\u003cdiv class=\"quantity_modifier quantity_down\"\u003e\n\t\t\t\t\t\t\t\t\t\t\t\t\u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"\u003e\u003cpath d=\"M2.91699 6.41699H11.0837V7.58366H2.91699V6.41699Z\" fill=\"#797B7E\"\/\u003e\u003c\/svg\u003e\n\t\t\t\t\t\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\t\t\t\t\u003cbutton class=\"btn btn-primary btn-add-to-cart icon-svg w-100 mt-3\" type=\"submit\" id=\"quick_view__add\"\u003e\n\t\t\t\t\t\t\t\t\t\t\u003csvg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"\u003e\n\t\t\t\t\t\t\t\t\t\t\t\u003cpath d=\"M7.05518 8V6C7.05518 4.67392 7.58169 3.40215 8.51888 2.46447C9.45608 1.52678 10.7272 1 12.0526 1C13.378 1 14.6491 1.52678 15.5863 2.46447C16.5235 3.40215 17.05 4.67392 17.05 6V8H20.0484C20.3135 8 20.5677 8.10536 20.7552 8.29289C20.9426 8.48043 21.0479 8.73478 21.0479 9V21C21.0479 21.2652 20.9426 21.5196 20.7552 21.7071C20.5677 21.8946 20.3135 22 20.0484 22H4.05673C3.79165 22 3.53743 21.8946 3.34999 21.7071C3.16255 21.5196 3.05725 21.2652 3.05725 21V9C3.05725 8.73478 3.16255 8.48043 3.34999 8.29289C3.53743 8.10536 3.79165 8 4.05673 8H7.05518ZM7.05518 10H5.05621V20H19.049V10H17.05V12H15.051V10H9.05414V12H7.05518V10ZM9.05414 8H15.051V6C15.051 5.20435 14.7351 4.44129 14.1728 3.87868C13.6105 3.31607 12.8478 3 12.0526 3C11.2573 3 10.4947 3.31607 9.93236 3.87868C9.37004 4.44129 9.05414 5.20435 9.05414 6V8Z\" fill=\"#FFFFFF\"\/\u003e\n\t\t\t\t\t\t\t\t\t\t\u003c\/svg\u003e\n\t\t\t\t\t\t\t\t\t\tAdd to cart\n\t\t\t\t\t\t\t\t\t\u003c\/button\u003e\n\t\t\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\t\t\u003c\/form\u003e\n\t\t\t\t\t\t\t\u003cdiv id=\"product_info_link\"\u003e\n\t\t\t\t\t\t\t\t\u003ca href=\"#\" class=\"link\"\u003eView Full Info\u003c\/a\u003e\n\t\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\u003c\/div\u003e\n\t\t\t");

			// Showing fancybox loading animation
			$.fancybox.showLoading();
			$.fancybox.helpers.overlay.open({parent: $('body')});

			// Getting product info (Json)
			$.getJSON( $(this).attr( 'href' ) + '.js', function( product ) {
				
				// PRODUCT TITLE
				var productTitle = product.title;
				var productAvalible = product.available;
				
				$('#quick_view__name').html( '<span>' + productTitle + '</span>' );
				
				$('#quick_view__availability').html( '<span>' + productAvalible + '</span>' );
				

				// PRODUCT VARIANTS
				$.each(product.variants, function(i, variant) {
					$('#product-select').append('<option value="' + variant.id + '">' + variant.title + ' - ' + variant.price + '</option>')
				});

				// PRODUCT ALL INFO LINK
				$('#product_info_link a').attr( 'href', product.url );

				// QUANTITY FORM MINI
				$("#quantity").on("focusout",function(){var t=$(this).val();$(this).val(isNaN(parseFloat(t))&&!isFinite(t)||0==parseInt(t)||""==t?1:parseInt(t)<0?parseInt(t)-2*parseInt(t):parseInt(t))}),$("#quantity_up").on("click",function(){var t=$("#quantity").val();$("#quantity").val(!isNaN(parseFloat(t))&&isFinite(t)?parseInt(t)+1:1)}),$("#quantity_down").on("click",function(){var t=$("#quantity").val();$("#quantity").val(!isNaN(parseFloat(t))&&isFinite(t)&&t>1?parseInt(t)-1:1)});

				// UPLOADING option_selection.js TO MANAGE PRODUCT VARIANTS
				$.getScript( "//cdn.shopify.com/shopifycloud/shopify/assets/themes_support/option_selection-fe6b72c2bbdd3369ac0bfefe8648e3c889efca213baefd4cfb0dd9363563831f.js", function() {

				
						// IMAGES PRELOADER (INIT)
					preloadImages( product.images, function() {
							
							// APPENDING ALL IMAGES TO GALLERY
							
							$.each(product.images, function(i, src) {
								var bigSrc = src.replace('.png', '_410x520_crop_center.png').replace('.jpg', '_410x520_crop_center.jpg');
								$('#img_big .swiper-wrapper').append( '<div class="swiper-slide"><img class="w-100 lazyload" src="' + bigSrc + '"  data-src="' + bigSrc + '" alt="" /></div>' );
							});
						
							
							// VARIANT CHANGE FUNCTION
							var selectCallback = function(variant, selector) {
								if ( variant && variant.available ) {
									jQuery('#quick_view__add').removeAttr('disabled').removeClass('disabled');
									// VARIANT PRICES
									if( variant.price < variant.compare_at_price ){
										jQuery('#quick_view__price').html('<span class="product-price with-discount item_price">' + Shopify.formatMoney(variant.price, "") + '</span><span class="compare-at-price product-regular-price">' + Shopify.formatMoney(variant.compare_at_price, "") + '</span><span class="product-sale-price">Save ' + parseInt( 100 - ( variant.price*100 )/variant.compare_at_price ) + '% OFF</span>');
									}
									else {
										jQuery('#quick_view__price').html('<span class="product-price item_price">' + Shopify.formatMoney(variant.price, "") + '</span>');
									}
									
									// PRODUCT QUANTITY
									if ( variant.inventory_management != null ) {
										jQuery('#quick_view__availability span').removeClass('out_stock').addClass('in_stock').html('In stock');
									}
									else {
										jQuery('#quick_view__availability span').removeClass('out_stock').addClass('in_stock').html( 'In stock' );
									}
								} else {
									jQuery('#quick_view__add').addClass('disabled').attr('disabled', 'disabled'); // set add-to-cart button to unavailable class and disable button
									jQuery('#quick_view__availability span').removeClass('in_stock').addClass('out_stock').html( 'Out stock' );
									jQuery('#quick_view__price').html('<span class="product-price">' + Shopify.formatMoney(product.price, "") + '</span>');
								}
								
								// COLOR & SIZE OPTIONS
								for (var i = 0; i < selector.product.options.length; i++) {
									if ( selector.product.options[i].name.toLowerCase() == 'color' ) {
										var selectorNum = i;
										var selectorName = selector.product.options[i].name;
										
										renderColorOptions(selectorNum, selectorName);
									}
									if ( selector.product.options[i].name.toLowerCase() == 'size' ) {
										var selectorNum = i;
										var selectorName = selector.product.options[i].name;
										
										renderSizeOptions(selectorNum, selectorName);
									}
								}
								
								// CHANGING VARIANT IMAGE
								if ( variant && variant.featured_image ) {
									var originalImage = $("#img_big img");
									var newImage = variant.featured_image;
									var element = originalImage[0];
									
									Shopify.Image.switchImage(newImage, element, function (newImageSizedSrc, newImage, element) {
										
										quickViewGallery.slides.each(function(i) {
											var thumb = $(this).find('img').attr('src').replace('_crop_top', '').replace('_crop_center', '').replace('_crop_bottom', '').replace(/\?v=.*/ , '');
											var newImg = newImageSizedSrc.replace(/\?v=.*/ , '');
											if ( thumb == newImg ) {
												quickViewGallery.slideTo(i);
											}
										});
									});
								}
								
								theme.updateCurrencies();
							};
						
						
						// ADDING THUMBS SLIDER
						
						var quickViewGallery = new Swiper('#img_big', {
							effect: 'fade',
							spaceBetween: 0,
							updateOnImagesReady: true,
							observer: true,
							navigation: {
								nextEl: $('#next_quick_view_gallery'),
								prevEl: $('#prev_quick_view_gallery')
							},
							pagination: {
								el: $('#quick_view_gallery_pagination'),
								dynamicBullets: true,
								clickable: true
							}
						});
							
							// VARIANT CHANGE FUNCTION (INIT)
							new Shopify.OptionSelectors( "product-select", {
								product: product,
								onVariantSelected: selectCallback,
								enableHistoryState: false
							});
							
							// HIDING DEFAULT VARIANT SELECTOR
							$.each( $('#quick_view__variants select option'), function() {
								if ( $(this).val() == 'Default Title' ) {
									$('#quick_view__variants').hide();
								}
							});
						
						});
					
					// IMAGES PRELOADER (FUNCTION)
					function preloadImages(images, callback) {
						var count = images.length;
						if (count === 0) {
							callback();
						}
						var loaded = 0;
						$(images).each(function() {
							$('<img>').attr('src', this).load(function() {
								loaded++;
								if (loaded === count) {
									callback();
								}
							});
						});
					}
					
					
					// SHOWING QUICK VIEW MODAL
					
					$.fancybox( $('#product_quick_view'), {
							'openSpeed': 600,
							'closeSpeed': 300,
							'fitToView' : true,
							'autoSize' : false,
							'autoDimensions': true,
							'openEffect' : 'fade',
							'tpl': {
								wrap: '<div id="quick_view__wrap" class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
								closeBtn : '<a title="Close" id="quick_view__close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
							},
							'afterClose': function() {
								$('#product_quick_view').remove(); // REMOVING QUICK VIEW MODAL AFTER CLOSE
							}
						});
				
				});
				

				function renderColorOptions(num, name) {
					var colorSelect = $('#product_quick_view .single-option-selector').eq(num);
					var selectId = '#' + colorSelect.attr('id');
					var container = $('#product_quick_view #quick_view_colors');
					var content = '<label>' + name + ': </label>';

					colorSelect.parent('.selector-wrapper').addClass('hidden');

					if ( $('#product_quick_view .single-option-selector').length == 1 ) {
						$('#quick_view__variants label').hide();
					}

					$('#product_quick_view ' + selectId + ' option' ).each(function(){
						var value = $(this).val();
						if ( colorSelect.val() == value ) {
							return content = content + '<div class="color_item current" data-val="' + value + '" title="' + value + '"><span class="color_inner" style="background-color: ' + value + '"></span></div>';
						} else {
							return content = content + '<div class="color_item" data-val="' + value + '" title="' + value + '"><span class="color_inner" style="background-color: ' + value + '"></span></div>';
						}
					});
					
					container.html(content);
					$('#product_quick_view .color_item').on('click', function(e){
						colorSelect.val( $(this).data('val') ).trigger('change');
					});
				}
				// RENDER SIZE OPTION
				function renderSizeOptions(num, name){
					var sizeSelect = $('#product_quick_view .single-option-selector').eq(num);
					var selectId = '#' + sizeSelect.attr('id');
					var container = $('#product_quick_view #quick_view_size');
					var content = '<label>' + name + ': </label>';
					sizeSelect.parent('.selector-wrapper').addClass('hidden');
					if ( $('#product_quick_view .single-option-selector').length == 1 ) {
						$('#quick_view__variants label').hide();
					}
					$('#product_quick_view ' + selectId + ' option' ).each(function(){
						var value = $(this).val();
						if ( sizeSelect.val() == value ) {
							return content = content + '<div class="size_item current" data-val="' + value + '"><span class="size_inner">' + value + '</span></div>';
						} else {
							return content = content + '<div class="size_item" data-val="' + value + '"><span class="size_inner">' + value + '</span></div>';
						}
					});
					container.html(content);
					$('#product_quick_view .size_item').on('click', function(e){
						sizeSelect.val( $(this).data('val') ).trigger('change');
					});
				}

				// CLOSING QUICK VIEW MODAL AFTER ADDING TO CART
				$('#quick_view__add').on('click', function() {
					$.fancybox.close();
				});
				
				
			});
			
		});
	
//checkout
	// AJAX CART
	function ajaxCartRender() {
		$('.cart_content_preloader').removeClass('off');
		jQuery.getJSON('/cart.js', function(data) {
			var newHtml = '';

			if ( data.items.length == 0 ) {
				newHtml += '<p class="empty_alert text-center mb-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C13.3261 1 14.5979 1.52678 15.5355 2.46447C16.4732 3.40215 17 4.67392 17 6V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H7ZM7 10H5V20H19V10H17V12H15V10H9V12H7V10ZM9 8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8Z" /></svg><span class="mt-2">' + theme.cartAjaxTextEmpty + '</span></p>';
			} else {
				data.items.forEach( function( item, i ) {
					var image_url = item.image.replace('.png','_130x130_crop_center.png').replace('.jpg','_100x100_crop_center.jpg');
					newHtml += '<ul class="cart_list_items"><li class="cart_items"><img class="product-thumbnail item_img img-fluid" src="' + image_url + '"  alt="' + item.title + '" /><div class="item_desc"><a class="product_title" href="' + item.url + '">' + item.title.slice(0,50) + '</a><div class="product-price product-price-sm mt-2"><span class="product_quantity">' + item.quantity + ' X </span><span class="product-price">' + Shopify.formatMoney(item.price, "") + '</span></div><a class="item_remove_btn" href="#" data-id="' + item.id + '"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" fill="#121212"/></svg></a></div></li></ul>';
				});
				newHtml += '<div class="box_footer"><div class="cart_total mt-md-2"><span class="label mr-1">' + theme.cartAjaxTextTotalPrice + ': </span><span class="product-price value">' + Shopify.formatMoney(data.total_price, "")  + '</span></div><a id="clear_cart_all_items" class="cart_clear link d-block mt-2" href="/cart/clear"> <span>' + theme.cartAjaxTextClearCart + '</span> </a><div class="btn-group mt-3"><a class="btn btn-primary btn-block w-100" href="/cart">' + theme.cartAjaxTextGoCart + '</a><a class="btn btn-secondary btn-block w-100 mt-2" href="/checkout">' + theme.cartAjaxTextGoCheckout + '</a></div></div>';
			}

			$('#cart_content_box').html(newHtml);
			$('.header_cart #cart_items, .header_cart #cart_item_mobile').html(data.item_count).removeClass('hidden');
			removeItemFromCart();
			clearAllItemsFromCart();
			$('.cart_content_preloader').addClass('off');
			theme.updateCurrencies();
		});
	}

	// REMOVE AJAX CART ITEMS
	function removeItemFromCart(){
		$('.header_cart .item_remove_btn').on('click', function(e){
			e.preventDefault();
			itemId = $(this).attr('data-id');
			var postData = "updates[" + itemId + "]=0";
			jQuery.post('/cart/update.js', postData, function(){
				ajaxCartRender();
			}, "json");
		});
	}
	removeItemFromCart();

	// CLEAR AJAX CART 
	function clearAllItemsFromCart(){
		$('#cart_content_box #clear_cart_all_items').on('click', function(e){
			e.preventDefault();
			jQuery.post('/cart/clear.js', function(){
				ajaxCartRender();
			}, "json");
		});
	}
	clearAllItemsFromCart();

	// JQUERY.AJAX-CART.JS MINI
	jQuery(document).ready(function(t){var e={TOTAL_ITEMS:".cart-total-items",TOTAL_PRICE:".cart-total-price",SUBMIT_ADD_TO_CART:"input[type=image], input.submit-add-to-cart",FORM_UPDATE_CART:"form[name=cartform]",FORM_UPDATE_CART_BUTTON:"form[name=cartform] input[name=update]",FORM_UPDATE_CART_BUTTONS:"input[type=image], input.button-update-cart",LINE_ITEM_ROW:".cart-line-item",LINE_ITEM_QUANTITY_PREFIX:"input#updates_",LINE_ITEM_PRICE_PREFIX:".cart-line-item-price-",LINE_ITEM_REMOVE:".remove a",EMPTY_CART_MESSAGE:"#empty"},a=function(t){return Shopify.formatMoney(t,"${{ amount }}")};t(document).on("submit",'form[action*="/cart/add"]',function(e){e.preventDefault(),t(e.target).find(".btn-cart").attr("disabled",!0).addClass("disabled"),Shopify.addItemFromForm(e.target)}),t(document).on("click",".btn-cart",function(){t.fancybox.showLoading(),t.fancybox.helpers.overlay.open({parent:t("body")})}),t(e.FORM_UPDATE_CART_BUTTON).click(function(a){a.preventDefault(),t(a.target.form).find(e.FORM_UPDATE_CART_BUTTONS).attr("disabled",!0).addClass("disabled"),Shopify.updateCartFromForm(a.target.form)}),t(e.FORM_UPDATE_CART).delegate(e.LINE_ITEM_REMOVE,"click",function(a){a.preventDefault();var i=this.href.split("/").pop().split("?").shift();Shopify.removeItem(i),t(this).parents(e.LINE_ITEM_ROW).remove()}),Shopify.onItemAdded=function(e,a){t(a).find(".btn-cart").attr("disabled",!1).removeClass("disabled"),Shopify.getCart()},Shopify.onCartUpdate=function(i,n){t("#cart_items").html(i.item_count);if(theme.cartAjaxOn){ajaxCartRender();}var r=a(i.total_price);t(e.TOTAL_PRICE).html(r),t(e.EMPTY_CART_MESSAGE).length>0&&0==i.item_count&&(t(e.FORM_UPDATE_CART).hide(),t(e.EMPTY_CART_MESSAGE).show()),n=n||!1,n&&i.item_count>0&&(t.each(i.items,function(i,n){t(e.LINE_ITEM_PRICE_PREFIX+n.id).html(a(n.line_price)),t(e.LINE_ITEM_QUANTITY_PREFIX+n.id).val(n.quantity)}),t(n).find("input[value=0]").parents(e.LINE_ITEM_ROW).remove(),t(n).find(e.FORM_UPDATE_CART_BUTTONS).attr("disabled",!1).removeClass("disabled"))},Shopify.onError=function(){t("form").find(".btn-cart").attr("disabled",!1).removeClass("disabled")}});

  // JQUERY.API.JS MINI
  

  // JQUERY.API.JS FULL
	function floatToString(t, o) {
		var r = t.toFixed(o).toString();
		return r.match(/^\.\d+/) ? "0" + r : r
	}

	function attributeToString(t) {
		return "string" != typeof t && (t += "", "undefined" === t && (t = "")), jQuery.trim(t)
	}
	"undefined" == typeof Shopify && (Shopify = {}), Shopify.money_format = "$ {{amount}}", Shopify.onError = function(XMLHttpRequest, textStatus) {
		var data = eval("(" + XMLHttpRequest.responseText + ")");
		alert(data.message + "(" + data.status + "): " + data.description)
	}, Shopify.onCartUpdate = function(t) {
		alert("There are now " + t.item_count + " items in the cart.")
	}, Shopify.onItemAdded = function(t) {
		alert(t.title + " was added to your shopping cart.")
	}, Shopify.onProduct = function(t) {
		alert("Received everything we ever wanted to know about " + t.title)
	}, Shopify.formatMoney = function(t, o) {
		var r = "",
			e = /\{\{\s*(\w+)\s*\}\}/,
			a = o || this.money_format;
		switch (a.match(e)[1]) {
			case "amount":
				r = floatToString(t / 100, 2).replace(/(\d+)(\d{3}[\.,]?)/, "$1 $2");
				break;
			case "amount_no_decimals":
				r = floatToString(t / 100, 0).replace(/(\d+)(\d{3}[\.,]?)/, "$1 $2");
				break;
			case "amount_with_comma_separator":
				r = floatToString(t / 100, 2).replace(/\./, ",").replace(/(\d+)(\d{3}[\.,]?)/, "$1.$2")
		}
		return a.replace(e, r);
	}, Shopify.resizeImage = function(t, o) {
		try {
			if ("original" == o) return t;
			var r = t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
			return r[1] + "_" + o + "." + r[2];
		} catch (e) {
			return t;
		}
	}, Shopify.addItem = function(t, o, r) {
		o = o || 1;
		var e = {
			type: "POST",
			url: "/cart/add.js",
			data: "quantity=" + o + "&id=" + t,
			dataType: "json",
			success: function(t) {
				"function" == typeof r ? r(t) : Shopify.onItemAdded(t)
			},
			error: function(t, o) {
				Shopify.onError(t, o)
			}
		};
		jQuery.ajax(e)
	}, Shopify.addItemFromForm = function(t, o) {
	
		var r = {
			type: "POST",
			url: "/cart/add.js",
			data: jQuery(t).serialize(),
			dataType: "json",
			success: function(r) {
				
				"function" == typeof o ? o(r, t) : Shopify.onItemAdded(r, t);
				
				$(document.body).append("\n    \u003cdiv id=\"cart_added\"\u003e\n\t\t\t\u003cdiv class=\"cart_added_wrapper\"\u003e\n\t\t\t\t\u003ch6 class=\"cart-title\"\u003e\n\t\t\t\t\t\u003csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"\u003e\n\t\t\t\t\t\t\u003cpath d=\"M10.0002 15.172L19.1922 5.979L20.6072 7.393L10.0002 18L3.63623 11.636L5.05023 10.222L10.0002 15.172Z\" fill=\"#121212\"\/\u003e\n\t\t\t\t\t\u003c\/svg\u003e\n\t\t\t\t\t\u003cspan class=\"ml-2\"\u003eItem Added to cart\u003c\/span\u003e\n\t\t\t\t\u003c\/h6\u003e\n\t\t\t\t\n\t\t\t\t\u003cdiv class=\"cart_items\"\u003e\n\t\t\t\t\t\u003cdiv class=\"cart_added__1\" id=\"cart_added__img\"\u003e\u003c\/div\u003e\n\t\t\t\t\t\u003cdiv class=\"item_desc\"\u003e\n\t\t\t\t\t\t\u003cp id=\"cart_added__name\" class=\"product_title\"\u003e\u003c\/p\u003e\n\t\t\t\t\t\t\u003cdiv class=\"total-wrap\"\u003e\n\t\t\t\t\t\t\t\u003cdiv id=\"cart_added__quantity\"\u003e\u003cspan class=\"label\"\u003eQuantity:\u003c\/span\u003e\u003cspan class=\"value\"\u003e\u003c\/span\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\u003cdiv id=\"cart_added__price\"\u003e\u003cspan class=\"label\"\u003ePrice: \u003c\/span\u003e\u003cspan class=\"value product-price\"\u003e\u003c\/span\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\t\u003cdiv id=\"cart_added__total_price\"\u003e\u003cspan class=\"label\"\u003eTotal: \u003c\/span\u003e\u003cspan class=\"value product-price\"\u003e\u003c\/span\u003e\u003c\/div\u003e\n\t\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\u003c\/div\u003e\n\t\t\t\t\n\t\t\t\t\u003cdiv class=\"cart-buttons mt-3\"\u003e\n\t\t\t\t\t\u003ca class=\"btn btn-primary d-block w-100\" href=\"\/cart\"\u003e\u003cspan\u003eview my cart\u003c\/span\u003e\u003c\/a\u003e\n\t\t\t\t\t\u003ca class=\"btn btn-secondary d-block w-100 mt-2\" id=\"cart_added__close\" href=\"#\"\u003e\u003cspan\u003eContinue shopping\u003c\/span\u003e\u003c\/a\u003e\n\t\t\t\t\u003c\/div\u003e\n\t\t\t\u003c\/div\u003e\n    \u003c\/div\u003e\n  ");
				// Showing fancybox loading animation
				$.fancybox.showLoading();
				$.fancybox.helpers.overlay.open({parent: $('body')});
				
				$('body').on('touchmove', function(e) {
					if($('.fancybox-overlay').length) { e.preventDefault(); }
				});
				
				if ( r.title.length < 60 ) {
					var productTitle = r.title;
				}
				else {
					var productTitle = $.trim( r.title ).substring(0, 60) + '...';
				}

				$('#cart_added__name').html( productTitle );
				$('#cart_added__price .value').html( Shopify.formatMoney(r.price, ""));
				$('#cart_added__total_quantity .value').html( r.quantity );
				$('#cart_added__quantity .value').html(r.quantity);
				$('#cart_added__total_price .value').html( Shopify.formatMoney(r.final_line_price, ""));
				$('#cart_added__close').on( 'click', function(e) {
					e.preventDefault();
					theme.updateCurrencies();
					$('.fancybox-close').trigger('click');
				});
				
				if (r.image) {
				var cartAddImg = r.image.replace('.jpg','_130x160_crop_center.jpg').replace('.png','_130x160_crop_center.png');
				$('#cart_added__img').append( '<img class="product-thumbnail item_img img-fluid lazyload" src="' + cartAddImg + '" data-src="' + cartAddImg + '" alt="" />' );
					setTimeout(function () {
						$.fancybox.open( $('#cart_added'), {
							'openSpeed': 600,
							'closeSpeed': 300,
							'width': 424,
							'height': 423,
							'autoSize': false,
							'afterClose': function() {
								$('#cart_added').remove();
							}}
						);
					}, 300);
					
				}  else {
					$('#cart_added__img').hide();
					$.fancybox.open( $('#cart_added'),
							{
								'openSpeed': 500,
								'closeSpeed': 300,
								'afterClose': function() {
									$('#cart_added').remove();
								}
							}
					);
				}

			},
			error: function(t, o) {
				Shopify.onError(t, o);

				var errorData = eval('(' + t.responseText + ')');

				$('body').append('<div id="cart_added" class="cart_error"><h4></h4><p class="alert alert-error"></p></div>');
				$('#cart_added h4').html( errorData.message );
				$('#cart_added p').html( errorData.description );

				$.fancybox.open( $('#cart_added'),
					{
						'openSpeed': 500,
						'closeSpeed': 300,
						'topRatio'    : 0.5,
						'afterClose': function() {
							$('#cart_added').remove();
						}
					}
				);
			}
		};
		jQuery.ajax(r)
	}, Shopify.getCart = function(t) {
		jQuery.getJSON("/cart.js", function(o) {
			"function" == typeof t ? t(o) : Shopify.onCartUpdate(o)
		})
	}, Shopify.getProduct = function(t, o) {
		jQuery.getJSON("/products/" + t + ".js", function(t) {
			"function" == typeof o ? o(t) : Shopify.onProduct(t)
		})
	}, Shopify.changeItem = function(t, o, r) {
		var e = {
			type: "POST",
			url: "/cart/change.js",
			data: "quantity=" + o + "&id=" + t,
			dataType: "json",
			success: function(t) {
				"function" == typeof r ? r(t) : Shopify.onCartUpdate(t)
			},
			error: function(t, o) {
				Shopify.onError(t, o)
			}
		};
		jQuery.ajax(e)
	}, Shopify.removeItem = function(t, o) {
		var r = {
			type: "POST",
			url: "/cart/change.js",
			data: "quantity=0&id=" + t,
			dataType: "json",
			success: function(t) {
				"function" == typeof o ? o(t) : Shopify.onCartUpdate(t)
			},
			error: function(t, o) {
				Shopify.onError(t, o)
			}
		};
		jQuery.ajax(r)
	}, Shopify.clear = function(t) {
		var o = {
			type: "POST",
			url: "/cart/clear.js",
			data: "",
			dataType: "json",
			success: function(o) {
				"function" == typeof t ? t(o) : Shopify.onCartUpdate(o)
			},
			error: function(t, o) {
				Shopify.onError(t, o)
			}
		};
		jQuery.ajax(o)
	}, Shopify.updateCartFromForm = function(t, o) {
		var r = {
			type: "POST",
			url: "/cart/update.js",
			data: jQuery(t).serialize(),
			dataType: "json",
			success: function(r) {
				"function" == typeof o ? o(r, t) : Shopify.onCartUpdate(r, t)
			},
			error: function(t, o) {
				Shopify.onError(t, o)
			}
		};
		jQuery.ajax(r)
	}, Shopify.updateCartAttributes = function(t, o) {
		var r = "";
		jQuery.isArray(t) ? jQuery.each(t, function(t, o) {
			var e = attributeToString(o.key);
			"" !== e && (r += "attributes[" + e + "]=" + attributeToString(o.value) + "&")
		}) : "object" == typeof t && null !== t && jQuery.each(t, function(t, o) {
			r += "attributes[" + attributeToString(t) + "]=" + attributeToString(o) + "&"
		});
		var e = {
			type: "POST",
			url: "/cart/update.js",
			data: r,
			dataType: "json",
			success: function(t) {
				"function" == typeof o ? o(t) : Shopify.onCartUpdate(t)
			},
			error: function(t, o) {
				Shopify.onError(t, o)
			}
		};
		jQuery.ajax(e)
	}, Shopify.updateCartNote = function(t, o) {
		var r = {
			type: "POST",
			url: "/cart/update.js",
			data: "note=" + attributeToString(t),
			dataType: "json",
			success: function(t) {
				"function" == typeof o ? o(t) : Shopify.onCartUpdate(t)
			},
			error: function(t, o) {
				Shopify.onError(t, o)
			}
		};
		jQuery.ajax(r)
	};

  // WISHLIST
  
      const t = $(".zemez_wishlist_total");
      zemezWishlist = async e => {
        if (e.dataset.action === "remove" && location.href !== e.href) {
          location = e.href;
          return;
        }
        e.setAttribute("loading", "");
        e.setAttribute("disabled", "");
        await fetch("https://prestashop7.devoffice.com/shopify/wishlist.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(e.dataset)
        })
          .then(r => r.json())
          .then(r => {
            t.removeClass('hidden').html(r.total);
            if (e.dataset.action === "remove" && location.href === e.href) {
              location = e.href;
              return;
            }
            e.dataset.action = r.action;
            e.removeAttribute("loading");
            e.removeAttribute("disabled");
          });
      }
  

  // TABS
  $('.tab_content_wrapper').each(function(i) {
    var navItem = $(this).find('.tab_nav');
    var tabItem = $(this).find('.tab_item');
    navItem.on('click',function(e){
      navItem.removeClass('active');
      $(this).addClass('active');
      tabItem.removeClass('active');
      tabItem.eq($(this).data('tab')).addClass('active');
    });
  });


  // ACCORDION
	$('.product-accordion').each(function() {
		var accordionItem = $(this).find('.accordion-header');
		accordionItem.on('click', function(event){
			event.preventDefault();
			var accordion = $(this);
			var accordionContent = accordion.next('.accordion-content');
			accordion.toggleClass("active");
			accordionContent.slideToggle(250);
		});
	});

  // lINKLIST IN MENU TOGGLE
  if ( $(window).innerWidth() < 768 ) {
    $('.toggle-mobile').each(function(){
      var navItem = $(this);
      var itemEl = navItem.parent().find('.content-toggle-mobile');
      itemEl.hide();
      navItem.on('click', function(){
        if (navItem.hasClass('open')) {
          itemEl.slideUp(400);
          navItem.removeClass('open');
        } else {
          itemEl.slideDown(400);
          navItem.addClass('open');
        }
      })
    });
  }
	
	$('.widget_toggle').each(function(){
		
		var navItem = $(this);
		var itemEl = navItem.parent().find('.content-widget_toggle');
		itemEl.hide();
		navItem.on('click', function(){
			if (navItem.hasClass('open')) {
				itemEl.slideUp(400);
				navItem.removeClass('open');
			} else {
				itemEl.slideDown(400);
				navItem.addClass('open');
			}
		});
		if ( $(window).innerWidth() > 767 ) {
			if (navItem.hasClass('open')) {
				itemEl.show();
			}
		}
		if ( $(window).innerWidth() <= 767 ) {
			if (navItem.hasClass('open')) {
				navItem.removeClass('open');
			}
		}
	});

  // CLICKABLE COLOR OPTIONS
  $('.color_options_clickable').on('click', function(){
    var variantImage = $(this).data('image');
    if (variantImage.length > 0) {
      $(this).parent().parent().parent().parent().find('.product_img img').attr('src', variantImage);
    }
  });

  // SHOW POLICY PAGE
  $('.item_policy__link').on('click', function(e){
    if ( $(window).width() > 992 ) {
      e.preventDefault();
      var link = $(this).attr('href');
      $.ajax({
        url:link,
        type:'GET',
        success: function(data){
          var content = $(data).find('.main_content').html();
          $.fancybox(content,{
            'maxWidth': 768
          });
        }
      });
    }
  });

  // Fancybox video
	$(".fancybox-media").fancybox({
		maxWidth    : 800,
		maxHeight   : 600,
		fitToView   : false,
		width       : '70%',
		height      : '70%',
		autoSize    : false,
		closeClick  : false,
		openEffect  : 'elastic',
		closeEffect : 'none',
		beforeLoad  : function(){
			var url= $(this.element).attr("href");
			url = url.replace(new RegExp("watch\\?v=", "i"), 'v/');
			url += '?fs=1&autoplay=1';
			this.href = url
		}
	});
	
	
	
	// 		AJAX SEARCH  =============================================================================================
	if( theme.searchAjaxOn ){
		var container = $('#search_result_container');
		var url = '/search?q=';
		
		
		$('.header_search input[type=search]').on('keyup change', function(e){
			var inputVal = $(this).val(),
					_that = $(this);
			
			if(_that){
				setTimeout(function(){
					return false;
				}, 0);
			}
			
			if(e.key == "Backspace" || e.key == "Delete"){
				container.load(url + inputVal + ' #hidden_search_result> *');
			}
			
			if( inputVal.length > 2 ){
				container.addClass('active');
				$('.icon-search-reset').addClass('active');
				container.load(url + inputVal + ' #hidden_search_result> *', function(){
					theme.updateCurrencies();
					var list = container.find('.search_results');
					if ( parseInt( list.data('count_result') ) > 5 ){
						list.append('<li class="text-center col-12"><a class="btn btn-secondary mt-1" href="' + url + inputVal + '">' + list.data('caption') + ': ' + list.data('count_result') + '</a></li>');
					}
				});
			}
			
			
			$('.search_toggle, .icon-search-reset, .search_form_overlay').on('click', function(){
				container.removeClass('active').html('');
			});
		});
		
	}
	
});


// Enable parallax by mouse
var parallaxJs = document.getElementsByClassName('parallax-scene');
$(document).ready(function () {
  if(parallaxJs) {
    for(var i = 0; i < parallaxJs.length; i++){
      var scene = parallaxJs[i];
      new Parallax(scene);
    }
  }
});








// COUNTDOWN TIMER
$.fn.ccountdown = function(_yr, _m, _d, _t, callback) {
	var $this = this;
	var interval;
	var _montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
	var _today = new Date();
	// calling function first time so that it wll setup remaining time
	var _changeTime = function() {
		var _today = new Date();
		var _todayy = _today.getYear();
		if (_todayy < 1000)
			_todayy += 1900;
		var _todaym = _today.getMonth();
		var _todayd = _today.getDate();
		var _todayh = _today.getHours();
		var _todaymin = _today.getMinutes();
		var _todaysec = _today.getSeconds();
		_todaysec = "0" + _todaysec;
		_todaysec = _todaysec.substr(_todaysec.length - 2);
		var _todaystring = _montharray[_todaym] + " " + _todayd + ", " + _todayy + " " + _todayh + ":" + _todaymin + ":" + _todaysec;
		var _futurestring = _montharray[_m - 1] + " " + _d + ", " + _yr + " " + _t;
		/* calculation of remaining days, hrs, min, and secs */
		_dd = Date.parse(_futurestring) - Date.parse(_todaystring);
		_dday = Math.floor(_dd / (60 * 60 * 1000 * 24) * 1);
		_dhour = Math.floor((_dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
		_dmin = Math.floor(((_dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
		_dsec = Math.floor((((_dd % (60 * 60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
		var el = $($this);
		var $ss = el.find(".second"), $mm = el.find(".minute"), $hh = el.find(".hour"), $dd = el.find(".days");
		$ss.val(_dsec).trigger("change");
		$mm.val(_dmin).trigger("change");
		$hh.val(_dhour).trigger("change");
		$dd.val(_dday).trigger("change");
		if (_dd <= 0){
			$ss.val('0');
			$mm.val('0');
			$hh.val('0');
			$dd.val('0');
			window.clearInterval(interval);
			if (typeof callback == 'function'){
				callback.call(this);
			}
		}
	};
	
	_changeTime();
	
	interval = setInterval(_changeTime, 1000);
};


// Price range - Collection page

function initPriceRange(){
		var min=0,
			max=0,
			slideRange = '#js-slider-range',
			productCard = '.js-product-thumbnail',
			slideRangeWrap = '.slider-range-wr',
			rangeMin = '.js-range-min',
			rangeMax = '.js-range-max',
			enablePriceRange = $('#js-slider-range').length === 1? true : false;
		
		if (enablePriceRange){
			$(productCard).each(function(){
				if(eval($(this).data('price'))>max) max = eval($(this).data('price'));
				if(min==0) min = eval($(this).data('price')); else if(eval($(this).data('price'))<min) min =  eval($(this).data('price'));
			});
			
			if (min === max){
				$(slideRangeWrap).fadeOut();
			}else{
				$(slideRangeWrap).fadeIn();
			}
			
			$(slideRange).slider({
				range: true,
				min: min,
				max: max,
				values: [ min, max ],
				slide: function(event,ui){
					var price1 = (Shopify.formatMoney(ui.values[0], theme.moneyFormat));
					var price2 = (Shopify.formatMoney(ui.values[1], theme.moneyFormat));
					$(rangeMin).html(price1);
					$(rangeMax).html(price2);
					theme.updateCurrencies();
					
					// Show/Hide product when dragging
					$(productCard).each(function() {
						if(eval($(this).data('price'))>= ui.values[0] && eval($(this).data('price'))<=ui.values[1]){
							$(this).parent().fadeIn();
						}else{
							$(this).parent().fadeOut();
						}
					});
				}
			});
			
			var price1 = (Shopify.formatMoney(min, theme.moneyFormat));
			var price2 = (Shopify.formatMoney(max, theme.moneyFormat));
			$(rangeMin).html(price1);
			$(rangeMax).html(price2);
			theme.updateCurrencies();
			
		}
	}
$(document).ready(function () {
	initPriceRange();
});


// Form validation
$.fn.formValidation=function(){this.find("input[type=text], input[type=email], textarea").after('<p class="alert alert-danger alert-inline" style="display: none;"></p>'),this.find("input[type=password]").parents(".form-control-content").append('<p class="alert alert-danger alert-inline" style="display: none;"></p>'),this.on("submit",function(t){if($(this).find("input[type=text], input[type=email], input[type=password], textarea").each(function(){""==$(this).val()&&($(this).addClass("alert-inline"),"password"===$(this).attr("type")?$(this).parents(".form-control-content").find(".alert").html("Field can't be blank").slideDown():$(this).next().html("Field can't be blank").slideDown(),"password"!==$(this).attr("type")?$(this).on("focus",function(){$(this).removeClass("alert-inline").next().slideUp()}):$(this).on("focus",function(){$(this).removeClass("alert-inline").parent().next().slideUp()}),t.preventDefault())}),$(this).find("input[type=email]").length){var e=$(this).find("input[type=email]");e.val().length>0&&(e.val().length<6||-1==e.val().indexOf("@")||-1==e.val().indexOf("."))&&(e.addClass("alert-inline").next().html("Incorrect email").slideDown(),e.on("focus",function(){$(this).removeClass("alert-inline").next().slideUp()}),t.preventDefault())}if(2==$(this).find("input[type=password]").length){var n=$(this).find("input[type=password]:eq(0)"),i=$(this).find("input[type=password]:eq(1)");n.val()!=i.val()&&(n.addClass("alert-inline"),i.addClass("alert-inline").parents(".form-control-content").find(".alert").html("Passwords do not match").slideDown(),n.on("focus",function(){n.removeClass("alert-inline"),i.removeClass("alert-inline").parents(".form-control-content").find(".alert").slideUp()}),i.on("focus",function(){n.removeClass("alert-inline"),i.removeClass("alert-inline").parents(".form-control-content").find(".alert").slideUp()}),t.preventDefault())}})};

		
	
