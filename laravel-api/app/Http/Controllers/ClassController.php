<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use DateTime;
use Exception;

use App\Models\SeatModel;
use App\Models\BookedModel;
use App\Models\ClassModel;

class ClassController extends Controller
{

    public function show()
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
        return view('class-details', compact(
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
    public function counter(Request $request)
    {

        $kk["asd"] = "asdf";
        $step = floatval($request["step"]) + 1;
        $a = json_encode($kk);
        return view();
        // return response()->json(array("step" => $step));

    }
    public function saveSeat(Request $req)
    {

        $today = Carbon::today()->format('Y-m-d');
        $data = $req->all();
        $selectedTimeSeats = $data["selectedTimeSeats"];
        $selectedSeatsNum = $data["selectedSeatsNum"];
        $nameVal = $data["nameVal"];
        $lastnameVal = $data["lastnameVal"];
        $phoneVal = $data["phoneVal"];
        $emailVal = $data["emailVal"];
        $currentClassName = $data["currentClassName"];

        $specialSeatsFromData = SeatModel::all(['id', 'gymClassName', 'date', 'classNum', 'seatNum', 'State']);
        for ($i = 0; $i < 240; $i++) {
            for ($j = 0; $j < 39; $j++)
                $seats[$i][$j] = 'Empty';
        }
        for ($i = 0; $i < count($specialSeatsFromData); $i++) {
            $carbonToday = Carbon::parse($today);
            $carbonDate = Carbon::parse($specialSeatsFromData[$i]['date']);

            if ($carbonDate >= $carbonToday) {
                $dateNum = intval($carbonToday->diffInDays($carbonDate)) * 8 + intval($specialSeatsFromData[$i]['classNum']);

                if ($specialSeatsFromData[$i]['gymClassName'] == $currentClassName) {
                    $seats[$dateNum][$specialSeatsFromData[$i]['seatNum']] = $specialSeatsFromData[$i]['State'];
                }
            }
        }
        for ($i = 0; $i < 39; $i++) {
            $today = Carbon::today()->format('Y-m-d');
            if ($selectedTimeSeats[$i] == "Full") {
                if ($seats[$selectedSeatsNum][$i] == "Disable" || $seats[$selectedSeatsNum][$i] == "Booked") {
                    // throw new \Exception("Seat $i for date that time is not available. Someone already booked or there is some issue for the seat.");
                    return response()->json(array("failed" => "Seat $i for date that time is not available. Someone already booked or there is some issue for the seat."));
                } else {
                    $result = SeatModel::insert([
                        'gymClassName' => $currentClassName,
                        'date' => Carbon::today()->addDays(intval($selectedSeatsNum) / 8)->format('Y-m-d'),
                        'classNum' => intval($selectedSeatsNum) % 8,
                        'seatNum' => $i,
                        'State' => "Booked"
                    ]);
                    $result1 = BookedModel::insert([
                        'name' => $nameVal,
                        'lastname' => $lastnameVal,
                        'phone' => $phoneVal,
                        'email' => $emailVal,
                        'date' => Carbon::today()->addDays(intval($selectedSeatsNum) / 8)->format('Y-m-d'),
                        'class' => intval($selectedSeatsNum) % 8,
                        'seatNumber' => $i,
                        'gymClassName' => $currentClassName,
                    ]);
                }
            }
        }
        return response()->json(array("success" => "Thank you. Seats are all booked successfully"));
    }

    public function deleteBook(Request $request)
    {
        $allParams = $request->query();
        // $data = $req->all();
        $date = $allParams["date"];
        $classNum = $allParams["classNum"];
        $seatsList = $allParams["seatsList"];
        $gymClassName = $allParams["gymClassName"];
        $seats = explode(",", $seatsList);

        $spanishMonths = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
        ];

        // Remove the day name if present
        $spanishDate = preg_replace('/^[a-záéíóúñ]+ /i', '', $date);

        // Extract day and month
        preg_match('/(\d+) de ([a-záéíóúñ]+)/i', $spanishDate, $matches);
        $day = $matches[1];
        $month = array_search(strtolower($matches[2]), $spanishMonths) + 1;

        // Get current date
        $currentDate = new DateTime();
        $currentYear = (int)$currentDate->format('Y');
        $currentMonth = (int)$currentDate->format('m');

        // Determine the year
        $year = $currentYear;
        if ($currentMonth == 12 && $month < $currentMonth) {
            $year++;
        }

        // Create date string
        // $dateString = sprintf('%04d-%02d-%02d', $year, $month, $day + 1);

        
        $dateString = sprintf('%04d-%02d-%02d', $year, $month, $day);

        // Validate date
        $date = DateTime::createFromFormat('Y-m-d', $dateString);
        if (!$date || $date->format('Y-m-d') !== $dateString) {
            throw new Exception("Invalid date");
        }

        foreach ($seats as $seatNum) {
            SeatModel::where('date', $dateString)
                     ->where('classNum', $classNum)
                     ->where('seatNum', intval($seatNum)-1)
                     ->where('gymClassName', $gymClassName)
                     ->delete();
        }
        foreach ($seats as $seatNum) {
            BookedModel::where('date', $dateString)
                     ->where('class', $classNum)
                     ->where('seatNumber', intval($seatNum)-1)
                     ->where('gymClassName', $gymClassName)
                     ->delete();
        }
        return response()->json(array('aa'=>$seatsList));
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
