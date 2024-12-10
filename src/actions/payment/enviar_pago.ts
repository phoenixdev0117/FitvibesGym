"use server";
import prisma from "@/lib/db-prisma";
import { RegistroPagoSchema } from "@/schemas/home/RegistroPagoSchema";
import { z } from "zod";
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
export const enviarPago = async (
  values: PersonalData,
  inscripcion: number,
  mensualidad: number,
  descuento: number,
  total: number,
  domiciliacion: boolean,
  plan: number,
  estatus: number,
  ispago: string | undefined
) => {
  const { email, nombre, apellido, telefono, anio, dia, mes, genero, pais } =
    values;

  try {
    let existingUser = await prisma.userplanes.findFirst({
      where: {
        email: email,
      },
    });

    const resultPais = await prisma.pais.findUnique({
      where: {
        nombre: pais,
      },
    });
    const resultGenero = await prisma.genero.findUnique({
      where: {
        id: genero,
      },
    });

    if (!resultGenero) {
      return { error: "El género no existe." };
    }
    if (!resultPais) {
      return { error: "El país no existe." };
    }

    if (!existingUser) {
      existingUser = await prisma.userplanes.create({
        data: {
          email: email,
          nombre: nombre,
          apellido: apellido,
          telefono: telefono,
          anio: anio,
          dia: dia,
          mes: mes,
          generoId: resultGenero.id,
          paisId: resultPais.id,
        },
      });
    }

    const estado = await prisma.estadopago.findFirst({
      where: {
        nombre: "Pendiente",
      },
    });
    const resultPayment = await prisma.payment.create({
      data: {
        numerotransaccion: ispago,
        inscripcion: inscripcion,
        mensualidad: mensualidad,
        descuento: descuento,
        total: total,
        domiciliacion: domiciliacion,
        userId: existingUser.id,
        planesId: plan,
        estadopagoId: estatus,
      },
    });

    return { success: "Se guardo el pago." };
  } catch (error: any) {

    return {
      error:
        "Ocurrio un problema al guardar el pago. Intenta nuevamente o contactese.",
    };

  }
};
