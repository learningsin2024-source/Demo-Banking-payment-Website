<?php

if (! function_exists('generate_txn_reference')) {
    function generate_txn_reference(string $prefix = 'TXN'): string
    {
        $timestamp = time();
        $random    = strtoupper(\Illuminate\Support\Str::random(6));

        return "{$prefix}-{$timestamp}-{$random}";
    }
}