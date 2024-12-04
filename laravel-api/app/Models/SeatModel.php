<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeatModel extends Model
{
    protected $table = "seats_states";
    protected $fillable = ['id','gymClassName','date','classNum', 'seatNum', 'State'];
    use HasFactory;
}
