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

