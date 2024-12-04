<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookedModel extends Model
{
    protected $table = "booked_seats";
    protected $fillable = ['id', 'name','lastname', 'phone', 'email', 'date', 'class', 'seatNumber', 'gymClassName'];
    use HasFactory;
} 
