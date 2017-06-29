@extends('layouts.factlayout')

@section('content')


  <div class="row wizard-row">
            <div class="col-lg-10 col-md-12 fuelux">
              <div class="block-wizard panel panel-default">
                <div id="wizard1" class="wizard wizard-ux">
                  <ul class="steps">
                    <li data-step="1" class="active">Identité de mon entreprise<span class="chevron"></span></li>
                    <li data-step="2">Contact<span class="chevron"></span></li>
                    <li data-step="3">Règlement<span class="chevron"></span></li>
                   
                  </ul>
                  {{-- <div class="actions">
                    <button type="button" class="btn btn-xs btn-prev btn-default"><i class="icon s7-angle-left"></i>Précédent</button>
                    <button type="button" data-last="Finish" class="btn btn-xs btn-next btn-default">Suivant<i class="icon s7-angle-right"></i></button>
                  </div> --}}
                  <div class="step-content">
                    <div data-step="1" class="step-pane active">
                      <form id="usereditstep1" method="post" action="{{action('UsersController@saveCompanyDataStepOne', ['id'=> Auth::user()->id])}}" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                         {{ csrf_field() }}
                        <div role="alert" class="alert alert-info alert-icon">
                          <div class="icon"><span class="s7-id"></span></div>
                            <div class="message">
                           Votre Entreprise. Identité et adresse.
                          </div>
                        </div>
                        <div class="form-group no-padding">
                          <div class="col-sm-7">
                            <h3 class="wizard-title">Mon entreprise</h3>
                          </div>
                        </div>

                        {{-- DEBUT FORM --}}
                        <div class="form-group xs-pt-0">
                          <div class="col-lg-3 col-md-4 col-sm-3">
                            <label class="control-label">Nom de l'entreprise*</label>
                            <p>Nom juridique de votre Entreprise</p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input name="companyname" type="text" placeholder="" class="form-control" value="{{ $user->company->name or old('company') }}">
                            </div>
                             <div class="errors"></div>
                          </div>
                        </div>
                    
                        <div class="form-group xs-pt-0">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">N° SIREN*</label>
                            <p>Numéro d'identification de votre entreprise</p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input name="siren" data-mask="siren" type="text" placeholder="exemple : 795 180 280" class="form-control" value="{{ $user->company->siren or old('siren') }}">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>

                        <div class="form-group xs-pt-0">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Je suis plutôt*</label>
                            <p></p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <select name="companytype" title="Choisissez" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                                <optgroup>
                                  <option value="Artisanat" {{ $user->company->companytype == 'Artisanat' ? "selected":"" }}>Artisan</option>
                                  <option value="Commerce" {{ $user->company->companytype == 'Commerce' ? "selected":"" }}>Commerçant(e)</option>
                                  <option value="Service et profession libérale" {{ $user->company->companytype == 'Service et profession libérale' ? "selected":"" }}>Service ou Profession libérale</option>
                                </optgroup>
                              </select>
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>
                        <div class="form-group no-padding">
                          <div class="col-sm-7">
                            <h3 class="wizard-title">Adresse de mon entreprise</h3>
                          </div>
                        </div>

                        <div class="form-group xs-pt-0">
                          <div class="col-lg-3 col-md-4 col-sm-3">
                            <label class="control-label">Adresse*</label>
                            <p>requis</p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                             {{--  <input name="address" type="text" placeholder="" class="form-control" value="{{ $user->address or old('address') }}"> --}}
                             <input value="{{ $user->company->addresses->first()->formatted_address or old('formatted_address') }}" id="autocomplete" class="form-control" placeholder="Adresse de votre entreprise" onFocus="geolocate()" type="text">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>

                        <div class="form-group xs-pt-0">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Complément d'adresse</label>
                            <p>(optionnel)</p>
                          </div>
                           <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input value="{{ $user->company->addresses->first()->complementaddress or old('complementaddress') }}" name="complementaddress" type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>

                        <input value="{{ $user->company->addresses->first()->formatted_address or old('formatted_address') }}" name="formatted_address" type="hidden">

                        <div class="form-group xs-pt-0 hidden">
                          <div class="col-lg-3 col-md-4 col-sm-3">
                            <label class="control-label">Adresse*</label>
                            <p>requis</p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input name="address" type="text" placeholder="" class="form-control" value="{{ $user->company->addresses->first()->address or old('address') }}">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>
                        
                        <div class="form-group xs-pt-0 hidden">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Code postal*</label>
                            <p>requis</p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input name="cp" data-mask="cp" type="text" placeholder="ex: 75009" class="form-control" value="{{ $user->company->addresses->first()->cp or old('cp') }}">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-0 hidden">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Ville*</label>
                            <p>requis</p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input name="city" type="text" placeholder="" class="form-control" value="{{ $user->company->addresses->first()->city or old('city') }}">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-0 hidden">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Pays*</label>
                            <p>requis</p>
                          </div>
                          <div class="col-lg-5 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <select title="Pays" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                                <optgroup>
                                @foreach($countries as $country)
                                  <option value="{{$country}}" @if($country === 'France') selected="selected" @endif>{{$country}}</option>
                                @endforeach
                                </optgroup>
                              </select>
                            </div>
                          </div>
                          <input name="country" type="text" placeholder="" class="form-control hidden" value="{{ $user->company->addresses->first()->country or old('country') }}">
                        </div>
                        
                        <div class="form-group md-pt-40">
                          <div class="col-sm-12">
                            <button type="submit" id="useredit-step1-button" data-wizard="#wizard1" class="btn btn-primary btn-space wizard-next">SUIVANT <i class="icon s7-angle-right"></i></button>
                          </div>
                        </div>

                     {{--  FIN FORM --}}
                      </form>
                    </div>



                    <div data-step="2" class="step-pane">
                      <form id="usereditstep2" action="{{action('UsersController@saveCompanyDataStepTwo', ['id'=> Auth::user()->id])}}" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                      
                        <div role="alert" class="alert alert-info alert-icon">
                          <div class="icon"><span class="s7-mail"></span></div>
                          <div class="message">
                            Vos coordonnées de contact. Elles apparaîtront sur vos devis et factures.
                          </div>
                        </div>

                        <div class='form-group col-sm-6'>

                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-4 col-md-4">
                            <label class="control-label">Civilité*</label>

                          </div>
                          <div class="col-lg-8 col-md-8 col-sm-9">
                            <div class="xs-pt-10">
                              <select value="{{ $user->civility or old('civility') }}" name="civility" title="Civilité" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                                <optgroup>
                                  <option value="Mme" {{ $user->civility == 'Mme' ? "selected":"" }}>Mme</option>
                                  <option value="Mlle" {{ $user->civility == 'Mlle' ? "selected":"" }}>Mlle</option>
                                  <option value="Monsieur" {{ $user->civility == 'Monsieur' ? "selected":"" }}>Monsieur</option>
                                </optgroup>
                              </select>
                              <div class="errors"></div>
                            </div>             
                          </div>
                        </div>

                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-4 col-md-4">
                            <label class="control-label">Votre prénom*</label>
                          </div>
                          <div class="col-lg-8 col-md-8 col-sm-9">
                            <div class="xs-pt-10">
                              <input value="{{ $user->firstname or old('firstname') }}" name="firstname" type="text" placeholder="" class="form-control">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>

                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-4 col-md-4">
                            <label class="control-label">Votre nom*</label>
                           
                          </div>
                          <div class="col-lg-8 col-md-8 col-sm-9">
                            <div class="xs-pt-10">
                              <input value="{{ $user->lastname or old('lastname') }}" name="lastname" type="text" placeholder="" class="form-control">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>

                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-4 col-md-4">
                            <label class="control-label">Téléphone</label>
                            <p>Fixe ou mobile</p> 
                          </div>
                          <div class="col-lg-8 col-md-8 col-sm-9">
                            <div class="xs-pt-10">
                              <input value="{{ $user->tel or old('tel') }}" name="tel" data-mask="phone" type="text" placeholder="" class="form-control">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>

                        <div style="clear:both" class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-4 col-md-4">
                            <label class="control-label">Votre Email*</label>
                             <p>Email de contact</p>
                          </div>
                          <div class="col-lg-8 col-md-8 col-sm-9">
                            <div class="xs-pt-10">
                              <input value="{{ $user->email or old('email') }}" name="email" type="text" placeholder="" class="form-control">
                            </div>
                            <div class="errors"></div>
                          </div>
                        </div>

                        </div>

                        <div class="col-sm-1"> </div>

                        
                        {{-- <div class="form-group col-sm-5">
                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-7">
                            <label class="control-label">Notifications Email</label>
                            <p>Autoriser Facture Hero à vous envoyer des notifications</p>
                          </div>
                          <div class="col-sm-3 xs-pt-20">
                            <div class="switch-button switch-button-lg">
                              <input type="checkbox" checked="" name="swt1" id="swt1"><span>
                                <label for="swt1"></label></span>
                            </div>
                          </div>
                        </div>
                        </div> --}}

                        <div class="form-group col-xs-12 xs-pt-40">
                          <div class="col-sm-12">
                            <button data-wizard="#wizard1" class="btn btn-default btn-space wizard-previous"><i class="icon s7-angle-left"></i> Précédent</button>
                            <button data-wizard="#wizard1" id="useredit-step2-button" class="btn btn-primary btn-space wizard-next">Suivant <i class="icon s7-angle-right"></i></button>
                          </div>
                        </div>
                      </form>
                    </div>




                    <div data-step="3" class="step-pane">
                      <form action="#" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                        <div class="no-padding">
                          <div role="alert" class="alert alert-info alert-icon">
                            <div class="icon"><span class="s7-piggy"></span></div>
                            <div class="message">
                             Comment vos clients peuvent vous régler.
                            </div>
                          </div>
                        <div class="form-group col-sm-6"> 
                          <div class="col-xs-12 xs-pt-10">

                              <div class="col-sm-12">
                                <label class="control-label">Quel(s) mode(s) de règlement souhaitez-vous indiquer à vos Clients sur vos factures ?</label>
                                <p>Vous pourrez <strong>choisir</strong> parmi ceux-ci depuis l'édition de vos factures.</p>
                              </div>
                              <div class="col-sm-6">
                              
                               {{--  @foreach ($paymentmethods as $paymentmethod) 
                                   
                                   {{dd($paymentmethod->pivot)}}
                                @endforeach --}}
                              

                                <div class="am-checkbox am-checkbox-nochange">
                                  <input id="bank-transfer" name="transfer" type="checkbox">
                                  <label data-backdrop="static" data-modal="form-primary" class="md-trigger" for="bank-transfer">Virement bancaire</label>
                                </div>
                                <div class="am-checkbox am-checkbox-nochange">
                                  <input id="cheque" name="cheque" type="checkbox">
                                  <label data-backdrop="static" data-modal="form-secondary" class="md-trigger" for="cheque">Chèque</label>
                                </div>
                                {{-- <div class="am-checkbox">
                                  <input id="cb" name="cb" type="checkbox">
                                  <label for="cb">Carte bleue</label>
                                </div> --}}
                                <div class="am-checkbox am-checkbox-nochange">
                                  <input id="paypal" name="paypal" type="checkbox">
                                  <label data-backdrop="static" data-modal="form-paypal" class="md-trigger" for="paypal">Paypal</label>
                                </div>
                                <div class="am-checkbox">
                                  <input id="money" name="money" type="checkbox">
                                  <label for="money">Espèces</label>
                                </div>
                          
                              </div>
                           
                          </div>
                        </div>

                        <div style="border-right:1px #ccc" class="col-sm-1"></div>

                        <div class="form-group col-sm-5">
                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-12">
                            <label class="control-label">Délai de paiement préféré</label>
                            <p>Vous pourrez le modifier depuis l'édition de vos factures.</p>
                            <select title="Choisir un délai de paiement" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                                <optgroup>
                                  <option>A réception de facture</option>
                                  <option>A 15 jours fin de mois</option>
                                  <option>A 30 jours nets</option>
                                  <option>A 30 jours fin de mois</option>
                                  {{--  
                                  <option>A 45 jours nets</option>
                                  <option>A 45 jours fin de mois</option>
                                  <option>A 60 jours nets</option> 
                                  --}}
                                  <option>Autre délai</option>
                                </optgroup>
                              </select>
                          </div>
                        </div>
                        </div>

                        <div class="form-group col-md-12 md-pt-30">
                          <div class="col-sm-12">
                            <button data-wizard="#wizard1" class="btn btn-default btn-space wizard-previous"><i class="icon s7-angle-left"></i> Précédent</button>
                            <button data-wizard="#wizard1" class="btn btn-primary btn-space wizard-next"><i class="icon s7-check"></i> VALIDER ET TERMINER</button>
                          </div>
                        </div>
                      </form>
                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal IBAN-->
                  <div id="form-primary" class="modal-container modal-colored-header custom-width modal-effect-10">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close modal-close"><i class="icon s7-close"></i></button>
                        <h3 class="modal-title">Règlement par virement bancaire</h3>
                      </div>
                      <div class="modal-body form">

                        <div>
                          <h4><i class="fa fa-info-circle"></i> IBAN à indiquer sur vos factures pour être réglé par vos clients.</h4><hr> 
                        </div>

                        <div id="iban-field-container-b" class="input-container input-container-iban">
                          <input id="input-iban1-b" class="form-control numeric iban iban-benef" value="FR" name="iban1-b" maxlength="4" type="text">
                          <input id="input-iban2-b" class="form-control numeric iban iban-benef" name="iban2" maxlength="4" type="text">
                          <input id="input-iban3-b" class="form-control numeric iban iban-benef" name="iban3" maxlength="4" type="text">
                          <input id="input-iban4-b" class="form-control numeric iban iban-benef" name="iban4" maxlength="4" type="text">
                          <input id="input-iban5-b" class="form-control numeric iban iban-benef" name="iban5" maxlength="4" type="text">
                          <input id="input-iban6-b" class="form-control numeric iban iban-benef" name="iban6" maxlength="4" type="text">
                          <input id="input-iban7-b" class="form-control numeric iban iban-benef" name="iban7" maxlength="4" type="text">
                          
                          {{-- <input id="input-iban8-b" class="form-control numeric iban iban-benef" value="" name="iban8" maxlength="4" type="text"> 
                          <input id="input-iban9-b" class="form-control numeric iban iban-benef" value="" name="iban9" maxlength="4" type="text">  --}}
                            
                          <span id="reset-iban-b" class="fa fa-times-circle" title="Réinitialiser"></span>
                        </div>

                        <div class="iban-error-container"></div>
                        <form id="ibanform" action="{{action('UsersController@saveCompanyIban', ['id'=> Auth::user()->id])}}">
                          <input value="{{ $user->iban }}" id="input-iban-full-b" name="iban" class="hidden" type="hidden">
                  
                        <br>

                        <p>
                          <strong>Exemple : FR76 3000 4000 0312 3456 7890 143</strong><br style="margin-bottom: 3px">
                          <em>
                          L'IBAN est le numéro international de compte bancaire requis pour les viremements. <br>Il est indiqué sur vos relevés de compte ou votre RIB.
                          </em>
                          <br><br>
                        <p>


                        <div class="form-group">
                            <label style="margin-right: 7px">
                              <h4>Activer cette option : </h4>
                            </label>
                            <div id="switch-button-bank-transfer" class="switch-button switch-button-lg">
                              <input checked="" name="activate" class="bank-transfer-activatebutton" id="bank-transfer-activatebutton" type="checkbox"><span>
                              <label for="bank-transfer-activatebutton"></label></span>
                            </div>
                            <br>
                            <em style="" >
                              En activant cette option, le mode de règlement par virement apparaîtra sur vos factures.
                            </em>
                            {{-- <p style="opacity:0.7" class="hidden"><i class="fa fa-close"></i> Virement désactivé.</p> --}}
                        </div>
                        
                       
                        {{-- <div class="form-group">
                          <label>Renseignez votre IBAN</label>
                          <input data-mask="iban" type="iban" class="form-control">
                          <p style="opacity:0.7">exemple : FR76 30004 00003 12345678901 43</p>
                        </div> --}}
                       {{--  <div class="form-group">
                          <label>Renseignez le BIC</label>
                          <input type="name" placeholder="exemple : BNPAFRPP" class="form-control">
                        </div> --}}

                        {{-- <div class="row">
                          <div class="form-group col-md-12">
                            <label>Your birth date</label>
                          </div>
                        </div> --}}
                        {{-- <div class="row no-margin-y">
                          <div class="form-group col-xs-3">
                            <input type="name" placeholder="DD" class="form-control">
                          </div>
                          <div class="form-group col-xs-3">
                            <input type="name" placeholder="MM" class="form-control">
                          </div>
                          <div class="form-group col-xs-3">
                            <input type="name" placeholder="YYYY" class="form-control">
                          </div>
                        </div> --}}
                        
                      </div>
                      <div class="modal-footer">
                        <button id="cancelIbanButton" type="button" data-dismiss="modal" class="btn btn-default modal-close">Fermer</button>
                        {{-- <button id="saveIbanButton" type="button" class="btn btn-primary">Valider</button>  --}}
                      </div>
                      </form> 
                    </div>
                  </div>
                  {{-- FIN MODAL IBAN --}}



                <!-- Modal CHEQUE-->
                  <div id="form-secondary" class="modal-container modal-colored-header custom-width modal-effect-10">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close modal-close"><i class="icon s7-close"></i></button>
                        <h3 class="modal-title">Règlement par chèque</h3>
                      </div>
                      <div class="modal-body form">

                        <div>
                          <h4><i class="fa fa-info-circle"></i> Ordre et adresse qui apparaîtront sur vos factures.</h4><hr> 
                        </div>

                        <form id="chequeform" action="{{action('UsersController@saveCompanyCheque', ['id'=> Auth::user()->id])}}">
                        
                          <div style="margin-bottom:0px" class="form-group">
                            <label style="margin-bottom:4px">
                              <h4><u>Règlement par chèque à l'ordre de</u> :<br><br>
                              <strong> {{ $user->firstname }} {{ $user->lastname }} </strong><br>
                              {{$user->company->addresses->first()->address}} <br>
                              {{$user->company->addresses->first()->cp}} {{$user->company->addresses->first()->city}}
                              </h4>
                            </label>
                          </div>
                          <br>
                         {{--  <div class="form-group">
                            <input value="{{$user->company->addresses->first()->address}} {{$user->company->addresses->first()->cp}} {{$user->company->addresses->first()->city}}" type="text" placeholder="Ici votre adresse" class="form-control">
                            <em>Vous pouvez modifier cette adresse si vous le souhaitez.</em>
                          </div> --}}

                          <div style="margin-bottom:11px" class="form-group">
                            <label style="margin-right: 7px">
                              <h4>Activer cette option : </h4>
                            </label>
                            <div id="switch-button-cheque" class="switch-button switch-button-lg">
                              <input checked="" name="activate" class="cheque-activatebutton" id="cheque-activatebutton" type="checkbox"><span>
                              <label for="cheque-activatebutton"></label></span>
                            </div>
                            <br>
                           
                            {{--  <em style="font-style: normal;">
                              Mode de règlement par chèque disponible depuis l'édition de vos factures.
                             </em> --}}
                            
                        </div>
                          
                      </div>
                      <div class="modal-footer">
                        <button id="cancelIbanButton" type="button" data-dismiss="modal" class="btn btn-default modal-close">Fermer</button>
                        {{-- <button id="saveIbanButton" type="button" class="btn btn-primary">Valider</button> --}}
                      </div>
                      </form> 
                    </div>
                  </div>
                  {{-- FIN MODAL CHEQUE --}}


                  <!-- Modal PAYPAL-->
                  <div id="form-paypal" class="modal-container modal-colored-header custom-width modal-effect-10">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close modal-close"><i class="icon s7-close"></i></button>
                        <h3 class="modal-title">Règlement par Paypal</h3>
                      </div>
                      <div class="modal-body form">

                        <div>
                          <h4><i class="fa fa-info-circle"></i> Adresse Email Paypal qui apparaîtra sur vos factures.</h4><hr> 
                        </div>

                        <form id="paypalform" action="{{action('UsersController@saveCompanyPaypal', ['id'=> Auth::user()->id])}}">
                        
                          <div style="margin-bottom:0px" class="form-group">     
                            <input name="paypalemail" class="form-control" value="{{ $user->email }}" type="text" placeholder="Votre Email Paypal">
                            <em>Vous pouvez modifier votre Email paypal.</em>
                          </div>
                          <br>

                          <div style="margin-bottom:11px" class="form-group">
                            <label style="margin-right: 7px">
                              <h4>Activer cette option : </h4>
                            </label>
                            <div id="switch-button-paypal" class="switch-button switch-button-lg">
                              <input checked="" name="activate" class="paypal-activatebutton" id="paypal-activatebutton" type="checkbox"><span>
                              <label for="paypal-activatebutton"></label></span>
                            </div>
                            <br>
                            
                             {{-- <em style="font-style: normal;">
                              Mode de règlement par Paypal disponible depuis l'édition de vos factures.
                             </em> --}}
                           
                        </div>
                          
                      </div>
                      <div class="modal-footer">
                        <button id="cancelIbanButton" type="button" data-dismiss="modal" class="btn btn-default modal-close">Fermer</button>
                        {{-- <button id="saveIbanButton" type="button" class="btn btn-primary">Valider</button> --}}
                      </div>
                      </form> 
                    </div>
                  </div>
                  {{-- FIN MODAL PAYPAL --}}

                  <form id="moneyform" action="{{action('UsersController@saveCompanyMoney', ['id'=> Auth::user()->id])}}"></form>


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
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.addListener('place_changed', fillInAddress);
      }
      function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
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

        var errAddress = document.getElementById("autocomplete").parentNode.parentNode.querySelector('.errors');
        errAddress.innerHTML = "<i class='fa fa-check-circle'></i> OK Adresse valide";
        $(errAddress).css('color', "#888");
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

