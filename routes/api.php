<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::get('/contacts', [ContactController::class, 'apiIndex']);


در این نسخه، ظاهراً structure کمی تغییر کرده و به صورت پیش‌فرض فایل RouteServiceProvider.php در پروژه ایجاد نشده (یا پروژه تمرینی‌ای که نصب کردی سبک است). در فولدر app/Providers/ فقط AppServiceProvider.php دارید و فایل RouteServiceProvider.php موجود نیست، یعنی پروژه من احتمالاً نسخه‌ای از Laravel قدیمی یا خیلی سبک/تمرینی است که structure استاندارد Laravel 8/9/10 را ندارد.