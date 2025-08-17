<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::resource('contacts', ContactController::class);
Route::get('/', [ContactController::class, 'index']);

