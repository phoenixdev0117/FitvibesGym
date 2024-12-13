import {
  KommonExtraLight,
  KommonSemiBold,
  KommonSemiBoldIt,
} from "@/config/fonts";

interface TituloSeccionesProps {
  tituloGris: string;
  tituloMagenta: string;
  parrafo1: string;
  parrafo2: string;
  plus: boolean;
  gris?: boolean;
}

export function TituloSecciones({
  tituloGris,
  tituloMagenta,
  parrafo1,
  parrafo2,
  plus,
  gris = false,
}: TituloSeccionesProps) {
  return (
    <>
      <div className={`   ${gris ? 'text-gray-900' : 'text-white'}  font-semibold text-center `}>
        <p
          className={`${KommonSemiBoldIt.className} text-[28px] sm:text-[35px] md:text-[45px] lg:text-[3.7vw] xl:text-[4vw] font-extrabold`}
        >
          {tituloGris} <span className="text-[#c60384]">{tituloMagenta}</span>
        </p>
      </div>
      {
        parrafo1 == '' ? null : (
          <div
            className={` text-white text-[14px] sm:text-[20px] md:text-[20px] lg:text-[1.2vw] font-semibold text-center flex justify-center items-center pt-2 `}
          >
            <p
              className={`${KommonExtraLight.className} font-extralight `}
              style={{ textWrap: "balance", letterSpacing: "0.2vw" }}
            >
              {parrafo1}
              <br />
              {parrafo2}
            </p>
          </div>
        )
      }
      {plus && (
        <div
          className={`text-[24px] sm:text-[30px] md:text-[30px]  lg:text-[3vw] font-semibold text-center flex justify-center items-center pt-2 text-[#f5eb24]`}
        >
          <p
            className={`${KommonSemiBold.className} font-extralight  `}
            style={{
              textWrap: "balance",
              letterSpacing: "0.7vw",
              textShadow: "2px 2px 4px rgba(245, 235, 36, 0.7)",
            }}
          >
            ++++++
          </p>
        </div>
      )}
    </>
  );
}