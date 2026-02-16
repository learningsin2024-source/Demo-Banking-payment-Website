<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WalletController extends Controller
{ 
    public function topUp(Request $request)
    {
       
        $validated = $request->validate([
            'amount' => 'required|integer|min:1|max:1000000000000'
        ]);

 
        $user = null; 

        DB::transaction(function () use ($validated, &$user) {
         
            $user = auth()->user()->fresh();

            
            $user->increment('balance', $validated['amount']);
        });

  
        return response()->json([
            'success' => true,
            'message' => 'Wallet topped up successfully.',
            'user_id' => $user->id,
            'new_balance' => $user->fresh()->balance
        ], 200);
    }
}
