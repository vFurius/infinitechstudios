"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Home, Gamepad2, ShoppingBag, Users, Newspaper, Mail } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/juegos", label: "Juegos", icon: Gamepad2 },
    { href: "/tienda", label: "Tienda", icon: ShoppingBag },
    { href: "/nosotros", label: "Nosotros", icon: Users },
    { href: "/noticias", label: "Noticias", icon: Newspaper },
    { href: "/contacto", label: "Contacto", icon: Mail },
  ]

  return (
    <header
      className={
        `fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-lg shadow-black/20 p-4 font-sans border-b border-gray-700/50 ` +
        `${isOpen ? "flex flex-col" : "flex justify-between items-center"}`
      }
    >
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/Logo.png"
            alt="Logo de InfiniTech Studios"
            width={36}
            height={36}
            className="group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">InfiniTech</span>
        </Link>

        <button
          className="md:hidden text-white hover:text-red-400 transition-colors p-2"
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex space-x-6 text-base font-medium" aria-label="Navegación principal">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-red-400 transition-colors duration-300 relative group px-3 py-2 flex items-center gap-2"
            >
              <Icon className="w-4 h-4" />
              {label}
              <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav
          className="w-full p-4 flex flex-col space-y-4 text-base font-medium md:hidden text-center bg-black/60 backdrop-blur-sm rounded-2xl mt-4 border border-gray-700/50"
          aria-label="Navegación móvil"
        >
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-red-400 transition-colors duration-300 py-2 flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
