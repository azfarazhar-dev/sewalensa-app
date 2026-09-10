<?php

namespace App\Filament\Resources\Bookings\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Actions\Action;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Barryvdh\DomPDF\Facade\Pdf;

class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            // Eager load relationships to prevent N+1 issues in table and PDF
            ->modifyQueryUsing(fn($query) => $query->with(['client', 'item']))
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

                Action::make('view_agreement')
                    ->label('View Agreement')
                    ->icon('heroicon-o-document-text')
                    ->color('warning')
                    ->url(fn($record) => route('bookings.agreement', $record))
                    ->openUrlInNewTab(),

                Action::make('view_receipt')
                    ->label('View Receipt')
                    ->icon('heroicon-o-document-text')
                    ->color('info')
                    ->url(fn($record) => route('bookings.receipt', $record))
                    ->openUrlInNewTab()


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
