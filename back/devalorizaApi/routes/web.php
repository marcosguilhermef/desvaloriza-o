<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SobreController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/{path?}', function () {
    return view('home');
}); */
Inertia::setRootView('ssr') ;

Route::get('/',HomeController::class);
Route::get('/sobre', SobreController::class );

Route::get('/teste');


