<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AgreementController;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::get('/bookings/{booking}/agreement', [AgreementController::class, 'generate'])
    ->name('bookings.agreement')
    ->middleware(['auth']);

require __DIR__.'/settings.php';


