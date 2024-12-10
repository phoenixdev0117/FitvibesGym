'use server';

import prisma from "@/lib/db-prisma";


export const getTwoFactorConfirmationByUserId = async (userId: number) => {
    try {
        const twoFactorConfirmation = await prisma.twofactorconfirmation.findUnique({
            where: {
                userId
            }
        })

        return twoFactorConfirmation
    } catch (error) {
        return null
    }
}