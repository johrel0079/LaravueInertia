<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginController extends Controller
{
     /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */

    public function create()
    {
        return Inertia::render('Login');
    }
}
