<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Company extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'companytype',
        'siren', 
        'nic'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /*public function address()
    {
        return $this->hasOne('App\Address');
    }*/
    public function addresses()
    {
        return $this->morphMany('App\Address', 'addressable');
    }

    
}

