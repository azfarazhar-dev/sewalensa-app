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
        Schema::dropIfExists('clients');
        Schema::create('clients', function (Blueprint $table) {

            $table->id();
            $table->string('ic_or_passport_image')->nullable(); // For identity verification
            $table->string('name');
            $table->string('phone');            // Crucial for WhatsApp / contact
            $table->string('ic_or_passport')->nullable(); // Identity verification
            $table->text('address'); // Optional for delivery or billing
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
