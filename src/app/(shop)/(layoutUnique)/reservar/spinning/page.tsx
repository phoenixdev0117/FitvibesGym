import { KommonSemiBold, KommonExtraBold } from "@/config/fonts";
import cycle from "@/../../public/imgs/icons/41.png";
import Image from "next/image";
import ClientToastComponent from "./ClientToastComponent";

export default function Home() {
  return (
    <section className="bg-white relative">
      <div className="absolute inset-0 z-10 top-0 left-0 w-screen h-[300px] bg-black flex flex-col">
        <div
          className={`${KommonSemiBold.className} absolute bottom-[40px] flex flex-col justify-center items-center gap-0 left-[10vw] lg:left-[20vw] translate-x-[-60px] sm:translate-x-0 translate-y-[20px] sm:translate-y-0`}
        >
          <div className="leading-none outlined-text text-[50px] italic font-bold text-center">
            SELECCIONA TU
          </div>
          <div className="leading-none text-[#c60384] text-[64px] italic font-bold translate-y-[-16px] text-center">
            CLASE Y HORARIO
          </div>
        </div>
        <Image
          width={300}
          height={300}
          src={cycle}
          alt="bg-class"
          className="absolute bottom-[-40%] right-[0vw] lg:right-[8vw] pointer-events-none"
        />
      </div>
      <div className="w-screen h-[1500px] lg:h-[1000px]">
        <iframe
          src={`${process.env.NEXT_PUBLIC_LARAVEL_Iframe_URL}/reservar/spinning`}
          className="h-[1500px] lg:h-[100vh]"
          style={{
            width: "100vw",
            border: "none",
            position: "absolute",
            top: "300px",
          }}
        />
        <ClientToastComponent />
      </div>
    </section>
  );
}