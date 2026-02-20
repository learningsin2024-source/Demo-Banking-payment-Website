<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Str;
use App\Models\Transaction;



class WalletController extends Controller
{ 
   public function topUp(Request $request)
{
    $validated = $request->validate([
        'amount' => 'required|integer|min:1|max:1000000000000'
    ]);

    $user = $request->user();

    DB::transaction(function () use ($user, $validated) {
        $reference = 'TXN-' . strtoupper(Str::random(10));

        Transaction::create([
            'sender_id'   => null,
            'receiver_id' => $user->id,
            'amount'      => $validated['amount'],
            'type'        => 'topup',
            'status'      => 'success',
            'reference'   => $reference,
        ]);

        $user->increment('balance', $validated['amount']);
    });

    return response()->json([
        'message'     => 'Top up successful.',
        'new_balance' => $user->fresh()->balance,
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


public function balance(Request $request){

    $balance = $request->user()->balance;

   return response()->json([
        'balance' => $balance
    ]);

    }

    
}

