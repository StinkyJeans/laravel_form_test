<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserRoleController;
use App\Http\Controllers\LoginController;


// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/user_role', function () {
//     return view('index');
// });


Route::get('/{any}', function () {
    return view('welcome'); // or return your main React view file
})->where('any', '.*');

// Route::get('/user_role/index', [UserRoleController::class,'index'])->name('user_role.index');
// Route::get('/user_role/userTable', [UserRoleController::class, 'userTable']) -> name('user_role.userTable');
// Route::get('/user_role', [App\Http\Controllers\UserRoleController::class, 'index']);
// Route::get('/user_role/create', [UserRoleController::class, 'create'])->name('user_role.create');
// Route::post('/user_role', [App\Http\Controllers\UserRoleController::class, 'store']);
// Route::get('/user_role/{id}', [App\Http\Controllers\UserRoleController::class, 'show']);
// Route::get('/user_role/{id}/edit', [UserRoleController::class, 'edit'])->name('user_role.edit');
// Route::put('/user_role/{id}', [App\Http\Controllers\UserRoleController::class, 'update']);
// Route::delete('/user_role/{id}', [UserRoleController::class, 'destroy']);
// Route::put('/user_role/{id}', [UserRoleController::class, 'update'])->name('user_role.update');









