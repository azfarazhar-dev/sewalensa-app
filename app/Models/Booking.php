<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'client_images',
        'client_id',
        'item_id',
        'start_date',
        'end_date',
        'total_days',
        'daily_rate',
        'total_amount',
        'payment_status',
        'booking_status',
        'notes',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
