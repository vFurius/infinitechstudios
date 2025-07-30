import { ExternalLink, Instagram, Globe, Twitch, Gamepad2, Code, Star, Youtube, MessageCircle } from "lucide-react"
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
      url: null, // Próximamente
    },
    {
      nombre: "Santa Rita",
      descripcion:
        "Plataforma web completa para la tradicional fábrica de pastas Santa Rita. Incluye catálogo de productos, sistema de pedidos online, información nutricional y ubicaciones de puntos de venta. Diseño elegante que refleja la calidad artesanal de sus productos.",
      imagen: "/proyectos/santa-rita-logo.png",
      estado: "Activo",
      url: null, // Próximamente
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
      nombre: "Gonzalo", // Espero que no te moleste que te haya puesto aca gonza JAJA, cualquier cosa eliminate o modifica lo que quieras. ¡Gracias por todo!
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
    <main className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Sobre Nosotros
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              En <span className="text-red-500 font-semibold">InfiniTech Studios</span>, somos un equipo independiente
              apasionado por crear videojuegos que inspiran, entretienen y dejan huella. Nuestro objetivo es dar vida a
              ideas originales y reinventar clásicos con una perspectiva moderna.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Además de videojuegos, desarrollamos páginas web modernas y funcionales a través de{" "}
              <span className="text-purple-400 font-semibold">InfiniWeb Studios</span>, ofreciendo soluciones digitales
              completas para empresas y proyectos personales.
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300 font-medium">Grandes ideas, desde un pequeño lugar.</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-600/30">
            <div className="text-3xl font-bold text-red-400 mb-2">2+</div>
            <div className="text-gray-300 text-sm">Juegos en Desarrollo</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-600/30">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-300 text-sm">Páginas Web Creadas</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-600/30">
            <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Desarrolladores</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-600/30">
            <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
            <div className="text-gray-300 text-sm">Creatividad</div>
          </div>
        </div>

        {/* Proyectos Web */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nuestros Proyectos Web</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Algunos de los sitios web que hemos desarrollado para diferentes clientes y proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proyectosWeb.map((proyecto, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src={proyecto.imagen || "/placeholder.svg"}
                    alt={proyecto.nombre}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-white px-2 py-1 rounded-full text-xs font-semibold ${
                        proyecto.estado === "En desarrollo" ? "bg-yellow-500" : "bg-green-500"
                      }`}
                    >
                      {proyecto.estado}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{proyecto.nombre}</h3>
                <div className="text-gray-300 mb-6 text-sm leading-relaxed whitespace-pre-line min-h-[140px]">
                  {proyecto.descripcion}
                </div>

                {proyecto.url ? (
                  <Link
                    href={proyecto.url}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar Sitio
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 bg-gray-600/50 px-4 py-2 rounded-lg text-sm font-semibold w-full justify-center text-gray-400 cursor-not-allowed">
                    <Globe className="w-4 h-4" />
                    Próximamente
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nuestro Equipo</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Conoce a los creadores detrás de InfiniTech Studios y todas nuestras creaciones digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {creadores.map((creador, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={creador.avatar || "/placeholder.svg"}
                      alt={creador.nombre}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full border-4 border-gray-600/50 group-hover:border-purple-500/50 transition-colors"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{creador.nombre}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{creador.rol}</p>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-center">{creador.descripcion}</p>

                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href={`https://instagram.com/${creador.instagram.replace("@", "")}`}
                    target="_blank"
                    className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </Link>

                  {creador.youtube && (
                    <Link
                      href={creador.youtube}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Youtube className="w-4 h-4" />
                      YouTube
                    </Link>
                  )}

                  {creador.discord && (
                    <Link
                      href={`https://discord.com/users/${creador.discord}`}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Discord
                    </Link>
                  )}

                  {creador.portfolio && (
                    <Link
                      href={creador.portfolio}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Globe className="w-4 h-4" />
                      Portfolio
                    </Link>
                  )}

                  {creador.twitch && (
                    <Link
                      href={creador.twitch}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Twitch className="w-4 h-4" />
                      Twitch
                    </Link>
                  )}

                  {creador.kick && (
                    <Link
                      href={creador.kick}
                      target="_blank"
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Kick
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/30 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Qué Ofrecemos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Desarrollo de Videojuegos</h3>
              <p className="text-gray-300">
                Creamos experiencias de juego únicas, desde remakes de clásicos hasta conceptos completamente
                originales.
              </p>
            </div>

            <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Desarrollo Web</h3>
              <p className="text-gray-300">
                Sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta e-commerce completos.
              </p>
            </div>
          </div>
        </div>

        {/* Powered by Vercel */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-gray-600/30 rounded-2xl px-6 py-4">
            <Image
              src="/placeholder.svg?height=32&width=32&text=V"
              alt="Vercel Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-gray-300 font-medium">Powered by Vercel</span>
          </div>
        </div>
      </div>
    </main>
  )
}
