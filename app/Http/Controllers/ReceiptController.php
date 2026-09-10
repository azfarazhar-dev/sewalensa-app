<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Barryvdh\DomPDF\Facade\Pdf;

class ReceiptController extends Controller
{
    public function generate(Booking $booking)
    {
        // Eager-load relations to avoid N+1 queries
        $booking->load(['client', 'item']);

        $pdf = Pdf::loadView('pdf.receipt', compact('booking'))
            ->setPaper('a4', 'portrait');

        // Stream opens the PDF directly in the browser window
        return $pdf->stream("Receipt_Booking_{$booking->id}.pdf");
    }
}