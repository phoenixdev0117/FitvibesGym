"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import {
  KommonExtraLight,
  KommonSemiBold,
  KommonSemiBoldIt,
} from "@/config/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MensajeSchema } from "@/schemas/home/MensajeSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/ui/form";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { sendMensaje } from "@/actions/mensaje/send_mensaje";
import { useEffect } from "react";
import Aos from "aos";

export function DejaMensaje() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof MensajeSchema>>({
    resolver: zodResolver(MensajeSchema),
    defaultValues: {
      email: "",
      nombre: "",
      telefono: "",
      mensaje: "",
    },
  });

  const onSubmit = (values: z.infer<typeof MensajeSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      const result = await sendMensaje(values);

      if (result.error) {
        setError(result.error as string);
        setTimeout(() => {
          setError("");
        }, 5000);

        return;
      } else if (result.success) {
        setSuccess(result.success as string);
        form.reset();
        setTimeout(() => {
          setSuccess("");
        }, 5000);
        return;
      }
    });
  };


  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: -100,
      once: true
    });
  }, [])


  return (
    <>
      <section
        className=" relative bg-white h-auto flex flex-col justify-center items-center md:justify-start md:items-start pt-10 lg:pt-20 lg:pb-14 px-5 lg:px-32 w-full overflow-hidden"
        id="contacto"
      >
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
        <Image
          data-aos="fade-left"
          src="/imgs/mujer-2.webp"
          alt="Hazte Miembro"
          quality={100}
          width={400}
          height={400}
          className=" object-cover  w-auto bottom-0 -right-[600px] md:-right-[100px] lg:-right-[100px] absolute h-[130%] z-10"
        />

        <div className="w-full flex flex-col items-center md:items-start z-40" data-aos="fade-right">
          <div
            className={`'text-gray-900' font-semibold text-center md:text-start `}
          >
            <p
              className={`${KommonSemiBoldIt.className} text-[28px] sm:text-[35px] md:text-[45px] lg:text-[3.7vw] xl:text-[4vw] font-extrabold`}
            >
              DEJA TU <span className="text-[#c60384]">MENSAJE</span>
            </p>
            <p
              className={`${KommonExtraLight.className} font-bold text-[14px] `}
              style={{ letterSpacing: "0.2vw" }}
            >
              Ponte en contacto con nosotros para empezar
            </p>
            <p
              className={`${KommonExtraLight.className} font-bold text-[14px]  `}
              style={{ letterSpacing: "0.2vw" }}
            >
              tu viaje hacia una vida más saludable y activa.
            </p>
          </div>

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
        </div>
        <div className="w-full flex flex-col items-start gap-5 mt-5 mb-10 z-40" data-aos="fade-up">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full flex flex-col items-start gap-5 mt-5 mb-10 "
            >
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12  p-2  border-[#d9d9d9] rounded-lg border-4 text-[#abb1bb]   focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                        {...field}
                        disabled={isPending}
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12 p-2 border-4 border-[#d9d9d9] rounded-lg text-[#abb1bb]  focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                        {...field}
                        disabled={isPending}
                        id="email"
                        placeholder="Correo"
                        type="email"
                      />
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
                        className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12  p-2  border-[#d9d9d9] rounded-lg border-4 text-[#abb1bb]   focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                        {...field}
                        disabled={isPending}
                        id="telefono"
                        placeholder="Teléfono"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        placeholder="Mensaje"
                        rows={6}
                        disabled={isPending}
                        className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12  p-2 border-4 border-[#d9d9d9] rounded-lg text-[#abb1bb]  focus:outline-none focus:border-[#c60384] hover:border-[#d9d9d9]"
                        {...field}
                      ></textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className={`${KommonSemiBold.className} cursor-pointer bg-[#fbed21] shadow-md shadow-black/25 hover:shadow-black/75 hover:shadow-md   text-black text-[20px] px-4 py-1 rounded-md hover:bg-[#c60384] hover:text-white  font-bold w-full md:w-8/12 lg:w-8/12 xl:w-6/12  `}
                variant={"default"}
                disabled={isPending}
              >
                Confirmar
              </Button>
            </form>
          </Form>
          {/* <form className="w-full flex flex-col items-start gap-5 mt-5 mb-10 ">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12  p-2  border-[#d9d9d9] rounded-lg border-4 text-[#e6dada]   focus:outline-none focus:border-[#d9d9d9] hover:border-[#d9d9d9]"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12 p-2 border-4 border-[#d9d9d9] rounded-lg text-[#e6dada]  focus:outline-none focus:border-[#d9d9d9] hover:border-[#d9d9d9]"
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12 p-2 border-4 border-[#d9d9d9] rounded-lg text-[#e6dada]  focus:outline-none focus:border-[#d9d9d9] hover:border-[#d9d9d9]"
            />
            <textarea
              placeholder="Mensaje"
              name="mensaje"
              rows={6}
              className="w-full md:w-8/12 lg:w-8/12 xl:w-6/12  p-2 border-4 border-[#d9d9d9] rounded-lg text-[#e6dada]  focus:outline-none focus:border-[#d9d9d9] hover:border-[#d9d9d9]"
            ></textarea>
            <button
              type="submit"
              className={`${KommonSemiBold.className} bg-[#fbed21] shadow-md shadow-black/25 hover:shadow-black/75 hover:shadow-md   text-black text-[20px] px-4 py-1 rounded-md hover:bg-[#c60384] hover:text-white  font-bold w-full md:w-8/12 lg:w-8/12 xl:w-6/12  `}
            >
              ENVIAR
            </button>
          </form> */}
        </div>
      </section>
    </>
  );
}
