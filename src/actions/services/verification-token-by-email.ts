'use server';
import prisma from "@/lib/db-prisma"


export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verificationToken = await prisma.verificationtoken.findFirst({
            where: {
                email
            }
        })

        return verificationToken
    } catch (error) {
        return null
    }
}