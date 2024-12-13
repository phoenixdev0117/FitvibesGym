'use client'

//import { logout } from "@/actions/auth/logout/logout"


interface LogoutButtonProps {
     children?: React.ReactNode 
    }

export const LogoutButton = ({children}:LogoutButtonProps) => {

    const onClick = () => {
     //logout()
    }
  return (
    <span onClick={onClick} className=" cursor-pointer  " >
        {children}
    </span>
  )
}

export default LogoutButton