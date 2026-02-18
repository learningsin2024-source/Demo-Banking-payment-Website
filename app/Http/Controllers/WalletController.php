<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

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

public function transfer(Request $request)
{
    
    $validated = $request->validate([
        'receiver_email' => 'required|email|exists:users,email',
        'amount' => 'required|integer|min:1',
    ]);

    if ($validated['receiver_email'] === auth()->user()->email) {
        return response()->json([
            'message' => 'You cannot transfer to yourself.'
        ], 422);
    }

    
    return DB::transaction(function () use ($validated) {

    
        $sender = User::where('id', auth()->id())
            ->lockForUpdate()
            ->first();

        
        $receiver = User::where('email', $validated['receiver_email'])
            ->lockForUpdate()
            ->first();

        
        if ($sender->balance < $validated['amount']) {
            return response()->json([
                'message' => 'Insufficient funds.'
            ], 422);
        }

        
        $amount = $validated['amount'];

        $sender->balance -= $amount;
        $receiver->balance += $amount;

        $sender->save();
        $receiver->save();

        
        return response()->json([
            'message' => 'Transfer successful.',
            'sender_balance' => $sender->balance,
            'receiver' => $receiver->email
        ], 200);
    });
}


    
}
