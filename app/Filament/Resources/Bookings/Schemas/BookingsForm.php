<?php

namespace App\Filament\Resources\Bookings\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use App\Models\Client;
use App\Models\Item;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;

class BookingsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('client_images')
                    ->label('Image')
                    ->image()
                    ->maxSize(1024) // 1MB
                    ->columnSpanFull()
                    ->directory('client-images')
                    ->required(),
                Select::make('client_id')
                    ->label('Client Name')
                    ->options(Client::query()->pluck('name', 'id'))
                    ->searchable()
                    ->required(),
                Select::make('item_id')
                    ->label('Item Name')
                    ->options(Item::query()->pluck('name', 'id'))
                    ->searchable()
                    ->required(),
                TextInput::make('notes')
                    ->label('Notes')
                    ->maxLength(255),
                DatePicker::make('start_date')
                    ->label('Start Date')
                    ->required(),
                DatePicker::make('end_date')
                    ->label('End Date')
                    ->required(),
                TextInput::make('total_amount')
                    ->label('Total Amount (RM)')
                    ->required(),
                Select::make('payment_status')
                    ->label('Payment Status')
                    ->options([
                        'Fully Paid' => 'Fully Paid',
                        'Unpaid' => 'Unpaid',
                        'Deposit Paid' => 'Deposit Paid',
                        'Refunded' => 'Refunded',
                    ])
                    ->required(),
                Select::make('booking_status')
                    ->label('Booking Status')
                    ->options([
                        'Reserved' => 'Reserved',
                        'Picked Up' => 'Picked Up',
                        'Returned' => 'Returned',
                        'Cancelled' => 'Cancelled',
                    ])
                    ->required(),
            ]);
    }
}
