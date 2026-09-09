<?php

namespace App\Filament\Resources\Bookings\Tables;

use Dom\Text;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('client_images')
                    ->label('Image')
                    ->square(),
                TextColumn::make('client.name')
                    ->label('Client Name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('item.name')
                    ->label('Item Name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('notes')
                    ->label('Notes')
                    ->searchable(),
                TextColumn::make('start_date')
                    ->label('Start Date')
                    ->date()
                    ->sortable(),
                TextColumn::make('end_date')
                    ->label('End Date')
                    ->date()
                    ->sortable(),
                TextColumn::make('total_days')
                    ->label('Total Days')
                    ->sortable(),
                TextColumn::make('daily_rate')
                    ->label('Daily Rate (RM)'),
                TextColumn::make('total_amount')
                    ->label('Total Amount (RM)')
                    ->sortable(),
                TextColumn::make('payment_status')
                    ->label('Payment Status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'Fully Paid' => 'info',
                        'Unpaid' => 'success',
                        'Deposit Paid' => 'warning',
                        'Refunded' => 'danger',
                        default => 'gray',
                    })
                    ->searchable()
                    ->sortable(),
                TextColumn::make('booking_status')
                    ->label('Booking Status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'Reserved' => 'info',
                        'Picked Up' => 'warning',
                        'Returned' => 'success',
                        'Cancelled' => 'danger',
                        default => 'gray',
                    })
                    ->searchable()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Created At')
                    ->date()
                    ->sortable(),
            ])
            ->filters([
                // TrashedFilter::make(),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }
}
