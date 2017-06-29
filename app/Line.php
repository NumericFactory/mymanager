<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Line extends Model
{
    public function linable()
    {
    	return $this->morphTo();
    }
}
