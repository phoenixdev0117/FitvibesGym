"use client";

import Link from "next/link";
import React, { Suspense, useEffect, useState, useCallback } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { BiSolidError } from "react-icons/bi";
import { getEstadoPago } from "@/actions/payment/get_estado_pago";
import { useSearchParams } from "next/navigation";
import base64 from "base-64";
import { Pago } from "../../../../../interfaces/pagos.interfaces";
import { KommonSemiBold } from "@/config/fonts";
import { enviarPago } from "@/actions/payment/enviar_pago";
import { sendMensajePayment } from "@/actions/mensaje/send_mensaje_payment";

interface PersonalData {
  email: string;
  nombre: string;
  apellido: string;
  dia: string;
  mes: string;
  anio: string;
  telefono: string;
  genero: number;
  pais: string;
}

interface PaymentDetails {
  total: number;
  planId: number;
  domiciliacion: boolean;
  inscripcion: number;
  mensualidad: number;
  descuento: number;
  domiciliacionDesc: number;
}

const PaymentStatus = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const formulario = searchParams.get("base64");
  const bookclassinfos = searchParams.get("bookclassinfos");

  const [estadoPago, setEstadoPago] = useState<Pago | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [error2, setError2] = useState<null | string>();
  const [success, setSuccess] = useState<string | undefined>();
  const [success2, setSuccess2] = useState<string | undefined>();
  const [error3, setError3] = useState<string | undefined>();
  const [estatus, setestatus] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      if (id) {
        const result = await getEstadoPago(id as string);

        setEstadoPago(result);
        if (result.result.description === "Transaction succeeded") {
          setestatus(3);
          if (formulario) {
            const decodedString = base64.decode(formulario);
            const parsedData = JSON.parse(decodedString);

            const datosPago = {
              email: parsedData.email,
              nombre: parsedData.nombre,
              apellido: parsedData.apellido,
              dia: parsedData.dia,
              mes: parsedData.mes,
              anio: parsedData.anio,
              telefono: parsedData.telefono,
              genero: parsedData.genero,
              pais: parsedData.pais,
            };
            handleClickSendPlayument(
              datosPago,
              parsedData.paymentDetails,
              result.id
            );
          }

          // From the laravel project, no formulario was sent but bookclassinfos are came.
          if (bookclassinfos) {
            type InfoArray = [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string
            ];
            // Then, use optional chaining and nullish coalescing
            const infos: InfoArray | undefined = bookclassinfos?.split(
              "%26"
            ) as InfoArray | undefined;

            if (infos && infos.length >= 8) {
              const totalprice = infos[0];
              const name =
                decodeURIComponent(infos[1]) +
                " " +
                decodeURIComponent(infos[2]);
              const email = decodeURIComponent(infos[3]);
              const date = decodeURIComponent(infos[4]);
              const classNum = parseInt(infos[5]);
              const seatsList = decodeURIComponent(infos[6]);
              const gymClassName = decodeURIComponent(infos[7]);
              const classList = [
                "7:00 - 8:00 AM",
                "8:00 - 9:00 AM",
                "9:00 - 10:00 AM",
                "10:00 - 11:00 AM",
                "5:00 - 6:00 PM",
                "6:00 - 7:00 PM",
                "7:00 - 8:00 PM",
                "8:00 - 9:00 PM",
              ];
              const classnumber = classList[classNum];

              // YES OK RESPONSE FROM BANK
              try {
                const response = await fetch(
                  `${process.env.NEXT_PUBLIC_MAILER_SERVER}/api/user/mailer`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                      to: email,
                      date: date,
                      classNum: classList[classNum],
                      seatsList: seatsList,
                      // txt: `Dear ${name},\n\nYour booking for ${date} has been confirmed. Thank you for choosing our service.\n\nBest regards,\nYour Company`,
                    }),
                  }
                );
                if (response.ok) {
                  alert("Email sent successfully!");
                  let result = await response.json();
                  console.log(result);
                } else {
                  throw new Error("Failed to send email");
                }
              } catch (error) {
                console.error("Error:", error);
                alert("Failed to send email. Please try again.");
              }
            }
          }
        } else {


          // This is the code when no response from bank
          if (bookclassinfos) {
            type InfoArray = [
              string,
              string,
              string,
              string,
              string,
              string,
              string,
              string
            ];
            // Then, use optional chaining and nullish coalescing
            const infos: InfoArray | undefined = bookclassinfos?.split(
              "%26"
            ) as InfoArray | undefined;

            if (infos && infos.length >= 8) {
              const totalprice = infos[0];
              const name =
                decodeURIComponent(infos[1]) +
                " " +
                decodeURIComponent(infos[2]);
              const email = decodeURIComponent(infos[3]);
              const date = decodeURIComponent(infos[4]);
              const classNum = parseInt(infos[5]);
              const seatsList = decodeURIComponent(infos[6]);
              const gymClassName = decodeURIComponent(infos[7]);
              const classList = [
                "7:00 - 8:00 AM",
                "8:00 - 9:00 AM",
                "9:00 - 10:00 AM",
                "10:00 - 11:00 AM",
                "5:00 - 6:00 PM",
                "6:00 - 7:00 PM",
                "7:00 - 8:00 PM",
                "8:00 - 9:00 PM",
              ];
              const classnumber = classList[classNum];

              // NO RESPONSE FROM BANK
              try {
                const response = await fetch(
                  // `http://192.168.142.43:8000/reservar/deleteBook?date=${date}&classNum=${classNum}&seatsList=${seatsList}&gymClassName=${gymClassName}`,
                  `${process.env.NEXT_PUBLIC_LARAVEL_Iframe_URL}/reservar/deleteBook?date=${date}&classNum=${classNum}&seatsList=${seatsList}&gymClassName=${gymClassName}`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      // "Access-Control-Allow-Origin": "*",
                    },
                  }
                );
                if (response.ok) {
                  alert("Your Book was canceled from bank.");
                  let result = await response.json();
                  console.log(result);
                } else {
                  throw new Error("Failed to cancel book");
                }
              } catch (error) {
                console.error("Error:", error);
                alert("Failed to cancel book. Please try again.");
              }
            }
          }
          ///////////////////////////////////////////////



        }
      } else {
        throw new Error("No payment ID provided");
      }
    } catch (error) {
      console.log(error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [id, formulario, bookclassinfos]);

  const handleClickSendPlayument = async (
    datosPago: PersonalData,
    paymentDetails: PaymentDetails,
    idpayment: string
  ) => {
    const resultado = await enviarPago(
      datosPago,
      paymentDetails?.inscripcion,
      paymentDetails?.mensualidad,
      paymentDetails?.domiciliacionDesc,
      Number(paymentDetails.total),
      paymentDetails?.domiciliacion,
      paymentDetails?.planId,
      estatus,
      idpayment
    );
    if (resultado.error) {
      setError2(resultado.error);
    }
    if (resultado.success) {
      setSuccess(resultado.success);
    }
    const today = new Date();
    setError3("");
    setSuccess2("");

    const result = await sendMensajePayment(
      idpayment,
      datosPago.email,
      datosPago.nombre,
      Number(paymentDetails.total),
      today
    );

    if (result.error) {
      setError3(result.error as string);
      setTimeout(() => {
        setError3("");
      }, 5000);
    } else if (result.success) {
      setSuccess(result.success as string);
      setTimeout(() => {
        setSuccess2("");
      }, 5000);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <section className="w-full flex flex-col bg-slate-50 min-h-screen justify-center items-center">
        <div>Loading ...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full flex flex-col bg-slate-50 min-h-screen justify-center items-center">
        <div>Error : {error.message}</div>
      </section>
    );
  }

  const isPago = (estado: Pago | null): estado is Pago => {
    return (estado as Pago)?.result !== undefined;
  };
  if (error2) {
    return (
      <section className="w-full flex flex-col bg-slate-50 min-h-screen justify-center items-center">
        {/* {isPago(estadoPago) && estadoPago.result.code === "000.100.112" ? ( */}
        {isPago(estadoPago) &&
        estadoPago.result.description === "Transaction succeeded" ? (
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-2xl text-black font-bold items-center flex gap-3 flex-wrap">
              Tu pago ha sido realizado con éxito{" "}
              <IoShieldCheckmark className="text-teal-400 text-6xl" />
            </p>
            <p className="text-black font-bold">Gracias por tu compra</p>
            <p className="text-black font-bold">Te esperamos en FitvibesGYM</p>
            <p className="text-black font-bold">
              Tu código de pago es: {estadoPago.id}
            </p>

            <BiSolidError className="text-red-400 text-6xl" />
            <p className="text-black font-bold">
              !Hubo un problema en guardar sus datos{" "}
            </p>
            <p className="text-black font-bold">
              {" "}
              Favor de contactar con nosotros gracias.
            </p>
            <Link
              href="/"
              className="flex flex-row items-center bg-magenta-500 text-blue-500 px-4 py-2 rounded-md hover:underline"
            >
              <IoIosArrowBack className="text-blue-500 text-2xl" />
              Volver
            </Link>
          </div>
        ) : (
          <div>Error : {error2}</div>
        )}
        {error3 && (
          <div className="  fixed bottom-0  right-0 z-50 p-5 opacity-80">
            <div>
              <div
                className={`${KommonSemiBold.className} p-5 rounded-lg bg-red-500 flex justify-between items-center`}
              >
                <p className="text-white font-bold">{error3}</p>
              </div>
            </div>
          </div>
        )}
        {success2 && (
          <div className="  fixed bottom-0  right-0 z-50 p-5 opacity-80">
            <div>
              <div
                className={`${KommonSemiBold.className} p-5 rounded-lg bg-[#45ce89] flex justify-between items-center`}
              >
                <p className="text-white font-bold">{success2}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
  return (
    <section className="w-full flex flex-col bg-slate-50 min-h-screen justify-center items-center">
      {isPago(estadoPago) &&
      estadoPago.result.description === "Transaction succeeded" ? (
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-2xl text-black font-bold items-center flex gap-3 flex-wrap">
            Tu pago ha sido realizado con éxito{" "}
            <IoShieldCheckmark className="text-teal-400 text-6xl" />
          </p>
          <p className="text-black font-bold">Gracias por tu compra</p>
          <p className="text-black font-bold">Te esperamos en FitvibesGYM</p>
          <p className="text-black font-bold">
            Tu código de pago es: {estadoPago.id}
          </p>

          <Link
            href="/"
            className="flex flex-row items-center bg-magenta-500 text-blue-500 px-4 py-2 rounded-md hover:underline"
          >
            <IoIosArrowBack className="text-blue-500 text-2xl" />
            Volver
          </Link>
          {error3 && (
            <div className="  fixed bottom-0  right-0 z-50 p-5 opacity-80">
              <div>
                <div
                  className={`${KommonSemiBold.className} p-5 rounded-lg bg-red-500 flex justify-between items-center`}
                >
                  <p className="text-white font-bold">{error3}</p>
                </div>
              </div>
            </div>
          )}
          {success2 && (
            <div className="  fixed bottom-0  right-0 z-50 p-5 opacity-80">
              <div>
                <div
                  className={`${KommonSemiBold.className} p-5 rounded-lg bg-[#45ce89] flex justify-between items-center`}
                >
                  <p className="text-white font-bold">{success2}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="text-2xl text-black font-bold items-center flex gap-3 flex-wrap">
            Tu pago ha sido rechazado{" "}
            <BiSolidError className="text-red-400 text-6xl" />
          </p>
          {estadoPago ? (
            <p className="text-black font-bold">
              Intento de pago ID: {estadoPago.id}
            </p>
          ) : null}

          <p className="text-black font-bold">Por favor intenta de nuevo</p>
          <p className="text-black font-bold">
            Si el problema persiste, contacta con nosotros
          </p>
          <Link
            href="/"
            className="flex flex-row items-center bg-magenta-500 text-blue-500 px-4 py-2 rounded-md hover:underline"
          >
            <IoIosArrowBack className="text-blue-500 text-2xl" />
            Volver
          </Link>
        </div>
      )}
    </section>
  );
};

const Home = () => (
  <Suspense
    fallback={
      <section className="w-full bg-white flex flex-col justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </section>
    }
  >
    <PaymentStatus />
  </Suspense>
);

export default Home;
