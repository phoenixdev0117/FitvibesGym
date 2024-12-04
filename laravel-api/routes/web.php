<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;

Route::get('/', function () {
    return view('welcome');
});


use App\Http\Controllers\ClassController;
use App\Http\Controllers\AdminController;

Route::get('/reservar/spinning', [ClassController::class, 'show']);
Route::post('/reservar/seats', [ClassController::class, "saveSeat"])->name("api.sendSeat");
Route::get('/reservar/deleteBook', [ClassController::class, 'deleteBook']);
Route::get('/reservar/admin', [AdminController::class, 'adminshow']);
Route::post('/reservar/users', [AdminController::class, 'getuserdetail'])->name("api.detailed");
