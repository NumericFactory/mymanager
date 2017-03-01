@extends('layouts.factlayout')

@section('content')


  <div class="row wizard-row">
            <div class="col-lg-9 col-md-12 fuelux">
              <div class="block-wizard panel panel-default">
                <div id="wizard1" class="wizard wizard-ux">
                  <ul class="steps">
                    <li data-step="1" class="active">Identité<span class="chevron"></span></li>
                    <li data-step="2">Adresse de facturation<span class="chevron"></span></li>
                    <li data-step="3">Contact<span class="chevron"></span></li>
                    <li data-step="4">Règlement<span class="chevron"></span></li>
                   
                  </ul>
                  <div class="actions">
                    <button type="button" class="btn btn-xs btn-prev btn-default"><i class="icon s7-angle-left"></i>Précédent</button>
                    <button type="button" data-last="Finish" class="btn btn-xs btn-next btn-default">Suivant<i class="icon s7-angle-right"></i></button>
                  </div>
                  <div class="step-content">
                    <div data-step="1" class="step-pane active">
                      <form action="#" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                        <div class="form-group no-padding">
                          <div class="col-sm-7">
                            <h3 class="wizard-title">Identité du client</h3>
                          </div>
                        </div>

                        {{-- DEBUT FORM --}}
                        <div class="form-group xs-pt-5">
                          <div class="col-lg-3 col-md-4 col-sm-3">
                            <label class="control-label">Nom du Client</label>
                            <p>Nom juridique de votre Client</p>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-5">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Type</label>
                            <p>Entreprise, asso, établissement public ou particulier</p>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <select title="Type du client" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                                <optgroup>
                                  <option>Entreprise</option>
                                  <option>Association</option>
                                  <option>Etablissement public</option>
                                  <option>Particulier</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-5">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">SIRET</label>
                            <p>Numéro d'identification du Client</p>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input type="text" placeholder="exemple : 795 180 280 00513" class="form-control">
                            </div>
                          </div>
                        </div>
                        
                        <div class="form-group md-pt-40">
                          <div class="col-sm-12">
                            <button data-wizard="#wizard1" class="btn btn-primary btn-space wizard-next">SUIVANT <i class="icon s7-angle-right"></i></button>
                          </div>
                        </div>
                     {{--  FIN FORM --}}
                      </form>
                    </div>

                        <div data-step="2" class="step-pane active">
                      <form action="#" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                        <div class="form-group no-padding">
                          <div class="col-sm-7">
                            <h3 class="wizard-title">Adresse de facturation du client</h3>
                          </div>
                        </div>

                        {{-- DEBUT FORM --}}
                        <div class="form-group xs-pt-5">
                          <div class="col-lg-3 col-md-4 col-sm-3">
                            <label class="control-label">Adresse</label>
                            <p>* requis</p>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-5">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Complément</label>
                            <p></p>
                          </div>
                           <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-5">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Code postal</label>
                            <p>* requis</p>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input type="text" placeholder="ex: 75009" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-5">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Ville</label>
                            <p>* requis</p>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="form-group xs-pt-5">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Pays</label>
                            <p>* requis</p>
                          </div>
                          <div class="col-lg-4 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <select title="Pays" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                                <optgroup>
                                @foreach($countries as $country)
                                  <option @if($country === 'France') selected="selected" @endif>{{$country}}</option>
                                @endforeach
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        <div class="form-group md-pt-40">
                          <div class="col-sm-12">
                             <button data-wizard="#wizard1" class="btn btn-default btn-space wizard-previous"><i class="icon s7-angle-left"></i> Précédent</button>
                            <button data-wizard="#wizard1" class="btn btn-primary btn-space wizard-next">SUIVANT <i class="icon s7-angle-right"></i></button>
                          </div>
                        </div>
                     {{--  FIN FORM --}}

                    

                      </form>
                    </div>



                    <div data-step="3" class="step-pane">
                      <form action="#" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                        <div class="form-group no-padding">
                          <div class="col-sm-7">
                            <h3 class="wizard-title">Contact</h3>
                          </div>
                        </div>

                        <div class='form-group col-sm-6'>
                          <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Civilité</label>
                          </div>
                          <div class="col-lg-9 col-md-6 col-sm-4">
                            <div class="xs-pt-15">
                              <select title="Civilité" id="first-disabled" class="selectpicker" data-hide-disabled="true">
                                <optgroup>
                                  <option>Mme</option>
                                  <option>Mlle</option>
                                  <option>Monsieur</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Prénom</label>
                            <p>Prénom du contact</p>
                          </div>
                          <div class="col-lg-9 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Nom</label>
                            <p>Nom du contact</p>
                          </div>
                          <div class="col-lg-9 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>

                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Téléphone</label>
                            <p>Fixe ou mobile</p> 
                          </div>
                          <div class="col-lg-9 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>

                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-3 col-lg-3 col-md-4">
                            <label class="control-label">Email</label>
                             <p>Email de contact</p>
                          </div>
                          <div class="col-lg-9 col-md-6 col-sm-4">
                            <div class="xs-pt-10">
                              <input type="text" placeholder="" class="form-control">
                            </div>
                          </div>
                        </div>
                        </div>

                        <div class="col-sm-1"> </div>

                        
                        <div class="form-group col-sm-5">
                        <div class="col-xs-12 xs-pt-10">
                          <div class="col-sm-7">
                            <label class="control-label">Notifications client par Email</label>
                            <p>Autoriser EZFactures à envoyer à votre Client vos devis et factures par Email</p>
                          </div>
                          <div class="col-sm-3 xs-pt-20">
                            <div class="switch-button switch-button-lg">
                              <input type="checkbox" checked="" name="swt1" id="swt1"><span>
                                <label for="swt1"></label></span>
                            </div>
                          </div>
                        </div>
                        
                        <div class="col-xs-12 xs-pt-30">
                          <div class="col-sm-7">
                            <label class="control-label">Utiliser la signature électronique</label>
                            <p><strong>N</strong>ouveau! Vos clients peuvent signer électroniquement vos devis en 1 clic !</p>
                          </div>
                          <div class="col-sm-3 xs-pt-20">
                            <div class="switch-button switch-button-lg">
                              <input type="checkbox" checked="" name="swt2" id="swt2"><span>
                                <label for="swt2"></label></span>
                            </div>
                          </div>
                        </div>

                        </div>

                        <div class="form-group col-xs-12 xs-pt-40">
                          <div class="col-sm-12">
                            <button data-wizard="#wizard1" class="btn btn-default btn-space wizard-previous"><i class="icon s7-angle-left"></i> Précédent</button>
                            <button data-wizard="#wizard1" class="btn btn-primary btn-space wizard-next">Suivant <i class="icon s7-angle-right"></i></button>
                          </div>
                        </div>
                      </form>
                    </div>




                    <div data-step="4" class="step-pane">
                      <form action="#" data-parsley-namespace="data-parsley-" data-parsley-validate="" novalidate="" class="form-horizontal group-border-dashed">
                        <div class="form-group no-padding">
                          <div role="alert" class="alert alert-info alert-icon">
                            <div class="icon"><span class="s7-info"></span></div>
                            <div class="message">
                             <strong>Mode de règlement préféré pour ce client.</strong> Vous pourrez modifier ces données depuis l'édition de vos factures si vous le souhaitez.
                            </div>
                          </div>
                        <div class="form-group col-sm-6"> 
                          <div class="">

                              <div class="col-sm-12">
                                <label class="control-label">Mode de règlement préféré</label>
                                <p>Indiquez un ou plusieurs mode(s) de règlement pour ce Client</p>
                              </div>
                              <div class="col-sm-6">
                                <div class="am-checkbox">
                                  <input id="check3" type="checkbox">
                                  <label for="check3">Virement bancaire</label>
                                </div>
                                <div class="am-checkbox">
                                  <input id="check4" type="checkbox">
                                  <label for="check4">Chèque</label>
                                </div>
                                <div class="am-checkbox">
                                  <input id="check5" type="checkbox">
                                  <label for="check5">Carte bleue</label>
                                </div>
                                <div class="am-checkbox">
                                  <input id="check6" type="checkbox">
                                  <label for="check6">Espèces</label>
                                </div>
                              </div>
                           
                          </div>
                        </div>

                        <div style="border-right:1px #ccc" class="col-sm-1"></div>

                        <div class="form-group col-sm-5">
                          <div class="col-sm-12">
                            <label class="control-label">Délai de paiement préféré</label>
                            <p>Choisissez un délai de paiement préféré pour ce client</p>
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

                        <div class="form-group col-md-12 md-pt-60">
                          <div class="col-sm-12">
                            <button data-wizard="#wizard1" class="btn btn-default btn-space wizard-previous"><i class="icon s7-angle-left"></i> Précédent</button>
                            <button data-wizard="#wizard1" class="btn btn-danger btn-space wizard-next"><i class="icon s7-check"></i> VALIDER</button>
                          </div>
                        </div>
                      </form>
                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>



@endsection



@section('pagescript')
    <script src="{!! elixir('assets/lib/fuelux/js/wizard.js') !!}"></script>
    <script src="{!! elixir('assets/lib/bootstrap-select/js/bootstrap-select.js') !!}"></script>
    <script src="{!! elixir('assets/lib/bootstrap-slider/js/bootstrap-slider.js') !!}"></script>
    <script src="{!! elixir('assets/js/app-form-wizard.js') !!}"></script> 
@stop

