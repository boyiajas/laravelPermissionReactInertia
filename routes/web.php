<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PermissionsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RolesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/permission', function () {
//     return Inertia::render('Permission');
// })->middleware(['auth', 'verified'])->name('permission');

Route::group(['middleware' => ['auth', 'role:admin|user|super-admin']], function() {

    /**
     * Profile Routes
     */
    Route::group(['prefix' => 'profile'], function () {
        Route::get('/', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

     /**
     * Permission Routes
     */
    
    Route::resource('permissions', PermissionsController::class);

     /**
     * User Routes
     */

     Route::resource('users', UsersController::class);
    /* Route::group(['prefix' => 'users'], function() {
        Route::get('/', [UsersController::class, 'index'])->name('users.index');
        Route::get('/create', [UsersController::class, 'create'])->name('users.create');
        Route::post('/create', [UsersController::class, 'store'])->name('users.store');
        Route::get('/{user}/show', [UsersController::class, 'show'])->name('users.show');
        Route::get('/{user}/edit', [UsersController::class, 'edit'])->name('users.edit');
        Route::patch('/{user}/update', [UsersController::class, 'update'])->name('users.update');
        Route::delete('/{user}/delete', [UsersController::class, 'destroy'])->name('users.destroy');
    }); */

    /**
     * Role Routes
     */

    Route::resource('roles', RolesController::class);
   /*  Route::group(['prefix' => 'roles'], function() {
        Route::get('/', [RolesController::class, 'index'])->name('roles.index');
        Route::get('/create', [RolesController::class, 'create'])->name('roles.create');
        Route::post('/create', [RolesController::class, 'store'])->name('roles.store');
        Route::get('/{role}/show', [RolesController::class, 'show'])->name('roles.show');
        Route::get('/{role}/edit', [RolesController::class, 'edit'])->name('roles.edit');
        Route::patch('/{role}/update', [RolesController::class, 'update'])->name('roles.update');
        Route::delete('/{role}/delete', [RolesController::class, 'destroy'])->name('roles.destroy');
    }); */
});

require __DIR__.'/auth.php';
