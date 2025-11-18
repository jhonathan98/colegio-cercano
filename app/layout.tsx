import type { Metadata } from "next";
// Asegúrate de instalar el paquete 'geist': npm install geist
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navbar from "@/src/components/Navbar";

export const metadata: Metadata = {
  title: "Colegio Cercano",
  description: "Asignación de cupos escolares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.className}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
