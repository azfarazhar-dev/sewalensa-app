<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    public function run(): void
    {
        $clients = [
            [
                'name' => 'Muhammad Amirul',
                'phone' => '0123456789',
                'ic_or_passport' => '980315105431',
                'email' => 'amirul@example.com',
                'address' => 'Cyberjaya, Selangor',
            ],
            [
                'name' => 'Sarah Tan',
                'phone' => '0198765432',
                'ic_or_passport' => '950722145892',
                'email' => 'sarahtan@example.com',
                'address' => 'Petaling Jaya, Selangor',
            ],
        ];

        foreach ($clients as $client) {
            Client::create($client);
        }
    }
}