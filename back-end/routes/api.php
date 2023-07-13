<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\AuthenticationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//RUTAS PARA EL CRUD DE Authentication
Route::prefix('Authentication')->group(function () {
    //valida el numero de telefono
    Route::post('ValidateNumber', [AuthenticationController::class, 'ValidateNumber']);
    //hace el login con un usuario
    Route::post('Login', [AuthenticationController::class, 'Login']);
});

Route::group(['prefix' => 'users'], function () {
    Route::get('/all', [UserController::class, 'usersAll']);
});

Route::group(['prefix' => 'products'], function(){
    Route::get('/all', [ProductController::class, 'productsAll']);
});

Route::group(['prefix' => 'providers'], function(){
    Route::get('/all', [ProviderController::class, 'providersAll']);
});

Route::get('prueba',[AuthenticationController::class, 'prueba'])->middleware('auth:sanctum');


