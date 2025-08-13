import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "InfiniTech Studios",
  description:
    "Somos un equipo independiente apasionado por crear videojuegos que inspiran, entretienen y dejan huella. Nuestro objetivo es dar vida a ideas originales y reinventar clásicos con una perspectiva moderna.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'