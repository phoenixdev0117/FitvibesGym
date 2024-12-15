"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { ExtendedUser } from "../../../../next-auth";
import { useUiStore } from "@/store/ui/ui-store";
//import { logout } from "@/actions/auth/logout/logout";
import Title from "../title/Title";
import { titleFont } from "@/config/fonts";

interface Props {
  user?: ExtendedUser;
  role: number | undefined;
}
export default function SidebarContent({}: Props) {
  const router = useRouter();
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);
  const [inputValue, setInputValue] = useState("");

  const { data: session } = useSession();

  //const user =  useCurrentUser()
  //onsole.log("🚀 ~ Sidebar ~ user:", user)

  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.roleId === 1;

  const handleKeyDown = (e: any) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      if (inputValue === "") {
        return;
      } else {
        router.push(`/search/${inputValue}`);
        closeMenu();
      }
    }
  };
  const onchange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="  ">
      {/**Background black */}
      {isSideMenuOpen && (
        <div className=" fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-20 " />
      )}

      {/**blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className=" fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm "
        />
      )}

      {/** SideManu */}
      <nav
        className={clsx(
          " fixed p-5 right-0 top-0 w-[300px] md:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-500 ",
          {
            " translate-x-0 ": isSideMenuOpen,
            " translate-x-full ": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className=" absolute top-5 right-5 cursor-pointer "
          onClick={() => closeMenu()}
        />

        {/**Input */}
        <div className="relative mt-14">
          <IoSearchOutline
            size={25}
            className=" absolute top-2 left-2 text-gray-400 "
          />
          <input
            type="text"
            placeholder="Buscar"
            value={inputValue}
            onKeyDown={handleKeyDown}
            onChange={onchange}
            className=" w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 "
          />
        </div>

        {/**Menu */}

        {isAuthenticated && (
          <>
            <Link
              href="/profile"
              onClick={closeMenu}
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all "
            >
              <IoPersonOutline size={25} className=" text-gray-600 " />
              <span className=" ml-3 text-xl ">Perfil</span>
            </Link>
            <Link
              href="/orders"
              onClick={closeMenu}
              className="flex items-center  p-2 hover:bg-gray-100 rounded transition-all "
            >
              <IoTicketOutline size={25} className=" text-gray-600 " />
              <span className=" ml-3 text-xl ">Ordenes</span>
            </Link>
          </>
        )}

        {isAuthenticated && (
          <button
            className="flex w-full items-center  p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => {}}//logout()}
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Salir</span>
          </button>
        )}

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="flex items-center  p-2 hover:bg-gray-100 rounded transition-all mt-5"
            onClick={() => closeMenu()}
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Ingresar</span>
          </Link>
        )}

        <div className=" w-full h-px bg-gray-200 mt-10 mb-5 " />
            <h1
              className={` antialiased text-2xl font-semibold mb-3 ${titleFont.className}`}
            >
              Productos
            </h1>

        <Link
          href="/ofertas"
          onClick={closeMenu}
          className="flex items-center  p-2 hover:bg-gray-100 rounded transition-all "
        >
          <IoShirtOutline size={25} className=" text-gray-600 " />
          <span className=" ml-3 text-xl ">Ofertas</span>
        </Link>
        <Link
          href="/gender/tratamientos"
          onClick={closeMenu}
          className="flex items-center p-2 hover:bg-gray-100 rounded transition-all "
        >
          <IoTicketOutline size={25} className=" text-gray-600 " />
          <span className=" ml-3 text-xl ">Todos</span>
        </Link>

        {isAdmin && (
          <>
            <div className=" w-full h-px bg-gray-200 mt-10 mb-5 " />
            <h1
              className={` antialiased text-2xl font-semibold mb-3 ${titleFont.className}`}
            >
              Administración
            </h1>
            <Link
              href="/admin/products"
              onClick={closeMenu}
              className="flex items-center  p-2 hover:bg-gray-100 rounded transition-all "
            >
              <IoShirtOutline size={25} className=" text-gray-600 " />
              <span className=" ml-3 text-xl ">Productos</span>
            </Link>
            <Link
              href="/admin/orders"
              onClick={closeMenu}
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all "
            >
              <IoTicketOutline size={25} className=" text-gray-600 " />
              <span className=" ml-3 text-xl ">Ordenes</span>
            </Link>
            <Link
              href="/admin/users"
              onClick={closeMenu}
              className="flex items-center  p-2 hover:bg-gray-100 rounded transition-all "
            >
              <IoPeopleOutline size={25} className=" text-gray-600 " />
              <span className=" ml-3 text-xl ">Usuarios</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}