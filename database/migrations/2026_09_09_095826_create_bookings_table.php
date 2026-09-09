<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {

            $table->id();
            $table->string('client_images')->nullable(); // For identity verification
            $table->foreignId('client_id')->constrained()->cascadeOnDelete();
            $table->foreignId('item_id')->constrained()->cascadeOnDelete();

            $table->date('start_date');
            $table->date('end_date');
            $table->integer('total_days');

            $table->decimal('daily_rate', 10, 2);
            $table->decimal('total_amount', 10, 2);

            $table->enum('payment_status', ['Fully Paid', 'Deposit Paid', 'Unpaid', 'Refunded'])->default('Unpaid');
            $table->enum('booking_status', ['Reserved', 'Picked Up', 'Returned', 'Cancelled'])->default('Reserved');

            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
