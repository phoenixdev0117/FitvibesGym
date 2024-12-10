/**
 * Rutas publicas
 * @type {string[]}
 */
export const publicRoutes = [
    '/',
    '/api/payment',
    '/planes/just-class',
    '/planes/full-fit',
    '/planes/estudiante',
    '/planes/trimestral',
    '/planes/semestral',
    '/planes/anual',
    '/reservar/spinning',
    '/reservar/tobank',
    '/anualidad',
    '/privacy',
    '/terms-and-conditions',
    '/paymentconfirm',
    '/api/send-email',
]
/**
 * Rutas de autenticación
 * @type {string[]}
 */
export const authRoutes = [

    '/auth/login',
    '/auth/register',
    '/auth/error',
    '/auth/reset-password',
    '/auth/new-verification',
    '/api/auth/providers',
]

/**
 * Ruta de autenticación de la API
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

export const othersPrefix = [
    '/api/auth/payment',
    '/statusPayment',
];
/**
 * Ruta de redirección por defecto
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/admin';
