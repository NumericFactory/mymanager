@extends('layouts.factlayout')

@section('content')
    <div class="row pricing-tables">
            
            <div class="col-md-4">
              <div class="pricing-table pricing-table-success">
                <div class="pricing-table-title">ESSENTIEL</div>
                <div class="pricing-table-price"><span class="currency">€</span><span class="value">1</span><span class="frecuency">/mois</span></div>
                <div class="pricing-table-description">Ideal pour vos devis et factures</div>
                <div class="panel-divider panel-divider-xl"></div>
                <ul class="pricing-table-features">
                  <li>Créer vos devis et factures</li>
                  <li>Imprimer vos devis et factures en 1 clic</li>
                  <li>Gérer vos Clients</li>
                </ul><a href="#" class="btn btn-success">Vous êtes ESSENTIEL</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pricing-table pricing-table-alt3">
                <div class="pricing-table-title">PRO</div>
                <div class="pricing-table-price"><span class="currency">€</span><span class="value">5</span><span class="frecuency">/mois</span></div>
                <div class="pricing-table-description">Pour vos devis et factures + Fonctionnalités avancées</div>
                <div class="panel-divider panel-divider-xl"></div>
                <ul class="pricing-table-features">
                  <li>Faites vos relances Clients en 1 clic</li>
                  <li>Envois automatiques de vos devis et factures à vos Clients</li>
                  <li>Signatures électroniques pour vos Clients (24/ans)</li>
                </ul><a href="#" class="btn btn-alt3">Passer PRO</a>
              </div>
            </div>
          </div>

@endsection