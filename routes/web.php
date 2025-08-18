<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::resource('contacts', ContactController::class);
Route::get('/', [ContactController::class, 'index']);

Route::get('/api/contacts', [ContactController::class, 'apiIndex']);


