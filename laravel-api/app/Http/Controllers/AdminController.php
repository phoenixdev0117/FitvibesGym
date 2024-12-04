<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\SeatModel;
use App\Models\BookedModel;
use App\Models\ClassModel;

class AdminController extends Controller
{

    public function adminshow()
    {
        $today = Carbon::today()->format('Y-m-d');
        // Fetch class details based on $id 
        $seats = config('seats.list');
        $specialSeatsFromData = SeatModel::all(['id', 'gymClassName', 'date', 'classNum', 'seatNum', 'State']);
        $classFlagsFromData = ClassModel::all(['id', 'gymClassName', 'flag']);
        $seatsFromData[0]['gymClassName'] = 'Spinning';
        $seatsFromData[0]['classIdNum'] = 0;
        $seatsFromData[0]['seatNum'] = 0;
        $seatsFromData[0]['State'] = 'Empty';
        for ($i = 0; $i < count($classFlagsFromData); $i++) {
            $classFlags[$classFlagsFromData[$i]['gymClassName']] = $classFlagsFromData[$i]['flag'];
        }
        $classType = 1;
        for ($i = 0; $i < 240; $i++) {
            for ($j = 0; $j < 39; $j++)
                $seats[$i][$j] = 'Empty';
        }
        $j=0;
        for ($i = 0; $i < count($specialSeatsFromData); $i++) {
            $carbonToday = Carbon::parse($today);
            $carbonDate = Carbon::parse($specialSeatsFromData[$i]['date']);

            if ($carbonDate >= $carbonToday) {
                $dateNum = intval($carbonToday->diffInDays($carbonDate)) * 8 + intval($specialSeatsFromData[$i]['classNum']);
                $seatsFromData[$j]['gymClassName'] = $specialSeatsFromData[$i]['gymClassName'];
                $seatsFromData[$j]['classIdNum'] = $dateNum;
                $seatsFromData[$j]['seatNum'] = $specialSeatsFromData[$i]['seatNum'];
                $seatsFromData[$j]['State'] = $specialSeatsFromData[$i]['State'];
                $j ++;
                if ($specialSeatsFromData[$i]['gymClassName'] == 'Spinning') {
                    $seats[$dateNum][$specialSeatsFromData[$i]['seatNum']] = $specialSeatsFromData[$i]['State'];
                }
            }
        }

        $parentUrl = config('app.parent_url');

        $homeUrl = env('Parent_URL', 'default');

        $selectedDate = 0;
        $selectedTime = '7:00 - 8:00 AM';
        $weekth = 0;
        $selectedNum = 0;
        $firstseats = $seats[0];
        $totalprice = 0;
        $fullSeatsCount = 0;
        $disableSeatsCount = 0;
        $emptySeatsCount = 0;
        $hrid = -1;
        foreach ($firstseats as $index => $item) {
            if ($item == "Full") {
                $fullSeatsCount++;
                $totalprice += 50;
            }
            if ($item == "Disable") $disableSeatsCount++;
            if ($item == "Empty") $emptySeatsCount++;
        }
        $seatsDirection = config('seatsDirection.list');
        $step = 1;
        $weekth = 0;
        $profile = true;
        $profile2 = true;
        return view('admin-details', compact(
            'today',
            'selectedDate',
            'selectedTime',
            'weekth',
            'selectedNum',
            'step',
            'seats',
            'classFlags',
            'seatsFromData',
            'classType',
            'firstseats',
            'seatsDirection',
            'profile',
            'profile2',
            'homeUrl',
            'parentUrl',
            'fullSeatsCount',
            'disableSeatsCount',
            'emptySeatsCount',
            'totalprice',
            'hrid'

        ))->with([
            'getFutureDateInSpanish' => function ($days) {
                return $this->getFutureDateInSpanish($days);
            },
            'getFutureDateInEnglish' => function ($days) {
                return $this->getFutureDateInEnglish($days);
            },
            'getWeekdayInSpanish' => function ($date) {
                return $this->getWeekdayInSpanish($date);
            },
            'getDayAndMonthInSpanish' => function ($date) {
                return $this->getDayAndMonthInSpanish($date);
            },
            'getClaseList' => function ($clase) {
                return $this->getClaseList($clase);
            },
        ]);
        // return view('class-details', compact(
        //         'step', 'seats', 'seatsDirection'
        //     ));
    }

    public function getuserdetail(Request $req)
    {

        $today = Carbon::today()->format('Y-m-d');
        $data = $req->all();
        $selectedSeatsNum = $data["selectedSeatsNum"]; 
        $seatid = $data["seatid"];
        $currentClassName = $data["currentClassName"];

        $BookedDetailFromData = BookedModel::all(['id', 'name','lastname', 'phone', 'email', 'date', 'class', 'seatNumber', 'gymClassName']);
        for ($i = 0; $i < 240; $i++) {
            for ($j = 0; $j < 39; $j++)
                $seats[$i][$j] = 'Empty';
        }
        for ($i = 0; $i < count($BookedDetailFromData); $i++) {

            $carbonToday = Carbon::parse($today);
            $carbonDate = Carbon::parse($BookedDetailFromData[$i]['date']);

            if ($carbonDate >= $carbonToday) {

                $dateNum = intval($carbonToday->diffInDays($carbonDate)) * 8 + intval($BookedDetailFromData[$i]['class']);

                if($dateNum == $selectedSeatsNum && $BookedDetailFromData[$i]['seatNumber'] == $seatid && $BookedDetailFromData[$i]['gymClassName'] == $currentClassName){
                    return response()->json([
                        'name' => $BookedDetailFromData[$i]['name'],
                        'lastname' => $BookedDetailFromData[$i]['lastname'],
                        'phone' => $BookedDetailFromData[$i]['phone'],
                        'email' => $BookedDetailFromData[$i]['email'],
                    ]);
                }
            }
        }
        
        return response()->json(array("success" => "Thank you. Seats are all booked successfully"));
    }
    private function getFutureDateInSpanish($days)
    {
        return Carbon::today()->addDays($days)->locale('es')->isoFormat('dddd D [de] MMMM');
    }

    private function getFutureDateInEnglish($days)
    {
        return Carbon::today()->addDays($days)->locale('en')->isoFormat('dddd, MMMM D');
    }

    private function getWeekdayInSpanish($date)
    {
        return Carbon::parse($date)->locale('es')->isoFormat('dddd');
    }

    private function getDayAndMonthInSpanish($date)
    {
        return Carbon::parse($date)->locale('es')->isoFormat('D MMM');
    }

    private function getClaseList($clase)
    {
        $classes = [
            'spinning' => 'Spinning',
            'yoga' => 'Yoga',
            'cycling' => 'Cycling',
            'combat' => 'Fit Combat',
            'zumba' => 'Zumba',
            'pliates' => 'Pliates',
        ];

        return $classes[$clase] ?? 'Spinning';
    }
}
