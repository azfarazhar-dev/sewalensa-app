<?php

namespace App\Filament\Resources\Items\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;

class ItemsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Item Name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('itemCategory.name') // <-- Access category name via relationship
                    ->label('Category')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('daily_rate')
                    ->label('Daily Rate (RM)')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('deposit_fee')
                    ->label('Deposit Fee (RM)')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn(string $state): string => match ($state) {
                        'Available' => 'success',
                        'Unavailable' => 'danger',
                        default => 'gray',
                    })
                    ->searchable()
                    ->sortable(),
            ]);
        // ... filters, actions
    }
}
