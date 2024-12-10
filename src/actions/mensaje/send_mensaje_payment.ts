'use server';

import { sendEmailPayment } from "@/lib/mailing";



export async function sendMensajePayment(IDpayment: string, email: string, nombre: string, cantidad: number, fecha: Date) {



    try {
        const sendEmail = await sendEmailPayment(IDpayment, email, nombre, cantidad, fecha);

        if (!sendEmail) {
            return { error: "Error al enviar el correo de pago" };
        }
        return { success: "Mensaje enviado con éxito." };
    } catch (error: any) {
        console.log(error);
        // await db.end();        
        return { error: 'Ocurrio un problema al enviar el correo. Si gusta se puede contactactar con nosotros.' };
    }

}