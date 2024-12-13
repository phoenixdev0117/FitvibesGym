"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Link as Linkk,
  Button
} from "react-scroll";

import { KommonSemiBoldIt } from "@/config/fonts";
import { useUiStore } from "@/store/ui/ui-store";
import Image from "next/image";

import "animate.css";

export const TopMenu1 = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);

  const [isLoading, setIsLoading] = useState(true);
  const [buttonclass, setbuttonclass] = useState('px-[1.5vw] | text-white | hover:text-black hover:bg-[#fbee21] hover:shadow-lg')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSetActive = (to: any) => {
    console.log(to);
  };

  return (
    <nav
      className="flex justify-between items-center w-full bg-stone-800/60 fixed  h-24  backdrop-filter backdrop-blur-sm shadow-md z-50 "
    >
      <div className="flex flex-row justify-around w-full animate__animated animate__backInDown">
        <div className="h-24 flex flex-row items-center ml-10 ">
          <Link scroll={false} href={`/`} className="cursor-pointer">
            <Image
              src="/imgs/logo.webp"
              alt="Fitvibes"
              width={300}
              height={300}
              className="h-24 object-contain"
            />
          </Link>
        </div>

        <div
          className={`hidden lg:flex flex-row justify-end w-full [&>a]:px-6 [&>a]:h-24 [&>a]:text-white [&>a]:flex [&>a]:items-center `}
        >
          <Button
            activeClass="active"
            className={`${buttonclass}  ${KommonSemiBoldIt.className}`}
            to="inicio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            INICIO
          </Button>
          <Button
            activeClass="active"
            className={`${buttonclass}  ${KommonSemiBoldIt.className}`}
            to="servicios"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            SERVICIOS
          </Button>

          <Button
            activeClass="active"
            className={` ${buttonclass}  ${KommonSemiBoldIt.className}`}
            to="planes"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            PLANES
          </Button>
          <Button
            activeClass="active"
            className={` ${buttonclass}  ${KommonSemiBoldIt.className}`}
            to="clases"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            CLASES
          </Button>
          <Button
            activeClass="active"
            className={` ${buttonclass}  ${KommonSemiBoldIt.className}`}
            to="horarios"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            HORARIOS
          </Button>
          <Button
            activeClass="active"
            className={` ${buttonclass}  ${KommonSemiBoldIt.className}`}
            to="promos"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            PROMOS
          </Button>

          <Button
            activeClass="active"
            className={`  ${buttonclass}  ${KommonSemiBoldIt.className}`}
            to="contacto"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            CONTACTO
          </Button>
        </div>

        <div className="relative block lg:hidden  ">
          <button
            onClick={toggleDropdown}
            className={`focus:outline-none ${KommonSemiBoldIt.className}`}
          >
            <span className="hover:text-black hover:bg-[#fbee21] hover:shadow-lg px-8 h-24 text-white flex items-center ">
              MENU
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0  h-auto w-48  [&>a]:text-white border border-gray-200 rounded shadow-lg bg-stone-800/80  backdrop-filter backdrop-blur-lg   z-50">
              <Linkk
                activeClass="active"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
                to="inicio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                INICIO
              </Linkk>

              <Linkk
                activeClass="active"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
                to="servicios"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                SERVICIOS
              </Linkk>
              <Linkk
                activeClass="active"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
                to="planes"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                PLANES
              </Linkk>
              <Linkk
                activeClass="active"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
                to="clases"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                CLASES
              </Linkk>
              <Linkk
                activeClass="active"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
                to="horarios"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                HORARIOS
              </Linkk>
              <Linkk
                activeClass="active"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
                to="promos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                PROMOS
              </Linkk>
              <Linkk
                activeClass="active"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
                to="contacto"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={handleSetActive}
              >
                CONTACTO
              </Linkk>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopMenu1;
