<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserRoleController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

Route::apiResource('users', UserRoleController::class);
Route::post('/users/{id}/restore', [UserRoleController::class, 'restoreUser']);
Route::post('/users/restore-multiple', [UserRoleController::class, 'restoreMultiple']);
Route::delete('/users', [UserRoleController::class, 'deleteMultiple']);




