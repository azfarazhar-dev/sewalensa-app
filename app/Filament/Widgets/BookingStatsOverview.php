<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Carbon;

class BookingStatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected function getStats(): array
    {
        // Total Gross Revenue (Fully Paid Bookings)
        $totalRevenue = Booking::where('payment_status', 'Fully Paid')
            ->sum('total_amount');

        // Current Month Revenue
        $thisMonthRevenue = Booking::where('payment_status', 'Fully Paid')
            ->whereMonth('start_date', Carbon::now()->month)
            ->whereYear('start_date', Carbon::now()->year)
            ->sum('total_amount');

        // Active / Ongoing Rentals
        $activeRentals = Booking::where('booking_status', 'Picked Up')
            ->count();

        // Pending Unpaid Bookings
        $pendingPayments = Booking::where('payment_status', 'Unpaid')
            ->orWhere('payment_status', 'Deposit Paid')
            ->whereNotIn('booking_status', ['Cancelled', 'Returned'])
            ->sum('total_amount');

        return [
            Stat::make('Total Revenue', 'RM ' . number_format($totalRevenue, 2))
                ->description('All time completed payments')
                ->descriptionIcon('heroicon-m-banknotes')
                ->color('success'),

            Stat::make('This Month Sales', 'RM ' . number_format($thisMonthRevenue, 2))
                ->description('Bookings starting this month')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('primary'),

            Stat::make('Active Rentals', $activeRentals)
                ->description('Gear currently with clients')
                ->descriptionIcon('heroicon-m-camera')
                ->color('warning'),

            Stat::make('Pending Payments', 'RM ' . number_format($pendingPayments, 2))
                ->description('Unpaid active bookings')
                ->descriptionIcon('heroicon-m-clock')
                ->color('danger'),
        ];
    }
}