<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\Client;
use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class BookingSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Ensure at least one Client and Item exist
        $client = Client::first() ?? Client::factory()->create();
        $item = Item::first() ?? Item::factory()->create(['daily_rate' => 150.00]);

        // 2. Define sample booking scenarios
        $scenarios = [
            [
                'start_offset' => 2,
                'days' => 3,
                'payment_status' => 'Fully Paid',
                'booking_status' => 'Reserved',
                'notes' => 'Client requested early morning pickup.',
            ],
            [
                'start_offset' => -2,
                'days' => 5,
                'payment_status' => 'Deposit Paid',
                'booking_status' => 'Picked Up',
                'notes' => 'Equipment inspected and handed over.',
            ],
            [
                'start_offset' => -10,
                'days' => 2,
                'payment_status' => 'Fully Paid',
                'booking_status' => 'Returned',
                'notes' => 'Returned on time without damages.',
            ],
            [
                'start_offset' => 7,
                'days' => 4,
                'payment_status' => 'Unpaid',
                'booking_status' => 'Reserved',
                'notes' => 'Awaiting deposit confirmation.',
            ],
        ];

        // 3. Create the booking records
        foreach ($scenarios as $data) {
            $startDate = Carbon::now()->addDays($data['start_offset']);
            $endDate = (clone $startDate)->addDays($data['days']);
            $totalDays = $data['days'];
            $dailyRate = $item->daily_rate ?? 100.00;
            $totalAmount = $totalDays * $dailyRate;

            Booking::create([
                'client_id' => $client->id,
                'item_id' => $item->id,
                'start_date' => $startDate->toDateString(),
                'end_date' => $endDate->toDateString(),
                'total_days' => $totalDays,
                'daily_rate' => $dailyRate,
                'total_amount' => $totalAmount,
                'payment_status' => $data['payment_status'],
                'booking_status' => $data['booking_status'],
                'notes' => $data['notes'],
            ]);
        }
    }
}