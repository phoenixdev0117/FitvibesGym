"use client";
import Image from "next/image";
import { KommonSemiBoldIt } from "@/config/fonts";
import { Link, Button } from "react-scroll";

export function Inicio() {
  return (
    <section id="inicio" className="z-10">
      <div className=" flex flex-col  md:flex-row gap-20 w-full min-h-screen	h-auto  justify-center items-center ">
        <Image
          src={"/imgs/inicio.webp"}
          alt={"Logo"}
          width={3000}
          height={3000}
          className="object-cover w-full h-full min-h-screen	 " // Aplica estilos para ajustar la imagen al tamaño del contenedor
        />
        <div className={`absolute top-[10vw] left-[15vw] mt-14 md:my-10 `}>
          <h1
            className={`text-white text-[8vw] lg:text-[5vw] font-semibold mt-10 sm:my-10 ${KommonSemiBoldIt.className} animate__animated  animate__backInLeft`}
            style={{ lineHeight: "0.75" }}
          >
            COMIENZA <br />A <span className="text-[#c60384]">ENTRENAR</span>
            <br /> AHORA
          </h1>
          <div className=" animate__animated  animate__fadeInUpBig flex flex-col gap-6 w-[70%] justify-start mt-14">
            <Button
              to="planes"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={` bg-white | text-center | hover:text-center | text-black | px-[5vw] | py-[1.2vw] | rounded-sm | md:rounded-xl | text-[5vw] | lg:text-[2vw] font-semibold hover:text-white hover:bg-[#c60385] hover:shadow-lg `}
            >
              {" "}
              Planes{" "}
            </Button>
            
          </div>
        </div>
      </div>

      <div className="relative  bg-[#1b1b1b] flex flex-wrap justify-center gap-14 pt-10 md:pt-24 lg:justify-start lg:gap-0 lg:pt-0 lg:h-[22rem] items-center ">
        <div
          style={{ lineHeight: "0.75" }}
          data-aos="fade-right"
          className={`${KommonSemiBoldIt.className}  lg:ml-24 xl:ml-40 text-white text-[2.5vw] font-semibold text-center z-10 `}
        >
          <p className=" text-[27px] sm:text-[35px] md:text-[4.5vw] xl:text-[3vw] text-[#1b1b1b] ">
            <span
              style={{
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "transparent",
              }}
            >
              INSTALACIONES
            </span>
          </p>
          <p className="text-[30px] sm:text-[40px] md:text-[5.5vw] xl:text-[4vw]">
            <span className="text-[#c60384]">DISEÑADAS</span> PARA TI
          </p>
        </div>

        <div
          className="lg:absolute lg:right-0 lg:top-0 has-[14rem]  md:h-[23.5rem] w-[30rem]   object-cover flex justify-center items-center xl:right-24 2xl:right-52"
          data-aos="fade-left"
        >
          <div className=" lg:absolute lg:right-0 lg:top-0 has-[14rem]  md:h-[23.5rem] w-[30rem]     flex justify-center items-center">
            <Image
              id="inicio"
              src={"/imgs/instalaciones.webp"}
              alt={"Lineas"}
              width={352}
              height={352}
              quality={100}
              className=" object-cover md:object-contain w-[80%]  md:w-full md:h-full" // Aplica estilos para ajustar la imagen al tamaño del contenedor
            />
          </div>
        </div>
      </div>
    </section>
  );
}