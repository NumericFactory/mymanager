/**
Environnement
Rôle : Déterminer l'environnement de production ou local
*/
var env = {
  dev : "http://localhost:8000/", 
  prod : "https://facturehero.com/"
};
var environnement = env.dev;

var displayUppercase = function ($element) {
  if ($element.val()) {
    $element.css('text-transform', 'uppercase');
  } else {
    $element.css('text-transform', 'none');
  }
};
$.fn.displayAsUppercase = function() {
  $(this).each(function() {
    var $element = $(this);
    displayUppercase($element);
    $element.on('input', function(){displayUppercase($element)});
  });
  return this;
}

/**
    Fonction de Vérification IBAN
**/
/*
 * Returns 1 if the IBAN is valid 
 * Returns FALSE if the IBAN's length is not as should be (for CY the IBAN Should be 28 chars long starting with CY )
 * Returns any other number (checksum) when the IBAN is invalid (check digits do not match)
*/
function isValidIBANNumber(input) {
  var CODE_LENGTHS = {
      AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
      CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
      FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
      HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
      LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
      MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
      RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26
  };
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
          code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
          digits;
  // check syntax and length
  if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
      return false;
  }
  // rearrange country code and check digits, and convert chars to ints
  digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
      return letter.charCodeAt(0) - 55;
  });
  // final check
  return mod97(digits);
}

function mod97(string) {
  var checksum = string.slice(0, 2), fragment;
  for (var offset = 2; offset < string.length; offset += 7) {
      fragment = String(checksum) + string.substring(offset, offset + 7);
      checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
}

/*jQuery(function ($) {
  $( document ).ready(function() { 
*/

    /*
    **  Function isOnScreen()
    **  Retourne True si Elt est visible dans l’écren, False sinon
    */
    /*$.fn.isOnScreen = function(){
      var win = $(window);
      var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
      };
      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      var bounds = this.offset();
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();
      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

  });
});*/

function saveWithAjax(theForm, theFormData, elt) {
    elt = elt || null;
    // spinner indicator loading
    var spinnerLoadingElt = "<i class='fa fa-spinner fa-spin switch-spinner'></i>";
    if($('i.fa-spinner').length){$('i.fa-spinner').remove();}

    if(elt!=null) {
      // Si le user a clické sur une checkbox on fait apparaître le loader dans le label
      if($(elt).parent().is('div.am-checkbox')) {
        $(elt).attr('disabled','disabled');
        $(elt).parent().find('label').append(spinnerLoadingElt);
      }
      // Sinon on fait apparaître le loader après l'élément
      else{
        $(elt).attr('disabled','disabled');  
        $(elt).parent().after(spinnerLoadingElt);
      }
    }   
    /**
   *  $.ajaxSetup({
   *    headers: {
   *     'Authorization':'Basic xxxxxxxxxxxxx',
   *     'X_CSRF_TOKEN':token,
   *     'Content-Type':'application/json'
   *   }
   *  });
  */

  /**
   *  OU SETUP AJAX CSRF
   *
   *  $.ajaxSetup({
   *   headers: {
   *       'X-CSRF-TOKEN': token
   *   }
   * });
  */
  // loader.removeClass("hidden");
  // Requête AJAX POST

  $.ajax({
    headers: {"X-CSRF-TOKEN":theFormData.token},
    url: theForm.action,
    method: 'POST',
    dataType: 'JSON', // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    data : theFormData,
    contentType: false, // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    processData: false, // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    cache: false, // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    // OU
    // data: {
    //     '_method': 'POST',
    //     '_token': token, // permet de vérifier le token en l'envoyant dans la requête dans App/Http/Middleware/VerifyCsrfToken
    //     '_file' : {
    //         "name" : file_data.name,
    //         "size" : file_data.size,
    //         "type" : file_data.type
    //     }
    // },
    success: function(response, status, xhr) {
      $('.errors').empty();
      $('.gritter-item-wrapper').remove();

      if( status == "success" ) {
          if($('.fa-spinner').length) {$('.fa-spinner').fadeOut(); $('.fa-spinner').remove();}
          $(elt).removeAttr('disabled');

          if(response.token_mismatch) { 
            setTimeout(function(){ return window.location = environnement + 'login'; }, 3000);
          }

          if(response.status == "success") {
            if(response.hasOwnProperty('customerid')) {
              // console.log(response.customerid);
              document.getElementById('customercreatestep1').setAttribute('data-customerid', response.customerid);
              document.getElementById('customercreatestep2').setAttribute('data-customerid', response.customerid);
            }
            if(response.hasOwnProperty('customercode')) {
              if(document.querySelector('meta[name="customercode"]') == null) {
                $('head').append('<meta name="customercode" content="'+response.customercode+'">');
              }     
            }
            var id = $(theForm).find('button.wizard-next').data("wizard");
            $(id).wizard('next');

            $.gritter.add({
              title: '<i style="color:#8DCADF" class="fa fa-check-circle"></i> OK !',
              text: response.message,
              //image: App.conf.assetsPath + '/' +  App.conf.imgPath + '/gh-icon.png',
              class_name: 'color github'
            });
            // swal({title: 'Oups', text: response.message, type:response.status, timer: 1400, showConfirmButton: false});
          }
          else {    
              // Message de succès
              //swal({title: xhr.statusText, text: response.message, type:'success', timer: 1400, showConfirmButton: false});
          }

      }
      else {
          //swal('Oups...', 'une erreur est survenue. Réessayez!', 'error');
          //console.log(response);
          //console.log(status);
          //console.log(xhr);
       }
       
    }, // FIN success
    error: function(xhr) {
      // console.log (xhr);
      var errors;
      if(xhr.responseText.length) {errors = $.parseJSON(xhr.responseText);} else {errors=null};
      // console.log(errors);
      switch(xhr.status) {
        case 403:
          $('.gritter-item-wrapper').remove();
          $.gritter.add({
          title: '<i style="color:#8DCADF" class="fa fa-times-circle"></i> OOPS !',
          text: 'Action non autorisée.',
          //image: App.conf.assetsPath + '/' +  App.conf.imgPath + '/gh-icon.png',
          class_name: 'color primary'
          });
        break;
        case 422:
        $('.gritter-item-wrapper').remove();
        $.gritter.add({
          title: '<i style="color:#8DCADF" class="fa fa-times-circle"></i> Oups !',
          text: 'Corrigez vos erreurs.',
          //image: App.conf.assetsPath + '/' +  App.conf.imgPath + '/gh-icon.png',
          class_name: 'color primary'
        });
        // console.log(errors);
        $('.errors').empty();
        if("civility" in errors) {
            var errCivility = document.querySelector('select[name="civility"]').parentNode.parentNode.querySelector('.errors');
            errCivility.innerHTML += errors.civility;
        }
        if("city" in errors) {
            var errAddress = document.getElementById("autocomplete").parentNode.parentNode.querySelector('.errors');
            errAddress.innerHTML += "<i class='fa fa-close'></i> Sélectionner une adresse dans le menu déroulant.";
        }
        if("companytype" in errors) {
            var errCompanytype = document.querySelector('select[name="companytype"]').parentNode.parentNode.parentNode.querySelector('.errors');
            errCompanytype.innerHTML += errors.companytype;
        }
        if("customertype" in errors) {
            var errCustomertype = document.querySelector('select[name="customertype"]').parentNode.parentNode.parentNode.querySelector('.errors');
            errCustomertype.innerHTML += errors.customertype;
        }
        $.each(errors, function(index, value) {
            // Si l'index de l'erreur est civility ou city ou companytype ou customer type, elles sont traitées au dessus
            if(index=='civility' || index=='city' || index=='companytype' || index=='customertype') {return false}
            // Selection de la div.errors sous l'input
            var errBlock = document.querySelector('input[name='+index+']').parentNode.parentNode.querySelector('.errors')
            errBlock.innerHTML += value;
        });    
        break;
        default:
       }
    } // FIN error
  }); 
}
/*!
 * jquery.niftymodals v1.3.1 (https://github.com/foxythemes/jquery-niftymodals)
 * Copyright 2016 Codrops <www.codrops.com> and Foxy Themes 
 * Licensed under Codrops license http://tympanus.net/codrops/licensing/ 
 */

!function(a){"use strict";var b={closeSelector:".md-close",contentSelector:".md-content",classAddAfterOpen:"md-show",classScrollbarMeasure:"md-scrollbar-measure",classModalOpen:"md-open",data:!1,buttons:!1,beforeOpen:!1,afterOpen:!1,beforeClose:!1,afterClose:!1};a.fn.niftyModal=function(c){var d,e,f,g={},h={},i=a("body"),j={removeModal:function(b){var c=a(b);c.removeClass(g.classAddAfterOpen),c.css({perspective:"1300px"}),i.removeClass(g.classModalOpen),j.resetScrollbar(),c.trigger("hide")},showModal:function(b){var c=a(b),d=a(g.closeSelector,b);return("function"!=typeof g.beforeOpen||g.beforeOpen(h)!==!1)&&(j.checkScrollbar(),j.setScrollbar(),c.addClass(g.classAddAfterOpen),i.addClass(g.classModalOpen),a(c).on("click",function(b){var d=a(g.contentSelector,c),e=a(g.closeSelector,c);if(!a(b.target).closest(d).length&&i.hasClass(g.classModalOpen)){if("function"==typeof g.beforeClose&&g.beforeClose(h,b)===!1)return!1;j.removeModal(c),e.off("click"),"function"==typeof g.afterClose&&g.afterClose(h,b)}}),"function"==typeof g.afterOpen&&g.afterOpen(h),setTimeout(function(){c.css({perspective:"none"})},500),d.on("click",function(c){var e=a(this);if(h.closeEl=d.get(0),"function"==typeof g.beforeClose&&g.beforeClose(h,c)===!1)return!1;if(g.buttons&&a.isArray(g.buttons)){var f=!0;if(a.each(g.buttons,function(a,b){e.hasClass(b.class)&&"function"==typeof b.callback&&(f=b.callback(e.get(0),h,c))}),f===!1&&void 0!==typeof f)return!1}j.removeModal(b),d.off("click"),"function"==typeof g.afterClose&&g.afterClose(h,c),c.stopPropagation()}),void c.trigger("show"))},measureScrollbar:function(){var a=document.createElement("div");a.className=g.classScrollbarMeasure,i.append(a);var b=a.offsetWidth-a.clientWidth;return i[0].removeChild(a),b},checkScrollbar:function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}d=document.body.clientWidth<a,e=j.measureScrollbar()},setScrollbar:function(){var a=parseInt(i.css("padding-right")||0,10);f=document.body.style.paddingRight||"",d&&i.css("padding-right",a+e)},resetScrollbar:function(){i.css("padding-right",f)}},k={init:function(c){return this.each(function(){g=a.extend({},b,c),h.modalEl=this,g.data!==!1&&(h.data=c.data),j.showModal(this)})},toggle:function(c){return this.each(function(){g=a.extend({},b,c);var d=a(this);d.hasClass(g.classAddAfterOpen)?j.removeModal(d):j.showModal(d)})},show:function(c){return g=a.extend({},b,c),this.each(function(){var b=a(this);j.showModal(b)})},hide:function(c){return g=a.extend({},b,c),this.each(function(){j.removeModal(a(this))})},setDefaults:function(c){b=a.extend({},b,c)},getDefaults:function(){return b}};return k[c]?k[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error('Method "'+c+'" does not exist in niftyModal plugin!'):k.init.apply(this,arguments)}}(jQuery),$(".md-trigger").on("click",function(){var a=$(this).data("modal");$("#"+a).niftyModal()});
/*
 * Gritter for jQuery
 * https://github.com/foxythemes/Gritter
 *
 * Copyright (c) 2015 Foxy Themes
 * Copyright (c) 2012 Jordan Boesch
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: July 28, 2015
 * Version: 1.7.5
 */

