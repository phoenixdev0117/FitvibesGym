<!DOCTYPE html>
<html>

<head>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    @csrf
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
    <style>
        .custom-select {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='black'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1em;
        }

        .custom-select-small {
            appearance: none;
            background-color: rgb(217, 217, 217);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(198, 3, 132)' viewBox='0 0 24 24' stroke='none'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-5 7-5-7 '%3E%3C/path%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.5rem center;
            background-size: 2em;
            position: relative;
        }

        .custom-checkbox {
            background-color: #f9fafb;
            /* light gray */
            text-align: center;
            border: 2px solid red;
            font-weight: 700;
            /* dark gray */
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: relative;
        }

        .custom-checkbox-label {
            color: red;
        }

        .custom-checkbox-label.checked {
            color: black;
        }

        .custom-checkbox.checked {
            background-color: #dadada;
            /* dark gray */
            border: none;
            text-align: center;
            font-weight: 700;
            /* dark gray */
        }

        .custom-checkbox.checked::after {
            text-align: center;
            content: '✔';
            font-size: 30px;
            font-weight: 700;
            font-family: Arial, Helvetica, sans-serif;
            width: 40px;
            height: 40px;
            border: none;
            position: absolute;
        }
    </style>
</head>

<body class="bg-white">
    <div class=" w-full lg:h-[95vh] overflow-y-hidden flex flex-col lg:flex-row">
        <div class="w-full lg:w-8/12 flex flex-col justify-start items-start pl-12 lg:pl-24 pr-12 lg:pr-0 gap-5 {{ $step == 3 ? 'pt-0' : 'pt-12'}} overflow-y-auto">
            <div class="h-[600px] w-full">
                <!-- dropdown button -->
                <!-- <div class="flex gap-12 "> -->
                <div class=" gap-12 {{ $step < 3 ? 'flex' : 'hidden'}} step-u3">
                    <img src="{{asset('imgs/icons/35.png')}}" width="56" alt="seat">
                    <div class="relative ">
                        <select name="Classes" id="classes" class="custom-select w-[180px] text-[24px] rounded-lg pl-4 pr-12 py-3 bg-yellow-300 text-black cursor-pointer">
                            <option value="Spinning" class="bg-white hover:bg-yellow-300">Spinning</option>
                            <option value="Cycling" class="bg-white hover:bg-yellow-300">Cycling</option>
                            <option value="Yoga" class="bg-white hover:bg-yellow-300">Yoga</option>
                            <option value="Fit Combat" class="bg-white hover:bg-yellow-300">Fit Combat</option>
                            <option value="Zumba" class="bg-white hover:bg-yellow-300">Zumba</option>
                            <option value="Pliates" class="bg-white hover:bg-yellow-300">Pliates</option>
                        </select>
                    </div>
                </div>
                <!-- step 1 -->
                <div class="{{ $step == 1 ? 'flex' : 'hidden'}} flex-col justify-start items-start gap-5 mt-6 step-1">
                    <div class="flex gap-4 items-center">
                        <img id="prev-btn" src="{{asset('imgs/icons/36.png')}}" alt="prev" class="w-8 h-8 rounded-full bg-[#c60384] flex justify-center items-center text-white cursor-pointer" />
                        <div class="flex border-b-2 border-[#dad9d8] overflow-x-auto w-[70vw] lg:w-[53vw] select-day-block">
                            @for ($i = 0; $i < 7; $i++)
                                <div id="selected-day-{{$i}}" class="selected-day-block cursor-pointer flex flex-col justify-center items-center text-[24px] w-36 min-w-36">
                                <div class="font-bold">{{$getWeekdayInSpanish($getFutureDateInEnglish($weekth * 7 + $i))}}</div>
                                <div>{{$getDayAndMonthInSpanish($getFutureDateInEnglish($weekth * 7 + $i))}}</div>
                        </div>
                        @endfor
                    </div>
                    <img id="next-btn" src="{{asset('imgs/icons/52.png')}}" alt="next" class="w-8 h-8 rounded-full bg-[#c60384] flex justify-center items-center text-white cursor-pointer" />
                </div>
                <div class="flex flex-wrap mt-12 px-9 justify-between gap-5 text-[16px] leading-[18px] md:text-[24px]">
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">7:00 - 8:00 AM</div>
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">8:00 - 9:00 AM</div>
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">9:00 - 10:00 AM</div>
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">10:00 - 11:00 AM</div>
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">5:00 - 6:00 PM</div>
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">6:00 - 7:00 PM</div>
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">7:00 - 8:00 PM</div>
                    <div class="time-select-block  border-2 border-[#dad9d8] rounded-md p-4 w-[45%] md:w-[230px] cursor-pointer hover:bg-[#c60384] hover:text-[white]">8:00 - 9:00 PM</div>
                </div>
            </div>

            <!-- step 2 -->
            <div class="w-full   {{ $step == 2 ? 'flex' : 'hidden'}}    flex-col justify-start items-start mt-6 gap-5 step-2">
                <div class="flex gap-4 items-center">
                    <div id="am-block" class="border-b-2 border-[#dad9d8] overflow-x-auto w-[70vw] lg:w-[53vw] flex">
                        <div id="am1" class=" am font-bold cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">7:00 - 8:00 AM</div>
                        <div id="am2" class=" am font-bold cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">8:00 - 9:00 AM</div>
                        <div id="am3" class=" am font-bold  cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">9:00 - 10:00 AM</div>
                        <div id="am4" class=" am font-bold cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">10:00 - 11:00 AM</div>
                    </div>
                    <div id="pm-block" class="border-b-2 border-[#dad9d8] overflow-x-auto w-[70vw] lg:w-[53vw] flex">
                        <div id="pm1" class=" pm cursor-pointer flex flex-col font-bold justify-center items-center text-[24px] py-2 w-56 min-w-56">5:00 - 6:00 PM</div>
                        <div id="pm2" class=" pm cursor-pointer flex flex-col font-bold justify-center items-center text-[24px] py-2 w-56 min-w-56">6:00 - 7:00 PM</div>
                        <div id="pm3" class=" pm cursor-pointer flex flex-col font-bold justify-center items-center text-[24px] py-2 w-56 min-w-56">7:00 - 8:00 PM</div>
                        <div id="pm4" class=" pm cursor-pointer flex flex-col font-bold justify-center items-center text-[24px] py-2 w-56 min-w-56">8:00 - 9:00 PM</div>
                    </div>
                </div>
                <div class="flex gap-5 flex-wrap items-center">
                    <div class="flex gap-4 mr-10 items-center">
                        <img width="30" height="30" src="{{asset('imgs/icons/38.png')}}" alt="logo">
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">Reservada</div>
                    </div>
                    <div class="flex gap-4 mr-10 items-center">
                        <img width="30" height="30" src="{{asset('imgs/icons/39.png')}}" alt="logo">
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">Desactivar</div>
                    </div>
                    <div class="flex gap-4 items-center">
                        <img width="30" height="30" src="{{asset('imgs/icons/40.png')}}" alt="logo">
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">Vacía</div>
                    </div>
                </div>
                <hr class="bg-black h-[4px] mt-14 w-full" />
                <div class="flex flex-row flex-wrap w-full justify-between relative seatsBlock">

                    @foreach($firstseats as $index => $item)
                    @if($index == 2 || $index == 6 || $index == 10)
                    <div class="w-[11%]"></div>
                    <div class="w-[11%]"></div>
                    <div class="w-[11%]"></div>
                    <div class="w-[11%]"></div>
                    <div class="w-[11%]"></div>
                    @endif
                    <div id="seat-{{$index}}" class="w-[11%] seats">
                        @if($item === 'Empty')
                        <img width="50" height="50"
                            src="{{asset('imgs/icons/40.png')}}"
                            alt="logo"
                            class="{{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }}">
                        @elseif($item === 'Booked')
                        <img width="50" height="50"
                            src="{{asset('imgs/icons/38.png')}}"
                            alt="logo"
                            class="seat-Booked {{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }} cursor-pointer">
                        @else
                        <img width="50" height="50"
                            src="{{asset('imgs/icons/39.png')}}"
                            alt="logo"
                            class="{{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }}">
                        @endif
                    </div>
                    @endforeach

                    <div class="absolute -top-2 left-[50%] translate-x-[-50%] flex flex-col gap-2 justify-center items-center">
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">FRENTE</div>
                        <div class="bg-[#fbee21] rounded-lg w-[30vw] h-[15vw] md:w-44 md:h-24 "></div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="w-full lg:w-4/12 pt-12 pb-24 px-10 flex flex-col items-start gap-5 font-bold">
        <div class="bg-[#fbee21] w-full 2xl:w-[90%] rounded-lg h-[100px] px-6 flex justify-between items-center">
            <div class="flex gap-4 items-center">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[32px] font-bold">
                    Información (<strong id="selectedClassName">Spinning</strong>)
                </div>
            </div>
        </div>
        <div class="bg-white border-gray-950 border-2 w-full 2xl:w-[90%] max-h-[380px] lg:max-h-[470px] rounded-md px-6 flex flex-col gap-3 overflow-auto ">
            <div class="flex flex-col">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[24px] font-bold">
                    FECHA Y HORA
                </div>
                <div
                    style="font-family: KommonSemiBold;"
                    class="text-[20px]">
                    <span id="userDate">{{$getFutureDateInSpanish($selectedDate)}}</span> , <span id="userTime">{{$selectedTime}}</span>
                </div>
            </div>
            <div>
                <hr class="bg-[#dad9d8] h-[3px] w-full" />
            </div>
            <div class="flex flex-col">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[24px] font-bold">
                    Nombre Completo
                </div>
                <div
                    style="font-family: KommonSemiBold;"
                    class="text-[20px]">
                    <span id="userFirstName">Elias</span> <span id="userLastName">Rutuu</span>
                </div>
            </div>
            <div>
                <hr class="bg-[#dad9d8] h-[3px] w-full" />
            </div>
            <div class="flex flex-col">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[24px] font-bold">
                    Número de teléfono
                </div>
                <div
                    style="font-family: KommonSemiBold;"
                    class="text-[20px]">
                    <span id="userPhone">12345678</span>
                </div>
            </div>
            <div>
                <hr class="bg-[#dad9d8] h-[3px] w-full" />
            </div>
            <div class="flex flex-col">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[24px] font-bold">
                    Correo electrónico
                </div>
                <div
                    style="font-family: KommonSemiBold;"
                    class="text-[20px]">
                    <span id="userEmail">test@gym.com</span>
                </div>
            </div>

            <div class="flex flex-col gap-1">
                <button
                    id="step-12"
                    style="font-family: KommonExtraBold;"
                    class=" {{ $step == 1 ? 'flex' : 'hidden'}} justify-center items-center text-[24px] font-bold text-white bg-[#c60384] rounded-md py-2 step-1">
                    CONTINUAR
                </button>
                <a
                    href="javascript:window.parent.location.href = '<?= $parentUrl ?>';"
                    style="font-family: KommonExtraBold;"
                    class=" {{ $step == 1 ? 'flex' : 'hidden'}} justify-center items-center text-[24px] font-bold bg-white rounded-md py-2 step-1">
                    VOLVER
                </a>
                <button
                    id="step-21"
                    style="font-family: KommonExtraBold;"
                    class="  {{ $step == 2 ? 'flex' : 'hidden'}} justify-center items-center text-[24px] font-bold bg-white rounded-md py-2 step-2">
                    VOLVER
                </button>

            </div>
        </div>
    </div>
    </div>
    <script lanugage="javascript">
        // Link to Home
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        // var parentUrl = <?= $parentUrl ?>;
        // const gotoHome = () => {
        //     console.log('====================================');
        //     console.log("<?= $parentUrl ?>");
        //     console.log('====================================');
        //     // window.parent.location.href = parentUrl;
        // }

        const getFutureDateInSpanish = (days) => {
            const today = new Date();
            const futureDate = new Date(Date.UTC(
                today.getUTCFullYear(),
                today.getUTCMonth(),
                today.getUTCDate() + days
            ));

            const options = {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timeZone: 'UTC'
            };

            return new Intl.DateTimeFormat('es-ES', options).format(futureDate);
        };
        const getFutureDateInEnglish = (days) => {
            const today = new Date();
            const futureDate = new Date(Date.UTC(
                today.getUTCFullYear(),
                today.getUTCMonth(),
                today.getUTCDate() + days
            ));

            const options = {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timeZone: 'UTC'
            };

            return new Intl.DateTimeFormat('en-US', options).format(futureDate);
        };

        const getWeekdayInSpanish = (days) => {
            const today = new Date();
            const futureDate = new Date(Date.UTC(
                today.getUTCFullYear(),
                today.getUTCMonth(),
                today.getUTCDate() + days
            ));

            const options = {
                weekday: 'long',
                timeZone: 'UTC'
            };

            return new Intl.DateTimeFormat('es-ES', options).format(futureDate);
        };

        const getDayAndMonthInSpanish = (inputDate) => {
            const date = new Date(inputDate);
            const options = {
                day: 'numeric',
                month: 'short',
            };

            const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(date);

            // Replace the month abbreviation to a more readable format
            return formattedDate.replace('.', ''); // Removes the dot from the month abbreviation
        };

        const timeOrder = (inputTime) => {
            switch (inputTime) {
                case "7:00 - 8:00 AM":
                    return 0;
                    break;
                case "8:00 - 9:00 AM":
                    return 1;
                    break;
                case "9:00 - 10:00 AM":
                    return 2;
                    break;
                case "10:00 - 11:00 AM":
                    return 3;
                    break;
                case "5:00 - 6:00 PM":
                    return 4;
                    break;
                case "6:00 - 7:00 PM":
                    return 5;
                    break;
                case "7:00 - 8:00 PM":
                    return 6;
                    break;
                case "8:00 - 9:00 PM":
                    return 7;
                    break;
                default:
                    return 0;
                    break;

            }
        }

        var weekth = <?= $weekth ?>;
        var step = <?= $step ?>;
        var fullSeatsCount = <?= $fullSeatsCount ?>;
        var totalprice = <?= $totalprice ?>;
        var seats = <?= @json_encode($seats) ?>;
        var classFlags = <?= @json_encode($classFlags) ?>;
        var seatsFromData = <?= @json_encode($seatsFromData) ?>;
        var classType = <?= $classType ?>;
        var selectedDate = <?= $selectedDate ?>;
        var selectedTime = '<?= $selectedTime ?>';
        var selectedTimeSeats = seats[0];
        var seatsDirection = <?= @json_encode($seatsDirection) ?>;
        var selectedSeatsNum = 0;
        var currentClassName = 'Spinning';
        $(document).ready(function() {

            //Select Class Types
            $('#classes').change(function() {
                currentClassName = $(this).val();
                classType = classFlags[currentClassName];
                $('#selectedClassName').text(currentClassName);
                for (let i = 0; i < 240; i++) {
                    for (let j = 0; j < 39; j++)
                        seats[i][j] = 'Empty';
                }
                console.log('====================================');
                console.log(seatsFromData);
                console.log('====================================');
                for (let i = 0; i < seatsFromData.length; i++) {
                    if (seatsFromData[i].gymClassName == currentClassName) {
                        seats[seatsFromData[i].classIdNum][seatsFromData[i].seatNum] = seatsFromData[i].State;
                    }
                }
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                    else if (selectedTimeSeats[i] == 'Booked') {

                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Booked ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                }
            });
            
            // show 30 days in first step with violet buttons
            $("#next-btn").on('click', function(e) {
                if (weekth < 3) {
                    weekth++;

                    $($(".select-day-block")[0]).html(
                        [0, 1, 2, 3, 4, 5, 6].map((aa) => {
                            return "<div id='selected-day-" + aa + "' class='selected-day-block cursor-pointer flex flex-col justify-center items-center text-[24px] w-36 min-w-36'><div class='font-bold'>" + getWeekdayInSpanish(weekth * 7 + aa) + "</div><div>" + getDayAndMonthInSpanish(getFutureDateInEnglish(weekth * 7 + aa)) + "</div></div>";
                        })
                    )
                }
            })
            $("#prev-btn").on('click', function(e) {
                if (weekth > 0) {
                    weekth--;
                    // e.target["id"]
                    $($(".select-day-block")[0]).html(
                        [0, 1, 2, 3, 4, 5, 6].map((aa) => {
                            return "<div id='selected-day-" + aa + "' class='selected-day-block cursor-pointer flex flex-col justify-center items-center text-[24px] w-36 min-w-36'><div class='font-bold'>" + getWeekdayInSpanish(weekth * 7 + aa) + "</div><div>" + getDayAndMonthInSpanish(getFutureDateInEnglish(weekth * 7 + aa)) + "</div></div>";
                        })
                    )
                }
            })
            // classes tapbar in second step
            $(".am").on('click', function(e) {
                // e.target["id"]
                $(".am").removeClass("border-b-2 border-[#fbee21]");
                $(e.target).addClass("border-b-2 border-[#fbee21]");
                $("#selectedTime").html($(e.target).html());
                selectedSeatsNum = selectedDate * 8 + timeOrder($(e.target).text().trim());
                selectedTime = $(e.target).text();
                selectedTimeSeats = seats[selectedSeatsNum];

                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                    else if (selectedTimeSeats[i] == 'Booked') {

                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Booked ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                }

            })
            $(".pm").on('click', function(e) {
                // e.target["id"]
                $(".pm").removeClass("border-b-2 border-[#fbee21]");
                $(e.target).addClass("border-b-2 border-[#fbee21]");
                $("#selectedTime").html($(e.target).html());
                selectedSeatsNum = selectedDate * 8 + timeOrder($(e.target).text().trim());
                selectedTime = $(e.target).text();
                selectedTimeSeats = seats[selectedSeatsNum];
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                    else if (selectedTimeSeats[i] == 'Booked') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Booked ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                }

            })
            // select class time block in first step
            $(".time-select-block").on('click', function(e) {

                $(".time-select-block").removeClass("bg-[#c60384] text-white");
                $(e.target).addClass("bg-[#c60384] text-white");
                $("#selectedTime").html($(e.target).html());
                selectedSeatsNum = selectedDate * 8 + timeOrder($(e.target).text().trim());
                selectedTime = $(e.target).text();
                selectedTimeSeats = seats[selectedSeatsNum];
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                    else if (selectedTimeSeats[i] == 'Booked') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Booked ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                }

            })
            // select date in tap bar of first step
            $(".select-day-block ").on('click', '.selected-day-block', function(e) {
                $('.selected-day-block').removeClass("border-b-2 border-[#fbee21]");
                $(e.target).parent(".selected-day-block").addClass("border-b-2 border-[#fbee21]");
                var selectedNum = e.target.parentElement["id"].split("-")[2];
                selectedDate = parseInt(weekth) * 7 + parseInt(selectedNum);
                console.log('====================================');
                console.log(selectedDate);
                console.log('====================================');
                $("#selectedDate").text(getFutureDateInSpanish(selectedDate));

                selectedSeatsNum = selectedDate * 8 + timeOrder(selectedTime);
                selectedTimeSeats = seats[selectedSeatsNum];
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                    else if (selectedTimeSeats[i] == 'Booked') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Booked ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' }">
                        `)
                }
            })
            // booking seats with clicking pictures and eliminars 
            $(".seats").on('click', function(e) {
                var seatid = e.target.parentElement.id.split('-')[1];
                console.log('====================================');
                console.log(selectedTime);
                console.log('====================================');
                $.ajax({
                    url: "{{route('api.detailed')}}",
                    method: "POST",
                    data: {
                        currentClassName: currentClassName,
                        selectedSeatsNum: selectedSeatsNum,
                        seatid: seatid,
                    },
                    success: function(response) {
                        // Handle success
                        console.log(response);

                        $('#userDate').text(getFutureDateInSpanish(selectedDate));
                        $('#userTime').text(selectedTime);
                        $('#userFirstName').text(response.name);
                        $('#userLastName').text(response.lastname);
                        $('#userPhone').text(response.phone);
                        $('#userEmail').text(response.email);

                    },
                    error: function(err) {
                        console.log(err);
                        // alert('An error occurred');
                    }
                })
            })

            // continue and turnback button action
            $("#step-12").on('click', function(e) {
                $('.step-1').removeClass("flex");
                $('.step-1').addClass("hidden");
                $('.step-2').removeClass("hidden");
                $('.step-2').addClass("flex");
                if (selectedTime.includes('AM') == true) {
                    $('#pm-block').removeClass("flex");
                    $('#pm-block').addClass("hidden");
                    $('#am-block').removeClass("hidden");
                    $('#am-block').addClass("flex");
                } else {
                    $('#am-block').removeClass("flex");
                    $('#am-block').addClass("hidden");
                    $('#pm-block').removeClass("hidden");
                    $('#pm-block').addClass("flex");
                }
            })
            $("#step-21").on('click', function(e) {
                $('.step-2').removeClass("flex");
                $('.step-2').addClass("hidden");
                $('.step-1').removeClass("hidden");
                $('.step-1').addClass("flex");
            })

        })
    </script>
</body>

</html>