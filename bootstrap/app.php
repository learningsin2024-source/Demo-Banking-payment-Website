<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {

       $middleware->statefulApi();

        // This is the key part — override redirect for authenticated users on API/JSON requests
        $middleware->redirectUsersTo(function (Request $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json([
                    'message' => 'Already authenticated.',
                ], 403);  // or 200 if you prefer, but 403 is more accurate
            }

            // Fallback for web routes (keep normal redirect if you have any)
            return '/dashboard';  // or RouteServiceProvider::HOME, or '/home'
        });

        // Optional but helpful: force unauthenticated API requests to JSON too
        $middleware->redirectGuestsTo(function (Request $request) {
            if ($request->expectsJson() || $request->is('api/*')) {
                return response()->json(['message' => 'Unauthenticated.'], 401);
            }
            return '/login';  // fallback for web
        });

        // If you see $middleware->statefulApi(); — keep it or add if missing
        // $middleware->statefulApi();   // usually already there after install:api

    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();