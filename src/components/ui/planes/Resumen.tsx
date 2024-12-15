"use client";
import { KommonExtraBold, KommonExtraLight } from "@/config/fonts";
import { remplacePuntoPrice } from "@/lib/remplacePuntoPrice";

interface Props {
    inscripcion: number;
    mensualidad: number;
    descuento: number;
    total: number; 
}
 

const Resumen = ({ inscripcion, mensualidad, descuento, total }: Props) => {

     
    
  return (
    <div>
      <p
        className={`${KommonExtraLight.className} text-[20px] w-full flex flex-row justify-between`}
      >
        Inscripción:{" "}
        <span className={`${KommonExtraBold.className} text-nowrap`}>
        MX ${remplacePuntoPrice(inscripcion)}.°°
        </span>
      </p>
      <p
        className={`${KommonExtraLight.className} text-[20px] w-full flex flex-row justify-between`}
      >
        Mensualidad:{" "}
        <span className={`${KommonExtraBold.className} text-nowrap`}>
        MX ${remplacePuntoPrice(mensualidad)}.°°
        </span>
      </p>
      {(descuento) != 0 && (
        <p
        className={`${KommonExtraLight.className} text-[20px] text-red-700 w-full flex flex-row justify-between font-bold`}
      >
        Descuento promocional:{" "}
        <span className={`${KommonExtraBold.className} text-nowrap`}>
        MX -${remplacePuntoPrice(descuento)}.°°
        </span>
      </p>
      )}
      <p
        className={`${KommonExtraBold.className} text-[20px] w-full flex flex-row justify-between font-bold`}
      >
        Total:{" "}
        <span className={`${KommonExtraBold.className} text-nowrap`}>
        MX ${remplacePuntoPrice(total)}.°°
        </span>
      </p>
    </div>
  );
};

export default Resumen;