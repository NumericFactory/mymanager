/**
  Data que l'on veut récupérer
*/
var dataOfClient = ['l1_normalisee','l2_normalisee', 'l3_normalisee', 'l4_normalisee', 'l6_normalisee', 'l7_normalisee','libreg_new', 'coordonnees', 'siren', 'nic', 'ape700', 'libapet'];
var timeout = null;
/**
  Fonction saveCustomerCompanyData(e)
  Rôle : fonction de sauvegarde ou d'update de la 1ere partie du formulaire clients
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
  if(document.querySelector('meta[name="customercode"]')!= null || formElement.getAttribute("data-customerid")!= null) { 
      formData.append("customer_id", formElement.dataset.customerid);
      formData.append("customercode", $('meta[name=customercode]').attr('content'));  
  }

  // On sauvegarde les données avec la function utilities.js/saveWithAjax()
  saveWithAjax(formElement, formData);

  // console.log(formData);
  e.stopPropagation();
} // Fin fonction de sauvegarde du 1er formulaire entreprise

function saveCustomerPersoData(e) {
  e.preventDefault();
  var formElement = document.getElementById("customercreatestep2");
  var token = $('meta[name="csrf-token"]').attr('content');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  // if(formElement.getAttribute("data-customerid")) {
  if(document.querySelector('meta[name="customercode"]')!= null || formElement.getAttribute("data-customerid")!= null) { 
      formData.append("customer_id", formElement.dataset.customerid);
      formData.append("customercode", $('meta[name=customercode]').attr('content'));  
  }
  // console.log(formData);

  // On sauvegarde les données
  saveWithAjax(formElement, formData);
  e.stopPropagation();
}

function saveCustomerContactData(e) {
  e.preventDefault();
  var formElement = document.getElementById("customercreatestep3");
  var token = $('meta[name="csrf-token"]').attr('content');

  var formData = new FormData(formElement);
  formData.append("_token", token);
  // if(formElement.getAttribute("data-customerid")) {
  if(document.querySelector('meta[name="customercode"]')!= null || formElement.getAttribute("data-customerid")!= null) { 
      formData.append("customer_id", formElement.dataset.customerid);
      formData.append("customercode", $('meta[name=customercode]').attr('content'));  
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
      $('.searchcustomerresults p').append(response.nhits+' résultats' + '<span><small> - Sélectionnez votre client<i style="color: #EF6262; font-size:1.125em; position:relative; top:2px;left: 7px;" class="fa fa fa-arrow-circle-down"></i></small></span><span style="float:right" id="reset-search-company" title="Réinitialiser" class="fa fa-times-circle"></span>');
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
var customercreate_step3_button = document.querySelector("#customercreate-step3-button");

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
if(customercreate_step3_button!=null){customercreate_step3_button.addEventListener("click", saveCustomerContactData);}

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