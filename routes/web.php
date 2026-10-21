<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AgreementController;
use App\Http\Controllers\ReceiptController;
use Inertia\Inertia;

// Welcome Page (Calendar)
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('welcome');

// Calendar page
Route::get('/calendar', function () {
    return Inertia::render('calendar');
})->name('calendar');

// FAQ Page
Route::get('/faq', function () {
    return Inertia::render('faq');
})->name('faq');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::get('/bookings/{booking}/agreement', [AgreementController::class, 'generate'])
    ->name('bookings.agreement')
    ->middleware(['auth']);

Route::get('/bookings/{booking}/receipt', [ReceiptController::class, 'generate'])
    ->name('bookings.receipt')
    ->middleware(['auth']);

require __DIR__ . '/settings.php';
