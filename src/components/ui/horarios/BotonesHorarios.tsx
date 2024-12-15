'use client';

interface Props {
    titulo: string;
    index: number;
    number: number;
    handleClick: (index: number) => void;
}


export function BotonesHorarios( {titulo, index, number, handleClick}: Props) {



    return (
        <>
        <button  onClick={() => handleClick(number)} className={`w-full  ${number == index ? ' bg-[#fbed21] shadow-md shadow-white/25  text-black' :' text-white hover:bg-[#fbed21] hover:shadow-md hover:shadow-white/25 hover:text-black'}`} >
                        {titulo} 
        </button>
        </>
    );
}