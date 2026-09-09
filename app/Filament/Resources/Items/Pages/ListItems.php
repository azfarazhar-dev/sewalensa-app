<?php

namespace App\Filament\Resources\Items\Pages;

use App\Filament\Resources\Items\ItemsResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListItems extends ListRecords
{
    protected static string $resource = ItemsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
