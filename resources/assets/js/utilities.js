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
              document.getElementById('customercreatestep3').setAttribute('data-customerid', response.customerid);
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