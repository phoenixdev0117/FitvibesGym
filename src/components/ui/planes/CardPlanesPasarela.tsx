"use client";
import { getPromocode } from "@/actions/planes/get_promocode";
import {
  KommonExtraBold,
  KommonExtraLight,
  KommonSemiBoldIt,
} from "@/config/fonts";
import { remplacePuntoPrice } from "@/lib/remplacePuntoPrice";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";

interface Props {
  plan: string;
  planId: number;
  color: boolean;
  inscripcion: number;
  plazo: string;
  lazo?: boolean;
  codigo?: string;
  precioDe: number;
  select: number;
  check: boolean;

  rebaja: number;
  setSelect: (value: number, planId: number) => void;

  setMensualidad: any;
  setDescuento: any;
  setTotal: any;

  setDomiciliacionDesc: React.Dispatch<React.SetStateAction<number>>;

}

const CardPlanesPasarela = ({
  plan,
  planId,
  color,
  inscripcion,
  plazo,
  lazo,
  codigo,
  precioDe,
  select,
  check,
  rebaja,
  setMensualidad,
  setSelect,
  setDescuento,
  setTotal,
  setDomiciliacionDesc,
}: Props) => {
  // debounce
  const [rebajaPrecio, setRebajaPrecio] = useState(rebaja);
  const [inscripcionPrecio, setInscripcionPrecio] = useState(inscripcion);

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debounceRef = useRef<NodeJS.Timeout>();

  const handleClick = () => {
    setSelect(select, planId);
    setMensualidad(precioDe);
    setDescuento(rebajaPrecio);
    setTotal(precioDe + inscripcionPrecio);
    setDomiciliacionDesc(0);

  };



  return (
    <div
      onClick={handleClick}
      className={` ${color
        ? "bg-[#c60384] text-white"
        : "border-4 border-gray-300 text-black "
        } cursor-pointer w-10/12 p-8 pt-11 rounded-lg flex flex-col md:flex-row justify-evenly gap-5  relative max-w-[550px] `}
    >
      <div className=" w-9/12 flex flex-col gap-5 pr-10">
        {lazo && (
          <div className="absolute top-0 -right-[24px] h-[150px] w-[150px] ">
            <Image
              src="/imgs/mejor-precio.png"
              width={1000}
              height={1000}
              quality={100}
              alt="mejor-precio"
            />
          </div>
        )}
        <div className="flex flex-wrap flex-row items-center gap-3">
          <div
            className={`${color ? "bg-[#fff] " : " bg-[#d9d9d9] "
              } h-6 w-6 flex flex-row justify-center items-center`}
          >
            {check && (
              <div
                className={`${color ? "bg-[#c60384] " : " bg-[#c60384] "
                  } h-4 w-4 rounded-full`}
              ></div>
            )}
          </div>
          <h1
            className={`${!color ? "text-[#c60384]" : "  "
              } text-[18px] lg:text-[21px] uppercase ${KommonExtraBold.className}`}
          >
            {plan}
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-4   justify-start 2xl:text-[20px]">
          <div className="flex flex-col justify-center items-center tracking-wider">
            <span>Inscripción</span>
            <span className={`${KommonSemiBoldIt.className} text-nowrap`}>
              MX ${remplacePuntoPrice(inscripcionPrecio)}.°°
            </span>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span>Plazo</span>
            <span className={`${KommonExtraBold.className}`}>{plazo}</span>
          </div>

        </div>
      </div>
      <div
        className="flex flex-col items-start"
        style={{
          lineHeight: "1.1",
        }}
      >
        {rebajaPrecio > 0 ? (
          <>
            <div>
              De:{" "}
              <span className=" relative inline-block">
                <span className="absolute top-[15px] h-[2px] bg-red-600 left-0 w-full transform rotate-[-15deg]"></span>
                <span
                  className={`text-[21px] ${KommonExtraLight.className} text-nowrap `}
                  style={{ textDecoration: "none" }}
                >
                  MX ${remplacePuntoPrice(precioDe)}.°°
                </span>
              </span>
            </div>
            <span>A:</span>
          </>
        ) : (
          <div>De: </div>
        )}
        <span className={` text-[30px] ${KommonSemiBoldIt.className} text-nowrap`}>
          MX ${remplacePuntoPrice(precioDe - rebajaPrecio)}.°°
        </span>
        <span className={` text-[12px] ${KommonSemiBoldIt.className}`}>
          en el primer mes
        </span>
        <span className={` text-[12px] font-bold ${KommonExtraLight.className} text-nowrap `}>
          después. MX ${remplacePuntoPrice(precioDe)}.°°/mes
        </span>
      </div>
    </div>
  );
};

export default CardPlanesPasarela;
