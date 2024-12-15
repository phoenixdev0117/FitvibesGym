"use client"
import React from 'react'
import Planes from '../Plan'
import Image from 'next/image';

interface PropsPlan {
  planSelect: {
    select: number;
  };
  plans: {
    name: string;
    price: number;
    select: number;
  }[];
  setPlanId: React.Dispatch<React.SetStateAction<number>>;
  setMensualidad: React.Dispatch<React.SetStateAction<number>>;
  setDescuento: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setDomiciliacionDesc: React.Dispatch<React.SetStateAction<number>>;
}

const Step1 = ( { planSelect, plans, setMensualidad, setDescuento, setTotal,setDomiciliacionDesc,setPlanId }: PropsPlan ) => {
  return (
    <>
        {planSelect.select == 1 && (
            <>
              <Planes
              setPlanId={setPlanId}
                plan1={plans[2]}
                plan2={plans[1]}
                setMensualidad={setMensualidad}
                setDescuento={setDescuento}
                setTotal={setTotal}
                setDomiciliacionDesc={setDomiciliacionDesc}
              />
            </>
          )}

          {planSelect.select == 2 && (
            <>
              <Planes
              setPlanId={setPlanId}
                plan1={plans[2]}
                plan2={plans[2]}
                setMensualidad={setMensualidad}
                setDescuento={setDescuento}
                setTotal={setTotal}
                setDomiciliacionDesc={setDomiciliacionDesc}
              />
            </>
          )}

          {planSelect.select == 3 && (
            <>
              <Planes
              setPlanId={setPlanId}
                plan1={plans[2]}
                plan2={plans[3]}
                setMensualidad={setMensualidad}
                setDescuento={setDescuento}
                setTotal={setTotal}
                setDomiciliacionDesc={setDomiciliacionDesc}
              />
            </>
          )}
          {planSelect.select == 4 && (
            <>
              <Planes
              setPlanId={setPlanId}
                plan1={plans[2]}
                plan2={plans[4]}
                setMensualidad={setMensualidad}
                setDescuento={setDescuento}
                setTotal={setTotal}
                setDomiciliacionDesc={setDomiciliacionDesc}
              />
            </>
          )}
          {planSelect.select == 5 && (
            <>
              <Planes
              setPlanId={setPlanId}
                plan1={plans[2]}
                plan2={plans[5]}
                setMensualidad={setMensualidad}
                setDescuento={setDescuento}
                setTotal={setTotal}
                setDomiciliacionDesc={setDomiciliacionDesc}
              />
            </>
          )}
          {planSelect.select == 6 && (
            <>
              <Planes
              setPlanId={setPlanId}
                plan1={plans[2]}
                plan2={plans[6]}
                setMensualidad={setMensualidad}
                setDescuento={setDescuento}
                setTotal={setTotal}
                setDomiciliacionDesc={setDomiciliacionDesc}
              />
            </>
          )}

          <div className=" flex flex-row flex-wrap p-10 md:p-0  gap-8 justify-start items-center md:justify-start md:items-start ">
            <div className="flex flex-col gap-5">
              <span>Tarjetas de credito</span>
              <div className="flex flex-row gap-5">
                <Image
                  src="/imgs/card1.png"
                  width={160}
                  height={160}
                  alt="Visa"
                  style={{ width: '100%', height: 'auto' }} // Asegura que la imagen mantenga la proporción
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span>Tarjetas de débito</span>
              <div className="flex flex-row gap-5">
                <Image
                  src="/imgs/card2.png"
                  width={400}
                  height={100}
                  alt="Mastercard"
                  style={{ width: '100%', height: 'auto' }} // Asegura que la imagen mantenga la proporción
                  priority
                />
              </div>
            </div>
          </div>

    </>
  )
}

export default Step1