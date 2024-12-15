'use client';
import { useEffect } from "react";
import Image from "next/image";
import { TituloSecciones } from "../TituloSecciones";
import { KommonSemiBoldIt } from "@/config/fonts";
import { CardClase } from "./CardClase";
import Aos from "aos";

export function NuestrasClases() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: -500,
      once: true
    });
  }, [])

  return (
    <section className="bg-[#1a1a1a] py-10 pb-20 lg:pb-28 flex flex-col lg:gap-5" id="clases">
      <div data-aos="fade-right" >
        <TituloSecciones
          tituloGris="NUESTRAS"
          tituloMagenta="CLASES"
          parrafo1=""
          parrafo2=""
          plus={false}
        />
      </div>

      <div data-aos="fade-right" className="flex flex-wrap gap-5 md:gap-10 xl:gap-20 justify-center items-center mt-10">
        <div data-aos="fade-up">
          <CardClase time={60} image='/imgs/entrenadores/entrenador1.jpg' alt="Clase 1" titulo="SPINNING" />
        </div>
        <div data-aos="fade-down">

          <CardClase time={60} image='/imgs/entrenadores/entrenador2.jpg' alt="Clase 2" top titulo="ZUMBA" />
        </div>
        <div data-aos="fade-up">
          <CardClase time={60} image='/imgs/entrenadores/entrenador3.jpg' alt="Clase 4" titulo="YOGA" />
        </div>
        <div data-aos="fade-down">
          <CardClase time={60} image='/imgs/entrenadores/entrenador4.jpg' alt="Clase 3" titulo="FIT COMBAT" top />
        </div>
      </div>

    </section>
  );
}
