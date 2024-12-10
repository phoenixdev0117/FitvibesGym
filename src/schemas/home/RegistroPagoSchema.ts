import * as z from 'zod';
export const RegistroPagoSchema = z.object({
    email: z.string({
        required_error: 'Correo es requerido',
        invalid_type_error: 'Correo debe ser un string'
    }).max(40, { message: 'Correo no puede tener más de 40 caracteres' })
        .email({
            message: 'Correo no es válido',
        }),
    nombre: z.string().min(1, {
        message: 'Nombre es requerido'
    }).max(40, { message: 'Nombre no puede tener más de 40 caracteres' }),
    apellido: z.string().min(1, {
        message: 'Apellido es requerido'
    }).max(40, { message: 'Apellido no puede tener más de 40 caracteres' }),
    dia: z.string().min(1, {
        message: 'Dia es requerido'
    }).max(2, { message: 'Dia no puede tener más de 2 caracteres' }),
    mes: z.string().min(1, {
        message: 'Mes es requerido'
    }).max(2, { message: 'Mes no puede tener más de 2 caracteres' }),
    anio: z.string().min(1, {
        message: 'Año es requerido'
    }).max(4, { message: 'Año no puede tener más de 4 caracteres' }),

    telefono: z.string().min(1, {
        message: 'Telefono es requerido'
    }).max(20, { message: 'Telefono no puede tener más de 20 caracteres' }),

    //genero entero
    genero: z.coerce.number().int().min(1, {
        message: 'Debe seleccionar un genero entre las opciones'
    }).max(2, {
        message: 'Debe seleccionar un genero entre las opciones'
    }),
    pais: z.string().min(1, {
        message: 'País es requerido'
    }).max(50, { message: 'País no puede tener más de 50 caracteres' }),
});