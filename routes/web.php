<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\WalletController;


Route::get('/', function () {
    return view('welcome');
});


Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth')->group(function () {
 
 Route::post('/wallet/top-up', [WalletController::class, 'topUp']);

    Route::get('/dashboard', function () {


        return response()->json([
            'message' => 'Welcome to dashboard',
            'user' => auth()->user()
        ]);
    });
});

Route::post('/login',  [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/register',[AuthController::class, 'register']);

