<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\ItemCategory;
use Illuminate\Database\Seeder;

class ItemCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $item_category = [
            [
                'name' => 'Camera Body',
                'description' => 'NA',
            ],
            [
                'name' => 'Ulanzi TT39 Tripod',
                'description' => 'Add-ons',
            ],
        ];

        foreach ($item_category as $category) {
            ItemCategory::create($category);
        }
    }
}
