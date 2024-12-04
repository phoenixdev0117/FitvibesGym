<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('seats_states', function (Blueprint $table) {
            $table->id();
            $table->text('gymClassName');
            $table->date('date');
            $table->integer('seatNum');
            $table->integer('classNum');
            $table->text('State');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seats_states');
    }
};
