"use client"

import {
  ExternalLink,
  Instagram,
  Globe,
  Twitch,
  Gamepad2,
  Code,
  Star,
  Youtube,
  MessageCircle,
  Sparkles,
  Users,
  Heart,
  Coffee,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NosotrosPage() {
  const proyectosWeb = [
    {
      nombre: "GlowUp Sisters",
      descripcion:
        "𝓖𝓵𝓸𝔀 𝓾𝓹 𝓢𝓲𝓼𝓽𝓮𝓻𝓼\n𝐵𝓎 @v4leennntina 𝓎 @aldyy_garcia\n• 𝙈𝙖𝙦𝙪𝙞𝙡𝙡𝙖𝙟𝙚 •\n• 𝙞𝙣𝙨𝙪𝙢𝙤𝙨 𝙙𝙚 𝙪ñ𝙖𝙨 •\n• 𝙞𝙣𝙨𝙪𝙢𝙤𝙨 𝙙𝙚 𝙥𝙚𝙨𝙩𝙖ñ𝙖𝙨 •\n📍 𝙈𝙚𝙧𝙡𝙤, 𝘽𝙨.𝘼𝙨\n📍𝘾𝙖𝙥𝙞𝙩𝙖𝙡 𝙛𝙚𝙙𝙚𝙧𝙖𝙡",
      imagen: "/proyectos/glowup-sisters-logo.jpg",
      estado: "Activo",
      url: null,
    },
    {
      nombre: "Santa Rita",
      descripcion:
        "Plataforma web completa para la tradicional fábrica de pastas Santa Rita. Incluye catálogo de productos, sistema de pedidos online, información nutricional y ubicaciones de puntos de venta. Diseño elegante que refleja la calidad artesanal de sus productos.",
      imagen: "/proyectos/santa-rita-logo.png",
      estado: "Activo",
      url: null,
    },
    {
      nombre: "Clicky & Yo",
      descripcion:
        "La página oficial de Clicky & Yo el famoso juego de InfiniTech Studios. Una experiencia que comienza como un simple pasatiempo digital con un tierno ajolote virtual. Pero bajo esa superficie inocente se esconde una historia más profunda que cambiará tu forma de ver el género clicker para siempre...\n\nPresenta Capturas, Trailer, SoundTrack original y enlace de descarga para probar la demo oficial.",
      imagen: "/juegos/clicky-yo-official.png",
      estado: "Activo",
      url: "https://clicky-y-yo.vercel.app",
    },
  ]

  const creadores = [
    {
      nombre: "Axel",
      rol: "Desarrollador/Fundador",
      descripcion:
        "Fundador de InfiniTech Studios y InfiniWeb Studios. Desarrollador indie de videojuegos y programador indie especializado en crear experiencias únicas. Modificó y mejoró el trabajo original de Gonza para esta página web, con mucho agradecimiento por su base inicial.",
      instagram: "@axel1l._",
      youtube: "https://www.youtube.com/@vFurius",
      discord: "vfurius",
      avatar: "/placeholder.svg?height=150&width=150&text=Axel",
    },
    {
      nombre: "Gonzalo",
      rol: "Desarrollador Web",
      descripcion:
        "Desarrollador full-stack especializado en tecnologías web modernas y streaming de contenido técnico. Creador original de esta página web de InfiniTech Studios.",
      instagram: "@mdr.gonza",
      portfolio: "https://portafoliomadro.vercel.app/es",
      kick: "https://kick.com/gonzitin",
      twitch: "https://twitch.tv/gxnkzz",
      avatar: "/placeholder.svg?height=150&width=150&text=Gonza",
    },
  ]

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
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
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
      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 rounded-3xl mb-16">
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-gray-200 font-medium">Conoce al Equipo</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sobre Nosotros
              </h1>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  En <span className="text-red-500 font-semibold">InfiniTech Studios</span>, somos un equipo
                  independiente apasionado por crear videojuegos que inspiran, entretienen y dejan huella. Nuestro
                  objetivo es dar vida a ideas originales y reinventar clásicos con una perspectiva moderna.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  Además de videojuegos, desarrollamos páginas web modernas y funcionales a través de{" "}
                  <span className="text-purple-400 font-semibold">InfiniWeb Studios</span>, ofreciendo soluciones
                  digitales completas para empresas y proyectos personales.
                </p>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-8 py-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300 font-medium text-lg">Grandes ideas, desde un pequeño lugar.</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 animate-bounce delay-1000">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
            </div>
            <div className="absolute bottom-10 right-10 animate-bounce delay-2000">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Coffee className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-300">
              <div className="group text-center p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-red-400 mb-2">2+</div>
                <div className="text-gray-300 text-sm">Juegos en Desarrollo</div>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                <div className="text-gray-300 text-sm">Páginas Web Creadas</div>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <div className="text-gray-300 text-sm">Desarrolladores</div>
              </div>
              <div className="group text-center p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
                <div className="text-gray-300 text-sm">Creatividad</div>
              </div>
            </div>
          </section>

          {/* Proyectos Web Section */}
          <section className="mb-16">
            <div className="text-center mb-12 animate-fade-in-up delay-500">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nuestros Proyectos Web</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Algunos de los sitios web que hemos desarrollado para diferentes clientes y proyectos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proyectosWeb.map((proyecto, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <Image
                      src={proyecto.imagen || "/placeholder.svg"}
                      alt={proyecto.nombre}
                      width={300}
                      height={200}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg ${
                          proyecto.estado === "En desarrollo" ? "bg-yellow-500" : "bg-green-500"
                        }`}
                      >
                        {proyecto.estado}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {proyecto.nombre}
                  </h3>
                  <div className="text-gray-300 mb-8 text-sm leading-relaxed whitespace-pre-line min-h-[140px]">
                    {proyecto.descripcion}
                  </div>

                  {proyecto.url ? (
                    <Link
                      href={proyecto.url}
                      target="_blank"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 w-full justify-center shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Visitar Sitio
                    </Link>
                  ) : (
                    <div className="inline-flex items-center gap-3 bg-gray-600/50 px-6 py-3 rounded-xl text-sm font-semibold w-full justify-center text-gray-400 cursor-not-allowed">
                      <Globe className="w-5 h-5" />
                      Próximamente
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="text-center mb-12 animate-fade-in-up delay-700">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nuestro Equipo</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Conoce a los creadores detrás de InfiniTech Studios y todas nuestras creaciones digitales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {creadores.map((creador, index) => (
                <div
                  key={index}
                  className="group p-10 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="text-center mb-8">
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <Image
                        src={creador.avatar || "/placeholder.svg"}
                        alt={creador.nombre}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover rounded-full border-4 border-gray-600/50 group-hover:border-purple-500/50 transition-colors shadow-2xl"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {creador.nombre}
                    </h3>
                    <p className="text-purple-400 font-semibold mb-6 text-lg">{creador.rol}</p>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed text-center">{creador.descripcion}</p>

                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href={`https://instagram.com/${creador.instagram.replace("@", "")}`}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </Link>

                    {creador.youtube && (
                      <Link
                        href={creador.youtube}
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <Youtube className="w-4 h-4" />
                        YouTube
                      </Link>
                    )}

                    {creador.discord && (
                      <Link
                        href={`https://discord.com/users/${creador.discord}`}
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Discord
                      </Link>
                    )}

                    {creador.portfolio && (
                      <Link
                        href={creador.portfolio}
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <Globe className="w-4 h-4" />
                        Portfolio
                      </Link>
                    )}

                    {creador.twitch && (
                      <Link
                        href={creador.twitch}
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <Twitch className="w-4 h-4" />
                        Twitch
                      </Link>
                    )}

                    {creador.kick && (
                      <Link
                        href={creador.kick}
                        target="_blank"
                        className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Kick
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/30 animate-fade-in-up delay-1000">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">¿Qué Ofrecemos?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="group p-8 bg-gray-800/40 rounded-3xl border border-gray-600/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-2xl">
                      <Gamepad2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Juegos Únicos</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Desarrollamos experiencias de juego originales y remakes de clásicos con una perspectiva moderna y
                      fresca que conecta emocionalmente con los jugadores.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-red-400 mt-6">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm font-medium">Con pasión y dedicación</span>
                    </div>
                  </div>
                </div>

                <div className="group p-8 bg-gray-800/40 rounded-3xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-2xl">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Desarrollo Web</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta e-commerce
                      completos con las últimas tecnologías.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-purple-400 mt-6">
                      <Target className="w-5 h-5" />
                      <span className="text-sm font-medium">Tecnología de vanguardia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Powered by Vercel */}
          <section className="text-center animate-fade-in-up delay-1200">
            <div className="inline-flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-gray-600/30 rounded-3xl px-8 py-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/placeholder.svg?height=40&width=40&text=V"
                alt="Vercel Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-gray-300 font-medium text-lg">Powered by Vercel</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
