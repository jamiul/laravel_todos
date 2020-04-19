<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/tasks','TodoController@index');
Route::get('/tasks/create','TodoController@create')->name('new.task');
Route::post('/tasks/create','TodoController@store');

Route::get('/tasks/{todos}/edit','TodoController@edit');
Route::post('/tasks/{todos}/edit','TodoController@update');

Route::get('/tasks/{todos}/delete','TodoController@delete');

Route::post('/tasks/{todo}/complete','TodoController@complete')->name('tasks.complete');
Route::post('/tasks/{todo}/incomplete','TodoController@incompete')->name('tasks.incomplete');
