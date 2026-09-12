<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'name' => 'Canon R50',
                'item_category_id' => 1,
                'daily_rate' => 50,
                'deposit_fee' => 20,
                'status' => 'available',
            ],
        ];

        foreach ($items as $item) {
            Item::create($item);
        }
    }
}