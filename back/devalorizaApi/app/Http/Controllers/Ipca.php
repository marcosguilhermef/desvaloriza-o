<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inflacao as Inflacao;
class Ipca extends Controller
{
    protected $acessoAoIpca;
    protected $request;
    function __construct(Request $request){
        $this->acessoAoIpca = new Inflacao();
        $this->request = $request;
    }
    public function index(){
        $query = $this->request->query();

        if(!$this->dataVazia($query)){
            $query = array(
                'dataInicial' =>  $this->parametrizarData($query['dataInicial']) ,
                'dataFinal'   =>  $this->parametrizarData($query['dataFinal']) ,
            );
            return response()->json($this->acessoAoIpca->select($query),200,['Charset' => 'utf-8'],JSON_UNESCAPED_UNICODE);
        }

        $array = array('erro' => 'O campo está vazio!');
        return response()->json($array,400);
    }

    private function parametrizarData(String $date){
        $newDate = explode('-',$date);
        $newDate = array(
            'mes' => isset($newDate[0]) ? $newDate[0] : '',
            'ano' => isset($newDate[1]) ? $newDate[1] : '',
        );
        return $newDate;
    }

    private function dataVazia(array $query){
        if(!isset($query['dataInicial'])){
            return true;
        }
        if(!isset($query['dataFinal'])){
            return true;
        }
        return false;
    }
    public function allData(){
        return response()->json($this->acessoAoIpca->allData(),200,['Charset' => 'utf-8'],JSON_UNESCAPED_UNICODE);
    }
}
