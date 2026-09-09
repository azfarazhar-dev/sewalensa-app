<?php

namespace App\Filament\Resources\Clients\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Table;

class ClientsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('ic_or_passport_image')
                    ->label('IC / Passport Image')
                    ->square(),

                TextColumn::make('name')
                    ->label('Client Name')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('ic_or_passport')
                    ->label('IC / Passport')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('phone')
                    ->label('Phone Number')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('email')
                    ->label('Email Address')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('address')
                    ->label('Address')
                    ->limit(30)
                    ->sortable(),

                TextColumn::make('created_at')
                    ->label('Registered At')
                    ->dateTime()
                    ->sortable()
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
