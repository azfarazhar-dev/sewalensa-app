<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;

class BookingController extends Controller
{
    public function index(Request $request)
    {
        $year = $request->query('year', date('Y'));

        $bookings = Booking::with(['item', 'client'])
            ->where(function ($query) use ($year) {
                $query->whereYear('start_date', $year)
                    ->orWhereYear('end_date', $year);
            })
            // Exclude cancelled bookings if applicable
            ->where('booking_status', '!=', 'cancelled')
            ->get();

        return response()->json($bookings);
    }
}
