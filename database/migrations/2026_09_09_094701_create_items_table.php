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
        Schema::dropIfExists('items');

        Schema::create('items', function (Blueprint $table) {

            $table->id();
            $table->string('name');             // e.g., "Sony A7IV" or "Canon 24-70mm f2.8"
            $table->foreignId('item_category_id')->nullable(); // e.g., "Camera Body", "Lens", "Lighting"
            $table->decimal('daily_rate', 10, 2);  // e.g., 150.00
            $table->decimal('deposit_fee', 10, 2)->default(0.00); // Optional security deposit
            $table->enum('status', ['Available', 'Unavailable', 'Maintenance'])->default('Available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
