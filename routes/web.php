<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

// Blade pages
Route::get('/', [ContactController::class, 'index']);
Route::resource('contacts', ContactController::class)->except(['destroy']); // destroy را جداگانه تعریف می‌کنیم

// API React
Route::get('/api/contacts', [ContactController::class, 'apiIndex']);
Route::post('/api/contacts', [ContactController::class, 'apiStore']);
Route::get('/api/contacts/{contact}', [ContactController::class, 'show']);
Route::put('/api/contacts/{contact}', [ContactController::class, 'update']);
Route::delete('/api/contacts/{contact}', [ContactController::class, 'destroy']);

