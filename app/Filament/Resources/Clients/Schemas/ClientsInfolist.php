<?php

namespace App\Filament\Resources\Clients\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;

class ClientsInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
            ]);
    }
}
