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
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">SELECCIONADO</div>
                    </div>
                    <div class="flex gap-4 mr-10 items-center">
                        <img width="30" height="30" src="{{asset('imgs/icons/39.png')}}" alt="logo">
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">OCUPADO</div>
                    </div>
                    <div class="flex gap-4 items-center">
                        <img width="30" height="30" src="{{asset('imgs/icons/40.png')}}" alt="logo">
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">DISPONIBLE</div>
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
                            class="seat-Empty {{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }} cursor-pointer ">
                        @elseif($item === 'Full')
                        <img width="50" height="50"
                            src="{{asset('imgs/icons/38.png')}}"
                            alt="logo"
                            class="seat-Full {{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }} cursor-pointer">
                        @else
                        <img width="50" height="50"
                            src="{{asset('imgs/icons/39.png')}}"
                            alt="logo"
                            class="seat-Disable {{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }}">
                        @endif
                    </div>
                    @endforeach

                    <div class="absolute -top-2 left-[50%] translate-x-[-50%] flex flex-col gap-2 justify-center items-center">
                        <div class="italic text-[20px]" style="font-family: KommonExtraBold;">FRENTE</div>
                        <div class="bg-[#fbee21] rounded-lg w-[30vw] h-[15vw] md:w-44 md:h-24 "></div>
                    </div>
                </div>
            </div>

            <!-- step3 -->
            <div class="w-full  {{ $step == 3 ? 'flex' : 'hidden'}} flex-col 2xl:pr-[40px] xl:pr-[20px] pr-[10px] step-3 ">
                <div class="w-full flex flex-col gap-4 ">
                    <div class=" flex justify-between items-center">
                        <div class="flex gap-4 items-center">
                            <img width={25} height={25} src="{{asset('imgs/icons/42.png')}}" alt="seat" class="w-6 h-6">
                            <div class="flex flex-col gap-0">
                                <div class="text-[#dad9d8] text-[22px] font-bold" style="font-family: KommonExtraBold;">Paso 1</div>
                                <div class="text-black text-[22px] font-bold" style="font-family: KommonExtraBold;">DATOS PERSONALES</div>
                            </div>
                        </div>
                        @if($profile == true)
                        <img id="detail1-reverse" width={25} height={25} src="{{asset('imgs/icons/44.png')}}" alt="seat" class="w-6 h-6 cursor-pointer">
                        @else
                        <img id="detail1" width={25} height={25} src="{{asset('imgs/icons/43.png')}}" alt="seat" class="w-6 h-6 cursor-pointer">
                        @endif
                    </div>
                    <hr class="bg-[#dad9d8] h-[6px] w-full" />
                    <div class="w-full flex flex-col gap-6 profile-detail1">
                        @if($profile == true)
                        <div class="flex flex-col w-full md:flex-row justify-between items-center gap-4 md:gap-8 text-[20px]">
                            <div class="flex w-full md:flex-1 relative">
                                <div class=" h-12 rounded-lg w-full relative">
                                    <input type="text" id="name-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                    <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                        <div class="text-[#d9d9d9] text-[12px]">Nombre(s)</div>
                                        <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden name-valid">
                                        <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden name-invalid">
                                    </div>
                                    <div class="text-red-600 italic text-xs ml-4 hidden name-invalid">Debes ingresar caracteres alfabéticos.</div>
                                </div>
                                <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                            </div>
                            <div class="flex w-full md:flex-1 relative">
                                <div class=" h-12 rounded-lg w-full relative">
                                    <input type="text" id="lastname-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                    <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                        <div class="text-[#d9d9d9] text-[12px]">Apellidos(s)</div>
                                        <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden lastname-valid">
                                        <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden lastname-invalid">
                                    </div>
                                    <div class="text-red-600 italic text-xs ml-4 hidden lastname-invalid">Debes ingresar caracteres alfabéticos.</div>
                                </div>
                                <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                            </div>
                            <div class="flex w-full md:flex-1 relative">
                                <div class=" h-12 rounded-lg w-full relative">
                                    <input type="text" id="phone-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                    <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                        <div class="text-[#d9d9d9] text-[12px]">Teléfono</div>
                                        <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden phone-valid">
                                        <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden phone-invalid">
                                    </div>
                                    <div class="text-red-600 italic text-xs ml-4 hidden phone-invalid">El número de teléfono no es válido.</div>
                                </div>
                                <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                            </div>
                        </div>
                        <div class=" w-full relative">
                            <div class=" h-12 rounded-lg w-full relative">
                                <input type="text" id="email-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                    <div class="text-[#d9d9d9] text-[12px]">Correo electrónico</div>
                                    <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden email-valid">
                                    <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden email-invalid">
                                </div>
                                <div class="text-red-600 italic text-xs ml-4 hidden email-invalid">El correo electrónico no es válido.</div>
                            </div>
                            <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                        </div>
                        @endif
                    </div>
                </div>
                <div class="w-full flex flex-col gap-8 mt-5">
                    <div class="w-full flex flex-col gap-8 profile-detail2">
                        <div class="w-full relative flex items-center gap-6">
                            <div class="custom-checkbox min-w-10 max-h-10 min-h-10 checkbox"></div>
                            <div class="text-red-600 text-[20px] checkbox cursor-pointer">Estoy de acuerdo con los Términos y condiciones, políticas de cancelación y de promoción así como los servicios que se muestran en el desglose de mi compra son los que solicito.</div>
                        </div>
                        <button class="pay-valid w-full bg-[#d9d9d9] h-12 rounded-lg text-[24px]" style="font-family: KommonExtraBold;">CONTINUAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full lg:w-4/12 pt-12 pb-24 px-10 flex flex-col items-start gap-5 font-bold">
        <div class="bg-[#fbee21] w-full 2xl:w-[90%] rounded-lg h-[100px] px-6 flex justify-between items-center">
            <div class="flex gap-4 items-center">
                <img
                    src="{{asset('imgs/icons/37.png')}}"
                    alt="logo"
                    width="10"
                    height="10"
                    class="w-10 h-10">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[32px] font-bold">
                    Tú carrito
                </div>
            </div>
            <div
                style="font-family: KommonExtraBold;"
                class="text-[32px] font-bold total-price">
                $ {{$totalprice}}. °°
            </div>
        </div>
        <div class="bg-white border-gray-950 border-2 w-full 2xl:w-[90%] max-h-[380px] lg:max-h-[470px] rounded-md px-6 flex flex-col gap-3 overflow-auto ">
            <div class="flex flex-col">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[24px] font-bold">
                    CLASE
                </div>
                <div
                    id="selectedClassName"
                    style="font-family: KommonSemiBold;"
                    class="text-[20px]">
                    Spinning
                </div>
            </div>

            <div>
                <hr class="bg-[#dad9d8] h-[3px] w-full">
            </div>
            <div class="flex flex-col">
                <div
                    style="font-family: KommonExtraBold;"
                    class="text-[24px] font-bold">
                    FECHA Y HORA
                </div>
                <div
                    style="font-family: KommonSemiBold;"
                    class="text-[20px]">
                    <span id="selectedDate">{{$getFutureDateInSpanish($selectedDate)}}</span> , <span id="selectedTime">{{$selectedTime}}</span>
                </div>
            </div>
            <div>
                <hr class="bg-[#dad9d8] h-[3px] w-full" />
            </div>
            <div class="flex flex-col gap-2">
                <div
                    id="full-seats-count"
                    style="font-family: KommonExtraBold;"
                    class="text-[24px] font-bold">
                    BICICLETA ({{$fullSeatsCount}})
                </div>
                <div id="seat-detail" class="w-full flex flex-col gap-3">
                    @if($fullSeatsCount === 0)
                    <div
                        id="seatisEmpty"
                        style="font-family: KommonSemiBold;"
                        class="text-[20px] flex gap-1 items-center">
                        <img width={20} height={20} src="{{asset('imgs/icons/38.png')}}" alt="seat" class="w-6 h-6">
                        No haz seleccionado tus lugares
                    </div>
                    @else

                    @foreach($firstseats as $index => $item)
                    @if($item === 'Full')
                    @if($hrid == 1)
                    <hr id="seathr{{$hrid}}" class="bg-[#dad9d8] h-[3px] w-full" />
                    @endif

                    @php
                    $hrid = 1;
                    @endphp
                    <div class="w-full flex flex-col gap-3">
                        <div class="flex justify-between">
                            <div
                                style="font-family: KommonSemiBold;"
                                class="text-[20px] flex gap-1 items-center">
                                <img width={20} height={20} src="{{asset('imgs/icons/38.png')}}" alt="seat" class="w-6 h-6">
                                Adulto
                            </div>
                            <div
                                style="font-family: KommonSemiBold;"
                                class="text-[20px]">
                                $ 50.°°
                            </div>
                        </div>
                        <div
                            id="delete-{{$index}}"
                            style="font-family: KommonExtraBold;"
                            class="trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer">
                            <img width={20} height={20} src="{{asset('imgs/icons/45.png')}}" alt="seat" class="w-5 h-5">
                            <div>Eliminar</div>
                        </div>
                    </div>

                    @endif
                    @endforeach
                    @endif
                </div>
                <button
                    id="step-12"
                    style="font-family: KommonExtraBold;"
                    class=" {{ $step == 1 ? 'flex' : 'hidden'}} justify-center items-center text-[24px] font-bold text-white bg-[#c60384] rounded-md py-2 mt-5 step-1">
                    CONTINUAR
                </button>
                <a
                    href="javascript:window.parent.location.href = '<?= $parentUrl ?>';"
                    style="font-family: KommonExtraBold;"
                    class=" {{ $step == 1 ? 'flex' : 'hidden'}} justify-center items-center text-[24px] font-bold bg-white rounded-md py-2 step-1">
                    VOLVER
                </a>

                <button
                    id="step-23"
                    style="font-family: KommonExtraBold;"
                    class=" {{ $step == 2 ? 'flex' : 'hidden'}} justify-center items-center text-[24px] font-bold text-white bg-[#c60384] rounded-md py-2 mt-5 step-2">
                    CONTINUAR
                </button>
                <button
                    id="step-21"
                    style="font-family: KommonExtraBold;"
                    class="  {{ $step == 2 ? 'flex' : 'hidden'}} justify-center items-center text-[24px] font-bold bg-white rounded-md py-2 step-2">
                    VOLVER
                </button>
                <hr class="bg-[#dad9d8] h-[6px] w-full step-3  {{ $step == 3 ? 'flex' : 'hidden'}}" />
                <div class="justify-between text-[#c60384] mb-4 step-3  {{ $step == 3 ? 'flex' : 'hidden'}}">
                    <div
                        style="font-family: KommonExtraBold;"
                        class="text-[32px] font-bold">
                        TOTAL
                    </div>
                    <div

                        style="font-family: KommonExtraBold;"
                        class="text-[32px] font-bold total-price">
                        $ {{$totalprice}}. °°
                    </div>
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

        function showPersistentToast(text, toastType = 'default') {
            // Store the toast message in localStorage
            localStorage.setItem('persistentToast', JSON.stringify({
                text: text,
                type: toastType
            }));

            // Use postMessage to communicate with the parent window
            window.parent.postMessage({
                type: 'showPersistentToast',
                text: text,
                toastType: toastType
            }, '*'); // Replace '*' with the exact origin of your Next.js app in production
        }

        function redirectWithPersistentToast(url, text, toastType = 'default') {
            showPersistentToast(text, toastType);
            // Use a small timeout to ensure the message is posted before redirecting
            setTimeout(() => {
                window.parent.location.href = url;
            }, 3000);
        }





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
                timeZone: 'UTC'
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

        function isSpanishEnglishAlphabetic(input) {
            const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
            return regex.test(input);
        }

        function isValidEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        function isValidCVV(cvv) {
            const regex = /^[0-9]{3,4}$/;
            return regex.test(cvv);
        }

        function isValidPhoneNumber(phoneNumber) {
            const regex = /^\+?[\d\s\-()]{7,15}$/;
            return regex.test(phoneNumber);
        }

        function isValidCardNumber(cardNumber) {
            // Remove any non-digit characters
            const cleanedNumber = cardNumber.replace(/\D/g, '');

            // Check if the number is between 13 and 19 digits long
            if (!/^\d{13,19}$/.test(cleanedNumber)) {
                return false;
            }

            // Implement Luhn algorithm
            return luhnCheck(cleanedNumber);
        }
        // Luhn algorithm implementation
        function luhnCheck(cardNumber) {
            let sum = 0;
            let isEven = false;

            for (let i = cardNumber.length - 1; i >= 0; i--) {
                let digit = parseInt(cardNumber.charAt(i), 10);

                if (isEven) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }

                sum += digit;
                isEven = !isEven;
            }

            return (sum % 10) === 0;
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
        var currentClassName = 'Spinning'
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
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    else if (selectedTimeSeats[i] == 'Full') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Full ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                }
                var virtid = 0;
                var seatHtml = '';

                selectedTimeSeats.forEach((item, id) => {
                    if (item === "Full") {
                        if (virtid === 1) {
                            seatHtml += `<hr id='seathr${id}' class='bg-[#dad9d8] h-[3px] w-full' />`;
                        }
                        seatHtml += `
                        <div id='seatBlock${id}' class='w-full flex flex-col gap-3'>
                            <div class='flex justify-between'>
                                <div style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'>
                                    <img width="20" height="20" src="{{ asset('imgs/icons/38.png') }}" alt='seat' class='w-6 h-6'>
                                    Adulto
                                </div>
                                <div style='font-family: KommonSemiBold;' class='text-[20px]'>$ 50.°°</div>
                            </div>
                            <div id='delete-${id}' style='font-family: KommonExtraBold;' class='trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer'>
                                <img width="20" height="20" src="{{ asset('imgs/icons/45.png') }}" alt='seat' class=' w-5 h-5'>
                                <div>Eliminar</div>
                            </div>
                        </div>`;
                        virtid = 1;
                    }
                });
                if (fullSeatsCount == 0)
                    seatHtml += `
                    <div id='seatisEmpty' style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'> <img width={20} height={20} src='{{asset('imgs/icons/38.png')}}' alt='seat' class='w-6 h-6'> No haz seleccionado tus lugares </div>
                `;
                $("#seat-detail").html(seatHtml);

                $("#full-seats-count").html("BICICLETA (" + fullSeatsCount + ")");
                $(".total-price").html("$ " + fullSeatsCount * 50 + ". °°");
                totalprice = fullSeatsCount * 50;
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
                selectedTimeSeats = seats[selectedSeatsNum];
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    else if (selectedTimeSeats[i] == 'Full') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Full ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                }
                var virtid = 0;
                var seatHtml = '';

                selectedTimeSeats.forEach((item, id) => {
                    if (item === "Full") {
                        if (virtid === 1) {
                            seatHtml += `<hr id='seathr${id}' class='bg-[#dad9d8] h-[3px] w-full' />`;
                        }
                        seatHtml += `
                        <div id='seatBlock${id}' class='w-full flex flex-col gap-3'>
                            <div class='flex justify-between'>
                                <div style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'>
                                    <img width="20" height="20" src="{{ asset('imgs/icons/38.png') }}" alt='seat' class='w-6 h-6'>
                                    Adulto
                                </div>
                                <div style='font-family: KommonSemiBold;' class='text-[20px]'>$ 50.°°</div>
                            </div>
                            <div id='delete-${id}' style='font-family: KommonExtraBold;' class='trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer'>
                                <img width="20" height="20" src="{{ asset('imgs/icons/45.png') }}" alt='seat' class=' w-5 h-5'>
                                <div>Eliminar</div>
                            </div>
                        </div>`;
                        virtid = 1;
                    }
                });
                if (fullSeatsCount == 0)
                    seatHtml += `
                    <div id='seatisEmpty' style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'> <img width={20} height={20} src='{{asset('imgs/icons/38.png')}}' alt='seat' class='w-6 h-6'> No haz seleccionado tus lugares </div>
                `;
                $("#seat-detail").html(seatHtml);

                $("#full-seats-count").html("BICICLETA (" + fullSeatsCount + ")");
                $(".total-price").html("$ " + fullSeatsCount * 50 + ". °°");
                totalprice = fullSeatsCount * 50;
            })
            $(".pm").on('click', function(e) {
                // e.target["id"]
                $(".pm").removeClass("border-b-2 border-[#fbee21]");
                $(e.target).addClass("border-b-2 border-[#fbee21]");
                $("#selectedTime").html($(e.target).html());
                selectedSeatsNum = selectedDate * 8 + timeOrder($(e.target).text().trim());
                selectedTimeSeats = seats[selectedSeatsNum];
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    else if (selectedTimeSeats[i] == 'Full') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Full ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                }
                var virtid = 0;
                var seatHtml = '';

                selectedTimeSeats.forEach((item, id) => {
                    if (item === "Full") {
                        if (virtid === 1) {
                            seatHtml += `<hr id='seathr${id}' class='bg-[#dad9d8] h-[3px] w-full' />`;
                        }
                        seatHtml += `
                        <div id='seatBlock${id}' class='w-full flex flex-col gap-3'>
                            <div class='flex justify-between'>
                                <div style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'>
                                    <img width="20" height="20" src="{{ asset('imgs/icons/38.png') }}" alt='seat' class='w-6 h-6'>
                                    Adulto
                                </div>
                                <div style='font-family: KommonSemiBold;' class='text-[20px]'>$ 50.°°</div>
                            </div>
                            <div id='delete-${id}' style='font-family: KommonExtraBold;' class='trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer'>
                                <img width="20" height="20" src="{{ asset('imgs/icons/45.png') }}" alt='seat' class=' w-5 h-5'>
                                <div>Eliminar</div>
                            </div>
                        </div>`;
                        virtid = 1;
                    }
                });
                if (fullSeatsCount == 0)
                    seatHtml += `
                    <div id='seatisEmpty' style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'> <img width={20} height={20} src='{{asset('imgs/icons/38.png')}}' alt='seat' class='w-6 h-6'> No haz seleccionado tus lugares </div>
                `;
                $("#seat-detail").html(seatHtml);

                $("#full-seats-count").html("BICICLETA (" + fullSeatsCount + ")");
                $(".total-price").html("$ " + fullSeatsCount * 50 + ". °°");
                totalprice = fullSeatsCount * 50;
            })
            // select class time block in first step
            $(".time-select-block").on('click', function(e) {

                $(".time-select-block").removeClass("bg-[#c60384] text-white");
                $(e.target).addClass("bg-[#c60384] text-white");
                $("#selectedTime").html($(e.target).html());
                selectedSeatsNum = selectedDate * 8 + timeOrder($(e.target).text().trim());
                selectedTimeSeats = seats[selectedSeatsNum];
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    else if (selectedTimeSeats[i] == 'Full') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Full ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                }
                var virtid = 0;
                var seatHtml = '';

                selectedTimeSeats.forEach((item, id) => {
                    if (item === "Full") {
                        if (virtid === 1) {
                            seatHtml += `<hr id='seathr${id}' class='bg-[#dad9d8] h-[3px] w-full' />`;
                        }
                        seatHtml += `
                        <div id='seatBlock${id}' class='w-full flex flex-col gap-3'>
                            <div class='flex justify-between'>
                                <div style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'>
                                    <img width="20" height="20" src="{{ asset('imgs/icons/38.png') }}" alt='seat' class='w-6 h-6'>
                                    Adulto
                                </div>
                                <div style='font-family: KommonSemiBold;' class='text-[20px]'>$ 50.°°</div>
                            </div>
                            <div id='delete-${id}' style='font-family: KommonExtraBold;' class='trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer'>
                                <img width="20" height="20" src="{{ asset('imgs/icons/45.png') }}" alt='seat' class=' w-5 h-5'>
                                <div>Eliminar</div>
                            </div>
                        </div>`;
                        virtid = 1;
                    }
                });
                if (fullSeatsCount == 0)
                    seatHtml += `
                    <div id='seatisEmpty' style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'> <img width={20} height={20} src='{{asset('imgs/icons/38.png')}}' alt='seat' class='w-6 h-6'> No haz seleccionado tus lugares </div>
                `;
                $("#seat-detail").html(seatHtml);

                $("#full-seats-count").html("BICICLETA (" + fullSeatsCount + ")");
                $(".total-price").html("$ " + fullSeatsCount * 50 + ". °°");
                totalprice = fullSeatsCount * 50;
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

                selectedSeatsNum = selectedDate * 8 + timeOrder($("#selectedTime").text().trim());
                selectedTimeSeats = seats[selectedSeatsNum];
                fullSeatsCount = 0;
                for (let i = 0; i < selectedTimeSeats.length; i++) {
                    if (selectedTimeSeats[i] == 'Empty')
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    else if (selectedTimeSeats[i] == 'Full') {
                        fullSeatsCount++;
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Full ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                    } else
                        $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                        `)
                }
                var virtid = 0;
                var seatHtml = '';

                selectedTimeSeats.forEach((item, id) => {
                    if (item === "Full") {
                        if (virtid === 1) {
                            seatHtml += `<hr id='seathr${id}' class='bg-[#dad9d8] h-[3px] w-full' />`;
                        }
                        seatHtml += `
                        <div id='seatBlock${id}' class='w-full flex flex-col gap-3'>
                            <div class='flex justify-between'>
                                <div style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'>
                                    <img width="20" height="20" src="{{ asset('imgs/icons/38.png') }}" alt='seat' class='w-6 h-6'>
                                    Adulto
                                </div>
                                <div style='font-family: KommonSemiBold;' class='text-[20px]'>$ 50.°°</div>
                            </div>
                            <div id='delete-${id}' style='font-family: KommonExtraBold;' class='trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer'>
                                <img width="20" height="20" src="{{ asset('imgs/icons/45.png') }}" alt='seat' class=' w-5 h-5'>
                                <div>Eliminar</div>
                            </div>
                        </div>`;
                        virtid = 1;
                    }
                });
                if (fullSeatsCount == 0)
                    seatHtml += `
                    <div id='seatisEmpty' style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'> <img width={20} height={20} src='{{asset('imgs/icons/38.png')}}' alt='seat' class='w-6 h-6'> No haz seleccionado tus lugares </div>
                `;
                $("#seat-detail").html(seatHtml);

                $("#full-seats-count").html("BICICLETA (" + fullSeatsCount + ")");
                $(".total-price").html("$ " + fullSeatsCount * 50 + ". °°");
                totalprice = fullSeatsCount * 50;
            })
            // booking seats with clicking pictures and eliminars 
            $(".seats").on('click', function(e) {
                var seatState = e.target.classList[0].split("-")[1];
                var seatDirection = e.target.classList[1];
                var seatid = e.target.parentElement.id.split('-')[1];
                console.log('====================================');
                console.log(seatState);
                console.log(seatDirection);
                console.log('====================================');
                if (seatState == "Empty") {
                    if (classType) {
                        if (seatDirection == "transform")
                            $(e.target).parent(".seats").html(
                                " <img width='50' height='50' src='{{asset('imgs/icons/38.png')}}' alt='logo' class='seat-Full transform scale-x-[-1] cursor-pointer'>"
                            )
                        else
                            $(e.target).parent(".seats").html(
                                " <img width='50' height='50' src='{{asset('imgs/icons/38.png')}}' alt='logo' class='seat-Full cursor-pointer'>"
                            )
                        selectedTimeSeats[seatid] = "Full";

                        fullSeatsCount++;
                    } else {
                        fullSeatsCount = 0;
                        for (let i = 0; i < selectedTimeSeats.length; i++) {
                            if (i == seatid) selectedTimeSeats[i] = "Full";
                            else selectedTimeSeats[i] = "Empty";
                        }
                        for (let i = 0; i < selectedTimeSeats.length; i++) {
                            if (selectedTimeSeats[i] == 'Empty')
                                $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/40.png')}}"
                                alt="logo"
                                class="seat-Empty ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                                `)
                            else if (selectedTimeSeats[i] == 'Full') {
                                fullSeatsCount++;
                                $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/38.png')}}"
                                alt="logo"
                                class="seat-Full ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                                `)
                            } else {
                                $("#seat-" + i).html(`
                                <img width="50" height="50"
                                src="{{asset('imgs/icons/39.png')}}"
                                alt="logo"
                                class="seat-Disable ${ seatsDirection[i] === 'left' ? 'transform scale-x-[-1]' : '' } cursor-pointer ">
                                `)
                            }
                        }

                    }

                } else if (seatState == "Full") {
                    if (seatDirection == "transform")
                        $(e.target).parent(".seats").html(
                            " <img width='50' height='50' src='{{asset('imgs/icons/40.png')}}' alt='logo' class='seat-Empty transform scale-x-[-1] cursor-pointer'>"
                        )
                    else
                        $(e.target).parent(".seats").html(
                            " <img width='50' height='50' src='{{asset('imgs/icons/40.png')}}' alt='logo' class='seat-Empty cursor-pointer'>"
                        )
                    fullSeatsCount--;

                    selectedTimeSeats[seatid] = "Empty";
                }

                var virtid = 0;
                var seatHtml = '';

                selectedTimeSeats.forEach((item, id) => {
                    if (item === "Full") {
                        if (virtid === 1) {
                            seatHtml += `<hr id='seathr${id}' class='bg-[#dad9d8] h-[3px] w-full' />`;
                        }
                        seatHtml += `
                        <div id='seatBlock${id}' class='w-full flex flex-col gap-3'>
                            <div class='flex justify-between'>
                                <div style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'>
                                    <img width="20" height="20" src="{{ asset('imgs/icons/38.png') }}" alt='seat' class='w-6 h-6'>
                                    Adulto
                                </div>
                                <div style='font-family: KommonSemiBold;' class='text-[20px]'>$ 50.°°</div>
                            </div>
                            <div id='delete-${id}' style='font-family: KommonExtraBold;' class='trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer'>
                                <img width="20" height="20" src="{{ asset('imgs/icons/45.png') }}" alt='seat' class=' w-5 h-5'>
                                <div>Eliminar</div>
                            </div>
                        </div>`;
                        virtid = 1;
                    }
                });
                if (fullSeatsCount == 0)
                    seatHtml += `
                    <div id='seatisEmpty' style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'> <img width={20} height={20} src='{{asset('imgs/icons/38.png')}}' alt='seat' class='w-6 h-6'> No haz seleccionado tus lugares </div>
                `;
                $("#seat-detail").html(seatHtml);

                $("#full-seats-count").html("BICICLETA (" + fullSeatsCount + ")");
                $(".total-price").html("$ " + fullSeatsCount * 50 + ". °°");
                totalprice = fullSeatsCount * 50;
            })
            $("#seat-detail").on('click', '.trash-btn', function(e) {

                if (e.target.id) var deleteid = e.target.id.split('-')[1];
                else var deleteid = e.target.parentElement.id.split('-')[1]; // Extract the index from the id

                selectedTimeSeats[deleteid] = "Empty";
                var virtid = 0;
                var seatHtml = '';
                fullSeatsCount--;
                selectedTimeSeats.forEach((item, id) => {
                    if (item === "Full") {
                        if (virtid === 1) {
                            seatHtml += `<hr id='seathr${id}' class='bg-[#dad9d8] h-[3px] w-full' />`;
                        }
                        seatHtml += `
                            <div id='seatBlock${id}' class='w-full flex flex-col gap-3'>
                                <div class='flex justify-between'>
                                    <div style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'>
                                        <img width="20" height="20" src="{{ asset('imgs/icons/38.png') }}" alt='seat' class='w-6 h-6'>
                                        Adulto
                                    </div>
                                    <div style='font-family: KommonSemiBold;' class='text-[20px]'>$ 50.°°</div>
                                </div>
                                <div id='delete-${id}' style='font-family: KommonExtraBold;' class='trash-btn text-[20px] font-bold italic text-[#c60384] flex items-center cursor-pointer'>
                                    <img width="20" height="20" src="{{ asset('imgs/icons/45.png') }}" alt='seat' class='trash-btn w-5 h-5'>
                                    <div>Eliminar</div>
                                </div>
                            </div>
                        `;
                        virtid = 1;
                    }
                });
                if (fullSeatsCount == 0)
                    seatHtml += `
                    <div id='seatisEmpty' style='font-family: KommonSemiBold;' class='text-[20px] flex gap-1 items-center'> <img width={20} height={20} src='{{asset('imgs/icons/38.png')}}' alt='seat' class='w-6 h-6'> No haz seleccionado tus lugares </div>
                `;
                $("#seat-detail").html(seatHtml);
                if (seatsDirection[deleteid] == "left")
                    $("#seat-" + deleteid).html(
                        " <img width='50' height='50' src='{{asset('imgs/icons/40.png')}}' alt='logo' class='seat-Empty transform scale-x-[-1] cursor-pointer'>"
                    )
                else
                    $("#seat-" + deleteid).html(
                        " <img width='50' height='50' src='{{asset('imgs/icons/40.png')}}' alt='logo' class='seat-Empty cursor-pointer'>"
                    )
                $("#full-seats-count").html("BICICLETA (" + fullSeatsCount + ")");
                $(".total-price").html("$ " + fullSeatsCount * 50 + ". °°");
                totalprice = fullSeatsCount * 50;

            });
            // continue and turnback button action
            $("#step-12").on('click', function(e) {
                $('.step-1').removeClass("flex");
                $('.step-1').addClass("hidden");
                $('.step-2').removeClass("hidden");
                $('.step-2').addClass("flex");
                if ($("#selectedTime").text().includes('AM') == true) {
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
            $("#step-23").on('click', function(e) {
                $('.step-2').removeClass("flex");
                $('.step-2').addClass("hidden");
                $('.step-3').removeClass("hidden");
                $('.step-3').addClass("flex");
                $('.step-u3').removeClass("flex");
                $('.step-u3').addClass("hidden");
                // console.log('{{route("api.sendSeat")}}')
                // fetch('{{route("api.sendSeat")}}', {
                //         method: "POST",
                //         headers: {
                //             'X-CSRF-TOKEN': '<?php echo csrf_token() ?>', // Include CSRF token for security
                //             'Content-Type': "application/json",
                //             'Accept': "application/json",
                //             'Access-Control-Allow-Origin':"*",
                //             'Access-Control-Allow-Methods':"POST"
                //         },
                //         body: JSON.stringify({
                //             data: "asdfasdf"
                //         })
                //     }).then(res => res.json()) // Convert response to JSON if needed
                //     .then(data => {
                //         console.log(data);
                //     })
                //     .catch(err => {
                //         console.error("Error:", err);
                //     });

            })

            var nameValidState = false;
            var lastnameValidState = false;
            var phoneValidState = false;
            var emailValidState = false;

            var cardValidState = false;
            var monthValidState = false;
            var yearValidState = false;
            var cvvValidState = false;
            var checkboxState = false;

            var nameVal, lastnameVal, phoneVal, emailVal, cvvVal, cardVal, yearVal, monthVal;
            // open and close detail profile input box with + and - button 
            $(document).on('click', '#detail1, #detail1-reverse', function(e) {
                var isDetail1 = $(this).attr('id') === 'detail1';
                nameValidState = false;
                lastnameValidState = false;
                phoneValidState = false;
                emailValidState = false;
                console.log('====================================');
                console.log(isDetail1 ? 'detail1 clicked' : 'detail1-reverse clicked');
                console.log('====================================');

                if (isDetail1) {
                    $(this).parent().append(`
                        <img id="detail1-reverse" width="25" height="25" src="{{ asset('imgs/icons/44.png') }}" alt="seat" class="w-6 h-6 cursor-pointer">
                    `);
                    $('.profile-detail1').html(`
                        <div class="flex flex-col w-full md:flex-row justify-between items-center gap-4 md:gap-8 text-[20px]">
                            <div class="flex w-full md:flex-1 relative">
                                <div class=" h-12 rounded-lg w-full relative">
                                    <input type="text" id="name-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                    <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                        <div class="text-[#d9d9d9] text-[12px]">Nombre(s)</div>
                                        <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden name-valid">
                                        <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden name-invalid">
                                    </div>
                                    <div class="text-red-600 italic text-xs ml-4 hidden name-invalid">Debes ingresar caracteres alfabéticos.</div>
                                </div>
                                <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                            </div>
                            <div class="flex w-full md:flex-1 relative">
                                <div class=" h-12 rounded-lg w-full relative">
                                    <input type="text" id="lastname-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                    <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                        <div class="text-[#d9d9d9] text-[12px]">Apellidos(s)</div>
                                        <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden lastname-valid">
                                        <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden lastname-invalid">
                                    </div>
                                    <div class="text-red-600 italic text-xs ml-4 hidden lastname-invalid">Debes ingresar caracteres alfabéticos.</div>
                                </div>
                                <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                            </div>
                            <div class="flex w-full md:flex-1 relative">
                                <div class=" h-12 rounded-lg w-full relative">
                                    <input type="text" id="phone-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                    <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                        <div class="text-[#d9d9d9] text-[12px]">Teléfono</div>
                                        <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden phone-valid">
                                        <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden phone-invalid">
                                    </div>
                                    <div class="text-red-600 italic text-xs ml-4 hidden phone-invalid">El número de teléfono no es válido.</div>
                                </div>
                                <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                            </div>
                        </div>
                        <div class=" w-full relative">
                            <div class=" h-12 rounded-lg w-full relative">
                                <input type="text" id="email-field" class=" h-full rounded-lg outline outline-[#dad9d8] px-4 w-full">
                                <div class="absolute top-[2px] left-2 flex gap-2 items-center">
                                    <div class="text-[#d9d9d9] text-[12px]">Correo electrónico</div>
                                    <img width={10} height={10} src="{{asset('imgs/icons/51.png')}}" alt="valid" class="w-3 h-3 cursor-pointer hidden email-valid">
                                    <img width={10} height={10} src="{{asset('imgs/icons/47.png')}}" alt="invalid" class="w-3 h-3 cursor-pointer hidden email-invalid">
                                </div>
                                <div class="text-red-600 italic text-xs ml-4 hidden email-invalid">El correo electrónico no es válido.</div>
                            </div>
                            <img width={25} height={25} src="{{asset('imgs/icons/48.png')}}" alt="clear" class="refresh-input w-6 h-6 absolute top-[50%] translate-y-[-50%] right-3">
                        </div>
                    `);
                } else {
                    $(this).parent().append(`
                        <img id="detail1" width="25" height="25" src="{{ asset('imgs/icons/43.png') }}" alt="seat" class="w-6 h-6 cursor-pointer">
                    `);
                    $('.profile-detail1').html('');
                }

                $(this).remove();
            });

            // clear the input with clicking X button
            $(document).on('click', '.refresh-input', function() {
                $(this).closest('div').find('input').val('');
            });

            // customize dropdown with scroll and icon in step3
            $(document).on('click', '.custom-select-trigger', function() {
                $(this).next(".custom-options").toggleClass("hidden");
            });

            $(document).on('click', '.custom-option', function() {
                var selectedText = $(this).text().slice(0, 4);
                $(this).closest(".custom-select-wrapper").find(".custom-select-trigger").text(selectedText);
                $(this).parent().addClass("hidden");
            });

            $(document).on('click', function(event) {
                if (!$(event.target).closest('.custom-select-wrapper').length) {
                    $(".custom-options").addClass("hidden");
                }
            });


            // validating inputs

            $(document).on("keyup", "#name-field", function(e) {
                nameVal = $(e.target).val();
                console.log(nameVal);
                if (isSpanishEnglishAlphabetic(nameVal)) {
                    nameValidState = true;
                    $('.name-invalid').removeClass("flex");
                    $('.name-invalid').addClass("hidden");
                    $('.name-valid').removeClass("hidden");
                    $('.name-valid').addClass("flex");
                } else if (nameVal != '') {
                    nameValidState = false;
                    $('.name-valid').removeClass("flex");
                    $('.name-valid').addClass("hidden");
                    $('.name-invalid').removeClass("hidden");
                    $('.name-invalid').addClass("flex");
                } else {
                    nameValidState = false;
                    $('.name-valid').removeClass("flex");
                    $('.name-valid').addClass("hidden");
                    $('.name-invalid').removeClass("flex");
                    $('.name-invalid').addClass("hidden");
                }
                if (nameValidState && lastnameValidState && phoneValidState && emailValidState && checkboxState) {
                    $('.pay-valid').removeClass("bg-[#d9d9d9]");
                    $('.pay-valid').addClass("bg-[#fbee21]");
                } else {
                    $('.pay-valid').removeClass("bg-[#fbee21]");
                    $('.pay-valid').addClass("bg-[#d9d9d9]");
                }
            });

            $(document).on("keyup", "#lastname-field", function(e) {
                lastnameVal = $(e.target).val();
                console.log(lastnameVal);
                if (isSpanishEnglishAlphabetic(lastnameVal)) {
                    lastnameValidState = true;
                    $('.lastname-invalid').removeClass("flex");
                    $('.lastname-invalid').addClass("hidden");
                    $('.lastname-valid').removeClass("hidden");
                    $('.lastname-valid').addClass("flex");
                } else if (lastnameVal != '') {
                    lastnameValidState = false;
                    $('.lastname-valid').removeClass("flex");
                    $('.lastname-valid').addClass("hidden");
                    $('.lastname-invalid').removeClass("hidden");
                    $('.lastname-invalid').addClass("flex");
                } else {
                    lastnameValidState = false;
                    $('.lastname-valid').removeClass("flex");
                    $('.lastname-valid').addClass("hidden");
                    $('.lastname-invalid').removeClass("flex");
                    $('.lastname-invalid').addClass("hidden");
                }
                if (nameValidState && lastnameValidState && phoneValidState && emailValidState && checkboxState) {
                    $('.pay-valid').removeClass("bg-[#d9d9d9]");
                    $('.pay-valid').addClass("bg-[#fbee21]");
                } else {
                    $('.pay-valid').removeClass("bg-[#fbee21]");
                    $('.pay-valid').addClass("bg-[#d9d9d9]");
                }
            });
            $(document).on("keyup", "#phone-field", function(e) {
                phoneVal = $(e.target).val();
                console.log(phoneVal);
                if (isValidPhoneNumber(phoneVal)) {
                    phoneValidState = true;
                    $('.phone-invalid').removeClass("flex");
                    $('.phone-invalid').addClass("hidden");
                    $('.phone-valid').removeClass("hidden");
                    $('.phone-valid').addClass("flex");
                } else if (phoneVal != '') {
                    phoneValidState = false;
                    $('.phone-valid').removeClass("flex");
                    $('.phone-valid').addClass("hidden");
                    $('.phone-invalid').removeClass("hidden");
                    $('.phone-invalid').addClass("flex");
                } else {
                    phoneValidState = false;
                    $('.phone-valid').removeClass("flex");
                    $('.phone-valid').addClass("hidden");
                    $('.phone-invalid').removeClass("flex");
                    $('.phone-invalid').addClass("hidden");
                }
                if (nameValidState && lastnameValidState && phoneValidState && emailValidState && checkboxState) {
                    $('.pay-valid').removeClass("bg-[#d9d9d9]");
                    $('.pay-valid').addClass("bg-[#fbee21]");
                } else {
                    $('.pay-valid').removeClass("bg-[#fbee21]");
                    $('.pay-valid').addClass("bg-[#d9d9d9]");
                }
            });
            $(document).on("keyup", "#email-field", function(e) {
                emailVal = $(e.target).val();
                console.log(emailVal);
                if (isValidEmail(emailVal)) {
                    emailValidState = true;
                    $('.email-invalid').removeClass("flex");
                    $('.email-invalid').addClass("hidden");
                    $('.email-valid').removeClass("hidden");
                    $('.email-valid').addClass("flex");
                } else if (emailVal != '') {
                    emailValidState = false;
                    $('.email-valid').removeClass("flex");
                    $('.email-valid').addClass("hidden");
                    $('.email-invalid').removeClass("hidden");
                    $('.email-invalid').addClass("flex");
                } else {
                    emailValidState = false;
                    $('.email-valid').removeClass("flex");
                    $('.email-valid').addClass("hidden");
                    $('.email-invalid').removeClass("flex");
                    $('.email-invalid').addClass("hidden");
                }
                if (nameValidState && lastnameValidState && phoneValidState && emailValidState && checkboxState) {
                    $('.pay-valid').removeClass("bg-[#d9d9d9]");
                    $('.pay-valid').addClass("bg-[#fbee21]");
                } else {
                    $('.pay-valid').removeClass("bg-[#fbee21]");
                    $('.pay-valid').addClass("bg-[#d9d9d9]");
                }
            });


            //customize checkbox with image
            $(document).on('click', '.checkbox', function() {
                checkboxState = !checkboxState;
                $('.checkbox').toggleClass('checked');
                if (checkboxState) {
                    $('.checkbox').removeClass('text-red-600');
                    $('.checkbox').addClass('text-black');
                } else {
                    $('.checkbox').removeClass('text-black');
                    $('.checkbox').addClass('text-red-600');
                }
                if (nameValidState && lastnameValidState && phoneValidState && emailValidState && checkboxState) {
                    $('.pay-valid').removeClass("bg-[#d9d9d9]");
                    $('.pay-valid').addClass("bg-[#fbee21]");
                } else {
                    $('.pay-valid').removeClass("bg-[#fbee21]");
                    $('.pay-valid').addClass("bg-[#d9d9d9]");
                }
            });

            //goto Bank Page
            $(document).on("click", ".pay-valid", function(e) {
                if (nameValidState && lastnameValidState && phoneValidState && emailValidState && checkboxState) {
                    var bookedSeatsNumsSend = ""
                    for (let i = 0; i < 39; i++) {
                        if (selectedTimeSeats[i] == "Full") {
                            bookedSeatsNumsSend += ",";
                            bookedSeatsNumsSend += (i + 1);
                        }
                    }

                    $.ajax({
                        url: "{{route('api.sendSeat')}}",
                        method: "POST",
                        data: {
                            selectedTimeSeats: selectedTimeSeats,
                            selectedSeatsNum: selectedSeatsNum,
                            totalprice: totalprice,
                            nameVal: nameVal,
                            lastnameVal: lastnameVal,
                            phoneVal: phoneVal,
                            emailVal: emailVal,
                            currentClassName: currentClassName,
                        },
                        success: function(response) {
                            // Handle success
                            console.log(response);
                            if (response.success) {
                                // showToast(response.success)
                                // redirectWithPersistentToast('<?= $parentUrl ?>/reservar/spinning', response.success, 'error');
                                window.parent.location.href = '<?= $parentUrl ?>/reservar/tobank/' + totalprice + '&' + nameVal + '&' + lastnameVal + '&' + emailVal + '&' + getFutureDateInSpanish(parseInt(selectedSeatsNum) / 8) + '&' + parseInt(selectedSeatsNum) % 8 + '&' + bookedSeatsNumsSend.slice(1, bookedSeatsNumsSend.length) + '&' + currentClassName;

                            };
                            if (response.failed) {

                                redirectWithPersistentToast('<?= $parentUrl ?>/reservar/spinning', response.failed, 'error');
                                // window.parent.location.href = '<?= $parentUrl ?>/reservar/spinning';
                            }
                        },
                        error: function(err) {
                            console.log(err);
                            // alert('An error occurred');
                        }
                    })

                }
            });
        })
    </script>
</body>

</html>