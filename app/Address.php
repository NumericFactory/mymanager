<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [ 
        'formatted_address', 
        'address', 
        'complementaddress',
        'cp', 
        'city', 
        'country', 
        'otherdetails'
    ];

    /*public function company()
    {
        return $this->belongsTo('App\Company');
    }*/
    /**
     * Adress polymorphic relationship 
     * Adress belongsTo Customer, Address belongsToCompany 
    */
    public function addressable()
    {
        return $this->morphTo();
    }
}
