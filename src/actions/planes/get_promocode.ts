'use server';

import prisma from "@/lib/db-prisma";
import { PromocodeSchema } from "@/schemas/home/PromocodeSchema"; 
import  * as z from 'zod';


export async function getPromocode (values:  z.infer<typeof PromocodeSchema>) {

    const { code } = values;
    // const db = await poolDb;
    try {  
        const result = await prisma.promocodes.findFirst({
            where: {
                code: code
            }
        });

        if (!result) {
            return { error: "Código no encontrado"  ,ok:false};
        }
        if (result.used == 1){
            return { error: "Código ya utilizado"  ,ok:false};
        }
        if ( new Date() > result.expiration){
            return { error: "Código expirado" ,ok:false};
        }

        return { ok:true , success: "Código encontrado" , data: result };
    } catch (error:any) {
        console.log(error);
        // await db.end();        
        return { error: 'Ocurrio un problema al buscar el código. Intenta nuevamente o contactese.',ok:false};
    }
    // await db.end();

}