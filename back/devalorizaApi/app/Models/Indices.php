<?php

namespace App\Models;
use Jenssegers\Mongodb\Eloquent\Model;


class Indices extends Model{
    protected $connection = 'mongodb';
    protected $collection = 'indices';
    protected $primaryKey = '_id';
    protected $dates = ['updated_at', 'create_at'];
    
    public function allIndices()
    {
        return Indices::all();
    }

}