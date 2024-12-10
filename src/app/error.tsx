'use client';

import { Footer } from "@/components/ui/footer/Footer";
import PageNotFound from "@/components/ui/not-found/PageNotFound";
import TopMenu2 from "@/components/ui/top-menu/TopMenu2";

const Error = () => {
  return (
    <main className="relative flex flex-col min-h-screen w-screen max-w-screen overflow-hidden">
      <header className="">
        <TopMenu2 />
      </header>
      <section className="relative  min-h-screen "><PageNotFound /></section>
      <Footer />
    </main>
  );
};

export default Error;
