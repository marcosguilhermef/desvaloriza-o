<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Indices as Indice;
class Indices extends Controller
{
    protected $acessoAoIndice;
    protected $request;
    function __construct(Request $request){
        $this->acessoAoIndice = new Indice();
        $this->request = $request;
    }
    public function index(){
        $array = $this->acessoAoIndice->allIndices();
        return response()->json($array,200);
    }
}