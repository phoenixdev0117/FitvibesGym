'use server';
import prisma from "@/lib/db-prisma"


export const getAccountByUserId = async (userId: number) => {
    try {
        const account = await prisma.account.findFirst({
            where: {
                userId
            }
        });
        return account;
    } catch (error) {
        return null;        
    }
}