<?php



namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class AuthController extends Controller
{
    public function register (Request $request) {

        $validated = $request->validate([

             'name' => 'required|string|min:3',
             'email' => 'required|email|unique:users',
             'password' => 'required|min:6'
        ]);

        $hashedPassword = Hash::make($validated['password']);

        $user = User::create([
    'name' => $validated['name'],
    'email' => $validated['email'],
    'password' => $hashedPassword,
    'balance' => 0
                                           ]);

       return response()->json([
            'message' => 'User registered successfully'
        ], 201);
                                           


    }

    public function login (Request $request)

        {
            $validated = $request->validate([
                        'email' => 'required|email',
                         'password' => 'required|min:6',
]);
  
          $user = User::where('email', $validated['email'])->first();

 


              if(Auth::attempt($validated)){
                
            

                $token = $user->createToken('api-token', ['*'], now()->addDays(7) )->plainTextToken;

                return response()->json([
                    'message' => 'Login successfully',
                    'user' => Auth::user(),
                    'token'   => $token

                ]);




              };

               return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }


   public function logout(Request $request)
{
    Auth::guard('web')->logout();           // or just Auth::logout()
    $request->session()->invalidate();
    $request->session()->regenerateToken();

    return response()->json(['message' => 'Logged out']);
}}

    
