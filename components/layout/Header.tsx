'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/juegos', label: 'Juegos' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={
        `bg-white/5 backdrop-blur-sm shadow-lg shadow-white/10 p-6 font-sans ` +
        // Alternar dirección de flex según el estado del menú
        `${isOpen ? 'flex flex-col' : 'flex justify-between items-center'}`
      }
    >
      <div className="flex justify-between items-center w-full">
        <Image
          src="/Logo.png"
          alt="Logo de la compañía"
          width={36}
          height={36}
        />

        {/* Botón del menú móvil */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de navegación (escritorio) */}
        <nav
          className="hidden md:flex space-x-6 text-lg font-medium"
          aria-label="Navegación principal"
        >
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-red-400">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menú móvil integrado en el flujo */}
      {isOpen && (
        <nav
          className="w-full p-6 flex flex-col space-y-4 text-lg font-medium md:hidden text-center"
          aria-label="Navegación móvil"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-red-400"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
