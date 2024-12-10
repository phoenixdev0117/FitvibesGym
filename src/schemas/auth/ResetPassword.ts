import * as z from 'zod';
export const ResetPasswordSchema = z.object({
   
    password: z.string().min(8,{
        message: 'La contraseña debe tener al menos 8 caracteres'
    }),
});