<?php

namespace App\Filament\Resources\Items\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;

class ItemsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label('Item Name')
                    ->required(),

                TextInput::make('daily_rate')
                    ->label('Daily Rate (RM)')
                    ->required(),

                Select::make('item_category_id') // <-- Use foreign key column name
                    ->label('Item Category')
                    ->relationship('itemCategory', 'name') // <-- Filament relationship helper
                    ->searchable()
                    ->preload()
                    ->required(),

                TextInput::make('deposit_fee')
                    ->label('Deposit Fee (RM)')
                    ->required(),

                Select::make('status')
                    ->label('Status')
                    ->options([
                        'Available' => 'Available',
                        'Unavailable' => 'Unavailable',
                        'Maintenance' => 'Maintenance',
                    ])
                    ->required(),
            ]);
    }
}