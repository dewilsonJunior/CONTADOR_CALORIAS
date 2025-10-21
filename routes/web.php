<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\CalcController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/searchFood', [CalcController::class, 'searchFood']);