(function($){
 	
	/**
	* Set it up as an object under the jQuery namespace
	*/
	$.gritter = {};
	
	/**
	* Set up global options that the user can over-ride
	*/
	$.gritter.options = {
		position: '',
		class_name: '', // could be set to 'gritter-light' to use white notifications
		fade_in_speed: 100, // how fast notifications fade in
		fade_out_speed: 1000, // how fast the notices fade out
		time: 6000 // hang on the screen for...
	}
	
	/**
	* Add a gritter notification to the screen
	* @see Gritter#add();
	*/
	$.gritter.add = function(params){

		try {
			return Gritter.add(params || {});
		} catch(e) {
		
			var err = 'Gritter Error: ' + e;
			(typeof(console) != 'undefined' && console.error) ? 
				console.error(err, params) : 
				alert(err);
				
		}
		
	}
	
	/**
	* Remove a gritter notification from the screen
	* @see Gritter#removeSpecific();
	*/
	$.gritter.remove = function(id, params){
		Gritter.removeSpecific(id, params || {});
	}
	
	/**
	* Remove all notifications
	* @see Gritter#stop();
	*/
	$.gritter.removeAll = function(params){
		Gritter.stop(params || {});
	}
	
	/**
	* Big fat Gritter object
	* @constructor (not really since its object literal)
	*/
	var Gritter = {
		
		// Public - options to over-ride with $.gritter.options in "add"
		position: '',
		fade_in_speed: '',
		fade_out_speed: '',
		time: '',
		
		// Private - no touchy the private parts
		_custom_timer: 0,
		_item_count: 0,
		_is_setup: 0,
		_tpl_close: '<a class="gritter-close" href="#" tabindex="1">Close Notification</a>',
		_tpl_title: '<span class="gritter-title">[[title]]</span>',
		_tpl_item: '<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none" role="alert"><div class="gritter-item">[[image]]<div class="gritter-content [[class_name]]">[[close]][[title]]<p>[[text]]</p></div></div></div>',
		_tpl_wrap: '<div id="gritter-notice-wrapper" class="gritter-main-wrapper"></div>',
		
		/**
		* Add a gritter notification to the screen
		* @param {Object} params The object that contains all the options for drawing the notification
		* @return {Integer} The specific numeric id to that gritter notification
		*/
		add: function(params){
			// Handle straight text
			if(typeof(params) == 'string'){
				params = {text:params};
			}

			// We might have some issues if we don't have a title or text!
			if(params.text === null){
				throw 'You must supply "text" parameter.'; 
			}
			
			// Check the options and set them once
			if(!this._is_setup){
				this._runSetup();
			}
			
			// Basics
			var title = params.title, 
				text = params.text,
				image = params.image || '',
				sticky = params.sticky || false,
				item_class = params.class_name || $.gritter.options.class_name,
				position = $.gritter.options.position,
				time_alive = params.time || '';

			this._verifyWrapper();
			
			this._item_count++;
			var number = this._item_count, 
				tmp = this._tpl_item;
			
			// Assign callbacks
			$(['before_open', 'after_open', 'before_close', 'after_close']).each(function(i, val){
				Gritter['_' + val + '_' + number] = ($.isFunction(params[val])) ? params[val] : function(){}
			});

			// Reset
			this._custom_timer = 0;
			
			// A custom fade time set
			if(time_alive){
				this._custom_timer = time_alive;
			}
			
			var image_str = (image != '') ? '<div class="gritter-img-container"><img src="' + image + '" class="gritter-image" /></div>' : '',
				class_name = (image != '') ? 'gritter-with-image' : 'gritter-without-image';
			
			// String replacements on the template
			if(title){
				title = this._str_replace('[[title]]',title,this._tpl_title);
			}else{
				title = '';
			}
			
			tmp = this._str_replace(
				['[[title]]', '[[text]]', '[[close]]', '[[image]]', '[[number]]', '[[class_name]]', '[[item_class]]'],
				[title, text, this._tpl_close, image_str, this._item_count, class_name, item_class], tmp
			);

			// If it's false, don't show another gritter message
			if(this['_before_open_' + number]() === false){
				return false;
			}

			$('#gritter-notice-wrapper').addClass(position).append(tmp);
			
			var item = $('#gritter-item-' + this._item_count);
			
			item.fadeIn(this.fade_in_speed, function(){
				Gritter['_after_open_' + number]($(this));
				item.animate({ right: "350" }, 'medium');
			});
			
			
			if(!sticky){
				this._setFadeTimer(item, number);
			}
			
			// Bind the hover/unhover states
			$(item).bind('mouseenter mouseleave', function(event){
				if(event.type == 'mouseenter'){
					if(!sticky){ 
						Gritter._restoreItemIfFading($(this), number);
					}
				}
				else {
					if(!sticky){
						Gritter._setFadeTimer($(this), number);
					}
				}
				Gritter._hoverState($(this), event.type);
			});
			
			// Clicking (X) makes the perdy thing close
			$(item).find('.gritter-close').click(function(){
				Gritter.removeSpecific(number, {}, null, true);
				return false;
			});
			
			return number;
		
		},
		
		/**
		* If we don't have any more gritter notifications, get rid of the wrapper using this check
		* @private
		* @param {Integer} unique_id The ID of the element that was just deleted, use it for a callback
		* @param {Object} e The jQuery element that we're going to perform the remove() action on
		* @param {Boolean} manual_close Did we close the gritter dialog with the (X) button
		*/
		_countRemoveWrapper: function(unique_id, e, manual_close){
			
			// Remove it then run the callback function
			e.remove();
			this['_after_close_' + unique_id](e, manual_close);
			
			// Check if the wrapper is empty, if it is.. remove the wrapper
			if($('.gritter-item-wrapper').length == 0){
				$('#gritter-notice-wrapper').remove();
			}
		
		},
		
		/**
		* Fade out an element after it's been on the screen for x amount of time
		* @private
		* @param {Object} e The jQuery element to get rid of
		* @param {Integer} unique_id The id of the element to remove
		* @param {Object} params An optional list of params to set fade speeds etc.
		* @param {Boolean} unbind_events Unbind the mouseenter/mouseleave events if they click (X)
		*/
		_fade: function(e, unique_id, params, unbind_events){

			var params = params || {},
				fade = (typeof(params.fade) != 'undefined') ? params.fade : true,
				fade_out_speed = params.speed || this.fade_out_speed,
				manual_close = unbind_events;

			this['_before_close_' + unique_id](e, manual_close);
			
			// If this is true, then we are coming from clicking the (X)
			if(unbind_events){
				e.unbind('mouseenter mouseleave');
			}
			
			// Fade it out or remove it
			if(fade){
			
				e.animate({
					opacity: 0
				}, fade_out_speed, function(){
					e.animate({ height: 0 }, 300, function(){
						Gritter._countRemoveWrapper(unique_id, e, manual_close);
					})
				})
				
			}
			else {
				
				this._countRemoveWrapper(unique_id, e);
				
			}
						
		},
		
		/**
		* Perform actions based on the type of bind (mouseenter, mouseleave) 
		* @private
		* @param {Object} e The jQuery element
		* @param {String} type The type of action we're performing: mouseenter or mouseleave
		*/
		_hoverState: function(e, type){
			
			// Change the border styles and add the (X) close button when you hover
			if(type == 'mouseenter'){
				
				e.addClass('hover');
						
			}
			// Remove the border styles and hide (X) close button when you mouse out
			else {
				
				e.removeClass('hover');
				
			}
			
		},
		
		/**
		* Remove a specific notification based on an ID
		* @param {Integer} unique_id The ID used to delete a specific notification
		* @param {Object} params A set of options passed in to determine how to get rid of it
		* @param {Object} e The jQuery element that we're "fading" then removing
		* @param {Boolean} unbind_events If we clicked on the (X) we set this to true to unbind mouseenter/mouseleave
		*/
		removeSpecific: function(unique_id, params, e, unbind_events){
			
			if(!e){
				var e = $('#gritter-item-' + unique_id);
			}

			// We set the fourth param to let the _fade function know to 
			// unbind the "mouseleave" event.  Once you click (X) there's no going back!
			this._fade(e, unique_id, params || {}, unbind_events);
			
		},
		
		/**
		* If the item is fading out and we hover over it, restore it!
		* @private
		* @param {Object} e The HTML element to remove
		* @param {Integer} unique_id The ID of the element
		*/
		_restoreItemIfFading: function(e, unique_id){
			
			clearTimeout(this['_int_id_' + unique_id]);
			e.stop().css({ opacity: '', height: '' });
			
		},
		
		/**
		* Setup the global options - only once
		* @private
		*/
		_runSetup: function(){
		
			for(opt in $.gritter.options){
				this[opt] = $.gritter.options[opt];
			}
			this._is_setup = 1;
			
		},
		
		/**
		* Set the notification to fade out after a certain amount of time
		* @private
		* @param {Object} item The HTML element we're dealing with
		* @param {Integer} unique_id The ID of the element
		*/
		_setFadeTimer: function(e, unique_id){
			
			var timer_str = (this._custom_timer) ? this._custom_timer : this.time;
			this['_int_id_' + unique_id] = setTimeout(function(){ 
				Gritter._fade(e, unique_id);
			}, timer_str);
		
		},
		
		/**
		* Bring everything to a halt
		* @param {Object} params A list of callback functions to pass when all notifications are removed
		*/  
		stop: function(params){
			
			// callbacks (if passed)
			var before_close = ($.isFunction(params.before_close)) ? params.before_close : function(){};
			var after_close = ($.isFunction(params.after_close)) ? params.after_close : function(){};
			
			var wrap = $('#gritter-notice-wrapper');
			before_close(wrap);
			wrap.fadeOut(function(){
				$(this).remove();
				after_close();
			});
		
		},
		
		/**
		* An extremely handy PHP function ported to JS, works well for templating
		* @private
		* @param {String/Array} search A list of things to search for
		* @param {String/Array} replace A list of things to replace the searches with
		* @return {String} sa The output
		*/  
		_str_replace: function(search, replace, subject, count){
		
			var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
				f = [].concat(search),
				r = [].concat(replace),
				s = subject,
				ra = r instanceof Array, sa = s instanceof Array;
			s = [].concat(s);
			
			if(count){
				this.window[count] = 0;
			}
		
			for(i = 0, sl = s.length; i < sl; i++){
				
				if(s[i] === ''){
					continue;
				}
				
				for (j = 0, fl = f.length; j < fl; j++){
					
					temp = s[i] + '';
					repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
					s[i] = (temp).split(f[j]).join(repl);
					
					if(count && s[i] !== temp){
						this.window[count] += (temp.length-s[i].length) / f[j].length;
					}
					
				}
			}
			
			return sa ? s : s[0];
			
		},
		
		/**
		* A check to make sure we have something to wrap our notices with
		* @private
		*/  
		_verifyWrapper: function(){
		  
			if($('#gritter-notice-wrapper').length == 0){
				$('body').append(this._tpl_wrap);
			}
		
		}
		
	}
	
})(jQuery);

