<?php

namespace App\Filament\Widgets;

use App\Models\Booking;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Support\Carbon;

class NearestBookingsTable extends BaseWidget
{
    protected static ?int $sort = 2;

    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Booking::query()
                    ->with(['client', 'item'])
                    ->where('end_date', '>=', Carbon::today())
                    ->whereNotIn('booking_status', ['returned', 'cancelled'])
                    ->orderBy('start_date', 'asc')
            )
            ->columns([
                TextColumn::make('start_date')
                    ->label('Pickup Date')
                    ->date('d M Y')
                    ->sortable(),

                TextColumn::make('end_date')
                    ->label('Return Date')
                    ->date('d M Y'),

                TextColumn::make('client.name')
                    ->label('Client')
                    ->searchable(),

                TextColumn::make('item.name')
                    ->label('Equipment')
                    ->searchable(),

                TextColumn::make('total_days')
                    ->label('Days')
                    ->numeric(),

                TextColumn::make('total_amount')
                    ->label('Total (RM)')
                    ->money('MYR')
                    ->sortable(),

                TextColumn::make('payment_status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'fully_paid' => 'success',
                        'deposit_paid' => 'warning',
                        'unpaid' => 'danger',
                        'refunded' => 'gray',
                        default => 'gray',
                    }),

                TextColumn::make('booking_status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'reserved' => 'info',
                        'picked_up' => 'warning',
                        'returned' => 'success',
                        'cancelled' => 'danger',
                        default => 'gray',
                    }),
            ])
            ->actions([
                Action::make('view')
                    ->url(fn(Booking $record): string => route('filament.admin.resources.bookings.edit', $record))
                    ->icon('heroicon-m-eye'),
            ]);
    }
}
