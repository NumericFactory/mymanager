<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function lines()
    {
    	return $this->morphMany('App\Line', 'linable');
    }
}
