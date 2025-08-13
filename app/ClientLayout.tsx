"use client"

import type React from "react"
import "@/styles/globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { Honk } from "next/font/google"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

const honk = Honk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-honk",
})

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
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
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
