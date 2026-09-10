<?php

namespace App\Filament\Resources\Items;

use App\Filament\Resources\Items\Pages\CreateItems;
use App\Filament\Resources\Items\Pages\EditItems;
use App\Filament\Resources\Items\Pages\ListItems;
use App\Filament\Resources\Items\Pages\ViewItems;
use App\Filament\Resources\Items\Schemas\ItemsForm;
use App\Filament\Resources\Items\Schemas\ItemsInfolist;
use App\Filament\Resources\Items\Tables\ItemsTable;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Models\Item;
use UnitEnum;

class ItemsResource extends Resource
{
    protected static ?string $model = Item::class;

    protected static string|UnitEnum|null $navigationGroup = 'Inventory';

    protected static ?string $navigationLabel = 'Gears List';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCamera;

    public static function form(Schema $schema): Schema
    {
        return ItemsForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return ItemsInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ItemsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListItems::route('/'),
            'create' => CreateItems::route('/create'),
            'edit' => EditItems::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
