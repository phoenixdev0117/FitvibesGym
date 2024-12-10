
'use client';
import { Footer } from "@/components/ui/footer/Footer";
import PageNotFound from "@/components/ui/not-found/PageNotFound";
import TopMenu2 from "@/components/ui/top-menu/TopMenu2";

const NotFound = () => {
  return (
    <main className="relative flex flex-col min-h-screen w-screen max-w-screen overflow-hidden bg-zinc-900">
      <header className="">
        <TopMenu2 />
      </header>
      <section className="relative  min-h-screen flex flex-col justify-center items-center text-white "><PageNotFound /></section>
      <Footer />
    </main>
  );
};

export default NotFound;