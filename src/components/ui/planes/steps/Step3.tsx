"use client";
import { RegistroPagoSchema } from "@/schemas/home/RegistroPagoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/shadcn/ui/input";
import { KommonExtraBold } from "@/config/fonts";
import { CheckIcon } from "@radix-ui/react-icons";
import { v4 as uuidv4 } from 'uuid';
import base64 from 'base-64';
const pais = [
  { name: "MX", value: "MX +52" },
  { name: "US", value: "US +1" },
];

interface Props {
  handleClickSendPlayument: (values: z.infer<typeof RegistroPagoSchema>) => void;
  louding: boolean;
  total: number;
  planId: number;
  domiciliacion: boolean;
  inscripcion: number;
  mensualidad: number;
  descuento: number;
  domiciliacionDesc: number;
}

const Step3 = ({ handleClickSendPlayument, louding, total, planId, domiciliacion, inscripcion, mensualidad, descuento, }: Props) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const [aceptoTerm, setAceptoTerm] = useState<boolean>(false);


  const form = useForm<z.infer<typeof RegistroPagoSchema>>({
    resolver: zodResolver(RegistroPagoSchema),
    defaultValues: {
      email: "",
      nombre: "",
      apellido: "",
      dia: "",
      mes: "",
      anio: "",
      telefono: "",
      genero: 0,
      pais: "",
    },
  });

  const idTransaccion = uuidv4();
  const router = useRouter();
  const https = require('https');
  const querystring = require('querystring');
  const request = async () => {

    const path = '/v1/checkouts';
    const data = querystring.stringify({
      'entityId': process.env.NEXT_PUBLIC_ENTITYID,
      'amount': total.toFixed(2),
      'currency': 'MXN',
      'paymentType': 'DB',
      //'testMode': 'EXTERNAL',
      'descriptor': process.env.NEXT_PUBLIC_IDDESCRIPTION,
      'merchantTransactionId': idTransaccion,
      'billing.country': 'MX',
      'shipping.country': 'MX',
    });
    const options = {
      port: 443,
      host: process.env.NEXT_PUBLIC_URL_PAYMENT,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': data.length,
        'Authorization': `${process.env.NEXT_PUBLIC_TOKEN_PAYMENT}`

      }


    };
    return new Promise((resolve, reject) => {
      const postRequest = https.request(options, function (res: any) {
        const buf: any = [];
        res.on('data', (chunk: any) => {
          buf.push(Buffer.from(chunk));
        });
        res.on('end', () => {
          const jsonString = Buffer.concat(buf).toString('utf8');
          try {
            resolve(JSON.parse(jsonString));
          } catch (error) {
            reject(error);
          }
        });
      });
      postRequest.on('error', reject);
      postRequest.write(data);
      postRequest.end();
    });
  };

  const onSubmit = (values: z.infer<typeof RegistroPagoSchema>) => {
    setError("");
    setSuccess("");
    if (!aceptoTerm) {
      setError("Debes aceptar los términos y condiciones");
      return;
    }
    // Convertir valores a JSON y luego a Base64

    const data = {
      total: total.toFixed(2), // Reemplaza con el valor adecuado
      planId: planId, // Reemplaza con el valor adecuado
      domiciliacion: domiciliacion, // Reemplaza con el valor adecuado
      inscripcion: inscripcion, // Reemplaza con el valor adecuado
      mensualidad: mensualidad, // Reemplaza con el valor adecuado
      descuento: descuento, // Reemplaza con el valor adecuado
    };

    const combinedData = {
      ...values,
      paymentDetails: data,
    };
    const jsonString = JSON.stringify(combinedData);
    const base64String = base64.encode(jsonString);
    request().then((e: any) => {

      router.push(`${process.env.NEXT_PUBLIC_APP_URL}/paymentconfirm?ID=${e['id']}&base64=${base64String}`);
    }).catch(console.error);

    // handleClickSendPlayument(values)
  };

  return (
    <div className="w-full p-10">
      <p className="uppercase text-[18px] font-bold">
        LLenar la siguiente información
      </p>

      <div className="w-full flex flex-col items-start gap-5 mt-5 mb-10 z-40">
        <Form {...form} >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" w-full flex flex-col md:flex-row md:flex-wrap justify-start items-center  gap-5  md:gap-x-10  md:gap-y-5  [&>div]:md:w-8/12 [&>div]:lg:w-5/12  "
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full     p-2  border-[#d9d9d9] rounded-lg border-4 text-[#abb1bb]   focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                      {...field}
                      disabled={louding}
                      id="nombre"
                      placeholder="Nombre"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apellido"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full   p-2  border-4 border-[#d9d9d9] rounded-lg text-[#abb1bb]   focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                      {...field}
                      disabled={louding}
                      id="apellido"
                      placeholder="Apellido"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <p>Fecha de nacimiento</p>
              <div className=" [&>div]:w-[90px] flex flex-row flex-wrap gap-3">
                <FormField
                  control={form.control}
                  name="dia"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <select
                          className="w-[90px] p-2 border-4 border-[#d9d9d9] rounded-lg text-[#abb1bb] focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                          {...field}
                          disabled={louding}
                          id="dia"
                          style={{
                            color: "#c60384",
                          }}
                        >
                          <option value="">Día</option>
                          {
                            // Agrega más opciones según tus necesidades

                            Array.from({ length: 31 }, (_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            ))
                          }
                          {/* Agrega más opciones según tus necesidades */}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mes"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <select
                          className="w-[90px] p-2 border-4 border-[#d9d9d9] rounded-lg text-[#abb1bb] focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                          {...field}
                          disabled={louding}
                          id="mes"
                          style={{
                            color: "#c60384",
                          }}
                        >
                          <option value="">Mes</option>
                          {
                            // Agrega más opciones según tus necesidades
                            Array.from({ length: 12 }, (_, i) => (
                              <option key={i} value={i + 1}>
                                {i + 1}
                              </option>
                            ))
                          }
                          {/* Agrega más opciones según tus necesidades */}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="anio"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <select
                          className="w-[90px] p-2 border-4 border-[#d9d9d9] rounded-lg text-[#abb1bb] focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                          {...field}
                          disabled={louding}
                          id="anio"
                          style={{
                            color: "#c60384",
                          }}
                        >
                          <option value="">Año</option>
                          {
                            // Agrega más opciones según tus necesidades
                            Array.from({ length: 80 }, (_, i) => (
                              <option key={i} value={2024 - i}>
                                {2024 - i}
                              </option>
                            ))
                          }
                          {/* Agrega más opciones según tus necesidades */}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full">
              <p>Género</p>
              <FormField
                control={form.control}
                name="genero"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-4">
                        <label
                          htmlFor="masculino"
                          className="inline-flex items-center"
                        >
                          <input
                            type="radio"
                            id="masculino"
                            {...field}
                            disabled={louding}
                            value={1}
                            name="genero"
                            style={{
                              color: "#c60384",
                              accentColor: "#c60384",
                            }}
                            className="w-6 h-6 text-[#c60384] border-4 border-[#d9d9d9] rounded-full "
                          />
                          <span className="ml-2">Masculino</span>
                        </label>
                        <label
                          htmlFor="femenino"
                          className="inline-flex items-center"
                        >
                          <input
                            type="radio"
                            id="femenino"
                            {...field}
                            disabled={louding}
                            value={2}
                            name="genero"
                            style={{
                              color: "#c60384",
                              accentColor: "#c60384",
                            }}
                            className="w-6 h-6 text-[#c60384] border-4 border-[#d9d9d9] rounded-full "
                          />
                          <span className="ml-2">Femenino</span>
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full  p-2 border-4 border-[#d9d9d9] rounded-lg text-[#abb1bb]  focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                      {...field}
                      disabled={louding}
                      id="email"
                      placeholder="Correo electrónico"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" w-full flex flex-row flex-nowrap   justify-start [&>div]:w-auto ">
              <FormField
                control={form.control}
                name="pais"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <select
                        className="w-[110px] h-12 p-2 border-4 border-[#d9d9d9] bg-[#d9d9d9] rounded-s-lg text-[#abb1bb] focus:outline-none focus:border-[#d9d9d9] hover:border-[#d9d9d9]"
                        {...field}
                        disabled={louding}
                        id="pais"
                        style={{
                          color: "#c60384",
                        }}
                      >
                        <option value="">País</option>
                        {
                          // Agrega más opciones según tus necesidades
                          pais.map((pais) => (
                            <option key={pais.name} value={pais.name}>
                              {pais.value}
                            </option>
                          ))
                        }
                        {/* Agrega más opciones según tus necesidades */}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full h-12  p-2  border-[#d9d9d9] rounded-e-lg border-4 text-[#abb1bb]   focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                        {...field}
                        disabled={louding}
                        id="telefono"
                        placeholder="Teléfono"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <a className="flex flex-row gap-5 cursor-pointer" onClick={() => setAceptoTerm(!aceptoTerm)}>
              <div className="w-[45px] h-[25px]   bg-[#d9d9d9] ">
                {aceptoTerm ? (<CheckIcon className="w-[25px] h-[25px] text-[#c60384] " />) : (
                  <div className="w-[25px] h-[25px] "></div>

                )}
              </div>

              <p>
                Estoy de acuerdo con los Términos y condiciones, políticas de
                cancelación y de promoción así como los servicios que se
                muestran en el desglose de mi compra son los que solicilto.
              </p>
            </a>
            <a className="w-full mt-10 flex justify-center">
              <Button
                type="submit"
                className={`${KommonExtraBold.className} cursor-pointer bg-[#fbed21] shadow-md shadow-black/25 hover:shadow-black/75 hover:shadow-md   text-black text-[18px] px-4 py-1 rounded-md hover:bg-[#c60384] hover:text-white  font-bold w-full md:w-8/12 lg:w-8/12 xl:w-8/12  uppercase `}
                variant={"default"}
                disabled={louding}
              >
                Pagar mi plan
              </Button>
            </a>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Step3;