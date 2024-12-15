'use client';
import Image from "next/image";
import "./styles-bgimage.css";
import {
  KommonExtraLight,
  KommonSemiBoldIt,
} from "@/config/fonts";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Aos from "aos";

export function HazteMiembro() {
  const route = useRouter();
  const handleInscripcion = () => {
    route.push("/anualidad");
  }


  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: -100,
      once: true
    });
  }, [])

  return (
    <section
      id="promos"
      className="relative flex justify-center pt-40 lg:pt-40 lg:pb-8 "
      style={{ backgroundColor: "rgba(198, 3, 132,0.75)" }}
    >
      <div className=" w-11/12 lg:w-10/12 ">
        <Image
          src="/imgs/hazte-miembro.webp"
          alt="Hazte Miembro"
          fill
          style={{ objectFit: 'cover' }} // Asegura que la imagen mantenga su proporción
          quality={100}
          className="img object-cover z-20 bottom-0"
        />

        <div className="flex flex-col md:flex-row  z-20 ">
          <div className="w-5/12 md:w-8/12 hidden md:block" data-aos="fade-right">
            <Image
              src="/imgs/hombre-2.webp"
              alt="Hazte Miembro"
              width={400}
              height={400}
              className="object-contain md:absolute -bottom-[90px]    md:-bottom-[80px] md:w-11/12  lg:-bottom-[160px] w-4/12 lg:w-8/12 md:max-w-[900px] lg:max-w-[450px] h-auto -z-10 "
            />
          </div>
          <div className="w-full md:w-11/12 lg:w-7/12 text-white flex flex-col gap-3 z-10" data-aos="fade-left">
            <p
              className={`${KommonSemiBoldIt.className} text-[24px] lg:text-[32px] xl:text-[40px]`}
            >
              ¡HAZTE MIEMBRO AHORA Y AHORRA!
            </p>
            <Image
              src="/imgs/hazte-miembro-5.png"
              alt="divider"
              width={1000}
              height={1000}
              className="object-contain w-[250px]    lg:w-[350px]"
            />
            <p
              className={`${KommonExtraLight.className} text-justify text-[20px] w-full md:w-11/12 lg:w-8/12 `}
              style={{ fontWeight: "600" }}>
              ¡Únete a nuestra familia fitness hoy mismo y obtén esta
              oferta especial por apertura! No te pierdas esta
              oportunidad exclusiva para alcanzar tus metas de salud y
              bienestar.  <a className={`${KommonExtraLight.className} text-justify text-[14px] ml-36  w-full md:w-11/12 lg:w-8/12 `}
                style={{ fontWeight: "100" }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                *Aplican restricciones*</a>
            </p>
            <div className="mt-5 pb-10">
              <button
                //onClick={handleInscripcion}
                type="button"
                className={`${KommonExtraLight.className} hover:bg-[#fbed21] shadow-md shadow-black/75 hover:shadow-black/75 hover:shadow-md   text-black text-[30px] px-4 py-1 rounded-lg bg-white border-2 border-white font-bold `}
              >
                Inscribirme
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10 md:hidden relative h-[400px]" data-aos="fade-right">
            <Image
              src="/imgs/hombre-2.webp"
              alt="Hazte Miembro"
              width={400}
              height={400}
              className="object-contain -bottom-[120px] absolute  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
