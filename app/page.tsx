"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import LoadingScreen from "@/components/LoadingScreen"
import {
  Gamepad2,
  Code,
  Sparkles,
  Star,
  Trophy,
  ArrowRight,
  Play,
  Heart,
  Coffee,
  Rocket,
  Target,
  Award,
  Clock,
  Download,
  Eye,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)
  const [stats, setStats] = useState({
    projects: 0,
    downloads: 0,
    users: 0,
    reviews: 0,
  })

  const testimonials = [
    {
      name: "Alex M.",
      role: "Jugador Beta",
      content: "Clicky & Yo me hizo llorar. Una experiencia única que no olvidaré jamás.",
      rating: 5,
      game: "Clicky & Yo",
    },
    {
      name: "Sofia R.",
      role: "Streamer",
      content: "InfiniTech Studios crea juegos con alma. Cada detalle está pensado.",
      rating: 5,
      game: "General",
    },
    {
      name: "Carlos P.",
      role: "Game Developer",
      content: "Su enfoque indie es inspirador. Grandes ideas desde un pequeño lugar.",
      rating: 5,
      game: "General",
    },
  ]

  const featuredProjects = [
    {
      title: "Clicky & Yo",
      description: "Una aventura emocional que cambiará tu perspectiva",
      image: "/juegos/clicky-yo-official.png",
      status: "Demo Disponible",
      link: "/juegos",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Eco Shift",
      description: "Un misterio por revelar... ¿Estás listo?",
      image: "/juegos/eco-shift-pixel.png",
      status: "Próximamente",
      link: "/juegos",
      color: "from-green-500 to-blue-500",
    },
    {
      title: "InfiniTech Web",
      description: "Desarrollo web moderno y profesional",
      image: "/banner-infinitech.png",
      status: "Disponible",
      link: "/tienda/web",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const technologies = [
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "Next.js", icon: "▲", color: "text-white" },
    { name: "Unity", icon: "🎮", color: "text-purple-400" },
    { name: "C#", icon: "💻", color: "text-green-400" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },
    { name: "TypeScript", icon: "🔷", color: "text-blue-500" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Animación de estadísticas
  useEffect(() => {
    const animateStats = () => {
      const targetStats = { projects: 3, downloads: 10, users: 0, reviews: 0 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setStats({
          projects: Math.floor(targetStats.projects * progress),
          downloads: Math.floor(targetStats.downloads * progress),
          users: Math.floor(targetStats.users * progress),
          reviews: Math.floor(targetStats.reviews * progress),
        })

        if (currentStep >= steps) {
          clearInterval(interval)
          setStats(targetStats)
        }
      }, stepDuration)
    }

    const timer = setTimeout(animateStats, 4000)
    return () => clearTimeout(timer)
  }, [])

  // Rotación de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Rotación de proyectos destacados
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background with animated particles */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/banner-infinitech.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
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
        {/* Hero Section Enhanced */}
        <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900/20 via-red-900/20 to-blue-900/20">
          <div className="relative max-w-6xl text-center text-white px-4">
            <div className="mb-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-2 mb-6 animate-bounce">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-200 font-medium">Creando el futuro del gaming</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight text-white bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent animate-pulse">
                InfiniTech Studios
              </h1>

              <div className="relative mb-8">
                <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-200 font-light animate-fade-in-up delay-300">
                  Grandes ideas, desde un pequeño lugar.
                </p>
                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-500">
                  Creamos experiencias digitales únicas que inspiran, entretienen y dejan huella en cada jugador. Desde
                  videojuegos emotivos hasta soluciones web innovadoras.
                </p>
              </div>

              {/* Animated stats preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-in-up delay-700">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-red-400">3+</div>
                  <div className="text-gray-300 text-sm">Proyectos Terminados</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl font-bold text-purple-400">10+</div>
                  <div className="text-gray-300 text-sm">Descargas</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-1000">
              <Link
                href="/juegos"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/30 hover:shadow-red-500/50"
              >
                <Gamepad2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Explorar Juegos
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              <Link
                href="/tienda"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50"
              >
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Servicios Web
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 animate-bounce delay-1000">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Gamepad2 className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce delay-2000">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        </section>

        {/* Featured Projects Carousel */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Proyectos Destacados</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Descubre nuestras creaciones más recientes y emocionantes
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-600/30">
              {/* Navigation arrows */}
              <button
                onClick={() =>
                  setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentProject((prev) => (prev + 1) % featuredProjects.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <div
                          className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} bg-opacity-20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6`}
                        >
                          <Star className="w-4 h-4" />
                          <span className="text-sm font-medium">{project.status}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">{project.title}</h3>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.description}</p>
                        <Link
                          href={project.link}
                          className={`inline-flex items-center gap-3 bg-gradient-to-r ${project.color} hover:opacity-90 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
                        >
                          <Play className="w-5 h-5" />
                          Explorar Proyecto
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                      <div className="order-1 lg:order-2">
                        <div className="relative group">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">¿Por qué elegir InfiniTech?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Juegos Únicos</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Desarrollamos experiencias de juego originales y remakes de clásicos con una perspectiva moderna y
                    fresca que conecta emocionalmente con los jugadores.
                  </p>
                  <div className="flex items-center gap-2 text-red-400">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm font-medium">Con pasión y dedicación</span>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Desarrollo Web</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Creamos sitios web modernos, responsivos y optimizados para tu negocio o proyecto personal
                    utilizando las últimas tecnologías.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Rocket className="w-4 h-4" />
                    <span className="text-sm font-medium">Tecnología de vanguardia</span>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Innovación</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Utilizamos las últimas tecnologías y tendencias para crear productos digitales de vanguardia.
                    Powered by Vercel App para máximo rendimiento.
                  </p>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Target className="w-4 h-4" />
                    <span className="text-sm font-medium">Siempre innovando</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Tecnologías que Dominamos</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Utilizamos las herramientas más modernas y eficientes del mercado
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className={`font-semibold ${tech.color} group-hover:text-white transition-colors`}>
                    {tech.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nuestros Números</h2>
              <p className="text-xl text-gray-300">El impacto de nuestro trabajo en números</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2 group-hover:scale-110 transition-transform">
                  3+
                </div>
                <div className="text-gray-300">Proyectos Terminados</div>
              </div>

              <div className="group text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  10+
                </div>
                <div className="text-gray-300">Descargas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-600/30 p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-purple-500/5 to-blue-500/5" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Listo para crear algo increíble?</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Únete a nuestra comunidad y sé parte de la próxima generación de experiencias digitales. Desde juegos
                  emotivos hasta soluciones web innovadoras.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hablemos de tu proyecto
                  </Link>
                  <Link
                    href="/juegos"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/30"
                  >
                    <Eye className="w-5 h-5" />
                    Explorar nuestros juegos
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-8 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Respuesta en 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Calidad garantizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    <span className="text-sm">Hecho con amor</span>
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
