'use client';


import { logout } from '@/actions/auth/logout/logout';
import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5';
   
const ButtonLogout = (  ) => {

    const handleLogout = () => {
        logout();
    }

  return (
    
    <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded flex gap-2" onClick={handleLogout}>
          Salir
        <IoLogOutOutline className="text-2xl text-white" />
    </button>
  )
}

export default ButtonLogout