'use server'; 
import prisma from '@/lib/db-prisma'; 
import { planes } from '../../data/planes';

interface PaginationsOptions {
    page?: number;
    take?: number;
}

export const getUsuariosPlanes = async ({page=1,take=12}:PaginationsOptions) => {
    if(isNaN(Number(take))) take = 12;
    if(isNaN(Number(page))) page = 1;
    if(page < 1) page = 1;
    if(take < 1) take = 12;

    try {

        const planes = await prisma.planes.findMany();  
        //1. Obtener el total de productos
        const pagos = await prisma.payment.findMany({
            take: take,
            skip: (page - 1) * take, 
            include: {
                user: true,
                estadopago: true,
                plan: true
            },
            orderBy: {
                id: 'desc'
            }
        }); 

        //2. Obtener el total de páginas
        const totalCount = await prisma.payment.count({

            
        }); 
        const totalPages = Math.ceil(totalCount / take); 


        return {
            currentPage: page,
            totalPages: totalPages,
            pagos: pagos 
        };
        
    } catch (error) {
        console.log(error);
        return {
            ok  : false,
            error: 'Error al obtener los pagos'
        }
        
    }
}