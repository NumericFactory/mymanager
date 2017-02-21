<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Addresstype extends Model
{
    public function address() {
    	return $this->hasMany('App\Address')
    }
}
