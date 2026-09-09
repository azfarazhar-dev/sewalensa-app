<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'name',
        'category',
        'daily_rate',
        'deposit_fee',
        'status',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
