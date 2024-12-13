import type { Metadata } from "next";
//import { Inter as ii } from "next/font/google";
import { inter } from "@/config/fonts";
import "./globals.css";
import { Toaster } from "@/components/shadcn/ui/sonner";
import Provider from "@/components/provider/Provider";

//const interr = ii({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Fitvibes Gym",
    default: "Inicio | Fitvibes Gym",
  },
  description: "Fitvibes Gym",
  keywords: ["Fitvibes Gym"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        <Toaster />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
