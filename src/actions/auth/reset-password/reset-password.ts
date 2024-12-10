
'use server';
import prisma from '@/lib/db-prisma';
import { ResetPasswordSchema } from '@/schemas/auth/ResetPassword';
import * as z from 'zod';
import bcryptjs from 'bcryptjs';
import { getPasswordResetTokenByToken } from '@/actions/services/get-password-reset-token-by-token';
import { getUserByEmail } from '@/actions/services/get-user-by-email';

export const ResetPassword = async (values: z.infer<typeof ResetPasswordSchema>,token?:string|null) => {
    try {
        if (!token) {
            return { error: 'Token no válido!' };
        }
    
        const validatedFields = ResetPasswordSchema.safeParse(values);
        
        if (!validatedFields.success) {
            return { error: 'Contraseña no válida!' };
        }
        const { password } = validatedFields.data;
    
        const existingToken = await getPasswordResetTokenByToken(token);
        if (!existingToken) {
            return { error: 'Token no válido!' };
        }
    
        const hasExpired = new Date(existingToken.expires) < new Date();
        if (hasExpired) {
            return { error: 'Token expirado!' };
        }
    
        const existingUser = await getUserByEmail(existingToken.email);
        if (!existingUser) {
            return { error: 'Email no existe!' };
        }
    
    
        const hashedPassword = await bcryptjs.hash(password,10);
        await prisma.user.update({
            where: {
                id: existingUser.id
            },
            data: {
                password: hashedPassword
            }
        });
        await prisma.passwordresettoken.delete({
            where: {
                id: existingToken.id
            }
        });
        
        return { success: 'Contraseña cambiada!' };
    } catch (error) {
        return { error: 'Ha ocurrido un error. vuelve a intentarlo' };        
    }
}