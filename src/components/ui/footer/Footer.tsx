'use client';
import { KommonExtraLight, KommonSemiBold, KommonSemiBoldIt } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { Link as Linkk } from "react-scroll";


export function Footer() {
  return (
    <footer className=" relative py-20 z-20">
      <Image
        src="/imgs/footer.jpg"
        alt="Instagram"
        width={1000}
        height={1000}
        className="object-cover w-full absolute top-0 left-0 -z-10"
      />
      <div
        className={` object-cover bg-black/50  absolute top-0 left-0 -z-10 w-full h-full `}
      ></div>

      <div className={` z-10   text-[#fbee21] font-semibold text-center `}>
        <p
          className={`${KommonSemiBoldIt.className} text-[28px] sm:text-[35px] md:text-[45px] lg:text-[3.7vw] xl:text-[4vw] font-extrabold`}
        >
          <span className="">INSTAGRAM</span>
        </p>
      </div>

      <div
        className={`text-[24px] sm:text-[30px] md:text-[30px]  lg:text-[3vw] font-semibold text-center flex justify-center items-center pt-2 text-white`}
      >
        <p
          className={`${KommonSemiBold.className} font-extralight  `}
          style={{
            textWrap: "balance",
            letterSpacing: "0.7vw",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.7)",
          }}
        >
          ++++++
        </p>
      </div>

      <div className="flex flex-row w-full overflow-hidden mt-10">
        <Image
          src="/imgs/footer-1.jpg"
          alt="Instagram"
          width={1000}
          height={1000}
          className="object-contain w-3/12 md:w-2/12  h-auto  z-20"
        />
        <Image
          src="/imgs/footer-2.jpg"
          alt="Instagram"
          width={1000}
          height={1000}
          className="object-contain  w-3/12 md:w-2/12 h-auto    z-20"
        />
        <Image
          src="/imgs/footer-3.jpg"
          alt="Instagram"
          width={1000}
          height={1000}
          className="object-contain  w-3/12 md:w-2/12  h-auto  z-20"
        />
        <Image
          src="/imgs/footer-4.jpg"
          alt="Instagram"
          width={1000}
          height={1000}
          className="object-contain  w-3/12 md:w-2/12  h-auto  z-20"
        />
        <Image
          src="/imgs/footer-5.jpg"
          alt="Instagram"
          width={1000}
          height={1000}
          className="object-contain  w-3/12 md:w-2/12  h-auto  z-20"
        />
        <Image
          src="/imgs/footer-6.jpg"
          alt="Instagram"
          width={1000}
          height={1000}
          className="object-contain  w-3/12 md:w-2/12  h-auto  z-20"
        />
      </div>

      <div className={` flex flex-wrap  flex-row md:pt-20 my-24 w-full justify-center  md:justify-around items-center `}>
      <div className={`${KommonExtraLight.className} flex flex-wrap flex-row justify-center  gap-5 xl:gap-10 text-white `}>
        

          <Linkk
            className="hover:underline cursor-pointer "
            to="inicio"
            smooth={true}
            duration={1000}
          >
            INICIO
          </Linkk>
          <Linkk
            className="hover:underline cursor-pointer "
            to="servicios"
            smooth={true}
            duration={1000}
          >
            SERVICIOS
          </Linkk>
          <Linkk
            className="hover:underline cursor-pointer "
            to="planes"
            smooth={true}
            duration={1000}
          >
            PLANES
          </Linkk>
          <Linkk
            className="hover:underline cursor-pointer "
            to="clases"
            smooth={true}
            duration={1000}
          >
            CLASES
          </Linkk>
          <Linkk
            className="hover:underline cursor-pointer "
            to="horarios"
            smooth={true}
            duration={1000}
          >
            HORARIOS
          </Linkk>
          <Linkk
            className="hover:underline cursor-pointer "
            to="promos"
            smooth={true}
            duration={1000}
          >
            PROMOS
          </Linkk>
          <Linkk
            className="hover:underline cursor-pointer "
            to="contacto"
            smooth={true}
            duration={1000}
          >
            CONTACTO
          </Linkk>
           
        
      </div>
      <div className={`${KommonExtraLight.className} mt-14 md:mt-0 flex flex-wrap flex-col sm:flex-row items-center justify-center  gap-5 xl:gap-10 text-white `}>
        <p className="hover:underline cursor-pointer ">Copyright © 2024 FitVibesGym</p> 
          <Link className="hover:underline cursor-pointer" href={'privacy'}>Política de privacidad</Link>
          <Link className="hover:underline  cursor-pointer" href={'terms-and-conditions'}>Términos y condiciones</Link> 
      </div></div>
    </footer>
  );
}
