"use client";
import React from "react";
import Resumen from "../Resumen";
import { KommonExtraBold, KommonExtraLight } from "@/config/fonts";
import { CheckIcon } from "@radix-ui/react-icons";

interface Props {
  planId: number;
  domiciliacion: boolean;
  handleDomiciliacion: () => void;
  domiciliacionDesc: number;
  inscripcion: number;
  mensualidad: number;
  descuento: number;
  total: number;
  planName: string;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  steps: number;
  setError: (value: string | undefined) => void;
  planSelect: {
    name: string;
  };
  ocultar?: boolean;

}

const Step1Resumen = ({
  planId,
  domiciliacion,
  handleDomiciliacion,
  domiciliacionDesc,
  inscripcion,
  mensualidad,
  descuento,
  total,
  planSelect,
  setSteps,
  steps,
  setError,
  planName,
  ocultar = false
}: Props) => {
  return (
    <div className="h-[90%] w-full flex flex-col items-center justify-between">
      <div className="w-10/12">
        <p className={`${KommonExtraBold.className} text-[24px]`}>
          DETALLES DE LA COMPRA
        </p>
        <p className={`${KommonExtraLight.className} text-[20px]`}>
          Plan elegido:{" "}
          <span className={`${KommonExtraBold.className} uppercase`}>
            {planName}
          </span>
        </p>

      </div>
      <div
        className="  w-10/12"
        // separacione entre lineas
        style={{ lineHeight: "1" }}
      >
        <Resumen
          inscripcion={inscripcion}
          mensualidad={mensualidad}
          descuento={descuento + domiciliacionDesc}
          total={total - domiciliacionDesc}
        />
        {steps < 2 && (
          <div className=" mt-5 flex flex-row justify-end">
            <button
              onClick={() => {
                if (planId === 0) {
                  setError("Selecciona un plan");
                  return;
                };
                setError(undefined);
                setSteps(steps + 1)
              }}
              className="text-[#c21a83] font-bold bg-white rounded-lg p-2 px-12 hover:bg-[#c21a83] hover:text-white shadow-md shadow-black/35 hover:shadow-black/75 hover:shadow-md uppercase"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step1Resumen;