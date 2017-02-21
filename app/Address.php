<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    public function customer()
    {
        return $this->belongsTo('App\Customer');
    }

    public function addresstype()
    {
        return $this->belongsTo('App\Addresstype');
    }
}
