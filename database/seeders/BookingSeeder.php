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
        $client = Client::first();
        $item = Item::first();

        if ($client && $item) {
            $startDate = Carbon::now()->addDays(2);
            $endDate = Carbon::now()->addDays(5);
            $totalDays = (int) $startDate->diffInDays($endDate);
            $totalAmount = $totalDays * $item->daily_rate;

            Booking::create([
                'client_id' => $client->id,
                'item_id' => $item->id,
                'start_date' => $startDate->toDateString(),
                'end_date' => $endDate->toDateString(),
                'total_days' => $totalDays,
                'daily_rate' => $item->daily_rate,
                'total_amount' => $totalAmount,
                'payment_status' => 'Fully Paid',
                'booking_status' => 'Reserved',
                'notes' => 'Client requested early morning pickup.',
            ]);
        }
    }
}