@extends('layouts.factlayout')

@section('content')

<div class="row wizard-row">
  <div class="col-lg-10 col-md-12 fuelux">
    <div class="block-wizard panel panel-default">
      <div id="wizard1" class="wizard wizard-ux">
        <ul class="steps">
          <li data-step="1" class="active">Identité du nouveau client<span class="chevron"></span></li>
          <li data-step="2">Adresse de facturation<span class="chevron"></span></li>
          <li data-step="3">Contact<span class="chevron"></span></li>
        </ul>
       
        <div class="step-content">
          <div data-step="1" class="step-pane active">
<!--             <div class="text-right md-pt-5 md-pb-5 md-pr-5">
    <a class="fill-client-link" href="#">Vous ne trouvez pas votre Client ?</a>
</div> -->

            <div style="border-bottom:1px dashed #dadada;background:#fff;padding:0px 1px 7px">
              <h2 style="color: #606c76;font-size: 16px;font-weight: 600;">
                <i class="icon s7-search" style="opacity: 0.9;
                          color: rgba(155,175,185, 0.67);
                          font-size:1.9em;
                          position: relative;
                          top:7px;">            
                </i> 
                <span style="position: relative">Trouver une entreprise</span>
              </h2>
              <div class="row no-margin-y">
                <div class="form-group col-sm-5 col-md-4">
                  <input id="searchcompanyinput" placeholder="QUI : entreprise, association, établissement public" class="form-control" type="text">
                   <div id="searchcompanyloader" class="text-center md-pt-20 searchcompanyloaderininput hidden"><i class="fa fa-circle-o-notch fa-spin fa-2x"></i></div>
                </div>
                <div class="form-group col-sm-5 col-md-3">
                  <input id="searchcompanycityinput"  placeholder="OÙ : ville ou code postal" class="form-control" type="text">
                  <div class="text-center md-pt-20 searchcompanyloaderininput hidden">
                    <i class="fa fa-circle-o-notch fa-spin fa-2x"></i>
                  </div>
                </div>
                {{-- 
                <div class="form-group col-sm-2 col-md-2">
                  <button id="searchcompanybutton" class="btn btn-inverse btn-space">
                    <i class="icon s7-search"></i> 
                    <span class="visible-lg-inline">Rechercher</span>
                  </button>
                </div> 
                --}}
              </div>
            </div>

            <div class="searchcustomerresults">
              <p></p>
              <div id="searchcustomerresultslist"></div>
            </div>

            {{-- 
            <form action="#" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed"> 
            --}}
            <form autocomplete="off" id="customercreatestep1" method="post" action="{{action('CustomersController@createCustomerDataStepOne')}}" class="form-horizontal group-border-dashed">

                <div class="form-group no-padding">
                  <div class="col-sm-7">
                    <h3 class="wizard-title">Identité du client</h3>
                  </div>
                </div>

                {{-- DEBUT FORM --}}

                <div class="form-group xs-pt-5">
                  <div class="col-sm-3 col-lg-3 col-md-4">
                    <label class="control-label">Type*</label>
                    <p>Entreprise, association, ou particulier</p>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-4">
                    <div class="xs-pt-15">
                      <select value="{{ old('customertype') }}" name="customertype" title="Type du client" id="first-disabled" class="selectpicker" data-hide-disabled="true">

                        <optgroup>
                          <option value="1">Entreprise</option>
                          <option value="2">Association</option>
                          <option value="3">Etablissement public</option>
                          <option value="4">Particulier</option>
                        </optgroup>
                      </select>
                    </div>
                    <div class="errors"></div>
                  </div>
                </div>

                <div class="form-group xs-pt-5">
                  <div class="col-lg-3 col-md-4 col-sm-3">
                    <label class="control-label">Nom du Client*</label>
                    <p>Nom juridique de votre Client</p>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-4">
                    <div class="xs-pt-15">
                     <input value="" name="customername" type="text" placeholder="" class="form-control" value="">
                    </div>
                     <div class="errors"></div>
                  </div>
                </div>

                <div class="form-group xs-pt-5">
                  <div class="col-lg-3 col-md-4 col-sm-3">
                    <label class="control-label">Complément de nom</label>
                    <p></p>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-4">
                    <div class="xs-pt-15">
                     <input value="{{ old('customeroptionnalname') }}" name="customeroptionnalname" type="text" placeholder="(facultatif)" class="form-control" value="">
                    </div>
                     <div class="errors"></div>
                  </div>
                </div>
               
                <div class="form-group xs-pt-5">
                  <div class="col-sm-3 col-lg-3 col-md-4">
                    <label class="control-label">SIRET*</label>
                    <p>Numéro d'identification du Client</p>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-4">
                    <div class="xs-pt-15">
                     <input name="siret" data-mask="siret" type="text" placeholder="exemple : 795 180 280 00013" class="form-control" value="{{ old('siret') }}">
                    </div>
                     <div class="errors"></div>
                  </div>
                </div>

                <div class="form-group md-pt-40">
                  <div class="col-sm-12">
                     <button type="submit" id="customercreate-step1-button" data-wizard="#wizard1" class="btn btn-primary btn-space wizard-next">VALIDER ET SUIVANT <i class="icon s7-angle-right"></i></button>
                  </div>
                </div>

            </form>
          </div>
          {{--  FIN DATA STEP 1 --}}


          <div data-step="2" class="step-pane">
            <form autocomplete="off" method='post' action="{{action('CustomersController@createCustomerDataStepTwo')}}" id="customercreatestep2" class="form-horizontal group-border-dashed">
            <div role="alert" class="alert alert-info alert-icon">
                <div class="icon"><span class="s7-map-marker"></span></div>
                <div class="message">
                  L'adresse de votre client qui apparaîtra sur vos factures
                </div>
            </div>  
             
            <div class='form-group col-sm-12 md-mb-40 md-pb-15'>

              <div class='col-md-6'>
                <div id="modifycustomeraddressinputs" class="">
                   <div class="form-group xs-pt-0">
                    <div class="col-lg-10 col-md-10 col-sm-12">
                      <div class="">
                        <label class="control-label">Adresse*</label>
                       <input value="{{ old('formatted_address') }}" id="autoaddress2" class="form-control" onFocus="geolocate()" type="text">
                      </div>
                      <div class="errors"></div>
                    </div>
                  </div>
                  <div class="form-group xs-pt-0">
                     <div class="col-lg-10 col-md-10 col-sm-12">
                      <div class="xs-pt-10">
                      <label class="control-label">Complément d'adresse</label>
                        <input value="" name="complementaddress" type="text" placeholder="(facultatif)" class="form-control">
                      </div>
                    </div>
                  </div>
                </div>
                <input name="formatted_address" type="hidden">
                <input name="address" type="hidden">
                <input name="cp" type="hidden">
                <input name="city" type="hidden">
                <input name="country" type="hidden">
              </div>

              <div class='col-md-6' style="background: #f8f8f9">
                <div id="address-details" class="xs-pt-15 xs-pt-40">
                  <h4>
                  <strong><span id="etiquettenamedetailslines"></span></strong>
                  <span id="etiquettecompadressline"></span><br>
                  <span id="etiquetteaddressdetailslines"></span>
                  </h4>
                </div>
                {{-- <a id="modifycustomeraddresslink" class="link">Modifier</a> --}}
              </div> 

              
                <div class="col-sm-12 md-pt-40">
                   <button data-wizard="#wizard1" class="btn btn-default btn-space wizard-previous"><i class="icon s7-angle-left"></i> Précédent</button>
                  <button data-wizard="#wizard1" id="customercreate-step2-button" class="btn btn-primary btn-space wizard-next">SUIVANT <i class="icon s7-angle-right"></i></button>
                </div>
              </div>

            </form>
          </div>
          {{--  FIN DATA STEP 2 --}}


          <div data-step="3" class="step-pane">
            <form autocomplete="off" id="customercreatestep3" method="post" action="{{action('CustomersController@createCustomerDataStepThree')}}" class="form-horizontal group-border-dashed">
              
              <div class='form-group col-sm-12 md-pb-40'>

              <div class="col-lg-12">
                <h3 class="wizard-title">Contact client</h3>
              </div>

              <div class='col-sm-5' style="background: #fafcfc">

             
              <div class="form-group xs-pt-0">
                <div class="col-lg-12">
                  <div class="xs-pt-10">
                   <label class="control-label">Civilité*</label>
                   <select value="{{ old('civility') }}" name="civility" title="Civilité" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                      <optgroup>
                        <option value="Mme">Mme</option>
                        <option value="Mlle">Mlle</option>
                        <option value="Monsieur">Monsieur</option>
                      </optgroup>
                    </select>
                    <div class="errors"></div>
                  </div>
                  <div class="errors"></div>
                </div>
                 <div class="col-lg-12">
                  <div class="xs-pt-10">
                    <label class="control-label">Nom*</label>
                    <input value="{{ old('lastname') }}" name="lastname" type="text" placeholder="" class="form-control">
                    <div class="errors"></div>
                  </div>
                 </div>
                 <div class="col-lg-12">
                  <div class="xs-pt-10">
                    <label class="control-label">Prénom*</label>
                    <input value="{{ old('firstname') }}" name="firstname" type="text" placeholder="" class="form-control">
                    <div class="errors"></div>
                  </div>
                 </div>
              </div>
              </div>
               <div class='col-md-1' style="background: #fafcfc"></div>
              <div class='col-sm-5' style="background: #fafcfc">
                <div class="form-group xs-pt-0">
                  <div class="col-lg-12">
                  <div class="xs-pt-10">
                    <label class="control-label">Email</label>
                    <input value="{{ old('firstname') }}" name="email" type="text" placeholder="" class="form-control">
                    <div class="errors"></div>
                  </div>
                 </div>

                 <div class="col-lg-12">
                  <div class="xs-pt-10">
                    <label class="control-label">Tel/mobile</label>
                    <input value="{{ old('firstname') }}" name="mobile" type="text" placeholder="" class="form-control">
                    <div class="errors"></div>
                  </div>
                 </div>

                 <div class="col-lg-12">
                  <div class="xs-pt-10">
                    <label class="control-label">Fax</label>
                    <input value="{{ old('firstname') }}" name="fax" type="text" placeholder="" class="form-control">
                    <div class="errors"></div>
                  </div>
                 </div>

                 </div>
              </div>

              <div class='col-md-1' style="background: #fafcfc"></div>

              </div> {{-- FIN FORMULAIRE CONTACT CIV PRENOM NOM  --}}

              <div class="form-group col-xs-12 xs-pt-40">
                <div class="col-sm-12">
                  <button data-wizard="#wizard1" class="btn btn-default btn-space wizard-previous"><i class="icon s7-angle-left"></i> Précédent</button>
                  <button data-wizard="#wizard1" id="customercreate-step3-button" class="btn btn-primary btn-space wizard-next">Suivant <i class="icon s7-angle-right"></i></button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal-overlay"></div>

