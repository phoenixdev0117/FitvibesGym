
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
    label: string;    
}

export const Header = ({label}:HeaderProps) => {


    return (
        <header className="flex w-full flex-col gap-y-4 items-center justify-center">
            <h1 className={cn(
                "text-2xl font-semibold ",
                font.className
            )} >
                🔐 Autenticación
            </h1>
            <p className=" text-muted-foreground text-sm " >
                {label}
            </p>
        </header>
    );
}