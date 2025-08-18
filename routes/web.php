<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::resource('contacts', ContactController::class);
Route::get('/', [ContactController::class, 'index']);

Route::get('/api/contacts',  [ContactController::class, 'apiIndex']);
Route::post('/api/contacts', [ContactController::class, 'apiStore']);
Route::apiResource('contacts', ContactController::class);



Route::get('/api/contacts/{id}', [ContactController::class, 'show']);
Route::put('/api/contacts/{id}', [ContactController::class, 'update']);
Route::delete('/api/contacts/{id}', [ContactController::class, 'destroy']);
