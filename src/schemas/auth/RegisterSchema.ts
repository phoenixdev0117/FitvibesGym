import * as z from 'zod';
export const RegisterSchema = z.object({
    email: z.string({
        required_error: 'Correo es requerido',
        invalid_type_error: 'Correo debe ser un string'
    }).email({
        message: 'Correo no es válido',
    }),
    password: z.string().min(8,{
        message: 'Mínimo 8 caracteres'
    }),
    name: z.string().min(1,{
        message: 'Nombre es requerido'
    }),
});