/*!
 * amaretti v1.2.0 (http://foxythemes.net/themes/amaretti)
 * Copyright 2014-2016 Foxy Themes all rights reserved 
 */
var App = (function () {
  'use strict';

  var totalPriceline;
  var unitPriceline;
  var qty;
  var grandTotalHt;


  function calculateTotalPriceline(e) {
    //e.preventDefault();
    var thisinput = e.target.getAttribute('class');
    var inputlinenumber = thisinput.split(' ')[1].split('-')[1];
    // console.log(inputlinenumber); 

    // renvoie l1 pour la ligne1, l2 pour la ligne2, etc...
   
    totalPriceline = document.querySelector('.totalrow-'+inputlinenumber);
    //console.log(totalPriceline);
    grandTotalHt = document.getElementById('grandtotalht');
    //console.log(grandTotalHt);

    // Si on est sur l'input "quantité"
    if(e.target.getAttribute('class').split(' ')[0] =='qty') {
      if(isNaN(e.target.value)) {
        e.target.value='';
      }
      else {

        if(document.querySelector(".currency-"+inputlinenumber).value.trim() != '') {
          // var inputcurrvalue = e.target.value * (document.querySelector(".currency-"+inputlinenumber).value)
          console.log(document.querySelector(".currency-"+inputlinenumber));
          totalPriceline.innerHTML = (e.target.value * document.querySelector(".currency-"+inputlinenumber).value).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
        }
      }
    }

    // Si on est sur l'input "prix unitaire"
    else if(e.target.getAttribute('class').split(' ')[0] == 'currency') {
      if(isNaN(e.target.value)) {
        e.target.value='';
      }
      else {
        if(document.querySelector(".qty-"+inputlinenumber).value.trim() != '') {
          totalPriceline.innerHTML = (e.target.value * document.querySelector(".qty-"+inputlinenumber).value).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
        }
      }     
    }

    else {
      // 
    }

    var totalLines = document.getElementsByClassName('totalrow');
    console.log(totalLines);
    var grandTotalPrice=0;

    for(var t=0; t<totalLines.length; t++) {
      console.log(totalLines[t].innerHTML);
        if (!isNaN(totalLines[t].innerHTML.replace(/ /g,''))) 
          grandTotalPrice += parseFloat(totalLines[t].innerHTML.replace(/ /g,'')); 
    }
    console.log(grandTotalPrice);
    grandTotalHt.innerHTML = grandTotalPrice.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
  }




function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

function injectTemplate(template, targetParent, dict) {
        var count = document.getElementsByClassName('mission-line').length;

        var t = document.querySelector('#' + template);
        var clone = t.cloneNode(true)
        for (var key in dict) {
            clone.innerHTML = clone.innerHTML.replace(key, dict[key])
        }
        var fragment = document.importNode(clone.content, true)
        var canvas = document.querySelector('#' + targetParent);

        fragment.querySelector('input.qty').classList.add('qty-l'+(count+1));
        fragment.querySelector('input.currency').classList.add('currency-l'+(count+1));
        fragment.querySelector('.totalrow').classList.add('totalrow-l'+(count+1));
        canvas.appendChild(fragment);

        for(var i=0; i<document.getElementsByClassName('qty').length; i++) {
          document.getElementsByClassName('qty')[i].removeEventListener("keyup", calculateTotalPriceline);
          document.getElementsByClassName('qty')[i].addEventListener("keyup", calculateTotalPriceline);
        }
        for(var i=0; i<document.getElementsByClassName('currency').length; i++) {
          document.getElementsByClassName('currency')[i].removeEventListener("keyup", calculateTotalPriceline);
          document.getElementsByClassName('currency')[i].addEventListener("keyup", calculateTotalPriceline);
        }
        //alert(canvas.innerHTML)
}

function injectNewLine() {
  injectTemplate("template1", "linesInTbody", {var1:"1+1", var2:2, "#ref":"abc.net"});
}

document.addEventListener("DOMContentLoaded", function(event) {
  var inputQty = document.querySelector('input.qty');
  var inputUnitPriceline = document.querySelector('input.currency');

  if(inputQty!=null) inputQty.addEventListener("change", calculateTotalPriceline);
  if(inputUnitPriceline!=null) inputUnitPriceline.addEventListener("change", calculateTotalPriceline);
  if(inputQty!=null) inputQty.addEventListener("keyup", calculateTotalPriceline);
  if(inputUnitPriceline!=null) inputUnitPriceline.addEventListener("keyup", calculateTotalPriceline);
  if(document.querySelector('textarea')!=null) document.querySelector('textarea').addEventListener('keydown', autosize);
  if(document.querySelector('#addable-row')!=null) document.querySelector('#addable-row').addEventListener('click', injectNewLine);
});


  //Basic Config
  var config = {
    assetsPath: 'assets',
    imgPath: 'img',
    jsPath: 'js',
    libsPath: 'lib',
    leftSidebarSlideSpeed: 200,
    enableSwipe: true,
    swipeTreshold: 100,
    scrollTop: true,
    openLeftSidebarClass: 'open-left-sidebar',
    openRightSidebarClass: 'open-right-sidebar',
    removeLeftSidebarClass: 'am-nosidebar-left',
    openLeftSidebarOnClick: false,
    openLeftSidebarOnClickClass: 'am-left-sidebar--click',
    transitionClass: 'am-animate',
    openSidebarDelay: 400,
    syncSubMenuOnHover: false
  };

  var colors = {};
  var body, wrapper, leftSidebar, rightSidebar;
  var openSidebar = false;

  //Get the template css colors into js vars
  function getColor( c ){
    var tmp = $("<div>", { class: c }).appendTo("body");
    var color = tmp.css("background-color");
    tmp.remove();

    return color;
  }

  //Core private functions
  function leftSidebarInit(){

    var firstAnchor = $(".sidebar-elements > li > a", leftSidebar);
    var openLeftSidebarOnClick = leftSidebar.hasClass( config.openLeftSidebarOnClickClass ) || config.openLeftSidebarOnClick ? true : false;

    function syncSubMenu( item ){
      var elements = $(".sidebar-elements > li", leftSidebar);

      if( typeof item !== "undefined" ) {
        elements = item;
      }

      $.each( elements, function(i, v){

        var title = $(this).find("> a span").html();
        var ul = $(this).find("> ul");
        var subEls = $("> li", ul);
        var title = $('<li class="title">' + title + '</li>');
        var subContainer = $('<li class="nav-items"><div class="am-scroller nano"><div class="content nano-content"><ul></ul></div></div></li>');

        if( !ul.find("> li.title").length > 0 ){
         ul.prepend( title );
          subEls.appendTo( subContainer.find(".content ul") );
          subContainer.appendTo( ul );
        }
      });
    }

    /*Create sub menu elements*/
      syncSubMenu();

    function oSidebar(){
      body.addClass( config.openLeftSidebarClass + " " + config.transitionClass );
      openSidebar = true;
    }

    function cSidebar(){
      body.removeClass( config.openLeftSidebarClass ).addClass( config.transitionClass );
      sidebarDelay();
    }

    function openSubMenu( el, event, click ){
      var li = $(el).parent();
      var amScroller = li.find(".am-scroller");
      var subMenu = li.find("> ul");
      var isOpen = li.hasClass('open');

      //Show sub menu element
      if( !$.isXs() ){
        $("ul.visible", leftSidebar).removeClass("visible").parent().removeClass('open');

        //Add classes to create a delay on sub menu close action after mouse leave
        if( !click || ( click && !isOpen ) ){
          li.addClass('open');
          subMenu.addClass("visible");
        }
        subMenu.removeClass("hide");
      }

      //Renew nanoscroller
      amScroller.nanoScroller({ destroy: true });
      amScroller.nanoScroller();

      //Check if event is click or hover
      if( click ){
        //Stop click event when li has sub-menu
        if( li.hasClass('parent') ){
          event.preventDefault();
        }
      }else{
        //Create sub-menu elements
        if( config.syncSubMenuOnHover ){
          syncSubMenu( li );
        }
      }
    }

    /*Open-Sidebar when click on topbar button*/
      $('.am-toggle-left-sidebar').on("click", function(e){
        if( openSidebar && body.hasClass( config.openLeftSidebarClass ) ){
          cSidebar();
        }else if( !openSidebar ){
          oSidebar();
        }
        e.stopPropagation();
        e.preventDefault();
      });

    /*Close sidebar on click outside*/
      $(document).on("touchstart mousedown",function(e){
        if ( !$(e.target).closest(leftSidebar).length && body.hasClass( config.openLeftSidebarClass ) ) {
          cSidebar();
        }else if( !$(e.target).closest(leftSidebar).length && !$.isXs() ){
          $("ul.visible", leftSidebar).removeClass("visible").parent().removeClass('open');
        }
      });

    /*Open sub-menu functionality*/
      if( openLeftSidebarOnClick ){

        /*Open sub-menu on click*/
        firstAnchor.on('click',function( e ){
          if( !$.isXs() ){
            openSubMenu(this, e, true); 
          }
        });

      }else{

        /*Open sub-menu on hover*/
        firstAnchor.on('mouseover',function( e ){
          openSubMenu(this, e, false); 
        });

        /*Open sub-menu on click (fix for touch devices)*/
        firstAnchor.on('touchstart',function( e ){
          if( !$.isXs() ){
            openSubMenu(this, e, true);
          }
        });

        /*Sub-menu delay on mouse leave*/
        firstAnchor.on('mouseleave',function(){
          var _self = $(this);
          var _li = _self.parent();
          var subMenu = _li.find("> ul");
          if( !$.isXs() ){
            //If mouse is over sub menu attach an additional mouseleave event to submenu
            if ( subMenu.length > 0 ){
              setTimeout(function(){
                if( subMenu.is(':hover') ){
                  subMenu.on('mouseleave',function(){
                    setTimeout(function(){
                      if( !_self.is(':hover') ){
                        subMenu.removeClass('visible');
                        _li.removeClass('open');
                      }
                    }, 300);
                  });
                }else{
                  subMenu.removeClass('visible');
                  _li.removeClass('open');
                }
              }, 300);
            }else{
              _li.removeClass('open');
            }
          }
        });
      }

    /*Open sub-menu on small devices*/
      $(".sidebar-elements li a", leftSidebar).on("click",function( e ){
        if( $.isXs() ){
          var $el = $(this), $open, $speed = config.leftSidebarSlideSpeed;
          var $li = $el.parent();
          var $subMenu = $el.next();

          $open = $li.siblings(".open");

          if( $open ){
            $open.find('> ul:visible').slideUp({ duration: $speed, complete: function(){
              $open.toggleClass('open');
              $(this).removeAttr('style').removeClass('visible');
            }});
          }

          if( $li.hasClass('open') ){
            $subMenu.slideUp({ duration: $speed, complete: function(){
              $li.toggleClass('open');
              $(this).removeAttr('style').removeClass('visible');
            }});
          }else{
            $subMenu.slideDown({ duration: $speed, complete: function(){
              $li.toggleClass('open');
              $(this).removeAttr('style').addClass('visible');
            }});
          }

          if( $el.next().is('ul') ){
            e.preventDefault();
          }
        }else{
          //Close sub-menu on anchor click
          if( !openLeftSidebarOnClick ){
            var subMenu = $(".sidebar-elements > li > ul:visible", leftSidebar);
            subMenu.addClass('hide');
          }
        }
      });

    /*Calculate sidebar tree active & open classes*/
      $("li.active", leftSidebar).parents(".parent").addClass("active");

    /*Nanoscroller when left sidebar is fixed*/
      if( wrapper.hasClass("am-fixed-sidebar") ){
        var lsc = $(".am-left-sidebar > .content");
        lsc.wrap('<div class="am-scroller nano"></div>');
        lsc.addClass("nano-content");
        lsc.parent().nanoScroller();
      }

    /*On window resize check for small resolution classes to remove them*/
      $(window).resize(function () {
        waitForFinalEvent(function(){
          if( !$.isXs() ){
            var scroller = $(".am-scroller");
            $('.nano-content', scroller).css({'margin-right':0});
            scroller.nanoScroller({ destroy: true });
            scroller.nanoScroller();
          }
        }, 500, "am_check_phone_classes");
      });
  }

  function rightSidebarInit(){

    function oSidebar(){
      body.addClass( config.openRightSidebarClass  + " " + config.transitionClass );
      openSidebar = true;
    }

    function cSidebar(){
      body.removeClass( config.openRightSidebarClass ).addClass( config.transitionClass );
      sidebarDelay();
    }

    if( rightSidebar.length > 0 ){
      /*Open-Sidebar when click on topbar button*/
      $('.am-toggle-right-sidebar').on("click", function(e){
        if( openSidebar && body.hasClass( config.openRightSidebarClass ) ){
          cSidebar();
        }else if( !openSidebar ){
          oSidebar();
        }
        
        e.stopPropagation();
        e.preventDefault();
      });

      /*Close sidebar on click outside*/
      $( document ).on("mousedown touchstart",function( e ){
        if ( !$( e.target ).closest( rightSidebar ).length && body.hasClass( config.openRightSidebarClass ) ) {
          cSidebar();
        }
      });
    }
  }

  function sidebarDelay(){
    openSidebar = true;
    setTimeout(function(){
      openSidebar = false;
    }, config.openSidebarDelay );
  }

  function sidebarSwipe(){
    /*Open sidedar on swipe*/
    var cancelEvent = false;

    wrapper.swipe( {
      allowPageScroll: "vertical",
      preventDefaultEvents: false,
      fallbackToMouseEvents: false,
      swipeRight: function(e) {
        if( !openSidebar && !wrapper.hasClass( config.removeLeftSidebarClass ) ){
          body.addClass( config.openLeftSidebarClass + " " + config.transitionClass );
          openSidebar = true;
        }
      },
      swipeLeft: function(e){
        if( !openSidebar && rightSidebar.length > 0 ){
          body.addClass( config.openRightSidebarClass + " " + config.transitionClass );
          openSidebar = true;
        }
      },
      swipeStatus: function(e, p){
        switch( p ){
          case 'start':
            if( openSidebar ){
              cancelEvent = true;
            }
          break;
          case 'end':
            if( cancelEvent ){
              cancelEvent = false;
              return false;
            }
          break;
          case 'cancel':
            cancelEvent = false;
          break;
        }
      },
      threshold: config.swipeTreshold
    });
  }

  function chatWidget(){
    var chat = $(".am-right-sidebar .tab-pane.chat");
    var contactsEl = $(".chat-contacts", chat);
    var conversationEl = $(".chat-window", chat);
    var messagesContainer = $(".chat-messages", conversationEl);
    var messagesList = $(".content > ul", messagesContainer);
    var messagesScrollContent = $(".nano-content", messagesContainer);
    var chatInputContainer = $(".chat-input", conversationEl);
    var chatInput = $("input", chatInputContainer);
    var chatInputSendButton = $(".send-msg", chatInputContainer);

    function openChatWindow(){
      if( !chat.hasClass("chat-opened") ){
        chat.addClass("chat-opened");
        $(".am-scroller", messagesContainer).nanoScroller();
      }
    }

    function closeChatWindow(){
      if( chat.hasClass("chat-opened") ){
        chat.removeClass("chat-opened");
      }
    }

    /*Open Conversation Window when click on chat user*/
    $(".user a", contactsEl).on('click',function( e ){
      $(".am-scroller", contactsEl).nanoScroller({ stop: true });
      openChatWindow();
      e.preventDefault();
    });

    /*Close chat conv window*/
    $(".title .return", conversationEl).on('click',function( e ){
      closeChatWindow();
      scrollerInit();
    });

    /*Send message*/
    function sendMsg(msg, self){
      var $message = $('<li class="' + ((self)?'self':'friend') + '"></li>');

      if( msg != '' ){
        $('<div class="msg">' + msg + '</div>').appendTo($message);
        $message.appendTo(messagesList);

        messagesScrollContent.stop().animate({
          'scrollTop': messagesScrollContent.prop("scrollHeight")
        }, 900, 'swing');

        scrollerInit();
      }
    }

    /*Send msg when click on 'send' button or press 'Enter'*/
      chatInput.keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        var msg = $(this).val();

        if(keycode == '13'){
          sendMsg(msg, true);
          $(this).val("");
        }
        event.stopPropagation();
      });

      chatInputSendButton.on('click',function(){
        var msg = chatInput.val();
        sendMsg(msg, true);
        chatInput.val("");
      });
  }

  function scrollerInit(){
    $(".am-scroller").nanoScroller();
  }

  function scrollTopButton(){
    var offset = 220;
    var duration = 500;
    var button = $('<div class="am-scroll-top"></div>');
    button.appendTo("body");
    
    $(window).on('scroll',function() {
      if ( $(this).scrollTop() > offset ) {
        button.fadeIn(duration);
      } else {
        button.fadeOut(duration);
      }
    });
  
    button.on('touchstart mouseup',function( e ) {
      $( 'html, body' ).animate({ scrollTop: 0 }, duration);
      e.preventDefault();
    });
  }

  //Wait for final event on window resize
  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "x1x2x3x4";
      }
      if (timers[uniqueId]) {
        clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();

  return {
    //General data
    conf: config,
    color: colors,

    //Init function
    init: function (options) {
      
      // Get the main elements when document is ready
      wrapper = $(".am-wrapper");
      leftSidebar = $(".am-left-sidebar");
      rightSidebar = $(".am-right-sidebar");
      body = $("body");

      //Extends basic config with options
        $.extend( config, options );

      /*Left Sidebar*/
        leftSidebarInit();

      /*FastClick on mobile*/
        FastClick.attach(document.body);
      
      /*Right Sidebar*/
        rightSidebarInit();
        chatWidget();

      /*Sidebars Swipe*/
        if( config.enableSwipe ){
          sidebarSwipe();
        }

      /*Body transition effect*/
        leftSidebar.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
          body.removeClass( config.transitionClass );
        });

      /*Scroll Top button*/
        if( config.scrollTop ){
          scrollTopButton();
        }

      /*Get colors*/
        colors.primary = getColor('clr-primary');
        colors.success = getColor('clr-success');
        colors.info    = getColor('clr-info');
        colors.warning = getColor('clr-warning');
        colors.danger  = getColor('clr-danger');
        colors.alt1    = getColor('clr-alt1');
        colors.alt2    = getColor('clr-alt2');
        colors.alt3    = getColor('clr-alt3');
        colors.alt4    = getColor('clr-alt4');

      //Prevent Connections Dropdown closes on click
        $(".am-connections").on("click",function( e ){
          e.stopPropagation();
        });

      //Nanoscroller init function
        scrollerInit();

      /*Bind plugins on hidden elements*/
      /*Dropdown shown event*/
        $('.dropdown').on('shown.bs.dropdown', function () {
          $(".am-scroller").nanoScroller();
        });
        
      /*Tabs refresh hidden elements*/
        $('.nav-tabs').on('shown.bs.tab', function (e) {
          $(".am-scroller").nanoScroller();
        });


      /*Tooltips*/
        $('[data-toggle="tooltip"]').tooltip();
      
      /*Popover*/
        $('[data-toggle="popover"]').popover();

      /*Bootstrap modal scroll top fix*/
        $('.modal').on('show.bs.modal', function(){
          $("html").addClass('am-modal-open');
        });

        $('.modal').on('hidden.bs.modal', function(){
          $("html").removeClass('am-modal-open');
        });
    },

    //Methods
    closeSubMenu: function(){
      var subMenu = $(".sidebar-elements > li > ul:visible", leftSidebar);
      subMenu.addClass('hide');
      setTimeout(function(){
        subMenu.removeClass('hide');
      }, 50);
    }
  };
 
})();
//FastClick
function FastClick(a,b){"use strict";function c(a,b){return function(){return a.apply(b,arguments)}}var d;if(b=b||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=b.touchBoundary||10,this.layer=a,this.tapDelay=b.tapDelay||200,!FastClick.notNeeded(a)){for(var e=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],f=this,g=0,h=e.length;g<h;g++)f[e[g]]=c(f[e[g]],f);deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(d=a.onclick,a.addEventListener("click",function(a){d(a)},!1),a.onclick=null)}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d,e,f;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),f=b.changedTouches[0],e=document.createEvent("MouseEvents"),e.initMouseEvent("mousedown",!0,!0,window,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),e.forwardedTouchEvent=!0,a.dispatchEvent(e),d=document.createEvent("MouseEvents"),d.initMouseEvent("mouseup",!0,!0,window,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),d.forwardedTouchEvent=!0,a.dispatchEvent(d),c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,f.screenX,f.screenY,f.clientX,f.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!deviceIsIOS4){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c},FastClick.prototype.onTouchMove=function(a){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),deviceIsIOS&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||(e=g.fastClickScrollParent,!e||e.fastClickLastScrollTop===e.scrollTop))||(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return!this.targetElement||(!!a.forwardedTouchEvent||(!a.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1))))},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail||(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c,d;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(b.content.indexOf("user-scalable=no")!==-1)return!0;if(c>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(d=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),d[1]>=10&&d[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(b.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction},FastClick.attach=function(a,b){"use strict";return new FastClick(a,b)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
// TinyColor v1.2.1
// https://github.com/bgrins/TinyColor
// 2015-08-13, Brian Grinstead, MIT License
!function(){function tinycolor(color,opts){if(color=color?color:"",opts=opts||{},color instanceof tinycolor)return color;if(!(this instanceof tinycolor))return new tinycolor(color,opts);var rgb=inputToRGB(color);this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format,this._gradientType=opts.gradientType,this._r<1&&(this._r=mathRound(this._r)),this._g<1&&(this._g=mathRound(this._g)),this._b<1&&(this._b=mathRound(this._b)),this._ok=rgb.ok,this._tc_id=tinyCounter++}function inputToRGB(color){var rgb={r:0,g:0,b:0},a=1,ok=!1,format=!1;return"string"==typeof color&&(color=stringInputToObject(color)),"object"==typeof color&&(color.hasOwnProperty("r")&&color.hasOwnProperty("g")&&color.hasOwnProperty("b")?(rgb=rgbToRgb(color.r,color.g,color.b),ok=!0,format="%"===String(color.r).substr(-1)?"prgb":"rgb"):color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("v")?(color.s=convertToPercentage(color.s),color.v=convertToPercentage(color.v),rgb=hsvToRgb(color.h,color.s,color.v),ok=!0,format="hsv"):color.hasOwnProperty("h")&&color.hasOwnProperty("s")&&color.hasOwnProperty("l")&&(color.s=convertToPercentage(color.s),color.l=convertToPercentage(color.l),rgb=hslToRgb(color.h,color.s,color.l),ok=!0,format="hsl"),color.hasOwnProperty("a")&&(a=color.a)),a=boundAlpha(a),{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a}}function rgbToRgb(r,g,b){return{r:255*bound01(r,255),g:255*bound01(g,255),b:255*bound01(b,255)}}function rgbToHsl(r,g,b){r=bound01(r,255),g=bound01(g,255),b=bound01(b,255);var h,s,max=mathMax(r,g,b),min=mathMin(r,g,b),l=(max+min)/2;if(max==min)h=s=0;else{var d=max-min;switch(s=l>.5?d/(2-max-min):d/(max+min),max){case r:h=(g-b)/d+(b>g?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4}h/=6}return{h:h,s:s,l:l}}function hslToRgb(h,s,l){function hue2rgb(p,q,t){return 0>t&&(t+=1),t>1&&(t-=1),1/6>t?p+6*(q-p)*t:.5>t?q:2/3>t?p+6*(q-p)*(2/3-t):p}var r,g,b;if(h=bound01(h,360),s=bound01(s,100),l=bound01(l,100),0===s)r=g=b=l;else{var q=.5>l?l*(1+s):l+s-l*s,p=2*l-q;r=hue2rgb(p,q,h+1/3),g=hue2rgb(p,q,h),b=hue2rgb(p,q,h-1/3)}return{r:255*r,g:255*g,b:255*b}}function rgbToHsv(r,g,b){r=bound01(r,255),g=bound01(g,255),b=bound01(b,255);var h,s,max=mathMax(r,g,b),min=mathMin(r,g,b),v=max,d=max-min;if(s=0===max?0:d/max,max==min)h=0;else{switch(max){case r:h=(g-b)/d+(b>g?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4}h/=6}return{h:h,s:s,v:v}}function hsvToRgb(h,s,v){h=6*bound01(h,360),s=bound01(s,100),v=bound01(v,100);var i=math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod];return{r:255*r,g:255*g,b:255*b}}function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)?hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0):hex.join("")}function rgbaToHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return hex.join("")}function desaturate(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.s-=amount/100,hsl.s=clamp01(hsl.s),tinycolor(hsl)}function saturate(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.s+=amount/100,hsl.s=clamp01(hsl.s),tinycolor(hsl)}function greyscale(color){return tinycolor(color).desaturate(100)}function lighten(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.l+=amount/100,hsl.l=clamp01(hsl.l),tinycolor(hsl)}function brighten(color,amount){amount=0===amount?0:amount||10;var rgb=tinycolor(color).toRgb();return rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255*-(amount/100)))),rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255*-(amount/100)))),rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255*-(amount/100)))),tinycolor(rgb)}function darken(color,amount){amount=0===amount?0:amount||10;var hsl=tinycolor(color).toHsl();return hsl.l-=amount/100,hsl.l=clamp01(hsl.l),tinycolor(hsl)}function spin(color,amount){var hsl=tinycolor(color).toHsl(),hue=(mathRound(hsl.h)+amount)%360;return hsl.h=0>hue?360+hue:hue,tinycolor(hsl)}function complement(color){var hsl=tinycolor(color).toHsl();return hsl.h=(hsl.h+180)%360,tinycolor(hsl)}function triad(color){var hsl=tinycolor(color).toHsl(),h=hsl.h;return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})]}function tetrad(color){var hsl=tinycolor(color).toHsl(),h=hsl.h;return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})]}function splitcomplement(color){var hsl=tinycolor(color).toHsl(),h=hsl.h;return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})]}function analogous(color,results,slices){results=results||6,slices=slices||30;var hsl=tinycolor(color).toHsl(),part=360/slices,ret=[tinycolor(color)];for(hsl.h=(hsl.h-(part*results>>1)+720)%360;--results;)hsl.h=(hsl.h+part)%360,ret.push(tinycolor(hsl));return ret}function monochromatic(color,results){results=results||6;for(var hsv=tinycolor(color).toHsv(),h=hsv.h,s=hsv.s,v=hsv.v,ret=[],modification=1/results;results--;)ret.push(tinycolor({h:h,s:s,v:v})),v=(v+modification)%1;return ret}function flip(o){var flipped={};for(var i in o)o.hasOwnProperty(i)&&(flipped[o[i]]=i);return flipped}function boundAlpha(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function bound01(n,max){isOnePointZero(n)&&(n="100%");var processPercent=isPercentage(n);return n=mathMin(max,mathMax(0,parseFloat(n))),processPercent&&(n=parseInt(n*max,10)/100),math.abs(n-max)<1e-6?1:n%max/parseFloat(max)}function clamp01(val){return mathMin(1,mathMax(0,val))}function parseIntFromHex(val){return parseInt(val,16)}function isOnePointZero(n){return"string"==typeof n&&-1!=n.indexOf(".")&&1===parseFloat(n)}function isPercentage(n){return"string"==typeof n&&-1!=n.indexOf("%")}function pad2(c){return 1==c.length?"0"+c:""+c}function convertToPercentage(n){return 1>=n&&(n=100*n+"%"),n}function convertDecimalToHex(d){return Math.round(255*parseFloat(d)).toString(16)}function convertHexToDecimal(h){return parseIntFromHex(h)/255}function stringInputToObject(color){color=color.replace(trimLeft,"").replace(trimRight,"").toLowerCase();var named=!1;if(names[color])color=names[color],named=!0;else if("transparent"==color)return{r:0,g:0,b:0,a:0,format:"name"};var match;return(match=matchers.rgb.exec(color))?{r:match[1],g:match[2],b:match[3]}:(match=matchers.rgba.exec(color))?{r:match[1],g:match[2],b:match[3],a:match[4]}:(match=matchers.hsl.exec(color))?{h:match[1],s:match[2],l:match[3]}:(match=matchers.hsla.exec(color))?{h:match[1],s:match[2],l:match[3],a:match[4]}:(match=matchers.hsv.exec(color))?{h:match[1],s:match[2],v:match[3]}:(match=matchers.hsva.exec(color))?{h:match[1],s:match[2],v:match[3],a:match[4]}:(match=matchers.hex8.exec(color))?{a:convertHexToDecimal(match[1]),r:parseIntFromHex(match[2]),g:parseIntFromHex(match[3]),b:parseIntFromHex(match[4]),format:named?"name":"hex8"}:(match=matchers.hex6.exec(color))?{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?"name":"hex"}:(match=matchers.hex3.exec(color))?{r:parseIntFromHex(match[1]+""+match[1]),g:parseIntFromHex(match[2]+""+match[2]),b:parseIntFromHex(match[3]+""+match[3]),format:named?"name":"hex"}:!1}function validateWCAG2Parms(parms){var level,size;return parms=parms||{level:"AA",size:"small"},level=(parms.level||"AA").toUpperCase(),size=(parms.size||"small").toLowerCase(),"AA"!==level&&"AAA"!==level&&(level="AA"),"small"!==size&&"large"!==size&&(size="small"),{level:level,size:size}}var trimLeft=/^[\s,#]+/,trimRight=/\s+$/,tinyCounter=0,math=Math,mathRound=math.round,mathMin=math.min,mathMax=math.max,mathRandom=math.random;tinycolor.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var rgb=this.toRgb();return(299*rgb.r+587*rgb.g+114*rgb.b)/1e3},getLuminance:function(){var RsRGB,GsRGB,BsRGB,R,G,B,rgb=this.toRgb();return RsRGB=rgb.r/255,GsRGB=rgb.g/255,BsRGB=rgb.b/255,R=.03928>=RsRGB?RsRGB/12.92:Math.pow((RsRGB+.055)/1.055,2.4),G=.03928>=GsRGB?GsRGB/12.92:Math.pow((GsRGB+.055)/1.055,2.4),B=.03928>=BsRGB?BsRGB/12.92:Math.pow((BsRGB+.055)/1.055,2.4),.2126*R+.7152*G+.0722*B},setAlpha:function(value){return this._a=boundAlpha(value),this._roundA=mathRound(100*this._a)/100,this},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b);return{h:360*hsv.h,s:hsv.s,v:hsv.v,a:this._a}},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b),h=mathRound(360*hsv.h),s=mathRound(100*hsv.s),v=mathRound(100*hsv.v);return 1==this._a?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this._roundA+")"},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b);return{h:360*hsl.h,s:hsl.s,l:hsl.l,a:this._a}},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b),h=mathRound(360*hsl.h),s=mathRound(100*hsl.s),l=mathRound(100*hsl.l);return 1==this._a?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this._roundA+")"},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char)},toHexString:function(allow3Char){return"#"+this.toHex(allow3Char)},toHex8:function(){return rgbaToHex(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+")":"rgba("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:mathRound(100*bound01(this._r,255))+"%",g:mathRound(100*bound01(this._g,255))+"%",b:mathRound(100*bound01(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+mathRound(100*bound01(this._r,255))+"%, "+mathRound(100*bound01(this._g,255))+"%, "+mathRound(100*bound01(this._b,255))+"%)":"rgba("+mathRound(100*bound01(this._r,255))+"%, "+mathRound(100*bound01(this._g,255))+"%, "+mathRound(100*bound01(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:hexNames[rgbToHex(this._r,this._g,this._b,!0)]||!1},toFilter:function(secondColor){var hex8String="#"+rgbaToHex(this._r,this._g,this._b,this._a),secondHex8String=hex8String,gradientType=this._gradientType?"GradientType = 1, ":"";if(secondColor){var s=tinycolor(secondColor);secondHex8String=s.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")"},toString:function(format){var formatSet=!!format;format=format||this._format;var formattedString=!1,hasAlpha=this._a<1&&this._a>=0,needsAlphaFormat=!formatSet&&hasAlpha&&("hex"===format||"hex6"===format||"hex3"===format||"name"===format);return needsAlphaFormat?"name"===format&&0===this._a?this.toName():this.toRgbString():("rgb"===format&&(formattedString=this.toRgbString()),"prgb"===format&&(formattedString=this.toPercentageRgbString()),("hex"===format||"hex6"===format)&&(formattedString=this.toHexString()),"hex3"===format&&(formattedString=this.toHexString(!0)),"hex8"===format&&(formattedString=this.toHex8String()),"name"===format&&(formattedString=this.toName()),"hsl"===format&&(formattedString=this.toHslString()),"hsv"===format&&(formattedString=this.toHsvString()),formattedString||this.toHexString())},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)));return this._r=color._r,this._g=color._g,this._b=color._b,this.setAlpha(color._a),this},lighten:function(){return this._applyModification(lighten,arguments)},brighten:function(){return this._applyModification(brighten,arguments)},darken:function(){return this._applyModification(darken,arguments)},desaturate:function(){return this._applyModification(desaturate,arguments)},saturate:function(){return this._applyModification(saturate,arguments)},greyscale:function(){return this._applyModification(greyscale,arguments)},spin:function(){return this._applyModification(spin,arguments)},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)))},analogous:function(){return this._applyCombination(analogous,arguments)},complement:function(){return this._applyCombination(complement,arguments)},monochromatic:function(){return this._applyCombination(monochromatic,arguments)},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments)},triad:function(){return this._applyCombination(triad,arguments)},tetrad:function(){return this._applyCombination(tetrad,arguments)}},tinycolor.fromRatio=function(color,opts){if("object"==typeof color){var newColor={};for(var i in color)color.hasOwnProperty(i)&&(newColor[i]="a"===i?color[i]:convertToPercentage(color[i]));color=newColor}return tinycolor(color,opts)},tinycolor.equals=function(color1,color2){return color1&&color2?tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString():!1},tinycolor.random=function(){return tinycolor.fromRatio({r:mathRandom(),g:mathRandom(),b:mathRandom()})},tinycolor.mix=function(color1,color2,amount){amount=0===amount?0:amount||50;var w1,rgb1=tinycolor(color1).toRgb(),rgb2=tinycolor(color2).toRgb(),p=amount/100,w=2*p-1,a=rgb2.a-rgb1.a;w1=-1==w*a?w:(w+a)/(1+w*a),w1=(w1+1)/2;var w2=1-w1,rgba={r:rgb2.r*w1+rgb1.r*w2,g:rgb2.g*w1+rgb1.g*w2,b:rgb2.b*w1+rgb1.b*w2,a:rgb2.a*p+rgb1.a*(1-p)};return tinycolor(rgba)},tinycolor.readability=function(color1,color2){var c1=tinycolor(color1),c2=tinycolor(color2);return(Math.max(c1.getLuminance(),c2.getLuminance())+.05)/(Math.min(c1.getLuminance(),c2.getLuminance())+.05)},tinycolor.isReadable=function(color1,color2,wcag2){var wcag2Parms,out,readability=tinycolor.readability(color1,color2);switch(out=!1,wcag2Parms=validateWCAG2Parms(wcag2),wcag2Parms.level+wcag2Parms.size){case"AAsmall":case"AAAlarge":out=readability>=4.5;break;case"AAlarge":out=readability>=3;break;case"AAAsmall":out=readability>=7}return out},tinycolor.mostReadable=function(baseColor,colorList,args){var readability,includeFallbackColors,level,size,bestColor=null,bestScore=0;args=args||{},includeFallbackColors=args.includeFallbackColors,level=args.level,size=args.size;for(var i=0;i<colorList.length;i++)readability=tinycolor.readability(baseColor,colorList[i]),readability>bestScore&&(bestScore=readability,bestColor=tinycolor(colorList[i]));return tinycolor.isReadable(baseColor,bestColor,{level:level,size:size})||!includeFallbackColors?bestColor:(args.includeFallbackColors=!1,tinycolor.mostReadable(baseColor,["#fff","#000"],args))};var names=tinycolor.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},hexNames=tinycolor.hexNames=flip(names),matchers=function(){var CSS_INTEGER="[-\\+]?\\d+%?",CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?",CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")",PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?",PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";return{rgb:new RegExp("rgb"+PERMISSIVE_MATCH3),rgba:new RegExp("rgba"+PERMISSIVE_MATCH4),hsl:new RegExp("hsl"+PERMISSIVE_MATCH3),hsla:new RegExp("hsla"+PERMISSIVE_MATCH4),hsv:new RegExp("hsv"+PERMISSIVE_MATCH3),hsva:new RegExp("hsva"+PERMISSIVE_MATCH4),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=tinycolor:"function"==typeof define&&define.amd?define(function(){return tinycolor}):window.tinycolor=tinycolor}();
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null!==options.pinchThreshold?pinchDistance>=options.pinchThreshold:!0}function validateSwipeTime(){var result;return result=options.maxTimeThreshold?!(duration>=options.maxTimeThreshold):!0}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&DOUBLE_TAP_THRESHOLD>distance}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){return maximumsMap[direction]?maximumsMap[direction].distance:void 0}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return 1>pinchZoom?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return 0>angle&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return 45>=angle&&angle>=0?LEFT:360>=angle&&angle>=315?LEFT:angle>=135&&225>=angle?RIGHT:angle>45&&135>angle?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});
/*!
 * jQuery bootstrap 3 breakpoint check
 * Check the current visibility of bootstrap 3 breakpoints
 *
 * @example `$.isXs()` function alias for `$.isBreakpoint("xs")`
 * @example `$.isSm()` function alias for `$.isBreakpoint("sm")`
 * @example `$.isMd()` function alias for `$.isBreakpoint("md")`
 * @example `$.isLg()` function alias for `$.isBreakpoint("lg")`
 * @version 1.0.0
 * @copyright Jens A. (cakebake) and other contributors
 * @license Released under the MIT license
 */
