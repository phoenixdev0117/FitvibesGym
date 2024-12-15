

'use client';
import PageNotFound from "@/components/ui/not-found/PageNotFound";
const Error = () => {
  return (
    <main className="relative flex flex-col min-h-screen w-screen max-w-screen overflow-hidden">
      <section className="relative  min-h-screen "><PageNotFound /></section>
    </main>
  );
};

export default Error;
