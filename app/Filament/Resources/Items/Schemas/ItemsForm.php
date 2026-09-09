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
                // Define form components here, e.g., TextInput, Select, etc.
                TextInput::make('name')
                    ->label('Item Name')
                    ->required(),
                TextInput::make('daily_rate')
                    ->label('Daily Rate (RM)')
                    ->required(),
                Select::make('category')
                    ->label('Category')
                    ->options([
                        'Camera Body' => 'Camera Body',
                    ])
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
