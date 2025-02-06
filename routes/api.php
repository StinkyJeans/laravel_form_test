<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuoteController;
use App\Http\Controllers\UserRoleController;

Route::apiResource('quotes', QuoteController::class);


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:api');


// Route::get('/users', [UserRoleController::class, 'GetUsers']);
// Route::post('/users', [UserRoleController::class, 'store']);
// Route::delete('/users', [UserRoleController::class, 'delete']);

Route::apiResource('users', UserRoleController::class);
