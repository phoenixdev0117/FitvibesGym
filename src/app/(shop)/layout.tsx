

import { Footer } from "@/components/ui/footer/Footer";
import TopMenu1 from "@/components/ui/top-menu/TopMenu1";
import { Metadata } from "next";
import 'aos/dist/aos.css';



export const metadata: Metadata = {
  title: {
    template: "%s | Fitvibes Gym",
    default: "Inicio | Fitvibes Gym",
  },
  description: "Fitvibes Gym",
  keywords: ["Fitvibes Gym"],
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col min-h-screen w-screen max-w-screen overflow-hidden">
      <header className="">
        <TopMenu1 />
      </header>
      <section className="relative  min-h-screen ">{children}</section>
      <Footer />
    </main>
  );
}
