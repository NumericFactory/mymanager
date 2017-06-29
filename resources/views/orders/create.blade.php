@extends('layouts.factlayout')

@section('content')
<div class="row">

             <div class="col-lg-2 col-md-12 pull-right">
              <div class="menu-assist">
                <a href="#">Aide</a>
                <a href="#">Voir la vidéo</a>
                <a href="#">Signaler un bug</a>
              </div>
            </div>

            <div class="col-lg-10 col-md-12">
              <div class="invoice">
                <div class="row invoice-header">
                  <div class="col-xs-7">
                    <div class="invoice-logo"></div>
                  </div>
                  <div class="col-xs-5 invoice-order"><span class="invoice-id">Devis n° 101</span>
                  <span class="incoice-date">Le 01/03/2017</span>
                  </div>
                </div>
                <div class="row invoice-data">

                  <div class="col-sm-5 invoice-person">
                    <header class="freelance-address-header">
                    <h3 class="fs-medium category-address">Mes coordonnées</h3>
                    <a onclick="event.preventDefault();" data-modal="form-primary" title="Editer vos coordonnées" id="openFreelanceAddressFormButton" role="button" href="#" class="clickable hidden-when-read-only hidden-print md-trigger">
                      <i class="fa fa-pencil"></i>
                      <span class="sr-only">Modifier mes coordonnées</span>
                    </a>
                  </header>
                    <span class="name">{{$user->company->name}} / Web Developper</span>
                    <span>{{$user->company->addresses->first()->address}} {{$user->company->addresses->first()->cp}} {{$user->company->addresses->first()->city}}</span>
                    <span>Siren : {{$user->company->siren}}</span>
                    <span class="phone">{{$user->tel}}</span>
                    <span class="email">{{$user->email}}</span>
                  </div>

                  <div class="col-sm-3 invoice-payment-direction">
                    <i class="icon mdi mdi-chevron-right"></i>
                  </div>
                  <div class="col-sm-4 invoice-person client-person">
                   <header class="client-address-header">
                   <!--  <h3 class="fs-medium category-address">Client</h3> -->
                    
                    <select title="Sélectionnez un Client" id="first-disabled" class="selectpicker" data-hide-disabled="true" data-live-search="true">
                     <option><a href="#" class="btn btn-danger">Saisir un nouveau client</a></option>
                      <optgroup disabled="disabled" label="disabled">
                        <option>Hidden</option>
                      </optgroup>
                      <optgroup label="Clients">
                        @foreach($customers as $customer)
                          <option value="{{$customer->id}}" data-address="{{$customer->addresses->first()->address}}" data-cp="{{$customer->addresses->first()->cp}}" data-city="{{$customer->addresses->first()->city}}" data-country="{{$customer->addresses->first()->country}}">
                          {{$customer->name}} 
                          @if(trim($customer->optionnalname) !='' || $customer->optionnalname != null) 
                          / {{$customer->optionnalname}} 
                          @endif
                          </option>
                        @endforeach
                      </optgroup>
                    </select>



                  </header>
                    <span class="name"><a onclick="event.preventDefault();" data-modal="form-primary" title="Modifier le nom du Client" id="openClientNameButton" role="button" href="#" class="clickable hidden-when-read-only hidden-print md-trigger">
                      <i class="fa fa-pencil"></i>
                      <span class="sr-only">Modifier mes coordonnées</span>
                    </a> Civiliz</span>
                    <span>105 rue Voltaire</span>
                    <span>92800 Puteaux</span>
                    <span>Contact : Marion Blanc</span>
                  </div>
                </div>

         <!--  FORMULAIRE MISSION  -->
        
          <!--  FIN FORMULAIRE MISSION -->

          <!-- MISSION -->
         <div class="row">
            <div class="col-md-12">
              <div class="panel panel-grey">
                <div class="panel-body">
                  <form action="#" class="form-horizontal group-border-dashed" novalidate="">
                    <div class="form-group col-md-7">
                      <label class="col-md-2 col-sm-4 control-label">Mission</label>
                      <div class="col-md-9 col-sm-8">
                        <input required="" class="form-control" data-parsley-id="28" placeholder="Nom de la mission" type="text">
                      </div>
                    </div>
                    {{-- <div class="form-group col-md-5">
                      <label class="col-md-4 col-sm-4 control-label">Référence interne</label>
                      <div class="col-md-8 col-sm-8">
                        <input required="" data-parsley-max="6" class="form-control" data-parsley-id="38" placeholder="" type="text">
                      </div>
                    </div>   --}} 
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- FIN MISSION -->
                <div class="row">
                  <div class="col-md-12">
                    <table class="invoice-details">
                      <tbody id="linesInTbody">
                      <tr>
                        <span style="position:absolute;top:35px;left:-15px;font-size: 1.7em;color: #87878e;" class="">
                        <a href="#">
                          <i title="Déplacer" class="icon s7-expand1" style="color: #87878e;"></i>
                        </a>
                        </span> 
                        <th style="width:60%">Détails</th>
                        <th style="width:5%; text-align: center" class="hours">Qté</th>
                        <th style="width:11%; text-align: center" class="amount">Prix Unit. (HT)</th>
                        <th style="width:8%" class="amount">TOTAL</th>
                        <th style="width:3%"></th>
                      </tr>
                        <tr class="mission-line jsinit">
                        
                        <td class="fakeform full-width description c1">
                          <div class="flex-full-width">
                            <i class="fa fa-bars hidden"></i>
                            <div class="fill-width">
                              <div class="controls">
                               <textarea id="lines[0].description" name="lines[0].description" data-ng-required="true" data-placement="top" placeholder="Description" data-trigger="focus" rows="3" data-original-title="" title=""></textarea>
                             </div>
                           </div>
                         </div>
                       </td>
                       <td class="c2 hours">
                        <div class="">
                          <!-- <label class="" for="lines[0].quantity"></label> -->
                          <div class="w-add-on">
                            <input id="qty" name="lines[0].quantity" class="qty qty-l1" data-type="number" data-ng-required="true" data-placement="top" step="any" data-trigger="focus" value="1" data-original-title="" title="" type="text">
                          </div>
                        </div>
                      </td>
                      <td class="c3 amount">
                        <div class="">
                          <!-- <label class="" for="lines[0].unitPrice"></label> -->
                          <div class="w-add-on-right">
                            <input id="unitPriceline" class="currency currency-l1">
                            <span class="add-on">€</span>
                          </div>
                        </div>
                      </td>
                      <td class="totalrowth amount c4">
                        <span id="totalPriceline" class="totalrow totalrow-l1">0,00</span> €
                      </td>
                      <td style="float:right" class="">
                        <span style="position:relative;top:4px" class="">
                        <a href="#">
                          <i title="Supprimer" class="icon s7-trash" style="font-size: 1.7em;color: #87878e"></i>
                        </a>
                        </span> 
                      </td>

                      <!-- 
                      <td headers="c5">
                        <div class="pull-right action-row clickable orange">
                          <i class="fa fa-times-circle deletable-row hidden"><span class="sr-only">Supprimer la ligne</span></i>
                        </div>
                      </td> -->
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    </div>

                    <div class="row">
                       <div class="col-md-12">
                          <button id="addable-row" type="button" class="addable-row clickable nostyle-button">
                            <i class="fa fa-plus-square orange"></i> Ajouter une ligne
                          </button>
                      </div>
                    </div>

                    <div class="row">
                       <div class="col-md-12">
                          <hr>
                      </div>
                    </div>

                    <div class="col-md-4 pull-right">
                    <div class="quotation-total-ht row no-row-padding">
                        <div class="col-md-6 col-md-offset-6">
                            <p class="totalht">
                                TOTAL (HT)<br>
                                <span class="amount"><span id="grandtotalht">0,00</span> €</span>
                            </p>
                        </div>
                    </div>
                    <p class="col-md-12 text-center" style="color: #444; margin-top:5px">TVA non applicable, art. 293B du CGI</p>
                    </div>
                   
                      <!--   
                      <tr>
                        <td class="description">Logo design (Cras faucibus tincidunt elit id rhoncus.)</td>
                        <td class="hours">3</td>
                        <td class="amount">150.00 €</td>
                        <td class="amount">450.00 €</td>
                      </tr> -->

                    {{--  <div class="row">
                        <div class="col-md-12">
                          <table class="invoice-details">
                            <tbody>

                      <tr>
                        <td></td>
                        <td></td>
                        <td class="summary">Sous-total</td>
                        <td class="amount">1 755.00 €</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td class="summary">Remise (10%)</td>
                        <td class="amount">175.55 €</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td class="summary total">Total</td>
                        <td class="amount total-value">1 580 €</td>
                      </tr>
                    </tbody></table>
                  </div>
                </div> --}}

                <div class="row">
                  <div class="col-md-12 invoice-payment-method"><span class="title">Conditions de paiment</span><span>Virement</span><span>Banque: BNP</span><span>BIC: 4256981387</span></div>
                </div>
                
                <div class="row invoice-company-info">
                  <div class="col-sm-2 logo"><img src="assets/img/logo-invoice-symbol.png" alt="Logo-symbol"></div>
                  <div class="col-sm-4 summary"><span class="title">Frederic Lossignol</span>
                    <p>Pour tous renseignements concernant ce devis, merci de contacter vitre interlocuteur : </p>
                  </div>
                  <div class="col-sm-3 phone">
                    <ul class="list-unstyled">
                      <li>0148346589</li>
                      <li>0688362255</li>
                    </ul>
                  </div>
                  <div class="col-sm-3 email">
                    <ul class="list-unstyled">
                      <li>frederic.lossignol@gmail.com</li>
                      <li>frederic.lossignol@mymanager.com</li>
                    </ul>
                  </div>
                </div>
                <div class="row invoice-footer">
                  <div class="col-md-12">
                   {{--  <button class="btn btn-lg btn-space btn-default">Enregistrer PDF</button>
                    <button class="btn btn-lg btn-space btn-default">Imprimer</button> --}}
                    <button class="btn btn-lg btn-space btn-primary">Valider</button>
                  </div>
                </div>
              </div>
            </div> {{-- FIN FORMULAIRE --}}

           

          </div>

 {{-- Nifty Modal --}}
                  <div id="form-primary" class="modal-container modal-colored-header custom-width modal-effect-3">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close modal-close"><i class="icon s7-close"></i></button>
                        <h3 class="modal-title">Modifier mes coordonnées de contact</h3>
                      </div>
                      <div class="modal-body form">
                        
                        <span class="fa fa-info-circle"></span> Vous pouvez modifier vos coordonnées de contact sur ce devis, si vous le souhaitez.
                        <hr>
                           
                        <div class="form-group">
                          <label>Votre email</label>
                          <input value="{{$user->email}}" type="email" placeholder="ex: fred@gmail.com" class="form-control">
                        </div>
                        <div class="form-group">
                          <label>Téléphone principal</label>
                          <input value="{{$user->tel}}" type="phone" placeholder="06 88 36 22 55" class="form-control">
                        </div>
                       
                      </div>
                      <div class="modal-footer">
                        <button type="button" data-dismiss="modal" class="btn btn-default modal-close">Fermer</button>
                        <button type="button" data-dismiss="modal" class="btn btn-primary modal-close">Valider</button>
                      </div>
                    </div>
                  </div>
                  <div class="modal-overlay"></div>





