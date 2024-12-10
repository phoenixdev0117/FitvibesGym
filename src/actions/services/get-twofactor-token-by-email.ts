'use server';
import prisma from "@/lib/db-prisma";

export const getTwoFactorTokenByEmail = async (email: string) => {
    try {
        const twoFactorToken = await prisma.twofactortoken.findFirst({
            where: {
                email
            }
        })

        return twoFactorToken
    } catch (error) {
        return null
    }
}

