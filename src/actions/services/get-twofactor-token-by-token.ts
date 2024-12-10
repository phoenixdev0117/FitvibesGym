'use server';
import prisma from "@/lib/db-prisma";

export const getTwoFactorTokenByToken = async (token: string) => {
    try {
        const twoFactorToken = await prisma.twofactortoken.findUnique({
            where: {
                token
            }
        })

        return twoFactorToken
    } catch (error) {
        return null
    }
}