<template id="template1">
          <tr class="mission-line jsinit">
                        <td class="fakeform full-width description c1">
                          <div class="flex-full-width">
                            <i class="fa fa-bars hidden"></i>
                            <div class="fill-width">
                              <div class="controls">
                               <textarea id="lines[0].description" name="lines[0].description" data-ng-required="true" data-placement="top" placeholder="Description" data-trigger="focus" rows="3" data-original-title="" title=""></textarea>
                             </div>
                           </div>
                         </div>
                       </td>
                       <td class="c2 hours">
                        <div class="">
                          <!-- <label class="" for="lines[0].quantity"></label> -->
                          <div class="w-add-on">
                            <input id="qty" name="lines[0].quantity" class="qty " data-type="number" data-ng-required="true" data-placement="top" step="any" data-trigger="focus" value="1" data-original-title="" title="" type="text">
                          </div>
                        </div>
                      </td>
                      <td class="c3 amount">
                        <div class="">
                          <!-- <label class="" for="lines[0].unitPrice"></label> -->
                          <div class="w-add-on-right">
                            <input id="unitPriceline" class="currency">
                            <span class="add-on">€</span>
                          </div>
                        </div>
                      </td>
                      <td class="totalrowth amount c4">
                        <span id="totalPriceline" class="totalrow">0,00</span> €
                      </td>
                    
                    </tr>

</template>



@endsection



@section('pagescript')
    {{-- <script src="{!! elixir('assets/lib/jquery-ui/jquery-ui.min.js') !!}"></script>
    <script src="{!! elixir('assets/lib/jquery.nestable/jquery.nestable.js') !!}"></script>
    <script src="{!! elixir('assets/lib/moment.js/min/moment.min.js') !!}"></script> --}}
  
   {{--  <script src="{!! elixir('assets/lib/datetimepicker/js/bootstrap-datetimepicker.min.js') !!}"></script> --}}
   {{-- <script src="{!! elixir('assets/lib/select2/js/select2.min.js') !!}"></script> --}}
    <script src="{!! elixir('assets/lib/bootstrap-select/js/bootstrap-select.js') !!}"></script>
   
   {{--  <script src="{!! elixir('assets/lib/bootstrap-slider/js/bootstrap-slider.js') !!}"></script> --}}
    
    <script src="{!! elixir('assets/js/app-form-elements.js') !!}"></script>
    
@stop

