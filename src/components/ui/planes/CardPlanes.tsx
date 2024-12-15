"use client";
import {
  KommonExtraBold,
  KommonExtraLight,
  KommonSemiBoldIt,
} from "@/config/fonts";
import Aos from "aos";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CardPlanesProps {
  colorCard?: string;
  colorPrice?: string;
  titulo1: string;
  titulo2: string;
  price: string;
  parrafo1?: string;
  parrafo2?: string;
  parrafo3?: string;
  parrafo4?: string;
  color?: boolean;
  url: string;
}

export function CardPlanes({
  colorCard = "bg-[#f7f4f4]",
  colorPrice = "text-[#c60384]",
  price,
  titulo1,
  titulo2,
  parrafo1 = "",
  url,
  parrafo2 = "",
  parrafo3 = "",
  parrafo4 = "",
  color = false,
}: CardPlanesProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_APP_URL}${url}`);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: -100,
      once: true,
    });
  }, []);

  return (
    <div className="h-[380px] flex justify-center items-end mb-10">
      <div
        className={`relative flex flex-row justify-center items-center  ${
          color ? "text-white" : ""
        }`}
      >
        <div
          className={`absolute top-[-90px] flex justify-center flex-col items-center ${colorCard}  rounded-full h-[180px] w-[180px] border-2 border-white shadow-md shadow-black/35`}
          style={{ lineHeight: "0.75" }}
        >
          <p className={` ${KommonExtraBold.className}`}>{titulo1}</p>
          <p
            className={` ${KommonSemiBoldIt.className}  ${colorPrice} text-3xl `}
          >
            {price}
          </p>
          <p
            className={` ${KommonExtraLight.className} text-center italic font-bold uppercase`}
          >
            {titulo2} <br/>+Inscripción
          </p>
        </div>
        <div
          className={`${colorCard} px-10 pb-5 pt-28 h-64 w-64 lg:h-72 lg:w-72  shadow-xl shadow-black/25 hover:shadow-black/75 hover:shadow-2xl rounded-lg border-2 border-[#eeebeb]`}
        >
          <div
            className={` ${KommonExtraLight.className} text-center`}
            style={{ lineHeight: "1" }}
          >
            <p>{parrafo1}</p>
            <p>{parrafo2}</p>
            <hr className="bg-[#c4c2c1] h-[2px] my-2" />
            <p>{parrafo3}</p>
            <p>{parrafo4}</p>
          </div>

          <div className="flex justify-center items-center mt-5">
            <button
              onClick={handleClick}
              className={` ${
                color
                  ? "bg-white hover:bg-[#f5eb24] border-white text-black"
                  : "bg-[#f5eb24] hover:bg-white border-[#f5eb24] text-black"
              }  rounded-md  py-2 px-4  border-2  ${
                KommonExtraBold.className
              } shadow-md shadow-black/35  `}
            >
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}