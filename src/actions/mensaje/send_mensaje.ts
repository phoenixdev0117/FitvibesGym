'use server';

import prisma from "@/lib/db-prisma";
import { sendEmailMensajeContact } from "@/lib/mailing";
//import { poolDb } from "@/lib/mysql";
import { MensajeSchema } from "@/schemas/home/MensajeSchema";
import  * as z from 'zod';


export async function sendMensaje(values:  z.infer<typeof MensajeSchema>) {
    
    const { email, nombre, telefono, mensaje } = values;
    // const db = await poolDb; 

    try {  
        const sendEmail = await sendEmailMensajeContact(email, nombre, telefono, mensaje);

        if (!sendEmail) {
            return { error: "Error al enviar el mensaje. Vuelve a intentarlo" };
        }


        const result = await prisma.mensajeuser.create({
            data: {
                email: email,
                nombre: nombre,
                telefono: telefono,
                mensaje: mensaje
            }
        });
        // const result = await db.query(
        //     `INSERT INTO mensajeuser (email, nombre, telefono, mensaje) VALUES (?,?,?,?)`,
        //     [email, nombre, telefono, mensaje]
        // );
      return { success: "Mensaje enviado con éxito." };
    } catch (error:any) {
        console.log(error);
        // await db.end();        
        return { error: 'Ocurrio un problema al enviar el mensaje. Intenta nuevamente o contactese.' };
    }
    // await db.end();
}