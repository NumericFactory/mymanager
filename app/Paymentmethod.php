<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Paymentmethod extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type'
    ];

    public function user()
    {
        return $this->belongsToMany('App\User');
        			// ->withTimestamps();
        			// ->withPivot('meta', 'activate')
    }

}
