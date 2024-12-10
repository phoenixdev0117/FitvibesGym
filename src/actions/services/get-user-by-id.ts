'use server';
import prisma from "@/lib/db-prisma";


export const getUserById = async (id: string)=> {
    try {
        //parcear el id a number debido a que el framework lo toma como string
        const userId = parseInt(id);
        //buscar el usuario por el id
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        
    
        return user;
    } catch (error) {
        return null
    }
}