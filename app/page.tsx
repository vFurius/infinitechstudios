"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import LoadingScreen from "@/components/LoadingScreen"
import { Gamepad2, Code, Sparkles } from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <main className="relative min-h-screen">
      {/* Background Image with Blur */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/banner-infinitech.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/70 to-gray-800/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-purple-900/20 via-red-900/20 to-blue-900/20">
          <div className="relative max-w-4xl text-center text-white px-4">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-white bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent animate-pulse">
                InfiniTech Studios
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200 font-light">
                Grandes ideas, desde un pequeño lugar.
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                Creamos experiencias digitales únicas que inspiran, entretienen y dejan huella en cada jugador.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/juegos"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50"
              >
                <Gamepad2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Explorar Juegos
              </Link>
              <Link
                href="/tienda"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Servicios Web
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">¿Por qué elegir InfiniTech?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Juegos Únicos</h3>
                <p className="text-gray-300 leading-relaxed">
                  Desarrollamos experiencias de juego originales y remakes de clásicos con una perspectiva moderna y
                  fresca.
                </p>
              </div>

              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Desarrollo Web</h3>
                <p className="text-gray-300 leading-relaxed">
                  Creamos sitios web modernos, responsivos y optimizados para tu negocio o proyecto personal.
                </p>
              </div>

              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Innovación</h3>
                <p className="text-gray-300 leading-relaxed">
                  Utilizamos las últimas tecnologías y tendencias para crear productos digitales de vanguardia. Powered
                  by Vercel App para máximo rendimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform">
                  2+
                </div>
                <div className="text-gray-300">Juegos en Desarrollo</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-gray-300">Pasión</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-gray-300">Creatividad</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">
                  ∞
                </div>
                <div className="text-gray-300">Posibilidades</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
