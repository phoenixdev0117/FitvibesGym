import * as z from 'zod';
export const MensajeSchema = z.object({
    email: z.string({
        required_error: 'Correo es requerido',
        invalid_type_error: 'Correo debe ser un string'
    }).max(40, { message: 'Correo no puede tener más de 40 caracteres' })
    .email({
        message: 'Correo no es válido',
    }),
    nombre: z.string().min(1,{
        message: 'Nombre es requerido'
    }).max(40,{ message: 'Nombre no puede tener más de 40 caracteres'}),
    telefono: z.string().min(1,{
        message: 'Telefono es requerido'
    }).max(20,{ message: 'Telefono no puede tener más de 20 caracteres'}),
    mensaje: z.string().min(1,{
        message: 'Mensaje es requerido'
    }).max(500,{ message: 'Mensaje no puede tener más de 500 caracteres'})  
});