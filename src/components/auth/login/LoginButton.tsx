'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/shadcn/ui/dialog"
import { useRouter } from "next/navigation"
import { LoginForm } from "./LoginForm"



interface LoginButtonProps {
    children: React.ReactNode
    mode?: 'modal'|'redirect'
    asChild?: boolean
}


export const LoginButton = ({children,asChild,mode}:LoginButtonProps) => {

    const route = useRouter();

    const onClick = () => {
        route.replace('/auth/login')
    }

    
    if (mode === 'modal') {
        return (
          <Dialog>
            <DialogTrigger asChild={asChild} >
              {children}
            </DialogTrigger>
            <DialogContent className="p-0 w-auto bg-transparent border-none" >
              <LoginForm />
            </DialogContent>
        </Dialog>
        )
     }
  return (
    <span onClick={onClick} className="cursor-pointer " >
      {children}
    </span>
  )
}

