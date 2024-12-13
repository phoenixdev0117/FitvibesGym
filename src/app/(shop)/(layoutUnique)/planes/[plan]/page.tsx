"use client";
import { enviarPago } from "@/actions/payment/enviar_pago";
import Step1 from "@/components/ui/planes/steps/Step1";
import Step1Resumen from "@/components/ui/planes/steps/Step1Resumen";
import Step2 from "@/components/ui/planes/steps/Step2";
import Step3 from "@/components/ui/planes/steps/Step3";
import { KommonSemiBold } from "@/config/fonts";
import { getPlan, Page, planes } from "@/data/planes";
import { RegistroPagoSchema } from "@/schemas/home/RegistroPagoSchema";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

interface Props {
  params: {
    plan: string;
  };
}


export default function Home({ params }: Props) {

  const { plan } = params;


  // if (!Object.values(Page).includes(plan as Page)) {
  //   redirect("/");

  // }
  const planSeleccionado = getPlan(plan);

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [loadingStep1, setLoadingStep1] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [planSelect, setPlanSelect] = useState(planSeleccionado);

  const [domiciliacion, setDomiciliacion] = useState(false);

  //const [inscripcion, setInscripcion] = useState(99);
  const [inscripcion, setInscripcion] = useState(0);
  const [descuento, setDescuento] = useState(0);
  const [domiciliacionDesc, setDomiciliacionDesc] = useState(0);
  const [steps, setSteps] = useState(0);
  const [planId, setPlanId] = useState(planSelect.select);
  const [mensualidad, setMensualidad] = useState(planSelect.price);
  // const [total, setTotal] = useState(99 + planSelect.price);
  const [total, setTotal] = useState(0 + planSelect.price);


  useEffect(() => {

    setLoadingStep1(false);

  }, [planId]);

  useEffect(() => {
    if (domiciliacionDesc === 0) {
      setDomiciliacion(false);
    }
  }, [domiciliacionDesc]);

  if (loadingStep1) {
    return (
      <section className="w-full bg-white flex flex-col justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </section>
    );
  }

  const handleDomiciliacion = () => {
    setDomiciliacion(!domiciliacion);
    if (domiciliacion) {
      setDomiciliacionDesc(0);
    } else {
      let result = Math.trunc(total * 10) / 100;
      setDomiciliacionDesc(result);
    }
  };


  const handleClickSendPlayument = async (
    values: z.infer<typeof RegistroPagoSchema>
  ) => {
    setError(undefined);
    setSuccess(undefined);
    const resultado = await enviarPago(
      values,
      inscripcion,
      mensualidad,
      descuento,
      total,
      domiciliacion,

      planes[planId].select,
      1,
      ''
    );
    if (resultado.error) {
      setError(resultado.error);
    }
    if (resultado.success) {
      setSuccess(resultado.success);
    }
    setLoading(false);
  };

  return (
    <>
      <section className="bg-white relative ">
        <div className=" w-full min-h-screen flex flex-col lg:flex-row  ">
          <div className="min-h-screen lg:w-8/12 flex flex-col justify-around items-center gap-5 pt-24">
            {steps === 0 && (
              <Step1
                planSelect={planSelect}
                plans={planes}
                setMensualidad={setMensualidad}
                setDescuento={setDescuento}
                setTotal={setTotal}
                setDomiciliacionDesc={setDomiciliacionDesc}
                setPlanId={setPlanId}
              />
            )}
            {steps === 1 && <Step2 />}
            {steps === 2 && (
              <Step3
                louding={loading}
                handleClickSendPlayument={handleClickSendPlayument}
                total={total}
                inscripcion={inscripcion}
                mensualidad={mensualidad}
                descuento={descuento}
                domiciliacion={domiciliacion}
                planId={planes[planId].select}
                domiciliacionDesc={domiciliacionDesc}
              />
            )}
          </div>
          <div className=" lg:min-h-screen w-full lg:w-4/12 bg-[#fbee21]  pt-32 pb-24 px-10 flex flex-col items-start justify-between font-bold">
            <Step1Resumen
              planId={planId}
              planName={planes[planId].name}
              setError={setError}
              domiciliacion={domiciliacion}
              handleDomiciliacion={handleDomiciliacion}
              domiciliacionDesc={domiciliacionDesc}
              inscripcion={inscripcion}
              mensualidad={mensualidad}
              descuento={descuento}
              total={total}
              planSelect={planSelect}
              setSteps={setSteps}
              steps={steps}
            />
          </div>
        </div>


        {success && (
          <div className="  fixed bottom-0  right-0 z-50 p-5 opacity-80">
            <div>
              <div
                className={`${KommonSemiBold.className} p-5 rounded-lg bg-[#45ce89] flex justify-between items-center`}
              >
                <p className="text-white font-bold">{success}</p>
              </div>
            </div>
          </div>
        )}
      </section>

    </>
  );
}