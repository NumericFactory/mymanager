var App = (function () {
  'use strict';
  
  App.masks = function( ){

    $("[data-mask='date']").mask("99/99/9999");
    $("[data-mask='phone']").mask("(999) 999-9999");
    $("[data-mask='phone-ext']").mask("(999) 999-9999? x99999");
    $("[data-mask='phone']").mask("07 99 99 99 99");
    $("[data-mask='taxid']").mask("99-9999999");
    $("[data-mask='ssn']").mask("999-99-9999");
    $("[data-mask='product-key']").mask("a*-999-a999");
    $("[data-mask='percent']").mask("99%");
    $("[data-mask='currency']").mask("$999,999,999.99");
    $("[data-mask='siren']").mask("999 999 999");
    $("[data-mask='iban']").mask("FR99 9999 9999 99** **** **** *99");
    $("[data-mask='bic']").mask("aaaaaaaaaaa");
    
  };

  return App;
})(App || {});
