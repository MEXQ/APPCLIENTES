<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/papu', function () {
    return view('welcome');
});


Route::get('/quote', [
    'uses' => 'QuoteController@getQuotes'
]);


Route::get('/user/{usuario}', [
    'uses' => 'UserController@getUser'
]);