!function(a){a.isBreakpoint=function(b){var c,d;return c=a("<div/>",{"class":"visible-"+b}).appendTo("body"),d=c.is(":visible"),c.remove(),d},a.extend(a,{isXs:function(){return a.isBreakpoint("xs")},isSm:function(){return a.isBreakpoint("sm")},isMd:function(){return a.isBreakpoint("md")},isLg:function(){return a.isBreakpoint("lg")}})}(jQuery);
/**
  Data que l'on veut récupérer
*/
var dataOfClient = ['l1_normalisee','l2_normalisee', 'l3_normalisee', 'l4_normalisee', 'l6_normalisee', 'l7_normalisee','libreg_new', 'coordonnees', 'siren', 'nic', 'ape700', 'libapet'];
var timeout = null;
/**
  Fonction saveCustomerCompanyData(e)
  Rôle : fonction de sauvegarde de la 1ere partie du formulaire clients
*/
function saveCustomerCompanyData(e) {
  e.preventDefault();
  var formElement = document.getElementById("customercreatestep1");
  // console.log(formElement.action);
  var token = $('meta[name="csrf-token"]').attr('content');

  // On crée un objet de la class FormData - bit.ly/js-formdataclass
  var formData = new FormData(formElement);
  formData.append("_token", token); // Adding extra parameters to form_data

  // if(formElement.getAttribute("data-customerid")) {
  if(document.querySelector('meta[name="customercode"]') != null) {
    window.confirm("Voulez-vous modifier l'identité de ce Client ?");
    formData.append("customer_id", formElement.dataset.customerid);
    formData.append("customercode", $('meta[name=customercode]').attr('content'));
  } 
  // console.log(formData);
  
  // On sauvegarde les données avec la function utilities.js/saveWithAjax()
  saveWithAjax(formElement, formData);

  e.stopPropagation();
} // Fin fonction de sauvegarde du 1er formulaire entreprise

