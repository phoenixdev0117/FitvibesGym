'use client';
import { CarruselSeccion2 } from "@/components/ui/carrusel-seccion2/carruselseccion2";
import { NuestrasClases } from "@/components/ui/clases/NuestrasClases";
import { Contacto } from "@/components/ui/contacto/Contacto";
import { DejaMensaje } from "@/components/ui/deja-mensaje/DejaMensaje";
// import { HazteMiembro } from "@/components/ui/hazte-miembro/HazteMiembro";
import { Horarios } from "@/components/ui/horarios/Horarios";
import { Inicio } from "@/components/ui/inicio/Inicio";
import  PlanesComp  from "@/components/ui/planes/PlanesComp";
import { Servicios } from "@/components/ui/servicios/Servicios";

export const revalidate = 60;
// interface Props {
//   searchParams: {
//     page?: string;
//   };
// }

export default function Home() {
  // const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // const { products, currentPage, totalPages } =
  // await getPaginatedProductsWithImages({ page });

  // const offerProducts = await getOfferProductsWithImages();

  // if (products.length === 0) {
  // redirect("/");
  // }

  return (
    <section className=" w-full flex flex-col">
      {/*<Title title="Tienda" subtitle="Todos los productos" className="mb-2" /> */}

      <Inicio />
      <Servicios />
      <PlanesComp />
      <NuestrasClases />
      <Horarios />
      <CarruselSeccion2 />
      {/* <HazteMiembro /> */}
      <DejaMensaje />
      <Contacto />


    </section>
  );
}
