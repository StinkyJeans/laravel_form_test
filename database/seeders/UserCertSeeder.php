<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use illuminate\Support\Str;

class UserCertSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::Create([
            'firstName' => 'John',
            'remember_token' => Str::random(10),
        ]);
    }
}
