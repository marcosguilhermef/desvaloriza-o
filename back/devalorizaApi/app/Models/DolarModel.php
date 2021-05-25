<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;
use MongoDB\BSON\UTCDateTime;

class DolarModel extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'Dolar';
    protected $primaryKey = '_id';
    protected $dates = ['Data', 'create_at'];

    public function allData()
    {
        return DolarModel::all();
    }
    //db.Dolar.aggregate([ { $project: { Data: {$year: "$Data"}, Mes: {$month: "$Data"}, Day: {$dayOfMonth: "$Data"} } }, { $match: { Data: { $eq: 2000 }, Mes: { $eq: 01 }, Day: { $eq : 20 }}} ] )
    public static function select(array $datas)
    {
        $result = DolarModel::raw(
            function ($collection) use ($datas) {
                return $collection->aggregate(
                    [
                        ['$project' =>  ['_id' => 1, 'Mínima' => 1, 'Var' => '$Var%', 'Ano' => ['$year' => '$Data'], 'Mes' => ['$month' => '$Data'], 'Dia' => ['$dayOfMonth' => '$Data']]],
                        [
                            '$match' => [
                                '$or' => [
                                    ['Ano' => ['$eq' => intval($datas['dataInicial']['ano'])], 'Mes' => ['$eq' => intval($datas['dataInicial']['mes'])], 'Dia' => ['$eq' => intval($datas['dataInicial']['dia'])]],
                                    ['Ano' => ['$eq' => intval($datas['dataFinal']['ano'])], 'Mes' => ['$eq' => intval($datas['dataFinal']['mes'])], 'Dia' => ['$eq' => intval($datas['dataFinal']['dia'])]]
                                ]
                            ]
                        ],
                        [
                            '$sort' => [
                                'Ano' => -1,
                                'Mes' => -1,
                                'Dia' => -1
                            ]
                        ]
                    ]
                );
            }
        );
        return $result;
    }
}
