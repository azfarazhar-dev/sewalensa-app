<?php

namespace App\Filament\Resources\Bookings\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Text;
use Filament\Forms\Components\TextInput;
use Filament\Actions\Components\TextEntry;

class BookingsInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
            ]);
    }
}
