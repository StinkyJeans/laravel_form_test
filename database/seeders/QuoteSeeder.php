<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Quote;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Quote::truncate();
        Quote::Create([
            'id' => 1,
            'name' => 'This is a test quote.',
            'author' => 'This is a test author',
            'description' => 'This is a test description',
        ]);
    }
}
