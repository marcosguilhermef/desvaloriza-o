<?php

namespace App\Http\Controllers;
use App\Models\DolarModel;
use Illuminate\Http\Request;

class DolarController extends Controller
{
    protected $acessoAoIndice;
    protected $request;
    function __construct(Request $request){
        $this->acessoAoIndice = new DolarModel();
        $this->request = $request;
    }
    public function allData(){
        $array = $this->acessoAoIndice->allData();
        return response()->json($array,200);
    }
}
