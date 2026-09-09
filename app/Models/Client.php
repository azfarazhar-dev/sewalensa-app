<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'ic_or_passport_image',
        'name',
        'ic_or_passport',
        'email',
        'phone',
        'address',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
