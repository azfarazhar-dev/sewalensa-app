<?php

namespace App\Filament\Resources\Items\Pages;

use App\Filament\Resources\Items\ItemsResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewItems extends ViewRecord
{
    protected static string $resource = ItemsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
