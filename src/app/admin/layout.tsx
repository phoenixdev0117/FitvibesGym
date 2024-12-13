
import { auth } from "@/auth";
import { Footer } from "@/components/ui/footer/Footer";
import TopMenu2 from "@/components/ui/top-menu/TopMenu2";
import { Metadata } from "next"; 
import { redirect } from "next/navigation";



export const metadata:Metadata = {
  title: {
    template: "%s | Fitvibes Gym",
    default: "Inicio | Fitvibes Gym",
  },
  description: "Fitvibes Gym",
  keywords: ["Fitvibes Gym"],
};

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  const session = await auth();

  if (session?.user.roleId !== 1) {
    redirect("/auth/login");
  }

  return (
    <main className="relative flex flex-col min-h-screen w-screen max-w-screen overflow-hidden bg-gray-100">
      <header className="">
        <TopMenu2 />
      </header>
      <section className="relative  min-h-screen ">{children}</section> 
    </main>
  );
}
