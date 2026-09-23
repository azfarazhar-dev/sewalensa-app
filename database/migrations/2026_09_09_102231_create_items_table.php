<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('items')) {
            Schema::create('items', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->foreignId('item_category_id')->nullable();
                $table->decimal('daily_rate', 10, 2);
                $table->decimal('deposit_fee', 10, 2)->default(0);
                $table->enum('status', ['Available', 'Unavailable', 'Maintenance'])->default('Available');
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('items');
        Schema::enableForeignKeyConstraints();
    }
};
