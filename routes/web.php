<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'BankApp API is running.']);
});

Route::get('/login', function () {
    return response()->json(['message' => 'Please use the frontend to login.']);
})->name('login');
