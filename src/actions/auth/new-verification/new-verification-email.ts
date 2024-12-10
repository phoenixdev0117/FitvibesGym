'use server'

import { getUserByEmail } from "@/actions/services/get-user-by-email";
import { getVerificationTokenByToken } from "@/actions/services/verification-token-by-token";
import prisma from "@/lib/db-prisma"

export const newVerificationEmail = async (token: string) => {

    try {
        const existingToken = await getVerificationTokenByToken(token);

        if (!existingToken) {
            return { error: "Token no válido" };
        }
    
        const hasExpired = new Date(existingToken.expires) < new Date();
    
        
        if (hasExpired) {
            return { error: "Token ha expirado" };
        }
        const existingUser = await getUserByEmail(existingToken.email);
        if (!existingUser) {
            return { error: "Usuario no encontrado" };
        }
        await prisma.user.update({
            where: {
                id: existingUser.id
            },
            data: {
                emailVerified: new Date(),
                email: existingToken.email
            }
        });
        await prisma.verificationtoken.delete({
            where: {
                id: existingToken.id
            }
        });
        return { success: "Email verificado!" };
        
    } catch (error) {
        
        return { error: "Ha ocurrido un error. vuelve a intentarlo" };
    }
    
}