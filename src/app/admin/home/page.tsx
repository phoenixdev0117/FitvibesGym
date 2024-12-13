'use client';
import { getUsuariosPlanes } from "@/actions/services/get-usuarios-planes";
import ButtonLogout from "@/components/shared/admin/home/ButtonLogout";
import Pagination from "@/components/ui/pagination/Pagination";
import { currencyFormat } from "@/utils/currencyFormat"; 
import Link from "next/link";
import { useEffect, useState } from "react"; 
interface Props {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const [louding, setLouding] = useState<boolean>(true);
  const [pagos, setPagos] = useState<any>();
  const [totalPages, setTotalPages] = useState<number>();

  useEffect(() => {
    const func = async () => {
      setLouding(true);
      let { pagos, totalPages } = await getUsuariosPlanes({ page });
      setPagos( pagos );
      setTotalPages( totalPages );
      setLouding(false);
    }
    func();
  }, [page]);
  
  if(louding) return (
    <section className="w-full flex flex-col justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </section>
  );
 

  return (
    <section className="relative w-full flex flex-col justify-center items-center min-h-screen max-w-full   ">
      {/*<Title title="Tienda" subtitle="Todos los productos" className="mb-2" /> */}
      {/** boton de deslogueo */}

      <div className="absolute top-[100px] right-0 p-5 ">
        <ButtonLogout />
      </div>

      <div className="mt-40 flex flex-col   gap-5 max-w-[70%]">
        <div className="w-full flex flex-row justify-end items-end gap-5">
          <Link href={`/api/excel/${new Date().getMonth()+1}`}
           className="bg-blue-500 text-white px-4 py-2 rounded-md " >
            Exportar Ultimo mes
          </Link>
          <Link  href={`/api/excel/-1`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md " >
            Exportar Todos
          </Link>
        </div>

        <div className=" rounded-xl overflow-hidden   overflow-x-auto">
          <table className="min-w-full ">
            <thead className="bg-gray-200 border-b ">
              <tr className="[&>th]:text-nowrap">
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  #PAGO ID
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Transacción ID
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Estado
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Inscripción
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Mensualidad
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Descuento
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Domiciliación
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Plan
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  UserId
                </th>
              </tr>
            </thead>
            <tbody>
              {pagos &&
                pagos.map((pago: any) => (
                  <tr
                    key={pago.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {pago.id}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {pago.numerotransaccion}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <div
                        className={`${
                          pago.estadopago?.nombre === "Aprobado"
                            ? "bg-green-500 text-white"
                            : pago.estadopago?.nombre != "Pendiente"
                            ? "bg-red-500 text-white"
                            : "bg-yellow-500 text-white"
                        }  px-2 py-1 rounded-md`}
                      >
                        {pago.estadopago?.nombre}
                      </div>
                    </td>
                    <td>
                      <div className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                        {currencyFormat(pago.inscripcion)}
                      </div>
                    </td>
                    <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                      {currencyFormat(pago.mensualidad)}
                    </td>
                    <td className="text-sm  text-gray-900  px-6 py-4 whitespace-nowrap capitalize">
                      {currencyFormat(pago.descuento)}
                    </td>
                    <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                      {currencyFormat(pago.total)}
                    </td>

                    <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                      {pago.domiciliacion ? "Si" : "No"}
                    </td>
                    <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                      {pago.plan.nombre}
                    </td>
                    <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                      {pago.user.nombre}
                    </td>
                    <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                      {pago.user.email}
                    </td>
                    <td className="text-sm font-bold text-gray-900  px-6 py-4 whitespace-nowrap">
                      {pago.userId}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination totalPages={totalPages!} />
    </section>
  );
}
