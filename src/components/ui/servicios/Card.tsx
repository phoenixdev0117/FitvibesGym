import { KommonSemiBold, KommonSemiBoldIt } from "@/config/fonts";
import { useEffect, useState } from "react";

interface CardProps {
  className?: string;
  title: string;
  subTitle: string;
  renglon1?: string;
  renglon2?: string;
  renglon3?: string;
  renglon4?: string;
  renglon5?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  mostrarText?: boolean;
  card: number;
  leftTitlePosition?: string;
  topTitlePosition?: string;

  setCard: (value: number) => void;
  changeCard: (value: number) => void;

  setHover: (value: boolean) => void;
}

export function Card({
  className,
  title,
  subTitle,
  renglon1 = "",
  renglon2 = "",
  renglon3 = "",
  renglon4 = "",
  renglon5 = "",
  setCard,
  card,
  setHover,
  mostrarText = false,
  leftIcon = false,
  rightIcon = false,
  changeCard,
  leftTitlePosition = "-left-[0px]",
  topTitlePosition = "-top-0",
}: CardProps) {
  var mostrar = false;

  const handleMouseEnter = () => {
    setHover(true);
    setCard(card);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="home_links relative flex flex-col justify-center items-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col justify-start">
        <div className={`${className}`}>
          <div className="diagonal_content"></div>
        </div>
        <div className={`flex flex-col justify-between h-full py-10  w-full  absolute ${mostrarText ? "block" : "hidden"}`}>
          <div
            className={`absolute ${leftTitlePosition} ${topTitlePosition}`}
          >
            <div
              className={` text-white text-[18px] sm:text-[26px]  lg:text-[28px] ${KommonSemiBoldIt.className} text-start `}
              style={{ lineHeight: "0.75" }}
            >
              <p>{title}</p>
              <p>{subTitle}</p>
            </div>
          </div>

          <div className="absolute -left-[35px] sm-left-[35px]  lg:-left-[30px] top-[60%] sm:top-[40%] md:top-[60%] lg:top-[60%] ">
            <div
              className={` text-white text-[11px]  sm:text-[13px]  lg:text-[14px] ${KommonSemiBold.className} `}
              style={{ lineHeight: "1.3" }}
            >
              <p>{renglon1}</p>
              <p>{renglon2}</p>
              <p>{renglon3}</p>
              <p>{renglon4}</p>
              <p>{renglon5}</p>
            </div>
          </div>
        </div>
      </div>
      {mostrarText && <></>}

      {leftIcon && (
        <div className="absolute -left-[30%] lg:left-[0%] top-[38%] ">
          <div
            onClick={() => changeCard(-1)}
            className={` text-yellow-300 bg-black/45 hover:bg-black hover:cursor-pointer  p-2 rounded-full text-[15px] sm:text-[30px] lg:text-[20px] ${KommonSemiBold.className} `}
            style={{ lineHeight: "1.3" }}
          >
            <p className=" w-2 h-2 sm:w-6 sm:h-6 lg:w-4 lg:h-4 flex justify-center items-center">
              {"<"}
            </p>
          </div>
        </div>
      )}

      {rightIcon && (
        <div className="absolute  right-[5%] lg:right-[30%] top-[38%] ">
          <div
            onClick={() => changeCard(+1)}
            className={` text-yellow-300 bg-black/45 hover:bg-black hover:cursor-pointer p-2 rounded-full  text-[15px] sm:text-[30px] lg:text-[20px] ${KommonSemiBold.className} `}
            style={{ lineHeight: "1.3" }}
          >
            <p className=" w-2 h-2 sm:w-6 sm:h-6 lg:w-4 lg:h-4  flex justify-center items-center">
              {">"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}