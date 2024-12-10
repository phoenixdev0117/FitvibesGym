'use server'

import prisma from "@/lib/db-prisma"


export const getPasswordResetTokenByToken = async (token: string) => {
    
    try {
        const passwordResetToken = await prisma.passwordresettoken.findUnique({
            where: {
                token
            }
        });

        if (!passwordResetToken) {
            return null;
        }

        return passwordResetToken;
    } catch (error) {
        return null;
        
    }
}