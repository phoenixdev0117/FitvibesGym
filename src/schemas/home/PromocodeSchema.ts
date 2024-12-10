
import * as z from 'zod';

export const PromocodeSchema = z.object({
    code: z.string({
        required_error: 'Código es requerido',
        invalid_type_error: 'Código debe ser un string'
    }).min(1, { message: 'Código no puede estar vacío' }).max(50, { message: 'Correo no puede tener más de 50 caracteres' })
});