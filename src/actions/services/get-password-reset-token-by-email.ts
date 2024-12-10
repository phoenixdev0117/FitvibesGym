'use server'

import prisma from "@/lib/db-prisma"


export const getPasswordResetTokenByEmail = async (email: string) => {
    
    try {
        const passwordResetToken = await prisma.passwordresettoken.findFirst({
            where: {
                email
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