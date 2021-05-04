<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Ipca; 
use App\Http\Controllers\Indices;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/ipca', [Ipca::class, 'index'])->middleware('throttle:5000,1');
Route::get('/indice', [Indices::class,'index'])->middleware('throttle:5000,1');
Route::get('/ipca/all', [Ipca::class, 'allData'])->middleware('throttle:5000,1');


