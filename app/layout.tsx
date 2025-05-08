import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: "InfiniTech Studios",
  description: "Somos un equipo independiente apasionado por crear videojuegos que inspiran, entretienen y dejan huella. Nuestro objetivo es dar vida a ideas originales y reinventar clásicos con una perspectiva moderna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body
        className="min-h-screen"
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
