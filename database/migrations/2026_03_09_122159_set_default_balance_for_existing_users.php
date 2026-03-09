<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement('UPDATE users SET balance = 0 WHERE balance IS NULL');
    }

    public function down(): void {}
};
