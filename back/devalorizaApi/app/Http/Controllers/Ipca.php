<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inflacao as Inflacao;
use App\Models\DolarModel as DolarModel;

class Ipca extends Controller
{
    protected $acessoAoIpca;
    protected $acessoAoDolar;
    protected $request;
    function __construct(Request $request){
        $this->acessoAoIpca = new Inflacao();
        $this->acessoAoDolar = new DolarModel();
        $this->request = $request;
    }
    public function index(){
        $query = $this->request->query();

        if(!$this->dataVazia($query)){
            $query = array(
                'dataInicial' =>  $this->parametrizarData($query['dataInicial']) ,
                'dataFinal'   =>  $this->parametrizarData($query['dataFinal']) ,
            );
            $newResult = [
                'ipca'   => $this->acessoAoIpca->select($query),
                'dolar'  => [
                    "dataInicial" => $this->acessoAoDolar->select($query['dataInicial']),
                    "dataFinal" => $this->acessoAoDolar->select($query['dataFinal'])
                ]
                //'dolar'  => $this->acessoAoDolar->select($query)
            ];
            return response()->json($newResult,200,['Charset' => 'utf-8'],JSON_UNESCAPED_UNICODE);
        }
        $array = array('erro' => 'O campo está vazio!');
        return response()->json($array,400);
    }

    private function parametrizarData(String $date){
        $newDate = explode('-',$date);
        $newDate = array(
            'dia' => isset($newDate[0]) ? $newDate[0] : '',
            'mes' => isset($newDate[1]) ? $newDate[1] : '',
            'ano' => isset($newDate[2]) ? $newDate[2] : '',
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
