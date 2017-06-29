<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
	use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'name', 
        'siret',
    ];
    protected $with = ['addresses']; 
    // Permet de charger les Addresses en même temps que le Customer
	
  
    public function type()
    {
        return $this->belongsTo('App\Type');
    }

    public function user()
    {
        return $this->belongsToMany('App\User');
        			// ->withTimestamps();
        			// ->withPivot('meta', 'activate')
    }
    public function addresses()
    {
        return $this->morphMany('App\Address', 'addressable');
    }

    public function contacts()
    {
        return $this->hasMany('App\Contact');
    }

    
}
