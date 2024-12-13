import { Button } from "@/components/shadcn/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login/LoginButton";

const font = Poppins({
  subsets: ["latin"],
  weight: [ "600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-rose-400 to-rose-600 ">
      <div className=" space-y-6 text-center ">
        <h1 className={cn(" text-6xl font-semibold text-white drop-shadow-md ",font.className)}>
          🔐 Autenticación
        </h1>
        <p className=" text-white text-lg">
        Un simple servicio de Autenticación
        </p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant={"secondary"} size={"lg"} 
            >
                Iniciar sesión
            </Button>
          </LoginButton>
        </div>

      </div>
    </main>
  );
}
