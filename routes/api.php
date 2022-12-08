<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['namespace'=>'App\Http\Controllers\DkA', 'prefix'=>'dk_a_data'], function (){
    Route::get('/', 'DkAController');

//    Route::post('/', 'StoreController');
//    Route::get('/', 'IndexController');
//    Route::get('/{person}', 'ShowController');
//    Route::patch('/{person}', 'UpdateController');
//    Route::delete('/{person}', 'DeleteController');
});

Route::group(['namespace'=>'App\Http\Controllers\DkA', 'prefix'=>'dk_a_json'], function (){
    Route::get('/', 'jsonController');

});

Route::group(['namespace'=>'App\Http\Controllers\DkA', 'prefix'=>'dk_a_top'], function (){
    Route::get('/', 'DkAController_Top');
});

Route::group(['namespace'=>'App\Http\Controllers\MGK\H1\A', 'prefix'=>'H1aTable'], function (){
    Route::get('/', 'H1A_Table_Controller');
});
Route::group(['namespace'=>'App\Http\Controllers\MGK\H1\A', 'prefix'=>'H1aPressure'], function (){
    Route::get('/', 'PressureController');
});


Route::group(['namespace'=>'App\Http\Controllers\MGK\H1\B', 'prefix'=>'H1bTable'], function (){
    Route::get('/', 'H1B_Table_Controller');
});
