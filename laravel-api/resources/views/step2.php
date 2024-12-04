<div class="w-full 'flex' flex-col justify-start items-start mt-6 gap-5 ">
                    <div class="flex gap-4 items-center">
                        <div class="border-b-2 border-[#dad9d8] overflow-x-auto w-[70vw] lg:w-[53vw] flex">
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">7:00 - 8:00 AM</div>
                            </div>
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">8:00 - 9:00 AM</div>
                            </div>
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">9:00 - 10:00 AM</div>
                            </div>
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">10:00 - 11:00 AM</div>
                            </div>
                        </div>
                        <div class="border-b-2 border-[#dad9d8] overflow-x-auto w-[70vw] lg:w-[53vw] hidden">
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">5:00 - 6:00 PM</div>
                            </div>
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">6:00 - 7:00 PM</div>
                            </div>
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">7:00 - 8:00 PM</div>
                            </div>
                            <div class="cursor-pointer flex flex-col justify-center items-center text-[24px] py-2 w-56 min-w-56">
                                <div class="font-bold">8:00 - 9:00 PM</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-5 flex-wrap items-center">
                        <div class="flex gap-4 mr-10 items-center">
                            <img width="30" height="30" src="{{asset('imgs/icons/38.png')}}" alt="logo" >
                            <div class="italic text-[20px]" style="font-family: KommonExtraBold;">SELECCIONADO</div>
                        </div>
                        <div class="flex gap-4 mr-10 items-center">
                            <img width="30" height="30" src="{{asset('imgs/icons/39.png')}}" alt="logo" >
                            <div class="italic text-[20px]" style="font-family: KommonExtraBold;">OCUPADO</div>
                        </div>
                        <div class="flex gap-4 items-center">
                            <img width="30" height="30" src="{{asset('imgs/icons/40.png')}}" alt="logo" >
                            <div class="italic text-[20px]" style="font-family: KommonExtraBold;">DISPONIBLE</div>
                        </div>
                    </div>
                    <hr class="bg-black h-[4px] mt-14 w-full" >
                    <div class="flex flex-row flex-wrap w-full justify-between relative">

                        @foreach($seats as $index => $item)
                        @if($index == 2 || $index == 6 || $index == 10)
                        <div class="w-[11%]"></div>
                        <div class="w-[11%]"></div>
                        <div class="w-[11%]"></div>
                        <div class="w-[11%]"></div>
                        <div class="w-[11%]"></div>
                        <div class="w-[11%]">
                            <img width="50" height="50"
                                src="{{ $item === 'Empty' ? asset('imgs/icons/40.png') : 
                        ($item === 'Disable' ? asset('imgs/icons/39.png') : asset('imgs/icons/38.png')) }}"
                                alt="logo"
                                class="{{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }} 
                        {{ $item != 'Disable' ? 'cursor-pointer' : '' }}">
                        </div>
                        @else
                        <div class="w-[11%]">
                            <img width="50" height="50"
                                src="{{ $item === 'Empty' ? asset('imgs/icons/40.png') : 
                        ($item === 'Disable' ? asset('imgs/icons/39.png') : asset('imgs/icons/38.png')) }}"
                                alt="logo"
                                class="{{ $seatsDirection[$index] === 'left' ? 'transform scale-x-[-1]' : '' }} 
                        {{ $item != 'Disable' ? 'cursor-pointer' : '' }}">
                        </div>
                        @endif
                        @endforeach

                        <div class="absolute -top-2 left-[50%] translate-x-[-50%] flex flex-col gap-2 justify-center items-center">
                            <div class="italic text-[20px]" style="font-family: KommonExtraBold;">FRENTE</div>
                            <div class="bg-[#fbee21] rounded-lg w-44 h-24 "></div>
                        </div>
                    </div>
                </div>