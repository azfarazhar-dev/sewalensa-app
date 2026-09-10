<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'admin@sewalensa.com',
            'password' => bcrypt('Admin1234'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Danial',
            'email' => 'gartindani@gmail.com',
            'password' => bcrypt('Danial12'),
        ]);
    }
}
