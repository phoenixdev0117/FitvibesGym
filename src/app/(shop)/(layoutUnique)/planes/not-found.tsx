
'use client';
import PageNotFound from "@/components/ui/not-found/PageNotFound";

const NotFound = () => {
  return (
    <main className="relative flex flex-col min-h-screen w-screen max-w-screen overflow-hidden bg-zinc-900">
      <section className="relative  min-h-screen flex flex-col justify-center items-center text-white "><PageNotFound /></section>
    </main>
  );
};

export default NotFound;