"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { KommonSemiBoldIt } from "@/config/fonts";
import { useUiStore } from "@/store/ui/ui-store";
import Image from "next/image";

import 'animate.css';

export const TopMenu2 = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);

  const [isLoading, setIsLoading] = useState(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <nav 
      className="flex justify-between items-center w-full bg-stone-800/60 fixed  h-24  backdrop-filter backdrop-blur-sm shadow-md z-50 "
    >
      <div className="flex flex-row justify-around w-full animate__animated animate__backInDown">
        <div className="h-24 flex flex-row items-center ml-10 ">
          
          <Link  href={`/`} className="cursor-pointer"><Image src="/imgs/logo.webp" priority alt="Fitvibes" width={300} height={300} className="h-24 object-contain" /></Link>
        </div>

        <div
          className={`hidden lg:flex flex-row justify-end w-full [&>a]:px-6 [&>a]:h-24 [&>a]:text-white [&>a]:flex [&>a]:items-center `}
        >
          <Link
            className={`   hover:text-black hover:bg-[#fbee21] hover:shadow-lg  ${KommonSemiBoldIt.className}`}
            //href="/gender/tratamientos"
            href="/"
          >
            INICIO
          </Link>
          <Link
            className={`   hover:text-black hover:bg-[#fbee21] hover:shadow-lg ${KommonSemiBoldIt.className}`}
            //href="/gender/tratamientos"
            href="/"
          >
            SERVICIOS
          </Link>
          <Link
            className={`  hover:text-black hover:bg-[#fbee21] hover:shadow-lg ${KommonSemiBoldIt.className} `}
            //href="/gender/tratamientos"
            href="/"
          >
            PLANES
          </Link>
          <Link
            className={`   hover:text-black hover:bg-[#fbee21] hover:shadow-lg ${KommonSemiBoldIt.className}`}
            // href="/ofertas"
            href="/"
          >
            CLASES
          </Link>
          <Link
            className={`  hover:text-black hover:bg-[#fbee21] hover:shadow-lg ${KommonSemiBoldIt.className}`}
            // href="/ofertas"
            href="/"
          >
            HORARIOS
          </Link>
          <Link
            className={`  hover:text-black hover:bg-[#fbee21] hover:shadow-lg ${KommonSemiBoldIt.className}`}
            // href="/ofertas"
            href="/"
          >
            PROMOS
          </Link>
          <Link
            className={`  hover:text-black hover:bg-[#fbee21] hover:shadow-lg ${KommonSemiBoldIt.className}`}
            // href="/ofertas"
            href="/"
          >
            CONTACTO
          </Link>
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
              <Link
            href="/"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
              >
                INICIO
              </Link>
              <Link
            href="/"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
              >
                SERVICIOS
              </Link>
              <Link
            href="/"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
              >
                PLANES
              </Link>
              <Link
            href="/"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
              >
                CLASES
              </Link>
              <Link
            href="/"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
              >
                HORARIOS
              </Link>
              <Link
            href="/"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
              >
                PROMOS
              </Link>
              <Link
            href="/"
                className={`block px-4 py-2 hover:text-gray-800 hover:bg-[#fbee21] ${KommonSemiBoldIt.className}`}
              >
                CONTACTO
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopMenu2;
