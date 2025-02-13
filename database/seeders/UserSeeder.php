<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::Create([
            'username' => 'superadminsss',
            'email' => 'superadmin@test.com',
            'password' => bcrypt('password'),
            'firstname' => 'Super',
            'middlename' => 'Super',
            'lastname' => 'Admin',
            'name_ext' => 'Super',
            'gender' => 'Male',
            'status' => 'Active',
            'remember_token' => Str::random(10),
        ]);
    }
}
