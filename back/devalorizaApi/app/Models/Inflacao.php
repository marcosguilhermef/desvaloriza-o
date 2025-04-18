<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;
use MongoDB\BSON\UTCDateTime;

class Inflacao extends Model
{
    //use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'IPCAmensalJaniero1980Fevereiro2021';
    protected $primaryKey = '_id';
    protected $dates = ['updated_at', 'create_at'];
    public function allData()
    {
        return inflacao::raw(
            function ($collection){
                return $collection->aggregate(
                    [
                        ['$unwind' => '$IPCA'],
                        ['$project' =>  ['taxa' => '$IPCA.taxa','Data' => ['$dateToString'=> array('format'=> '%d-%m-%Y','date' => '$IPCA.data.fulldate')], '_id' => 0]],
                    ]
                );
            }
        );
    }
    
    public function select(array $datas, String $indice = '6063d75974cd30cc48479bdd')
    {
        $result = inflacao::raw(
            function ($collection) use ($datas) {
                return $collection->aggregate([
                    ['$unwind' => '$IPCA'],
                    [
                        '$match' => [
                            'IPCA.data.fulldate' => [
                                '$gte' => new UTCDateTime((new \DateTime($datas['dataInicial']['ano'] . '-' . $datas['dataInicial']['mes']))), 
                                '$lte' => new UTCDateTime((new \DateTime($datas['dataFinal']['ano'] . '-' . $datas['dataFinal']['mes'])))
                            ]
                        ]
                    ],
                    ['$project' =>  ['taxa' => '$IPCA.taxa','Data' => ['$dateToString'=> array('format'=> '%d-%m-%Y','date' => '$IPCA.data.fulldate')], '_id' => 0]],


                ]);
            }
        );
        return $result;
    }
    protected function mes(int $i)
    {
        $mes = array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');
        return $mes[$i - 1];
    }
}
