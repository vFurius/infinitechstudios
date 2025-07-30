"use client"

import Link from "next/link"
import { Code, Palette, Smartphone, Zap, ArrowRight } from "lucide-react"

export default function TiendaPage() {
  return (
    <main className="min-h-[85vh] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tienda Digital
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestros servicios digitales premium. Desde desarrollo de videojuegos hasta soluciones web
            personalizadas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Gaming Services */}
          <div className="group relative p-8 bg-gradient-to-br from-red-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            {/* Cinta roja en la esquina superior derecha */}
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-6 translate-y-4 shadow-lg z-10">
              NO SE VENDE
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">InfiniTech Studios</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Desarrollo de videojuegos únicos y experiencias interactivas que cautivan a los jugadores.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Zap className="w-4 h-4" />
                <span>Juegos originales y remakes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Smartphone className="w-4 h-4" />
                <span>Multiplataforma (PC, Móvil, Consolas)</span>
              </div>
            </div>
            <Link
              href="/juegos"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              Ver Juegos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Web Services */}
          <div className="group p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">InfiniTech Web</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soluciones web modernas y personalizadas para impulsar tu presencia digital.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Code className="w-4 h-4" />
                <span>Desarrollo web profesional</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Smartphone className="w-4 h-4" />
                <span>Diseño responsivo y moderno</span>
              </div>
            </div>
            <Link
              href="/tienda/web"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Ver Servicios <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Tienes un proyecto en mente?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactanos para discutir tu próximo proyecto digital. Estamos aquí para hacer realidad tus ideas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30"
          >
            Contactar Ahora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
