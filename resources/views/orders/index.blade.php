@extends('layouts.factlayout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            
            <div class="panel panel-default">
                <div class="panel-heading">
                  <div class="tools"><span class="icon s7-upload"></span><span class="icon s7-edit"></span><span class="icon s7-close"></span></div>
                <!--   <div class="panel-title">Toutes les factures</div> -->
                   <button data-modal="form-primary" class="btn btn-space btn-primary md-trigger">Primary</button>
                </div>
                <div class="panel-body">
                  <table class="table table-condensed table-hover table-bordered table-striped">
                    <thead>
                      <tr>
                        <th width="12%">Etat</th>
                        <th>N°</th>
                        <th>Etat</th>
                        <th>Nom du client</th>
                        <th>Ref. projet</th>
                        <th>Montant</th>
                        <th>Pdf</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="icon"><i class="icon s7-close"></i> En attente de règlement</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">F101</td>
                        <td>Windows</td>
                        <td class="number">4200.00€</td>
                        <td class="date"></td>
                        <td class="date">26/02/2017</td>
                        <td class="action">Relance</td>
                      </tr>
                      <tr>
                        <td class="icon"><i class="icon s7-check"></i> Réglé en totalité</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">F102</td>
                        <td>Apple</td>
                        <td class="number">450.00€</td>
                        <td class="date">17/02/2017</td>
                        <td class="date">18/02/2017</td>
                        <td class="action">Relance</td>
                      </tr>
                      <tr>
                        <td class="icon"><i class="icon s7-check"></i> Réglé en totalité</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">F103</td>
                        <td>Samsung</td>
                        <td class="number">399.70€</td>
                        <td class="date">17/02/2017</td>
                        <td class="date">18/02/2017</td>
                        <td class="action">Relance</td>
                      </tr>
                      <tr>
                        <td class="icon"><i class="icon s7-check"></i> Réglé en totalité</td>
                        <td class="date">16/02/2017</td>
                        <td class="ref">F104</td>
                        <td>Asus</td>
                        <td class="number">1299.00€</td>
                        <td class="date">17/02/2017</td>
                        <td class="date">18/02/2017</td>
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