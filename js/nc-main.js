/**
***************************************************************
* AUTHOR : NCodeArt
* PROJECT : Nob - Creative HTML Template
* Purchase : https://themeforest.net/user/ncodeart
*
* Copyright 2019-2020 NCodeArt
* NOTE : This file licensed to NCodeArt - https://themeforest.net/user/ncodeart and it is strictly prohibited to copy or reuse it.
***************************************************************
*/

/**
*****************************************************************
* This file is licensed to NCodeArt
* It's not allowed to copy or reuse it Copyright NCodeArt 2019-2020
* NCodeArt : http://www.ncodeart.com/
*****************************************************************
*/

var $ = jQuery.noConflict();

var nc = nc || {};

package_ver = 'v1.0';

;(function($) {
    "use strict";

    /*=============================================
    = FUNCTIONS
    =============================================*/

    /*----------  GET VARIABLE FUNCTION  ----------*/
    nc.getvar = function (v, default_v, val_type) {
		'use strict';
		if (val_type == 'n') {
			return v ? parseInt(v, 10) : default_v;
		}
		if (val_type == 'b') {
			if (v == 'true') { return true; }
			else if (v == 'false') { return false; }
			else { return default_v; }
		}
		if (val_type == 's') {
			if (v == 'false') {
				return false;
			} else {
				return v ? v : default_v;
			};

		}
    }
    
    /*----------  BACKGROUND SLIDESHOW  ----------*/
	nc.slideshow = function (element) {
        if($().vegas) {
			var s1 = element.attr('data-slide-image'),
				s2 = s1.split('|'),
				bgslides = [];
			
			$.each(s2, function (index, val) {
				bgslides.push({ src: val });
			});

			element.vegas({
				delay: 4000,
				slides: bgslides,
				timer: false,
				animation: 'kenburns'
			});
		}
    }
    
    /*----------  BACKGROUND VIDEO YOUTUBE  ----------*/
	nc.backgroundYoutube = function(element) {
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		if (isMobile.any()) {
			if (element.attr('data-property')) {
				element.YTPlayer();
			}
		}
		else {
			element.css("display", "block");
			if (element.attr('data-property')) {
				element.YTPlayer();
			}
		}
	}

	/*----------  HOSTED VIDEO  ----------*/
	nc.hostVideo = function (element) {
		'use strict';

		var videofile = element.attr("data-vide-src");
		element.animate({ opacity: 1 }, 500, function () { });
		element.vide({
			mp4: videofile,
			webm: videofile,
			ogv: videofile,
			poster: videofile + ".jpg"
		}, 
		{
			volume: 1,
			playbackRate: 1,
			muted: true,
			loop: true,
			autoplay: true,
			position: 'center center', // Similar to the CSS `background-position` property.
			posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
			resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
			bgColor: 'transparent', // Allow custom background-color for Vide div,
			className: '' // Add custom CSS class to Vide div
		});
	}
	
	/*----------  PARALLAX BACKGROUND  ----------*/
    nc.parallaxImage = function(element) {
        if($().jarallax) {
            
            var parallaxConfig = {};

            parallaxConfig = {
                
            };

            element.jarallax({
                
            });

        }
    }
    
    /*----------  OWL CAROUSEL ITEM  ----------*/
    nc.carouselItem = function(arr) {
        if($().owlCarousel) {
            if (typeof (arr) == "string" && arr != 'false') {
                var t1 = arr.split('|');
                var t2 = {};
                $.each(t1, function (index, val) {
                    var str = val;
                    var newarr = str.split(',');
                    t2[newarr[0]] = {}
                    t2[newarr[0]] = { items: parseInt(newarr[1], 10) };
                });
                return t2;
            } 
            else if (arr === 'false') {
                return {};
            } 
            else {
                return false;
            }   
        }
    }

    /*----------  OWL CAROUSEL  ----------*/
    nc.carousel = function(element) {
        if($().owlCarousel) {
            
            var carouselConfig,
                navLeft = '<i class="pe-7s-angle-left"></i>',
                navRight = '<i class="pe-7s-angle-right"></i>';

            // RESPONSIVE VARIABLE
            var resObj = {
                0: { items: 1 },
                420: { items: 2 },
                600: { items: 3 },
                768: { items: 3 },
                980: { items: 4 }
            }

            // CAROUSEL OBJECTS
            var carouselElement = $(element + ' .owl-carousel'),
                carouselObj = $(element);
            
            // CAROUSEL CONFIG
            carouselConfig = {
                items : nc.getvar(carouselObj.attr('data-carousel-items'), 3, 'n'),
                margin : nc.getvar(carouselObj.attr('data-carousel-margin'), 0, 'n'),
                loop : nc.getvar(carouselObj.attr('data-carousel-loop'), false, 'b'),
                center : nc.getvar(carouselObj.attr('data-carousel-center'), false, 'b'),
                mouseDrag : nc.getvar(carouselObj.attr('data-carousel-mousedrag'), true, 'b'),
                touchDrag : nc.getvar(carouselObj.attr('data-carousel-touchdrag'), true, 'b'),
                pullDrag : nc.getvar(carouselObj.attr('data-carousel-pulldrag'), true, 'b'),
                freeDrag : nc.getvar(carouselObj.attr('data-carousel-freedrag'), false, 'b'),
                stagePadding : nc.getvar(carouselObj.attr('data-carousel-stagepadding'), 0, 'n'),
                navTextLeft : nc.getvar(carouselObj.attr('data-carousel-navleft'), navLeft, 's'),
                navTextRight : nc.getvar(carouselObj.attr('data-carousel-navright'), navRight, 's'),
                merge : nc.getvar(carouselObj.attr('data-carousel-merge'), false, 'b'),
                mergeFit : nc.getvar(carouselObj.attr('data-carousel-margefit'), true, 'b'),
				autoWidth : nc.getvar(carouselObj.attr('data-carousel-widthauto'), false, 'b'),
				autoHeight : nc.getvar(carouselObj.attr('data-carousel-heightauto'), false, 'b'),
                startPosition : nc.getvar(carouselObj.attr('data-carousel-startpos'), 0, 'n'),
                URLhashListener : nc.getvar(carouselObj.attr('data-carousel-hashurl'), false, 'b'),
                nav : nc.getvar(carouselObj.attr('data-carousel-nav'), false, 'b'),
                rewind : nc.getvar(carouselObj.attr('data-carousel-rewind'), true, 'b'),
                slideBy : nc.getvar(carouselObj.attr('data-carousel-sideby'), 1, 'n'),
                slideTransition : nc.getvar(carouselObj.attr('data-carousel-transition'), 'linear', 's'),
                dots : nc.getvar(carouselObj.attr('data-carousel-dots'), true, 'b'),
                lazyLoad : nc.getvar(carouselObj.attr('data-carousel-lazyload'), false, 'b'),
                lazyLoadEager : nc.getvar(carouselObj.attr('data-carousel-dots'), 0, 'n'),
                autoplay : nc.getvar(carouselObj.attr('data-carousel-autoplay'), false, 'b'),
                autoplayTimeout : nc.getvar(carouselObj.attr('data-carousel-autoplaytimeout'), 5000, 'n'),
                autoplayHoverPause : nc.getvar(carouselObj.attr('data-carousel-hoverpause'), false, 'b'),
                smartSpeed : nc.getvar(carouselObj.attr('data-carousel-smartspeed'), 250, 'n'),
                autoplaySpeed : nc.getvar(carouselObj.attr('data-carousel-autoplayspeed'), false, 'b'),
                video : nc.getvar(carouselObj.attr('data-carousel-video'), false, 'b'),
                animateOut : nc.getvar(carouselObj.attr('data-carousel-out'), 'fadeOut', 's'),
                animateIn : nc.getvar(carouselObj.attr('data-carousel-in'), 'fadeIn', 's'),
                responsive : carouselObj.attr('data-carousel-itemrange') ? nc.carouselItem(carouselObj.attr('data-carousel-itemrange')) : resObj,
                responsiveBaseElement : nc.getvar(carouselObj.attr('data-carousel-rbase'), carouselObj.parent(), 's'),
            };

            carouselElement.owlCarousel({
                items : carouselConfig.items,
                margin : carouselConfig.margin,
                loop : carouselConfig.loop,
                center : carouselConfig.center,
                mouseDrag : carouselConfig.mouseDrag,
                touchDrag : carouselConfig.touchDrag,
                pullDrag : carouselConfig.pullDrag,
                freeDrag : carouselConfig.freeDrag,
                stagePadding : carouselConfig.stagePadding,
                navText : [carouselConfig.navTextLeft, carouselConfig.navTextRight],
                merge : carouselConfig.merge,
                mergeFit : carouselConfig.mergeFit,
				autoWidth : carouselConfig.autoWidth,
				autoHeight : carouselConfig.autoHeight,
                startPosition : carouselConfig.startPosition,
                URLhashListener : carouselConfig.URLhashListener,
                nav : carouselConfig.nav,
                rewind : carouselConfig.rewind,
                slideBy : carouselConfig.slideBy,
                slideTransition : carouselConfig.slideTransition,
                dots : carouselConfig.dots,
                lazyLoad : carouselConfig.lazyLoad,
                lazyLoadEager : carouselConfig.lazyLoadEager,
                autoplay : carouselConfig.autoplay,
                autoplayTimeout : carouselConfig.autoplayTimeout,
                autoplayHoverPause : carouselConfig.autoplayHoverPause,
                smartSpeed : carouselConfig.smartSpeed,
                autoplaySpeed : carouselConfig.autoplaySpeed,
                video : carouselConfig.video,
                animateOut : carouselConfig.animateOut,
                animateIn : carouselConfig.animateIn,
                responsive : carouselConfig.responsive,
                responsiveBaseElement : carouselConfig.responsiveBaseElement
            });

        }

    }
    
    /*----------  FORM FUNCTIONS  ----------*/
    nc.global_validation = {
		form: '',
		rules: {
			email: { required: true, email: true },
			name: { required: true },
			message: { required: true },
			phone: { required: true, number: true },
			date: { required: true, date: true },
			datetime: { required: true, date: true },
			people: { required: true, number: true }
		},
		msgpos: 'normal',
		msg: {
			email: { email: "Please, enter a valid email" }
		},
		subscribe_successMsg: "You are in list. We will inform you as soon as we finish.",
		form_successMsg: "Thank you for contact us. We will contact you as soon as possible.",

		successMsg: "",
		errorMsg: "Oops! Looks like something went wrong. Please try again later."
	}

    nc.formVaidate = function (obj) {
		'use strict';
		var msgpos = $(obj.form).attr('data-msgpos') ? $(obj.form).attr('data-msgpos') : 'normal';
		if (msgpos == 'append') {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				errorPlacement: function (error, element) {
					if (msgpos == 'append') {
						error.appendTo(element.closest("form").find('.msg-wrp'));
					};
				},
				success: function (element) {
					element.remove();
				}
			});
		} else {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				success: function (element) {
					element.remove();
				}
			});
		};
    }
    
    nc.resetForm = function (form) {
		'use strict';
		$(form).find('input[type="text"], input[type="email"], textarea').val(null);
	}

	nc.contactForm = function ($form, formData, validate_data) {
		'use strict';

		if ($form.find('label.error').length > 0) { $form.find('label.error').hide(); }

		var $btn = $form.find(".btn").button('loading');
		var timer = 4000;

		if ($form.valid()) {
			$.ajax({
				url: $form.attr('action'),
				type: 'POST',
				data: formData,
				success: function (data) {
					if (data.status == 'error') {
						
						// EMAIL SUBSCRIPTION ERROR MESSAGE
						swal("Error!", data.type, "error");
						$btn.button('reset');
						nc.resetForm($form);
					} 
					else {
						swal({
							type: "success",
							title: "Success!",
							text: validate_data.successMsg,
							timer: timer
						})
						.then(function(argument){
							if ($form.attr('data-success-redirect') === 'y') {
								window.location = nc.config.success_url;
							}
						});
						$btn.button('reset');
						$.magnificPopup.close();
						nc.resetForm($form);
					};
				},
				error: function () {
					swal("Error!", validate_data.errorMsg, "error");
					$btn.button('reset');
					$.magnificPopup.close();
					setTimeout(function () { swal.close(); }, timer);
				}
			});
		} else {
			$form.find("label.error").delay(timer).fadeOut('400', function () {
				$(this).remove();
			});
			$btn.button('reset');
		};
	}

	nc.formWidget = function (obj) {
		'use strict';

		var config = {
			popup_selector: $(obj).attr('data-popup') ? '.' + $(obj).attr('data-popup') : false,
			form_type: $(obj).attr('data-formtype') ? $(obj).attr('data-formtype') : 'normal',
			form_selector: obj
		}

		var $form = $(config.form_selector);

		// VALIDATION RULES
		nc.global_validation.form = config.form_selector;
		var validate_data = nc.global_validation;

		// Pop up form
		if (config.popup_selector) {
			$(config.popup_selector).each(function (index, el) {
				$(this).magnificPopup({
					type: 'inline',
					preloader: false
				});
			});
		};

		// DATE AND TIME PICKER OPTIONS
		if ($form.find(".date-pick").length > 0 || $form.find(".datetime-pick").length > 0) {
			var date_script_arr = [
				"lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"
			];

			nc.getMultiScripts(date_script_arr, '').done(function () {
				// DATE PICKER
				if ($form.find(".date-pick").length > 0) {
					$form.find(".date-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true,
							startView: 2,
							minView: 2
						});
					});
				};

				// DATE TIME PICKER
				if ($form.find(".datetime-pick").length > 0) {
					$form.find(".datetime-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true
						});
					});
				};
			});
		}
		

		// FORM VALIDATION
		nc.formVaidate(validate_data);

		// FORM
		$form.find('button').off('click').on('click', function (e) {
			e.preventDefault();
			if (config.form_type == "newsletter") {
				nc.global_validation.successMsg = nc.global_validation.subscribe_successMsg;
			} else {
				nc.global_validation.successMsg = nc.global_validation.form_successMsg;
			};
			nc.contactForm($form, $form.serializeObject(), validate_data);
			return false;
		});
	}

	$.fn.serializeObject = function () {
		'use strict';

		var o = {};
		var a = this.serializeArray();
		$.each(a, function () {

			// Field labels
			var field_label = $('[name=' + this.name + ']').attr('data-label') ? $('[name=' + this.name + ']').attr('data-label') : this.name;

			// Field values
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push({ val: this.value, label: field_label } || '');
			} else {
				//o[this.name] = this.value || '';
				o[this.name] = { val: this.value, label: field_label } || '';
			}
		});
		return o;
    };
    
    /*----------  IMAGE POPUP  ----------*/
	nc.popupImageFunction = function(element) {
		
		// VARIABLE
		var val_delegate = ".zoom-img",
		val_type = "image",
		val_fixedContentPos = true,
		val_mainClass = "mfp-zoom-in mfp-bg",
		val_removalDelay = 500,
		val_duration = 400,
		val_imageVerticalFit = false,
		val_galleryEnabled = true,
		val_animClass1 = "val_animClass1",
		val_animClass2 = "mfp-figure mfp-with-anim";

		element.magnificPopup({
			delegate: val_delegate,
			type: val_type,
			fixedContentPos: val_fixedContentPos,
			mainClass: val_mainClass,
			removalDelay: val_removalDelay,
			duration: val_duration,
			image: {
				verticalFit: val_imageVerticalFit,
			},
			gallery: {
				enabled: val_galleryEnabled
			},
			callbacks: {
				beforeOpen: function() {
				   this.st.image.markup = this.st.image.markup.replace(val_animClass1, val_animClass2);
				}
			},
		});
    }
    
    /*----------  BACKGROUND IMAGE  ----------*/
    nc.backgroundImage = function (element) {
        element.css({ 
            backgroundImage: "url('" + element.attr("data-bg-image") + "')" 
        });
	}
	
	/*----------  BACKGROUND COLOR  ----------*/
    nc.bgColors = function (element) {
        element.css({ 
            backgroundColor: element.attr("data-bg-color")
        });
    }
    
    /*----------  LINEAR GRADIENT  ----------*/
    nc.linearGredient = function(element) {
        
        var grdColors = $(element).attr('data-linear-gradient'),
        grdColor = grdColors.split('|');

        element.css({ 
            background: "linear-gradient(to bottom, " + grdColor[0] + " 0%, " + grdColor[1] + " 100%)",
        });
	}
	
	/*----------  RADIAL GRADIENT  ----------*/
    nc.radialGredient = function(element) {
		
		var rgrdColors = $(element).attr('data-radial-gradient'),
			rgrdColor = rgrdColors.split('|');

		element.css({ 
			background: "radial-gradient(circle, " + rgrdColor[0] + " 0%, " + rgrdColor[1] + " 100%)",
		});
    }
    /*=============================================
    = INTIAL FUNCTIONS
    =============================================*/
    nc.intials = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            nc.intials.menuIconFunction();
            nc.intials.scrollLinkUpdate();
        },

        menuIconFunction: function() {
            if($o.$menuIcon) {
                $o.$menuIcon.on("click", function(){
                    $(this).toggleClass("active");
                    $o.$ncBody.toggleClass("active-page");
                });
            }

            if($o.$html.hasClass("device-mobile")) {
                if($o.$menuIcon) {
                    $o.$navigationLink.on("click", function(){
                        $o.$menuIcon.toggleClass("active");
                        $o.$ncBody.toggleClass("active-page");
                    });
                }
            }
            
        },

        /*----------  LINK UPDATE ON SCROLL  ----------*/
        scrollLinkUpdate: function() {
            $(window).scroll(function() {
                var scrollLink = $(".navigation-a");
                var scrollbarLocation = $(this).scrollTop();
                
                scrollLink.each(function() {
                  
                  var sectionOffset = $(this.hash).offset().top - 20;
                  
                  if ( sectionOffset <= scrollbarLocation ) {
                    $(this).parent().addClass('current');
                    $(this).parent().siblings().removeClass('current');
                  }
                })
                
            })
        },

    };
    
    /*=============================================
    = HEADER FUNCTIONS
    =============================================*/
    nc.header = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            
        },

    };
    
    /*=============================================
    = PORTFOLIO FUNCTIONS
    =============================================*/
    nc.portfolio = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            nc.portfolio.popupImage();
        },

        /*----------  MAGNIFIC POPUP  ----------*/
        popupImage: function() {
            if($o.$zoomGallery && $().magnificPopup) {

                for (var i = 0; i < $o.$zoomGallery.length; i++) {
                    var loopObj = $($o.$zoomGallery);

                    nc.popupImageFunction(loopObj);
                }
            }
        },


    };
    
    /*=============================================
    = WIDGET FUNCTIONS
    =============================================*/
    nc.widget = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            nc.widget.background();
            nc.widget.backgroundSlideshow();
            nc.widget.backgroundYouVideo();
            nc.widget.backgroundVideo();
            nc.widget.backgroundColor();
            nc.widget.lGradient();
            nc.widget.rGradient();
            nc.widget.parallax();
            nc.widget.carousel();
            nc.widget.scrollToSection();
            nc.widget.formWidgetFunction();
            nc.widget.popupFunction();
            nc.widget.tooltipFunction();
        },

        /*----------  BACKGROUND  ----------*/
        background: function() {
            if($o.$backgroundImage) {
                for (var i = 0; i < $o.$backgroundImage.length; i++) {
                    var loopObj = $($o.$backgroundImage[i]);

                    // FUNCTION CALL
                    nc.backgroundImage(loopObj);
                }
            }
        },

        /*----------  BACKGROUND SLIDESHOW  ----------*/
        backgroundSlideshow: function() {
            if($o.$slideshow) {
                for (var i = 0; i < $o.$slideshow.length; i++) {
                    var loopObj = $($o.$slideshow[i]);

                    // FUNCTION CALL
                    nc.slideshow(loopObj);
                }
            }
        },

        /*----------  BACKGROUND VIDEO YOUTUBE  ----------*/
        backgroundYouVideo: function() {
            if($o.$youVideo) {
                for (var i = 0; i < $o.$youVideo.length; i++) {
                    var loopObj = $($o.$youVideo[i]);

                    // FUNCTION CALL
                    nc.backgroundYoutube(loopObj);
                }
            }
        },

        /*----------  BACKGROUND VIDEO HOST  ----------*/
        backgroundVideo: function() {
            if($o.$hostVideo) {
                for (var i = 0; i < $o.$hostVideo.length; i++) {
                    var loopObj = $($o.$hostVideo[i]);

                    // FUNCTION CALL
                    nc.hostVideo(loopObj);
                }
            }
        },

        /*----------  BACKGROUND COLOR  ----------*/
        backgroundColor: function() {
            if($o.$backgroundColor) {
                for (var i = 0; i < $o.$backgroundColor.length; i++) {
                    var loopObj = $($o.$backgroundColor[i]);

                    // FUNCTION CALL
                    nc.bgColors(loopObj);
                }
            }
        },

        /*----------  LINEAR GRADIENT  ----------*/
        lGradient: function() {
            if($o.$linearGradient) {
                for (var i = 0; i < $o.$linearGradient.length; i++) {
                    var loopObj = $($o.$linearGradient[i]);

                    // FUNCTION CALL
                    nc.linearGredient(loopObj);
                }
            }
        },

        /*----------  RADIAL GRADIENT  ----------*/
        rGradient: function() {
            if($o.$radialGradient) {
                for (var i = 0; i < $o.$radialGradient.length; i++) {
                    var loopObj = $($o.$radialGradient[i]);

                    // FUNCTION CALL
                    nc.radialGredient(loopObj);
                }
            }
        },

        /*----------  PARALLAX  ----------*/
        parallax: function() {
            if($o.$parallaxmage) {

                for (var i = 0; i < $o.$parallaxmage.length; i++) {
                    var loopObj = $($o.$parallaxmage[i]);
                    nc.parallaxImage(loopObj);
                }
            }

        },

        /*----------  CAROUSEL  ----------*/
        carousel: function() {
            if($o.$carouselWidget) {
                for (var i = 0; i < $o.$carouselWidget.length; i++) {
                    var loopObj = $($o.$carouselWidget[i]);

                    var carouselObj = 'owl' + i;
                    loopObj.attr("id", carouselObj).addClass(carouselObj);
                    nc.carousel("#" + carouselObj);
                }
            }

        },

        /*----------  SCROLL TO SECTION  ----------*/
        scrollToSection: function() {
            if($o.$scrollTo) {
                $o.$scrollTo.on("click", function(event){
                    event.preventDefault();
                    var sectionId = $(this).attr("href"),
                        $sectionId = $(sectionId),
                        mobileHeaderHeight = "70",
                        desktopHeaderHeight = "0",
                        bodyAndHtml = $('body, html');

                    if($sectionId.length === 0) {
                        return true;
                        console.log("NOTE: SECTION IS NOT AVAILABLE PLEASE CHECK");
                    }
                    else {
                        if($o.$html.hasClass("device-mobile")) {
                            var sectionPosition = $sectionId.offset().top - mobileHeaderHeight;   
                        }
                        else {
                            var sectionPosition = $sectionId.offset().top - desktopHeaderHeight;
                        }
                        bodyAndHtml.animate({ scrollTop: sectionPosition }, 1200);
                    }
                });
            }
        },

        /*----------  FORM FUNCTION  ----------*/
        formWidgetFunction: function() {
            if($o.$forms) {
                for (var i = 0; i < $o.$forms.length; i++) {
                    var loopObj = $($o.$forms[i]);

                    nc.formWidget(loopObj);
                }
            }
        },

        /*----------  POPUP  ----------*/
        popupFunction: function() {
            if($o.$setpop) {
                for (var i = 0; i < $o.$setpop.length; i++) {
                    var loopObj = $($o.$setpop[i]);

                    var popup = loopObj.attr('href');

                    loopObj.magnificPopup({
                        type: 'inline',
                        preloader: false,
                        mainClass: 'mfp-fade',
                        callbacks: {
                            beforeOpen: function () {
                                $(popup).removeClass('animate fadeInDown').addClass('animate fadeInDown');
                            }
                        }
                    });
                }
            }
        },

        /*----------  TOOLTIP  ----------*/
        tooltipFunction: function() {
            if($o.$tooltip) {
                for (var i = 0; i < $o.$tooltip.length; i++) {
                    var loopObj = $($o.$tooltip[i]);

                    loopObj.tooltip();

                }
            }
        }

    };
    
    /*=============================================
    = HELPER FUNCTIONS
    =============================================*/
    nc.help = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {

        },

       

    };
    
    /*=============================================
    = RESPONSIVE FUNCTIONS
    =============================================*/
    nc.responsiveScreen = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            nc.responsiveScreen.deviceIs();
        },

        /*----------  DETECT DEVICES  ----------*/
        deviceIs: function() {

            // MEDIA QUARIES VARIABLE
            var deviceDesktop = "screen and (min-width: 992px)",
                deviceMobile = "(min-width: 200px) and (max-width: 991px)"

            enquire.register(deviceDesktop, {
                match : function() {
                    $o.$html.addClass("device-desktop");
                },
                unmatch : function() {
                    
                }
            }).register(deviceMobile, {
                match : function() {
                    $o.$html.addClass("device-mobile");
                },  
                unmatch : function() {
                    
                }
            });	
        },

    };
    
    /*=============================================
    = DOCUMENT READY FUNCTIONS
    =============================================*/
    nc.onReady = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            nc.responsiveScreen.init();
            nc.intials.init();
            nc.widget.init();
            nc.header.init();
            nc.portfolio.init();
        },

    };
    
    /*=============================================
    = WINDOW LOAD FUNCTIONS
    =============================================*/
    nc.onLoad = {

        /*----------  INIT FUNCTION  ----------*/
        init: function() {
            nc.responsiveScreen.init();
            nc.onLoad.pageLoader();
        },

        /*----------  PAGE LOADER  ----------*/
        pageLoader: function() {
            if($o.$pageloader) {
                $("#loader").fadeOut(600, function() {
                    $("#loader").css("display", "none");
                });
            }

        },


    };
    
    /*=============================================
    = TEMPLATE VARIABLES
    =============================================*/
    nc.getObj = function() {
        var obj = {
            $window             : $(window),
            $html               : $("html"),
            $ncBody             : $(".nc-body"),
            $pageloader         : $("#loader"),
            $backgroundImage    : $("[data-bg-image]").length > 0 ? $("[data-bg-image]") : false,
            $backgroundColor    : $("[data-bg-color]").length > 0 ? $("[data-bg-color]") : false,
            $linearGradient     : $("[data-linear-gradient]").length > 0 ? $("[data-linear-gradient]") : false,
            $radialGradient     : $("[data-radial-gradient]").length > 0 ? $("[data-radial-gradient]") : false,
            $parallaxmage       : $("[data-bgholder='parallax-image']").length > 0 ? $("[data-bgholder='parallax-image']") : false,
            $slideshow          : $("[data-bgholder='slideshow']").length > 0 ? $("[data-bgholder='slideshow']") : false,
            $youVideo           : $("[data-bgholder='yvideo']").length > 0 ? $("[data-bgholder='yvideo']") : false,
            $hostVideo          : $("[data-bgholder='hvideo']").length > 0 ? $("[data-bgholder='hvideo']") : false,
            $carouselWidget     : $(".carousel-widget").length > 0 ? $(".carousel-widget") : false,
            $forms              : $(".form-widget").length > 0 ? $(".form-widget") : false,
            $zoomGallery        : $("[data-zoom-gallery='yes']").length > 0 ? $("[data-zoom-gallery='yes']") : false,
            $menuIcon           : $(".menu-icon").length > 0 ? $(".menu-icon") : false,
            $scrollTo           : $(".scroll-to-section").length > 0 ? $(".scroll-to-section") : false,
            $setpop             : $(".set-popup").length > 0 ? $(".set-popup") : false,
            $navigationLink     : $(".navigation-a").length > 0 ? $(".navigation-a") : false,
        }
        return obj;
    };
    
    /*=============================================
    = CALL FUNCTIONS
    =============================================*/
    var $o = nc.getObj();
    $(document).ready(nc.onReady.init);
    $(window).load(nc.onLoad.init)
    
})(jQuery);