function saveCustomerPersoData(e) {
  e.preventDefault();
  var formElement = document.getElementById("customercreatestep2");
  var token = $('meta[name="csrf-token"]').attr('content');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  if(formElement.getAttribute("data-customerid")) {
    formData.append("customer_id", formElement.dataset.customerid);
  } 
  // console.log(formData);

  // On sauvegarde les données
  saveWithAjax(formElement, formData);
  e.stopPropagation();
}


$.ajaxSetup({
    headers: {
        //'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content');
    }
});

function searchcompanydata() {
  //$('.searchcustomerresults').fadeOut();
  var thisinput = $(this);

  //alert(searchcompany_input.value);
  //alert(searchcompany_city_input.value);
  var req = searchcompany_input.value+'+'+searchcompany_city_input.value;
  var urlreq = "https://numericfactory.my.opendatasoft.com/api/records/1.0/search/?dataset=sirene%40public&q="+req+"&apikey=b0d7384b36f2cca44d7ea0bdf768a822dde5577e92043628bf5abe4e";
  
  if(searchcompany_input.value.trim() == '' || searchcompany_input.value.length < 3 ) {
     searchcustomerresultslist.innerHTML='';
     $('.searchcustomerresults p').empty();
      $('.searchcustomerresults').slideUp();
  }
  else {

  clearTimeout(timeout);
  timeout = setTimeout(function(){
  thisinput.next().removeClass('hidden'); // on affiche le loader dans l'input
  $.ajax({
    //headers: {"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr('content')},
    url: urlreq,
    method: 'GET',
    dataType: 'JSON', // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    contentType: false, // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    processData: false, // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    cache: false, // http://saravanan.tomrain.com/jquery-ajax-file-upload/
    
    success: function(response, status, xhr) {
      thisinput.next().addClass('hidden'); // on cache le loader de l'input
      searchcustomerresultslist.innerHTML='';
      $('.searchcustomerresults p').empty();
      // console.log(response);
      $('.searchcustomerresults p').append(response.nhits+' résultats' + '<span><small> - Sélectionnez votre client</small></span><span style="float:right" id="reset-search-company" title="Réinitialiser" class="fa fa-times-circle"></span>');
      $("#searchcustomerresultslist").append('<ul>');
      for(var i=0; i<response.records.length; i++) {
        //console.log(response.records[i].fields.l1_normalisee + ', ' +response.records[i].fields.l4_normalisee + ', ' + response.records[i].fields.l6_normalisee + ', ' + response.records[i].fields.libapet + ' , ' + response.records[i].fields.siren + ' ' + response.records[i].fields.nic);
        //response.records[i].fields.codpos
        var obj = response.records[i].fields;
        var optname;
        var complementaddress;
        var country;
        if(obj.hasOwnProperty('l2_normalisee')) { optname = obj.l2_normalisee;} else {optname='';}
        if(obj.hasOwnProperty('l3_normalisee')) { complementaddress = obj.l3_normalisee;} else {complementaddress='';}
        if(obj.hasOwnProperty('l7_normalisee')) { country = obj.l7_normalisee;} else {country='';}

        $("#searchcustomerresultslist").append(
          '<li class="customerdata-item" data-clientname="'+response.records[i].fields.l1_normalisee+'"' +
          ' data-clientname="'+obj.l1_normalisee+'"' +
          ' data-optionnalname="'+optname+'"' +
          ' data-clientcomplementaddress="'+complementaddress+'"' +
          ' data-clientaddress="'+obj.l4_normalisee+'"' +
          ' data-clientcp="'+obj.codpos+'"' +
          ' data-clientcity="'+obj.libcom+'"' +
          ' data-clientcountry="'+country+'"' +
          ' data-clientsiret="'+obj.siren + obj.nic+'">' + obj.l1_normalisee + ', ' +obj.l4_normalisee + ', ' + obj.l6_normalisee + '<br><strong>' + response.records[i].fields.libapet + '</strong> , ' + response.records[i].fields.siren + ' ' + response.records[i].fields.nic +'</li>' 
          );
      }
      $("#searchcustomerresultslist").append('</ul>');
      //$('.searchcustomerresults').slideDown();
      $('.searchcustomerresults').slideDown();
      $('.customerdata-item').on('click', fillCustomerData);

      $('#reset-search-company').on('click', function() {
        searchcompany_input.value = "";
        searchcompany_city_input.value = "";
        $("#searchcustomerresultslist").empty();
        $('.searchcustomerresults').slideUp();
        $('#reset-search-company').off();
      });
    },
    error: function(xhr) {
      // console.log(xhr);
    }
  });

}, 500); // FIN SET TIMEOUT

} // FIN ELSE

}

