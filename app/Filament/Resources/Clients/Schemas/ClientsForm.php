<?php

namespace App\Filament\Resources\Clients\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;

class ClientsForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('ic_or_passport_image')
                    ->label('IC / Passport Image')
                    ->image()
                    ->maxSize(1024) // 1MB
                    ->directory('client-ic-passport-images')
                    ->columnSpanFull(),
                TextInput::make('name')
                    ->label('Client Name')
                    ->required(),
                TextInput::make('ic_or_passport')
                    ->label('IC / Passport')
                    ->required(),
                TextInput::make('phone')
                    ->label('Phone')
                    ->required(),
                TextInput::make('address')
                    ->label('Address')
                    ->required(),
            ]);
    }
}
