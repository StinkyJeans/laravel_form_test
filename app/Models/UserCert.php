<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCert extends Model
{

    protected $fillable = ['firstName'];

    use HasFactory;
}
