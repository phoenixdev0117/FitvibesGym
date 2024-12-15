import {
  KommonExtraLight,
  KommonSemiBoldIt,
} from "@/config/fonts";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export function Contacto() {




  return (
    <>
      <section className=" relative bg-white font-bold flex flex-col justify-center items-center pt-20 ">
        <div className=" flex flex-wrap justify-center  gap-10">
          <div>
            <p className={`${KommonSemiBoldIt.className} text-[22px]`}>
              UBICACIÓN
            </p>
            <div className="w-[300px] h-[200px] p-5 pl-10 border-4 border-[#fff] rounded-xl flex flex-col justify-center items-start gap-4 [&>div]:flex  [&>div]:flex-row [&>div]:gap-3  [&>div]:justify-center  [&>div]:items-center shadow-black/25 shadow-lg hover:shadow-xl hover:shadow-black/45 hover:border-[#c60384] transition-all duration-300">
              <div className="">
                <div className="text-[#c60384]">
                  <FaPhoneVolume className=" h-6 w-6" />
                </div>
                <div className={`${KommonExtraLight.className} text-[14px]`}>
                  <p>Teléfono:(664)123-4567</p>
                  <p>Whatsapp: (664)891-2345</p>
                </div>
              </div>
              <div>
                <div className="text-[#c60384]">
                  <MdEmail className=" h-6 w-6" />
                </div>
                <div className={`${KommonExtraLight.className} text-[14px]`}>
                  <p>contacto@fitvibesgym.com</p>
                </div>
              </div>
              <div>
                <div className="text-[#c60384]">
                  <FaMapMarkerAlt className=" h-6 w-6" />
                </div>
                <div className={`${KommonExtraLight.className} text-[14px]`}>
                  <p>Blvd. Fundadores 6725,</p>
                  <p>El Rubi, 22626 Tijuana, B.C.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className={`${KommonSemiBoldIt.className} text-[22px]`}>
              HORARIO DE APERTURA
            </p>
            <div
              className={` relative w-[300px] h-[200px] p-5 pl-10 z-10 text-white border-4 border-[#fff] justify-center items-start rounded-xl flex flex-col text-[14px] ${KommonExtraLight.className} overflow-hidden  shadow-black/25 shadow-lg hover:shadow-xl hover:shadow-black/45 hover:border-[#c60384] transition-all duration-300 `}
            >
              <Image
                src="/imgs/contacto.jpg"
                alt="Horario de apertura"
                width={1000}
                height={1000}
                className="absolute -z-10 top-0 right-0 object-cover"
              />
              <div className="bg-[#c60384] w-full h-full absolute top-0 right-0 bg-opacity-70 -z-10 "></div>
              <div className="flex flex-col">
                <div className="grid grid-cols-3 gap-1">
                  <div className="...">Lunes:</div>
                  <div className="col-span-2"> 3:00 am - 12:00 am</div>
                  <div className="...">Martes:</div>
                  <div className="col-span-2"> 24 Hrs</div>
                  <div className="...">Miercoles:</div>
                  <div className="col-span-2"> 24 Hrs</div>
                  <div className="...">Jueves:</div>
                  <div className="col-span-2"> 24 Hrs</div>
                  <div className="...">Viernes: </div>
                  <div className="col-span-2"> 12:00 am - 11:00 pm</div>
                  <div className="...">Sábado: </div>
                  <div className="col-span-2"> 3:00 am - 12:00 am</div>
                  <div className="...">Domingo: </div>
                  <div className="col-span-2"> 8:00 am - 3:00 pm</div>
                </div>

              </div>
            </div>
          </div>

          <div>
            <p className={`${KommonSemiBoldIt.className} text-[22px]`}>
              CONECTA CON NOSOTROS
            </p>
            <div
              className={`w-[300px] h-[200px] p-5 pl-10 border-4 border-[#fff] justify-center items-start rounded-xl flex flex-col text-[14px] ${KommonExtraLight.className}  shadow-black/25 shadow-lg hover:shadow-xl hover:shadow-black/45 hover:border-[#c60384] transition-all duration-300 `}
            >
              <p>
                Síguenos en nuestras redes sociales para estar al tanto de las
                últimas noticias, promociones exclusivas y contenido especial.
                Dale follow y sé parte de nuestra familia virtual.
              </p>
              <div className="flex flex-row gap-3 mt-3 text-[#b2b2b2]">
                <Link href="https://www.facebook.com/" target="_blank">
                  <RiFacebookBoxFill className=" cursor-pointer h-[32px] w-[32px] " />
                </Link>

                <Link href="https://www.instagram.com/" target="_blank">
                  <GrInstagram className=" cursor-pointer mt-[2px]  h-[27px] w-[27px]" />
                </Link>
                <Link href="https://www.whatsapp.com/" target="_blank">
                  <FaSquareWhatsapp className=" cursor-pointer mt-[2px] h-[28px] w-[28px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2830.1477256763865!2d-117.03527047908933!3d32.48253843274787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d937cbe2ec3da5%3A0x146095c137acc755!2sSkhole%20Fitness!5e0!3m2!1ses!2sus!4v1713850730971!5m2!1ses!2sus"

            style={{ border: "0", width: "100%", height: "350px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