@endsection



@section('pagescript')   
    <script type="text/javascript" src="{!! elixir('assets/lib/fuelux/js/wizard.js') !!}"></script>
    <script type="text/javascript" src="{!! elixir('assets/lib/bootstrap-select/js/bootstrap-select.js') !!}"></script>
    <script type="text/javascript" src="{!! elixir('assets/lib/bootstrap-slider/js/bootstrap-slider.js') !!}"></script>
    <script type="text/javascript" src="{!! elixir('assets/js/app-form-wizard.js') !!}"></script> 
    <script type="text/javascript" src="{!! elixir('assets/lib/jquery.maskedinput/jquery.maskedinput.min.js') !!}"></script>
    <script type="text/javascript" src="{!! elixir('assets/js/app-form-masks.js') !!}"></script>

    <script type="text/javascript">
      var placeSearch, autocomplete;
      var componentForm = ['address','city','cp','country'];

      function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        /**autocomplete = new google.maps.places.Autocomplete(
          (document.getElementById('searchcompanycityinput')),
          {types: ['(regions)'], componentRestrictions: {country: "fr"}
        }); **/
        autoaddresstwo = new google.maps.places.Autocomplete(
          /** @type {!HTMLInputElement} */(document.getElementById('autoaddress2')),
          {types: ['geocode'], componentRestrictions: {country: "fr"}
        });
        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autoaddresstwo.addListener('place_changed', fillInAddress);
      }

      function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autoaddresstwo.getPlace();
        console.log(place);
        document.querySelector("input[name=address]").value='';
        document.querySelector("input[name=address]").disabled = false;
        document.querySelector("input[name=cp]").value='';
        document.querySelector("input[name=cp]").disabled = false;
        document.querySelector("input[name=city]").value='';
        document.querySelector("input[name=city]").disabled = false;
        document.querySelector("input[name=country]").value='';
        document.querySelector("input[name=country]").disabled = false;
        document.querySelector("input[name=formatted_address]").value='';
        document.querySelector("input[name=formatted_address]").disabled = false;
        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        document.querySelector("input[name=address]").value = place.name;
        document.querySelector("input[name=cp]").value = place.address_components[6].short_name;
        document.querySelector("input[name=city]").value = place.address_components[2].long_name;
        document.querySelector("input[name=country]").value= place.address_components[5].long_name;
        document.querySelector("input[name=formatted_address]").value= place.formatted_address;

        var addressdetailslines = place.name+'<br>'
        + place.address_components[6].short_name + ' ' + place.address_components[2].long_name+'<br>'
        + place.address_components[5].long_name;

        addressdetailslines = addressdetailslines.toUpperCase();
        $('#etiquetteaddressdetailslines').empty();
        $('#etiquetteaddressdetailslines').append(addressdetailslines);

      }


       $(document).ready(function(){
        // initialize the javascript
        //App.init();
        App.masks();  
        App.wizard();
        //App.formElements();
        
      });
    </script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyArHfmet5onyMOEw0Ej3Vw3CBI0RifAGOU&libraries=places&callback=initAutocomplete" async defer></script>

@stop

