import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { Honk } from "next/font/google"

const honk = Honk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-honk",
})

export const metadata: Metadata = {
  title: "InfiniTech Studios",
  description:
    "Somos un equipo independiente apasionado por crear videojuegos que inspiran, entretienen y dejan huella. Nuestro objetivo es dar vida a ideas originales y reinventar clásicos con una perspectiva moderna.",
    generator: 'Vercel'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={honk.variable}>
      <body
        className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen"
        style={{ paddingTop: "80px" }}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