// FILL INPUTS FROM SEARCH (WHERE USER CLICK ON CUSTOMER)
function fillCustomerData() {
  var client = $(this);
  var clientname = client.data('clientname');
  var clientoptionnalname = client.data('optionnalname');
  var clientsiret = client.data('clientsiret');
  var clientaddress = client.data('clientaddress') + ' ' + client.data('clientcp') + ' ' + client.data('clientcity') + ' ' + client.data('clientcountry');
  var clientlittleaddress = client.data('clientaddress');
  var compadress = client.data('clientcomplementaddress');
  var clientcp = client.data('clientcp');
  var clientcity = client.data('clientcity');
  var clientcountry = client.data('clientcountry');

  $("#searchcustomerresultslist").empty();
  $('.searchcustomerresults').slideUp();

  // FILL INPUTS IN STEP1
  $('input[name="customername"]').val(clientname);
  $('input[name="customeroptionnalname"]').val(clientoptionnalname);
  $('input[name="siret"]').val(clientsiret);
  $('#autoaddress').val(clientaddress);
  $('#autoaddress2').val(clientaddress);

  // FILL INPUTS IN STEP2
  $('input[name="complementaddress"]').val(compadress);
  $('input[name="address"]').val(clientlittleaddress);
  $('input[name="cp"]').val(clientcp);
  $('input[name="city"]').val(clientcity);
  $('input[name="country"]').val(clientcountry);
  $('input[name="formatted_address"]').val(clientaddress);

  // FILL ADDRESS IN VISUAL MODE IN STEP2
  writeNameFromInputs();
  writeAddressFromInputs()
}

