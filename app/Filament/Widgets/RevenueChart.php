<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;
use Illuminate\Support\Carbon;

class RevenueChart extends ChartWidget
{
    protected ?string $heading = 'Monthly Sales Performance';

    protected static ?int $sort = 3;

    public ?string $filter = null;

    public function mount(): void
    {
        $this->filter = (string) now()->year;
    }

    protected function getData(): array
    {
        $currentYear = now()->year;

        $startOfYear = Carbon::createFromDate($currentYear, 1, 1)->startOfYear();
        $endOfYear = Carbon::createFromDate($currentYear, 12, 31)->endOfYear();

        // Query by start_date column
        $data = Trend::model(Booking::class)
            ->dateColumn('start_date')
            ->between(
                start: $startOfYear,
                end: $endOfYear,
            )
            ->perMonth()
            ->sum('total_amount');

        return [
            'datasets' => [
                [
                    'label' => 'Revenue (RM)',
                    'data' => $data->map(fn(TrendValue $value) => $value->aggregate),
                    'borderColor' => '#10b981',
                    'backgroundColor' => '#10b98120',
                    'fill' => true,
                ],
            ],
            'labels' => $data->map(fn(TrendValue $value) => Carbon::parse($value->date)->format('M')),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
