<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    protected $table = "class_flags";
    protected $fillable = ['id','gymClassName','flag'];
    use HasFactory;
}