// FILL NAME IN VISUAL MODE IN STEP2
function writeNameFromInputs() {
  let name = $('input[name="customername"]').val();
  let optionnalname = $('input[name="customeroptionnalname"]').val();
  let namedetailslines;
  if(optionnalname.trim()=='') { namedetailslines = name +'<br>';}
  else{namedetailslines = name+' / '+ optionnalname +'<br>';}
  namedetailslines = namedetailslines.toUpperCase();
  // console.log(namedetailslines);
  $('#etiquettenamedetailslines').empty();
  $('#etiquettenamedetailslines').append(namedetailslines);
}
// FILL ADDRESS IN VISUAL MODE IN STEP2
function writeAddressFromInputs() {
  let compaddress = $('input[name="complementaddress"]').val();
  let address = $('input[name="address"]').val();
  let cp = $('input[name="cp"]').val();
  let city = $('input[name="city"]').val();
  let country = $('input[name="country"]').val();
  
  var addressdetailslines = address+'<br>'
  + cp + ' ' + city +'<br>'
  + country;

  $('#etiquetteaddressdetailslines').empty();
  $('#etiquetteaddressdetailslines').append(addressdetailslines);

  // Si il y a un complément d'adresse
  if(compaddress.trim()!='') {
    $('#etiquettecompadressline').empty();
    $('#etiquettecompadressline').append(compaddress);
  }
  else {
    $('#etiquettecompadressline').empty();
  }
}







/**
  Ecouteurs d'evenement change
**/

var customercreate_step1_button = document.querySelector("#customercreate-step1-button");
var customercreate_step2_button = document.querySelector("#customercreate-step2-button");

var searchcompany_input = document.querySelector("#searchcompanyinput");
var searchcompany_city_input = document.querySelector("#searchcompanycityinput");
var searchcompany_button = document.querySelector("#searchcompanybutton");

var modify_customeraddresslink = document.querySelector("#modifycustomeraddresslink");

var customername_input = $('input[name="customername"]');
var customeroptionnalname_input = $('input[name="customeroptionnalname"]');



if(searchcompany_input!=null){searchcompany_input.addEventListener('keyup',searchcompanydata );}
if(searchcompany_city_input!=null){searchcompany_city_input.addEventListener('keyup',searchcompanydata );}

if(customercreate_step1_button!=null){ customercreate_step1_button.addEventListener("click", saveCustomerCompanyData);}
if(customercreate_step2_button!=null){customercreate_step2_button.addEventListener("click", saveCustomerPersoData);}

if(searchcompany_button) { searchcompany_button.addEventListener('click', searchcompanydata) }

