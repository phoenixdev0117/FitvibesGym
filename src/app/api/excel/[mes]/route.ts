'use server';
import prisma from "@/lib/db-prisma"; 
import * as XLSX from "xlsx"; 

export async function GET(req: Request, context: any) {
  const { params } = context;
  let tableData
  let tablaName
  try {
    const mes = params.mes;
    if (mes<0) {
       tablaName = `Todos-los-pagos`;
      tableData = await prisma.payment.findMany({
        include: {
          user: true,
          estadopago: true,
          plan: true,
        },
        orderBy: {
          id: 'desc'
        }
      });
    }else{
       tablaName = `pagos-${mes}-${new Date().getFullYear()}`;
      tableData = await prisma.payment.findMany({
        where: {
          AND: [
            {
              createdAt: {
                gte: new Date(new Date().getFullYear(), mes - 1, 1), // mes - 1 para ajustar al índice base 0 de JavaScript
              },
            },
            {
              createdAt: {
                lt: new Date(new Date().getFullYear(), mes, 1), // Mes siguiente
              },
            },
          ],
        },
        include: {
          user: true,
          estadopago: true,
          plan: true,
        },
        orderBy: {
          id: 'desc'
        }
      });
    }
     

    let tableData2 = tableData.map((item) => {
      let fechadepago = item.createdAt;
      delete (item as any).createdAt;
      delete (item as any).updatedAt;
      delete (item as any).planesId;
      delete (item as any).userId;
      const user = item.user;
      delete (item as any).user;
      

      return {
        ...item,
        fechadepago,
        user: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        plan: item.plan.nombre,
        estadopago: item.estadopago!.nombre 
        
      };
    });
    
    

    /*const file = await fs.readFile(
      process.cwd() + `/public/excels/${tablaName}.xlsx`
    );*/

    // Crear un nuevo libro de Excel
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(tableData2);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Pagos");

    // Crear una nueva hoja en el libro de Excel
    const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new Response(buf, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename=${tablaName}.xlsx`,
      },
    });
  } catch (error) {
    
    console.error(error);
    
    }
}
