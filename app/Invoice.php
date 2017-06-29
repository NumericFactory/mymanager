<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    /**
    * Get all of the orderlines for the invoice.
    * https://laravel.com/docs/5.4/eloquent-relationships#has-many-through
    *
    * La relation "has-many-through"
    * offre une solution pour accéder à un modèle distant via une relation intermédiaire
    *
    | invoices
    	id - integer
    	name - string

	| orders
    	id - integer
    	user_id - integer
    	invoice_id - string
    	active 0	

	| orderlines
    	id - integer
    	order_id - integer
    	name - string
    */
    /*public function orderlines()
    {
        return $this->hasManyThrough('App\Orderline', 'App\Order');
    }*/
    
    public function lines()
    {
        return $this->morphMany('App\Line', 'linable');
    }

}