$('input[name="complementaddress"]').on('keyup', function() {
  let compadress = $(this).val().toUpperCase();
  $('#etiquettecompadressline').html(compadress);
});

if(customername_input) { customername_input.on('keyup', writeNameFromInputs);
if(customeroptionnalname_input) { customeroptionnalname_input.on('keyup',  writeNameFromInputs) }
/*$('#address-details h4 strong').html($(this).val().toUpperCase());*/
$('input[type="text"]').displayAsUppercase();



}
(function() {

var ready = function() {

/**
  Environnement
  Rôle : Déterminer l'environnement de production ou local
*/
var env = {
  dev : "http://localhost:8000/", 
  prod : "https://facturehero.com/"
};
var environnement = env.dev;

/*$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});*/

function changeHeadTitle() {
  var classicontitle = $('.sidebar-elements').find('li.active').find('i').attr("class").split(' ')[1];
  var headtitleblock = document.querySelector('.page-head h2');

  var headtitleicon = document.createElement('i');
  headtitleicon.classList.add('icon');
  headtitleicon.classList.add(classicontitle);
  // Afficher l'icone
  headtitleblock.insertBefore(headtitleicon, headtitleblock.firstChild);
  $(headtitleblock).css('opacity', 1);
}

changeHeadTitle();

/**
  Fonction saveUserCompanyData(e)
  Rôle : fonction de sauvegarde du 1er formaulaire entreprise
*/
function saveUserCompanyData(e) {
  e.preventDefault();

  var formElement = document.getElementById("usereditstep1");
  // console.log(formElement.action);
  var token = $('meta[name="csrf-token"]').attr('content');

  // On crée un objet de la class FormData - bit.ly/js-formdataclass
  var formData = new FormData(formElement);
  formData.append("_token", token); // Adding extra parameters to form_data 
  // console.log(formData);
  
  // On sauvegarde les données avec la function utilities.js/saveWithAjax()
  saveWithAjax(formElement, formData);

  e.stopPropagation();
} // Fin fonction de sauvegarde du 1er formaulaire entreprise 


function saveUserPersoData(e) {
  e.preventDefault();
  var formElement = document.getElementById("usereditstep2");
  var token = $('meta[name="csrf-token"]').attr('content');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  // console.log(formData);

  // On sauvegarde les données
  saveWithAjax(formElement, formData);
  e.stopPropagation();
}

function details(e) {
 // e.preventDefault();
}

 
function saveUserCompanyIban(elt) {
  elt = elt || null;
  // console.log(elt);
  var formElement = document.getElementById("ibanform");
  var token = $('meta[name="csrf-token"]').attr('content');
  var validationresponse = $('.iban-error-container');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  if(elt!=null) { // click sur l'élément button activate du modal iban
    formData.append("elt", 'activatebutton');
  }
  // console.log(formData.get("iban"));
  
  if(formData.get("iban")=='') {
    validationresponse.html("<span style='color: #ccc'>Renseignez votre IBAN</span>");
  }
  else {
    // On sauvegarde les données
    // Si l'IBAN est valide, on le sauvegarde en BDD - isValidIBANNumber() retourne 1 si valide, -1 ou false si invalide
    if(isValidIBANNumber(formData.get("iban"))==1) {
      saveWithAjax(formElement, formData, elt);
      //$('.close').click(); // Fermer la popup
    } 
    else{
      validationresponse.hide();
      validationresponse.html("<span style='color: #B13535'><i class='fa fa fa-times'></i> Erreur : entrez un IBAN valide</span>");
      validationresponse.fadeIn();
    }
  }    
}


function saveUserCompanyCheque(elt) {
  elt = elt || null;
  var formElement = document.getElementById("chequeform");
  var token = $('meta[name="csrf-token"]').attr('content');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  if(elt!=null) { // click sur l'élément button activate du modal iban
    formData.append("elt", 'activatebutton');
  }
  // console.log(formData.get('elt'));
  saveWithAjax(formElement, formData, elt);
}


function saveUserCompanyPaypal(elt) {
  elt = elt || null;
  var formElement = document.getElementById("paypalform");
  var token = $('meta[name="csrf-token"]').attr('content');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  if(elt!=null) { // click sur l'élément button activate du modal iban
    formData.append("elt", 'activatebutton');
  }
  // console.log(formData.get('elt'));
  saveWithAjax(formElement, formData, elt);
}

function saveUserCompanyMoney(thisCheckBoxValue, elt) {
  console.log(elt);
  var formElement = document.getElementById("moneyform");
  var token = $('meta[name="csrf-token"]').attr('content');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  formData.append("checkboxmoney", thisCheckBoxValue); // True ou false
  // console.log(formData);
  saveWithAjax(formElement, formData, elt);
}


/**
  Ecouteurs d'evenement change
**/

var useredit_step1_button = document.querySelector("#useredit-step1-button");
var useredit_step2_button = document.querySelector("#useredit-step2-button");
var usersave_iban_button = $('#saveIbanButton');

$('label[for="bank-transfer"]').on('click', details);

if(useredit_step1_button!=null){ useredit_step1_button.addEventListener("click", saveUserCompanyData);}
if(useredit_step2_button!=null){useredit_step2_button.addEventListener("click", saveUserPersoData);}

//usersave_iban_button.addEventListener("click", saveUserCompanyIban);
// if(usersave_iban_button!=null) {usersave_iban_button.on('click',saveUserCompanyIban);}


$("input.iban").on('keyup', function () {
  var arrayofinputs=$("input.iban");
  var fulliban='';
  var validationresponse = $('.iban-error-container');
  if(typeof this.value == 'string') {this.value = this.value.toUpperCase()};

  if (this.value.length == this.maxLength) {
    var $next = $(this).next('input.iban');
    if ($next.length)
        $(this).next('input.iban').focus();
    else
        $(this).blur();
  }
  if(arrayofinputs.last().val().length>3) {arrayofinputs.last().val().slice(0, -1)}

  if(arrayofinputs[0].value != '') {
    for(var i=0; i<arrayofinputs.length; i++) {
      if(arrayofinputs[i].value != '') {
        partiban = arrayofinputs[i].value;
        fulliban+=partiban;
      }
    }
    $('#input-iban-full-b').val(fulliban);
  }

  if(isValidIBANNumber($('#input-iban-full-b').val())==1) {
    validationresponse.hide();
    validationresponse.html("<i style='color:#8DCADF' class='fa fa-check-circle'></i> Ok votre IBAN est validé.");
    validationresponse.fadeIn();
    saveUserCompanyIban();
  } else {
    validationresponse.html("Entrez IBAN valide</small>");
  }

});

function dontchangecheckbox(e) {
  var checkboxinput = $(this).find('input');
  console.log(checkboxinput);
  var checkboxinputid = checkboxinput.attr('id');
  var checkboxvalue = checkboxinput.prop("checked"); // true or false
  //console.log($('.'+checkboxinputid+'-activatebutton'));
  
  //console.log('Avant test : ' + checkboxvalue);
  if (checkboxvalue==true) { 
   // console.log('Si vrai : ' + checkboxvalue);
   // checkboxinput.prop("checked", true);
  } 
  else { 
    //console.log('Si faux avant activation check : ' + checkboxvalue);
    checkboxinput.prop("checked", true);
    //console.log('Si faux après activation check : ' + checkboxvalue);
    $('.'+checkboxinputid+'-activatebutton').prop("checked", true);

    if(checkboxinputid=="bank-transfer") {
      saveUserCompanyIban();
    }
    else if(checkboxinputid == "cheque") {
      saveUserCompanyCheque();
    }
    else if(checkboxinputid == "paypal") {
      saveUserCompanyPaypal();
    }
  }
}


function retrieveAndFillIban() {
  var theiban = $('#input-iban-full-b').val();
  if(theiban.trim() != '') 
  {
    $('#input-iban1-b').val(theiban.substr(0, 4));
    $('#input-iban2-b').val(theiban.substr(4, 4));
    $('#input-iban3-b').val(theiban.substr(8, 4));
    $('#input-iban4-b').val(theiban.substr(12, 4));
    $('#input-iban5-b').val(theiban.substr(16, 4));
    $('#input-iban6-b').val(theiban.substr(20, 4));
    $('#input-iban7-b').val(theiban.substr(24));
  }   
}

if($('#input-iban-full-b').length) { retrieveAndFillIban() }



$("#reset-iban-b").on('click', function () {
  $("input.iban").val('');
  $('#input-iban-full-b').val('');
  $('.iban-error-container').html("Entrez IBAN valide</small>");
});

$('.pagelink').on("click",function(){
  $('.super-loading').removeClass('hidden');
});



$('.am-checkbox-nochange').on('click', dontchangecheckbox);


$('#money').on('click', function(e){
  var thisCheckBoxValue = $(this).prop("checked"); // True ou False
  var elt = e.target;
  saveUserCompanyMoney(thisCheckBoxValue, elt); 
});


// switch bank-transfer
$('.bank-transfer-activatebutton').on('click', function(e){
  var elt = e.target;
  if($('#bank-transfer').prop( "checked")==true) {$('#bank-transfer').prop( "checked", false ); saveUserCompanyIban(elt);}
  else{$('#bank-transfer').prop( "checked", true ); saveUserCompanyIban(elt);}
});

// switch cheque
$('.cheque-activatebutton').on('click', function(e){
  var elt = e.target;
  if($('#cheque').prop( "checked")==true) {$('#cheque').prop( "checked", false ); saveUserCompanyCheque(elt);}
  else{$('#cheque').prop( "checked", true ); saveUserCompanyCheque(elt)}
});

// switch paypal
$('.paypal-activatebutton').on('click', function(e){
  var elt = e.target;
  if($('#paypal').prop( "checked")==true) {$('#paypal').prop( "checked", false ); saveUserCompanyPaypal(elt);}
  else{$('#paypal').prop( "checked", true ); saveUserCompanyPaypal(elt)}
});

// switch paypal
$('.money-activatebutton').on('click', function(e){
  var elt = e.target;
  if($('#money').prop( "checked")==true) {$('#paypal').prop( "checked", false ); saveUserCompanyMoney(elt);}
  else{$('#money').prop( "checked", true ); saveUserCompanyMoney(elt)}
});



 


} // FIN Fonction ready


ready();

/*document.addEventListener("turbolinks:load", ready);*/




 })();


//# sourceMappingURL=all.js.map
