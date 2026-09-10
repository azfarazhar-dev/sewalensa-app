<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
// Finds user by email; updates if exists, creates if it doesn't
        User::updateOrCreate(
            ['email' => 'admin@sewalensa.com'], // Search criteria
            [
                'name' => 'Super Admin',
                'email' => 'admin@sewalensa.com',
                'password' => bcrypt('Admin1234'),
            ]
        );
    }
}
