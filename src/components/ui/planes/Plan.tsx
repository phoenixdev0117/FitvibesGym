"use client";

import { useState } from "react";
import CardPlanesPasarela from "./CardPlanesPasarela";

interface PropsPlan {
  plan1: {
    name: string;
    price: number;
    select: number;
  };
  plan2: {
    name: string;
    price: number;
    select: number;
  };
  setPlanId: (value: number) => void;
  setMensualidad: React.Dispatch<React.SetStateAction<number>>;
  setDescuento: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setDomiciliacionDesc: React.Dispatch<React.SetStateAction<number>>;
}

const Planes = ({ plan1, plan2, setMensualidad, setDescuento, setTotal, setDomiciliacionDesc, setPlanId }: PropsPlan) => {
  const [select, setSelect] = useState(4);

  const handleSelect = (value: number, planId: number) => {

    setSelect(value);
    setPlanId(planId);
  }

  return (
    <>
      {
        plan1.select == plan2.select ? (
          <CardPlanesPasarela
            plan={plan1.name}
            planId={plan1.select}
            color={true}
            lazo={false}
            plazo="1 Mes"
            //inscripcion={99}
            inscripcion={0}
            precioDe={plan1.price}
            rebaja={0}
            select={1}
            check={select == 1}
            setSelect={handleSelect}
            setMensualidad={setMensualidad}
            setDescuento={setDescuento}
            setTotal={setTotal}

            setDomiciliacionDesc={setDomiciliacionDesc}


          />

        ) : (
          <>
            <CardPlanesPasarela
              plan={plan1.name}
              planId={plan1.select}
              color={true}
              lazo={true}
              plazo="1 Mes"
              //inscripcion={99}
              inscripcion={0}
              precioDe={plan1.price}
              rebaja={0}
              select={1}
              check={select == 1}
              setSelect={handleSelect}
              setMensualidad={setMensualidad}
              setDescuento={setDescuento}
              setTotal={setTotal}

              setDomiciliacionDesc={setDomiciliacionDesc}


            />

            <CardPlanesPasarela
              plan={plan2.name}
              planId={plan2.select}
              color={false}
              lazo={false}
              plazo="1 Mes"
              //inscripcion={99}
              inscripcion={0}
              rebaja={0}
              precioDe={plan2.price}
              select={0}
              check={select == 0}
              setSelect={handleSelect}
              setMensualidad={setMensualidad}
              setDescuento={setDescuento}
              setTotal={setTotal}
              setDomiciliacionDesc={setDomiciliacionDesc}
            />
          </>
        )
      }
    </>
  );
};

export default Planes;
