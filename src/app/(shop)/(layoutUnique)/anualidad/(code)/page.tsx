"use client";
import { enviarPago } from "@/actions/payment/enviar_pago";
import CardPlanesPasarela from "@/components/ui/planes/CardPlanesPasarela";
import Step1Resumen from "@/components/ui/planes/steps/Step1Resumen";
import Step2 from "@/components/ui/planes/steps/Step2";
import Step3 from "@/components/ui/planes/steps/Step3";
import { KommonSemiBold } from "@/config/fonts";
import { planes } from "@/data/planes";
import { RegistroPagoSchema } from "@/schemas/home/RegistroPagoSchema";
import Image from "next/image";
import { useState, useEffect } from "react";
import { z } from "zod";


export default function Home() {

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const [descuento, setDescuento] = useState(20);

  const [select, setSelect] = useState(2);
  const [planSelect, setPlan] = useState(planes[2]);
  const [mensualidad, setMensualidad] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [montodescuento, setMontoDescuento] = useState(0.0);
  const [domiciliacion, setDomiciliacion] = useState(false);

  useEffect(() => {
    setDescuento(20);
    // seleccionar plan
    const plan = planes.find((plan) => plan.select == select)!;
    setPlan(plan);

    setMontoDescuento(((99 + plan.price * 12) * descuento) / 100);
    setTotal(99 + plan.price * 12 - ((99 + plan.price * 12) * descuento) / 100);
    setMensualidad(plan.price * 12);
  }, [select]);

  const handleClick = (value: number) => {
    setSelect(value);
  };

  //const [inscripcion, setInscripcion] = useState(99);
  const [inscripcion, setInscripcion] = useState(0);

  const [steps, setSteps] = useState(0);
  const [louding, setLouding] = useState<boolean>(false);


  const handleClickSendPlayument = async (values: z.infer<typeof RegistroPagoSchema>) => {
    setError(undefined);
    setSuccess(undefined);
    setLouding(true);

    const resultado = await enviarPago(values, inscripcion,
      mensualidad,
      montodescuento,
      total,
      domiciliacion,
      planSelect.select! + 3,
      1,
      ''
    );
    if (resultado.error) {
      setError(resultado.error);
    }
    if (resultado.success) {
      setSuccess(resultado.success);
    }
    setLouding(false);
  }


  return (

    <section className="bg-white ">
      <div className=" w-full min-h-screen flex flex-col lg:flex-row h-auto ">
        <div className="min-h-screen lg:w-8/12 flex flex-col justify-around items-center gap-5 pt-24 pb-10">

          {steps == 0 && (
            <>
              <CardPlanesPasarela
                planId={planSelect.select}
                plan={planes[2].name}
                color={true}
                lazo={true}
                plazo="12 Mes"
                //inscripcion={99}
                inscripcion={0}
                precioDe={planes[2].price * 12}
                rebaja={0}
                select={2}
                check={select == 2}
                setSelect={handleClick}
                setMensualidad={() => { }}
                setDescuento={() => { }}
                setTotal={() => { }}
                setDomiciliacionDesc={() => { }}
              />
              <CardPlanesPasarela
                planId={planSelect.select}
                plan={planes[1].name}
                color={false}
                lazo={false}
                plazo="12 Mes"
                //inscripcion={99}
                inscripcion={0}
                precioDe={planes[1].price * 12}
                rebaja={0}
                select={1}
                check={select == 1}
                setSelect={handleClick}
                setMensualidad={() => { }}
                setDescuento={() => { }}
                setTotal={() => { }}
                setDomiciliacionDesc={() => { }}
              />

              <CardPlanesPasarela
                planId={planSelect.select}
                plan={planes[3].name}
                color={false}
                lazo={false}
                plazo="12 Mes"
                //inscripcion={99}
                inscripcion={0}
                precioDe={planes[3].price * 12}
                rebaja={0}
                select={3}
                check={select == 3}
                setSelect={handleClick}
                setMensualidad={() => { }}
                setDescuento={() => { }}
                setTotal={() => { }}
                setDomiciliacionDesc={() => { }}
              />
              <div className=" flex flex-row flex-wrap p-10 md:p-0  gap-8 justify-start items-center md:justify-start md:items-start ">
                <div className="flex flex-col gap-5">
                  <span>Tarjetas de credito</span>
                  <div className="flex flex-row gap-5">
                    <Image
                      src="/imgs/card1.png"
                      width={160}
                      height={160}
                      alt="Visa"
                      style={{ width: '100%', height: 'auto' }} // Asegura que la imagen mantenga la proporción
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span>Tarjetas de débito</span>
                  <div className="flex flex-row gap-5">
                    <Image
                      src="/imgs/card2.png"
                      width={400}
                      height={100}
                      alt="Mastercard"
                      style={{ width: '100%', height: 'auto' }} // Asegura que la imagen mantenga la proporción
                      priority
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {steps === 1 && <Step2 />}
          {steps === 2 && <Step3 louding={louding} handleClickSendPlayument={handleClickSendPlayument} total={total}
            inscripcion={inscripcion}
            mensualidad={mensualidad}
            descuento={descuento}
            domiciliacion={domiciliacion}
            domiciliacionDesc={0}
            planId={planSelect.select! + 3}
          />}
        </div>
        <div className="  lg:min-h-screen w-full lg:w-4/12       bg-[#fbee21]  pt-32 pb-24 lg:px-10 flex flex-col items-start justify-between font-bold">
          <Step1Resumen
            setError={setError}
            planName={planSelect.name}
            planId={planSelect.select}
            ocultar
            domiciliacion={false}
            handleDomiciliacion={() => { }}
            domiciliacionDesc={0}
            inscripcion={inscripcion}
            mensualidad={mensualidad}
            descuento={montodescuento}
            total={total}
            planSelect={planSelect}
            setSteps={setSteps}
            steps={steps}
          />
        </div>
      </div>
      {error && (
        <div className="  fixed bottom-0  right-0 z-50 p-5 opacity-80">
          <div>
            <div
              className={`${KommonSemiBold.className} p-5 rounded-lg bg-red-500 flex justify-between items-center`}
            >
              <p className="text-white font-bold">{error}</p>
            </div>
          </div>
        </div>
      )}
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
  );
}
