"use client"

import Link from "next/link"
import { Code, Palette, Smartphone, Zap, ArrowRight, Sparkles, ShoppingBag, Rocket, Target } from "lucide-react"

export default function TiendaPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background with animated particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
                <ShoppingBag className="w-5 h-5 text-purple-400" />
                <span className="text-gray-200 font-medium">Servicios Digitales Premium</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Tienda Digital
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Descubre nuestros servicios digitales premium. Desde desarrollo de videojuegos únicos hasta soluciones
                web personalizadas que impulsan tu presencia digital.
              </p>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 animate-bounce delay-1000">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <div className="absolute bottom-20 right-10 animate-bounce delay-2000">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Palette className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Gaming Services */}
              <div className="group relative p-8 bg-gradient-to-br from-red-900/20 to-purple-900/20 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 overflow-hidden animate-fade-in-up">
                {/* Cinta roja en la esquina superior derecha */}
                <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-6 translate-y-4 shadow-lg z-10">
                  NO SE VENDE
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-2xl">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">InfiniTech Studios</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    Desarrollo de videojuegos únicos y experiencias interactivas que cautivan a los jugadores con
                    historias emotivas y mecánicas innovadoras.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Zap className="w-5 h-5" />
                      <span>Juegos originales y remakes</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Smartphone className="w-5 h-5" />
                      <span>Multiplataforma (PC, Móvil, Consolas)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Target className="w-5 h-5" />
                      <span>Experiencias emotivas únicas</span>
                    </div>
                  </div>
                  <Link
                    href="/juegos"
                    className="inline-flex items-center gap-3 text-red-400 hover:text-red-300 font-semibold transition-colors text-lg group-hover:translate-x-2 transition-transform"
                  >
                    Ver Juegos <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Web Services */}
              <div className="group p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up delay-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-2xl">
                    <Palette className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">InfiniTech Web</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    Soluciones web modernas y personalizadas para impulsar tu presencia digital con tecnologías de
                    vanguardia y diseño excepcional.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Code className="w-5 h-5" />
                      <span>Desarrollo web profesional</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Smartphone className="w-5 h-5" />
                      <span>Diseño responsivo y moderno</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Rocket className="w-5 h-5" />
                      <span>Optimización y rendimiento</span>
                    </div>
                  </div>
                  <Link
                    href="/tienda/web"
                    className="inline-flex items-center gap-3 text-purple-400 hover:text-purple-300 font-semibold transition-colors text-lg group-hover:translate-x-2 transition-transform"
                  >
                    Ver Servicios <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Por qué elegir nuestros servicios?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Combinamos creatividad, tecnología y pasión para crear experiencias digitales excepcionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 relative overflow-hidden animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Creatividad Única</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Cada proyecto es una obra de arte digital. Creamos experiencias que no solo funcionan, sino que
                    inspiran y conectan emocionalmente.
                  </p>
                </div>
              </div>

              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden animate-fade-in-up delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Tecnología Avanzada</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Utilizamos las últimas tecnologías y frameworks para garantizar rendimiento, escalabilidad y
                    compatibilidad futura.
                  </p>
                </div>
              </div>

              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden animate-fade-in-up delay-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enfoque Personalizado</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Cada cliente es único. Adaptamos nuestros servicios a tus necesidades específicas para lograr
                    resultados excepcionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-600/30 p-12 relative overflow-hidden animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Tienes un proyecto en mente?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Contactanos para discutir tu próximo proyecto digital. Estamos aquí para hacer realidad tus ideas más
                  ambiciosas con creatividad y tecnología de vanguardia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30"
                  >
                    Contactar Ahora
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/nosotros"
                    className="inline-flex items-center gap-3 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/30 hover:border-gray-500/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Conocer el Equipo
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">Calidad Premium</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    <span className="text-sm">Entrega Rápida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Soporte Completo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
