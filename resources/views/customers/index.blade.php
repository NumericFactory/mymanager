@extends('layouts.factlayout')

@section('content')
   <div class="row">
        <div class="col-lg-2 col-md-12 hidden-sm pull-right">
         <div class="menu-assist">

          <input name="customersuser_search" placeholder="Rechercher" class="form-control" value="" type="text">
          <h2>Trier</h2>
            <a href="#"><i class="icon s7-repeat"></i> par ordre d'ajout</a>
            <a href="#"><i class="icon s7-repeat"></i> par client</a>
            <a href="#"><i class="icon s7-repeat"></i> par C.A</a>
          <h2>Filtrer</h2>
            <a href="#">facture / devis en attente</a>
          </div>
        </div>


        <div class="col-lg-10 col-md-12">
       <!--  <div class="row"> -->
       <div class="panel panel-default">
                <!-- <div class="panel-heading" style="display: flex">
                  <div class="tools"><span class="icon s7-edit"></span></div>
                
                 <a href="{{route('customers.create')}}" class="btn btn-space btn-primary md-trigger pagelink">
                  <i class="fa fa-plus"></i> Ajouter un client
                 </a>
                
                </div> -->
                <div class="panel-body md-pl-0 md-pr-0">

          @foreach($customers as $customer)
          <div class="col-lg-4 col-md-4 col-sm-6" style="padding-left:21px; padding-right: 21px;">
            <div class="panel panel-primary panel-card">
              <div class="panel-heading">
                <div class="tools ">
                  <a href="#" class="btn-default">
                    <i class="icon s7-user"></i>
                  </a>
                </div>
                <span class="title" style="/*! text-align: center; */font-weight: bold;">{{$customer->name}}</span>
              </div>

              <div class="panel-body">
                <div class="col-sm-6 text-center"><span style="display: block;font-size: 1.5em;font-weight: bold;">3</span>DEVIS</div>
                <div class="col-sm-6 text-center"><span style="display: block;font-size: 1.5em;font-weight: bold;">5</span>FACTURES</div> 
                
                 <!-- <div class="col-md-12 md-pt-30  md-pt-40 text-center">
                 <button type="submit" id="useredit-step1-button" data-wizard="#wizard1" class="btn btn-primary btn-space wizard-next" style="border-radius: 5px;text-transform: uppercase;">Créer devis / facture</button>
                                </div>  -->

              </div>
              
              <div class="panel-footer text-center">
                
                <div class="col-md-12 text-left md-pl-0 md-pr-0">
                  @if(count($customer->addresses))
                    @foreach($customer->addresses as $address)
                        {{$address->address}}<br> {{$address->cp}} {{$address->city}} 
                        @if(strToLower($address->country) != 'france') - {{$address->country}} @endif          
                    @endforeach
                  @else
                    <a href="#">+ ADRESSE</a>
                  @endif
                </div>
              </div>
              

            </div>
          </div>
          @endforeach


            </div>
            </div>
            
          </div>
            
          <!--   <div class="panel panel-default">
              <div class="panel-heading">
                <div class="tools"><span class="icon s7-upload"></span><span class="icon s7-edit"></span><span class="icon s7-close"></span></div>
                <div class="panel-title">Toutes les factures</div>
                 <a href="{{route('customers.create')}}" class="btn btn-space btn-primary md-trigger pagelink"><i class="fa fa-plus"></i> Nouveau client</a>
              </div>
              <div class="panel-body">
                <table class="table table-condensed table-hover table-bordered table-striped">
                  <thead>
                    <tr>
                      <th width="12%">Nom du Client</th>
                      <th>Interlocuteur</th>
                      <th>Email</th>
                      <th>Telephone</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>WebForce3</td>
                      <td class="date">Boris Assouline</td>
                      <td class="ref">boris@wf3.fr</td>
                      <td>0609730673</td>
                      <td class="action">Voir</td>
                    </tr>
                    <tr>
                      <td>3Wacademy</td>
                      <td class="date">Djamchid Dalili</td>
                      <td class="ref">djamchid@3wa.fr</td>
                      <td>0609852525</td>
                      <td class="action">Voir</td>
                    </tr>
                    <tr>
                      <td>WebForce3</td>
                      <td class="date">Boris Assouline</td>
                      <td class="ref">boris@wf3.fr</td>
                      <td>0609730673</td>
                      <td class="action">Voir</td>
                    </tr>
                    <tr>
                     <td>3Wacademy</td>
                      <td class="date">Djamchid Dalili</td>
                      <td class="ref">djamchid@3wa.fr</td>
                      <td>0609852525</td>
                      <td class="action">Voir</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> -->

        </div>
 <!-- </div> ROW -->

<!-- Nifty Modal-->
                  <div id="form-secondary" class="modal-container modal-colored-header custom-width modal-effect-10">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close modal-close"><i class="icon s7-close"></i></button>
                        <h3 class="modal-title">Form Modal</h3>
                      </div>
                      <div class="modal-body form">
                        <div class="form-group">
                          <label>Email address</label>
                          <input type="email" placeholder="username@example.com" class="form-control">
                        </div>
                        <div class="form-group">
                          <label>Your name</label>
                          <input type="name" placeholder="John Doe" class="form-control">
                        </div>
                        <div class="row">
                          <div class="form-group col-md-12">
                            <label>Your birth date</label>
                          </div>
                        </div>
                        <div class="row no-margin-y">
                          <div class="form-group col-xs-3">
                            <input type="name" placeholder="DD" class="form-control">
                          </div>
                          <div class="form-group col-xs-3">
                            <input type="name" placeholder="MM" class="form-control">
                          </div>
                          <div class="form-group col-xs-3">
                            <input type="name" placeholder="YYYY" class="form-control">
                          </div>
                        </div>
                        <p>
                          <input type="checkbox" name="c[]" checked="">  Send me notifications about new products and services.
                        </p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" data-dismiss="modal" class="btn btn-default modal-close">Cancel</button>
                        <button type="button" data-dismiss="modal" class="btn btn-primary modal-close">Proceed</button>
                      </div>
                    </div>
                  </div>
                  <div class="modal-overlay"></div>

@endsection