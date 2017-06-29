@extends('layouts.factlayout')

@section('content')
    <div class="row">
        <div class="col-lg-2 col-md-12 hidden-sm pull-right">
          <div class="menu-assist">
            <a href="#">Aide</a>
            <a href="#">Voir la vidéo</a>
            <a href="#">Signaler un bug</a>
          </div>
        </div>
        <div class="col-lg-10 col-md-12">
            
            <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="tools"><span class="icon s7-upload"></span><span class="icon s7-edit"></span><span class="icon s7-close"></span></div>
                <!--   <div class="panel-title">Toutes les factures</div> -->
                  <span style="border: 1px solid #eee !important;
                                border: 1px solid rgba(155,175,185, 0.67) !important;
                                position: relative;
                                left: -2px;
                                top: 45px;
                                font-size: 1.7em;
                                color: #ccc;
                                border-radius: 3px 0 0 3px;
                                border-right-width: 0 !important;">
                                <i style="position: relative;
                                          top: 2px;
                                          left: 7px;"class="icon s7-search">           
                                </i>
                  </span>
                  <input style="width: auto;
                                position: relative;
                                left: 30px;
                                top: 1px;
                                border-left: 0;
                                border-radius: 0 3px 3px 0;" 
                        placeholder="rechercher" class="form-control">
                </div>
                <div class="panel-body">
                  <table class="table table-condensed table-hover table-striped">
                    <thead>
                      <tr>
                        <th style="min-width:107px">Etat</th>
                        <th>Date</th>
                        <th>Devis</th>
                        <th style="text-align:left">Nom du client</th>
                        <th style="text-align:left">Ref. projet</th>
                        <th style="min-width:101px;">Montant</th>
                        <th>Pdf</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="icon"><i class="icon s7-close"></i> En attente</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">D1001</td>
                        <td>3W ACADEMY</td>
                        <td class="">Création de site internet + référencement + formation technique</td>
                        <td class="number">4 200.00€</td>
                        <td class="date"><i class="icon s7-file" style="font-size: 2.1em;"></i></td>
                        <td class="action">Relance</td>
                      </tr>
                      <tr>
                        <td class="icon"><i class="icon s7-check"></i> Accepté</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">D1002</td>
                        <td>MONSIEUR DIDIER BARQUERO</td>
                        <td class="">Formation Javascript Paris 19e</td>
                        <td class="number">450.00€</td>
                        <td class="date"><i class="icon s7-file" style="font-size: 2.1em;"></i></td>
                        <td class="action">Relance</td>
                      </tr>
                      <tr>
                        <td class="icon"><i class="icon s7-check"></i> Accepté</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">D103</td>
                        <td>DIGTITAL WAVE</td>
                        <td class="">Développement application mobile CitysportApp</td>
                        <td class="number">399.70€</td>
                        <td class="date"><i class="icon s7-file" style="font-size: 2.1em;"></i></td>
                        <td class="action">Relance</td>
                      </tr>
                      <tr>
                        <td class="icon"><i class="icon s7-check"></i> Accepté</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">D104</td>
                        <td>Asus</td>
                        <td class="">Référencement du site FactureHero / 12 mois</td>
                        <td class="number">1 299.00€</td>
                        <td class="date"><i class="icon s7-file" style="font-size: 2.1em;"></i></td>
                        <td class="action">Relance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


        </div>
    </div>

<!-- Nifty Modal-->
                  <div id="form-primary" class="modal-container modal-colored-header custom-width modal-effect-3">
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