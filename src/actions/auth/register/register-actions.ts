'use server';

import * as z from "zod";
import { RegisterSchema } from '@/schemas/auth/RegisterSchema';
import bcryptjs from 'bcryptjs';
import prisma from "@/lib/db-prisma";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mailing";
import { getUserByEmail } from "@/actions/services/get-user-by-email";

export const registerAction = async  (values:z.infer< typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: 'Campos no válidos!'};
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcryptjs.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return {error: 'El usuario ya existe!'};
    }
    

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            //roleId: 1   // 2 = user, 1 = admin 

        }
    });

    const verificationToken = await generateVerificationToken(email);
    const result = await sendVerificationEmail(verificationToken.email, verificationToken.token);
    if (!result) {
        return {error: "Error al enviar el correo de verificación!"}
    }
    
    return {success: 'Email de confirmación enviado!'};

    

}