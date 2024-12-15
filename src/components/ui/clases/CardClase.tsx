"use client";
import { KommonSemiBold, KommonSemiBoldIt } from "@/config/fonts";
import Image from "next/image";
import { useState } from "react";
import { IoMdTime } from "react-icons/io";

interface CardClaseProps {
  top?: boolean;
  image: string;
  alt: string;
  titulo: string;
  time: number;
}

export function CardClase({
  top = false,
  image,
  alt,
  titulo,
  time,
}: CardClaseProps) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      {top ? (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className=" cursor-pointer flex flex-col justify-center items-center mt-5 gap-2 xl:gap-5 h-[250px] w-[150px] lg:h-[300px] lg:w-[200px] xl:h-[390px] xl:w-[240px] ">
          <div
            style={{
              textShadow: hover
                ? "1px 1px 10px rgba(255,255,255,0.65) "
                : "none",
            }}
            className={`text-[15px] sm:text-[15px] md:text-[16px]   w-[145px] lg:text-[24px] xl:text-[28px] lg:w-[200px] xl:w-[240px] flex justify-between flex-row`}
          >
            <span
              className=" "
              style={{
                WebkitTextStroke: "1px #f5eb24",
                WebkitTextFillColor: "transparent",
              }}
            >
              {">>>>"}
            </span>
            <p
              className={`${KommonSemiBoldIt.className} text-nowrap  ${
                hover ? "text-[#f5eb24] shadow-md " : "text-white"
              }`}
            >
              {titulo}
            </p>
          </div>
          <div className="relative   h-[250px] w-[145px] lg:h-[350px] lg:w-[200px] xl:h-[350px] xl:w-[240px]  transition-all duration-300  overflow-hidden">
            <Image
              src={image}
              alt={alt}
              quality={100}
              width={2000}
              height={3000}
              className={`object-cover  h-full w-auto   transition-all duration-300  ${hover && "scale-110 "}`}
            />

            <div className={`absolute bottom-0 left-0 w-full shadow-md shadow-black/50  transition-all duration-500 ${hover ? "opacity-100" : "opacity-0"}  ${hover ? "-translate-y-0" : "translate-y-[50px]"}  `}>
              <div
                className={`bg-[#c70284] ${KommonSemiBold.className} text-white  p-1 flex flex-row items-center justify-end gap-3 text-[15px] sm:text-[15px] md:text-[15px]    lg:text-[15px] xl:text-[15px]`}
              >
                <IoMdTime className="h-4 w-4 text-white" />
                {time}
                <p className={`  pr-4`}> MIN</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className=" cursor-pointer flex flex-col justify-center items-center gap-2 xl:gap-5  h-[250px] w-[150px] lg:h-[300px] lg:w-[200px] xl:h-[390px] xl:w-[240px]   ">
          <div className="relative h-[250px] w-[145px] lg:h-[350px] lg:w-[200px] xl:h-[390px] xl:w-[240px]   transition-all duration-300  overflow-hidden">
            <Image
              src={image}
              alt={alt}
              quality={100}
              width={2000}
              height={3000}
              className={`object-cover h-full w-auto   transition-all duration-500 ${hover && "scale-110 "}`}
            />

            <div className={`absolute bottom-0 left-0 w-full shadow-md shadow-black/50   transition-all duration-500 ${hover ? "opacity-100" : "opacity-0"}  ${hover ? "-translate-y-0" : "translate-y-[50px]"}  `} >
              <div
                className={`bg-[#c70284] ${KommonSemiBold.className} text-white  p-1 flex flex-row items-center justify-end gap-3 text-[15px] sm:text-[15px] md:text-[15px]    lg:text-[15px] xl:text-[15px]`}
              >
                <IoMdTime className="h-4 w-4 text-white" />
                {time}
                <p className={`  pr-4`}> MIN</p>
              </div>
            </div>
          </div>
          <div
            style={{
              textShadow: hover
                ? "1px 1px 10px rgba(255,255,255,0.65) "
                : "none",
            }}
            className={`text-[15px] sm:text-[15px] md:text-[16px] lg:text-[24px] xl:text-[28px]    w-[145px] lg:w-[200px] xl:w-[240px]  flex justify-between flex-row`}
          >
            <span
              className=" "
              style={{
                WebkitTextStroke: "1px #f5eb24",
                WebkitTextFillColor: "transparent",
              }}
            >
              {">>>>"}
            </span>
            <p
              className={`${KommonSemiBoldIt.className}  ${
                hover ? "text-[#f5eb24] shadow-md " : "text-white"
              }`}
            >
              {titulo}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
