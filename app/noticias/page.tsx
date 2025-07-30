"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Calendar, Clock, Tag, Share2, Search, Filter, ChevronRight, Gamepad2, Code, Sparkles, Zap } from "lucide-react"

interface Post {
  id: number
  title: string
  content: string
  excerpt: string
  publicatedAt: string
  category: "desarrollo" | "lanzamiento" | "update" | "comunidad"
  tags: string[]
  readTime: number
  image?: string
  featured?: boolean
}

const NoticiasPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const generateDynamicDate = (hoursAgo: number) => {
    const date = new Date(currentTime)
    date.setHours(date.getHours() - hoursAgo)
    return date.toISOString().split("T")[0]
  }

  const posts: Post[] = [
    {
      id: 7,
      title: "🌟 Gran renovación de la página web de InfiniTech Studios",
      content:
        "¡Hemos renovado completamente nuestra página web con un diseño moderno, nuevas funcionalidades y una experiencia de usuario mejorada!\n\n🎨 **Diseño Visual Renovado:**\n• Nuevo header fijo con navegación mejorada y efectos de hover\n• Fondo dinámico personalizable en la página principal\n• Gradientes modernos y efectos de cristal (glassmorphism)\n• Paleta de colores actualizada con mejor contraste\n• Animaciones suaves y transiciones fluidas\n• Diseño completamente responsivo para todos los dispositivos\n\n🚀 **Nuevas Funcionalidades:**\n• Sección de noticias completamente renovada con búsqueda y filtros\n• Sistema de categorización inteligente\n• Selector de monedas en la tienda web (ARS, USD, EUR, BRL, MXN, COP)\n• Páginas de juegos con modales interactivos y información detallada\n• Sistema de tags para mejor organización del contenido\n• Funcionalidad de compartir en redes sociales\n\n💼 **Servicios Expandidos:**\n• Nueva sección InfiniTech Web con planes de desarrollo web\n• Calculadora de precios automática con conversión de monedas\n• Página de servicios profesionales con portfolios\n• Formulario de contacto mejorado con validación avanzada\n\n🎮 **Sección de Juegos Mejorada:**\n• Nuevos juegos añadidos incluyendo el misterioso 'Eco Shift'\n• Sistema de estados dinámicos (En desarrollo, Próximo lanzamiento, etc.)\n• Información detallada de cada proyecto con características y plataformas\n• Integración con itch.io para demos disponibles\n• Efectos especiales para juegos no revelados\n\n👥 **Página Nosotros Actualizada:**\n• Perfiles detallados del equipo con redes sociales\n• Estadísticas en tiempo real de proyectos\n• Galería de proyectos web realizados\n• Historia y filosofía del estudio\n\n⚡ **Optimizaciones Técnicas:**\n• Carga más rápida con optimización de imágenes\n• SEO mejorado para mejor visibilidad\n• Accesibilidad web siguiendo estándares WCAG\n• Integración con Google Analytics\n• Hosting optimizado con Vercel\n• Fuentes personalizadas cargadas eficientemente\n\nEsta renovación representa nuestro compromiso continuo con la excelencia y la innovación. Queremos que nuestra comunidad tenga la mejor experiencia posible al explorar nuestros proyectos y servicios.\n\n¡Explora todas las nuevas funcionalidades y déjanos saber qué te parece en nuestras redes sociales!",
      excerpt:
        "Renovación completa de la web con diseño moderno, nuevas funcionalidades, servicios expandidos y experiencia de usuario mejorada.",
      publicatedAt: generateDynamicDate(2),
      category: "update",
      tags: ["Website", "Renovación", "UI/UX", "Funcionalidades", "Diseño"],
      readTime: 5,
      image: "/banner-infinitech.png",
      featured: true,
    },
    {
      id: 6,
      title: "🚀 Eco Shift: Primer vistazo al misterioso proyecto",
      content:
        "Hemos revelado oficialmente el nombre de nuestro próximo gran proyecto: Eco Shift. Aunque los detalles siguen siendo un misterio, podemos confirmar que será una experiencia completamente nueva que desafiará las expectativas de los jugadores.\n\nEl arte pixel que hemos mostrado es solo una pequeña muestra de la atmósfera única que estamos creando. Eco Shift promete ser algo especial, combinando elementos que nunca antes hemos explorado.\n\nEl juego utilizará la fuente personalizada DePixelSchmal para crear una estética retro única que complementa perfectamente el arte pixel. Cada detalle visual ha sido cuidadosamente diseñado para sumergir al jugador en un mundo completamente nuevo.\n\n¡Mantente atento para más revelaciones en las próximas semanas!",
      excerpt:
        "Revelamos oficialmente Eco Shift, nuestro misterioso nuevo proyecto con arte pixel único y fuente personalizada.",
      publicatedAt: generateDynamicDate(8),
      category: "desarrollo",
      tags: ["Eco Shift", "Pixel Art", "Misterio", "DePixelSchmal"],
      readTime: 2,
      image: "/juegos/eco-shift-pixel.png",
      featured: true,
    },
    {
      id: 5,
      title: "🎁 Clicky & Yo | vAlfa 0.6 - ¡Demo Disponible!",
      content:
        "La Demo de Clicky & Yo ya está disponible en ITCH.IO, ¡Prueba el juego y no olvides de dar sugerencias!\n\nEsta nueva versión incluye:\n• Mejoras en la interfaz de usuario\n• Nuevas animaciones para Clicky\n• Sistema de guardado mejorado\n• Corrección de bugs reportados por la comunidad\n• Nuevos diálogos y contenido\n• Optimización de rendimiento\n• Nuevos efectos de sonido\n\nTu feedback es invaluable para nosotros. Cada comentario, sugerencia y reporte de bug nos ayuda a hacer de Clicky & Yo una experiencia mejor. La comunidad ha sido increíblemente receptiva y sus aportes han sido fundamentales para el desarrollo.\n\nLa demo está disponible gratuitamente y representa aproximadamente 30 minutos de gameplay del juego completo.",
      excerpt: "La versión Alpha 0.6 de Clicky & Yo está disponible con mejoras significativas y nuevo contenido.",
      publicatedAt: generateDynamicDate(144),
      category: "update",
      tags: ["Clicky & Yo", "Demo", "Alpha", "itch.io"],
      readTime: 3,
      image: "/juegos/clicky-yo-official.png",
    },
    {
      id: 4,
      title: "🎉 ¡Fecha de lanzamiento confirmada para Clicky & Yo!",
      content:
        "El esperado juego 'Clicky & Yo' estará disponible el 18/12/2025 en Steam. ¡Prepárate para la aventura definitiva!\n\nDespués de meses de desarrollo intensivo, finalmente podemos confirmar la fecha oficial de lanzamiento. Clicky & Yo llegará a Steam el 18 de diciembre de 2025, justo a tiempo para las fiestas navideñas.\n\nEste juego representa todo lo que hemos aprendido como desarrolladores indie. Una historia emotiva, mecánicas innovadoras y un personaje que se quedará en tu corazón para siempre.\n\nEl juego incluirá:\n• Historia principal de 8-10 horas\n• Múltiples finales basados en tus decisiones\n• Banda sonora original compuesta exclusivamente para el juego\n• Arte único que evoluciona con la narrativa\n• Mecánicas de clicker innovadoras\n• Logros de Steam y cartas coleccionables\n\n¡Añádelo a tu wishlist en Steam y sé parte de esta increíble aventura!",
      excerpt: "Clicky & Yo llegará a Steam el 18 de diciembre de 2025. ¡Marca tu calendario!",
      publicatedAt: generateDynamicDate(264),
      category: "lanzamiento",
      tags: ["Clicky & Yo", "Steam", "Lanzamiento", "Fecha"],
      readTime: 3,
      featured: true,
    },
    {
      id: 3,
      title: "🚧 PvZ Remade: Progreso de desarrollo y nuevas características",
      content:
        "Nuestro remade de Plants vs. Zombies avanza a pasos agigantados. Próximamente lanzaremos una demo para PC y dispositivos móviles.\n\nNovedades en desarrollo:\n• 15 nuevas plantas con habilidades únicas\n• Sistema de clima dinámico que afecta el gameplay\n• Modo cooperativo local y online para hasta 4 jugadores\n• Nuevos tipos de zombies con mecánicas innovadoras\n• Gráficos completamente remasterizados en HD\n• Banda sonora original inspirada en el clásico\n• Sistema de progresión y desbloqueos\n• Modo supervivencia infinito\n• Desafíos diarios con recompensas\n• Integración con Steam Workshop para mods\n\nLa demo incluirá los primeros 5 niveles del modo aventura y una muestra del modo cooperativo. Hemos trabajado intensamente para mantener la esencia del juego original mientras añadimos elementos modernos que enriquecen la experiencia.\n\n¡Esperamos que la disfruten tanto como nosotros disfrutamos creándola!",
      excerpt: "Grandes avances en PvZ Remade con nuevas plantas, zombies y modo cooperativo. Demo próximamente.",
      publicatedAt: generateDynamicDate(384),
      category: "desarrollo",
      tags: ["PvZ Remade", "Demo", "Cooperativo", "HD", "Steam"],
      readTime: 4,
    },
    {
      id: 2,
      title: "🎨 Nuevo arte conceptual y fondos nuevos",
      content:
        "Mira los nuevos diseños de personajes y fondos para nuestros proyectos. ¡Nos encantaría saber qué opinas!\n\nHemos estado trabajando intensamente en el apartado visual de nuestros juegos. Nuestro equipo de arte ha creado conceptos increíbles que definen la identidad visual de cada proyecto.\n\nPara Clicky & Yo, hemos desarrollado un estilo único que combina elementos nostálgicos con toques modernos. Cada escenario cuenta una historia y cada personaje tiene su propia personalidad visual. El proceso creativo incluye:\n• Bocetos iniciales a mano\n• Digitalización y refinamiento\n• Pruebas de color y iluminación\n• Animaciones de prueba\n• Feedback del equipo y ajustes finales\n\nEn PvZ Remade, respetamos la esencia del original mientras añadimos detalles que aprovechan las capacidades gráficas actuales. Cada planta y zombie ha sido rediseñado manteniendo su personalidad característica.\n\n¿Qué opinas de nuestro enfoque artístico? ¡Déjanos tus comentarios en nuestras redes sociales!",
      excerpt: "Revelamos nuevo arte conceptual y el proceso creativo detrás de nuestros juegos.",
      publicatedAt: generateDynamicDate(504),
      category: "desarrollo",
      tags: ["Arte Conceptual", "Diseño", "Fondos Nuevos", "Proceso Creativo"],
      readTime: 3,
    },
    {
      id: 1,
      title: "🌟 InfiniTech Studios: Nuestra visión y futuro",
      content:
        "Conoce más sobre nuestra filosofía como estudio indie y los emocionantes proyectos que vienen en camino.\n\nDesde nuestros humildes comienzos, InfiniTech Studios ha crecido con una visión clara: crear experiencias de juego que conecten emocionalmente con los jugadores.\n\nNo somos solo desarrolladores, somos contadores de historias. Cada juego que creamos lleva una parte de nosotros, nuestras experiencias y nuestros sueños. Creemos firmemente que los mejores juegos nacen de la pasión genuina, no solo de la técnica.\n\nNuestro lema 'Grandes ideas, desde un pequeño lugar' refleja nuestra creencia de que no necesitas un gran estudio para crear grandes experiencias. Con pasión, dedicación y mucha creatividad, cualquier idea puede convertirse en algo extraordinario.\n\nNuestros valores fundamentales:\n• Innovación constante en gameplay y narrativa\n• Respeto por la comunidad y feedback constructivo\n• Calidad sobre cantidad en cada proyecto\n• Transparencia en nuestro proceso de desarrollo\n• Accesibilidad para todos los tipos de jugadores\n\nEl futuro nos emociona. Tenemos varios proyectos en diferentes etapas de desarrollo, cada uno único en su propuesta. Desde remakes nostálgicos hasta conceptos completamente originales.\n\n¡Gracias por acompañarnos en este viaje increíble!",
      excerpt: "Conoce la filosofía y visión de InfiniTech Studios como desarrollador indie.",
      publicatedAt: generateDynamicDate(624),
      category: "comunidad",
      tags: ["InfiniTech", "Filosofía", "Indie", "Comunidad", "Valores"],
      readTime: 4,
    },
  ]

  const categories = {
    all: { name: "Todas", icon: Filter, color: "text-gray-400" },
    desarrollo: { name: "Desarrollo", icon: Code, color: "text-blue-400" },
    lanzamiento: { name: "Lanzamientos", icon: Zap, color: "text-yellow-400" },
    update: { name: "Updates", icon: Sparkles, color: "text-purple-400" },
    comunidad: { name: "Comunidad", icon: Gamepad2, color: "text-green-400" },
  }

  const openModal = (id: number) => {
    setSelectedPostId(id)
    setModalOpen(true)
  }

  const closeModal = () => {
    setSelectedPostId(null)
    setModalOpen(false)
  }

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const selectedPost = posts.find((p) => p.id === selectedPostId) || null
  const featuredPosts = posts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const getTimeAgo = (dateString: string) => {
    const now = currentTime
    const postDate = new Date(dateString)
    const diffInMs = now.getTime() - postDate.getTime()
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInHours < 1) return "Hace unos minutos"
    if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours === 1 ? "" : "s"}`
    if (diffInDays === 1) return "Ayer"
    if (diffInDays < 7) return `Hace ${diffInDays} días`
    if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7)
      return `Hace ${weeks} semana${weeks === 1 ? "" : "s"}`
    }
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30)
      return `Hace ${months} mes${months === 1 ? "" : "es"}`
    }
    const years = Math.floor(diffInDays / 365)
    return `Hace ${years} año${years === 1 ? "" : "s"}`
  }

  return (
    <main className="flex-grow py-16 px-4 max-w-7xl mx-auto min-h-[85vh]">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Noticias y Updates
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Mantente al día con las últimas novedades, actualizaciones y behind-the-scenes de nuestros proyectos.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar noticias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/60 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon
              const isActive = selectedCategory === key
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-purple-500/20 border border-purple-500/50 text-purple-300"
                      : "bg-gray-800/40 border border-gray-600/30 text-gray-400 hover:bg-gray-700/60 hover:text-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {selectedCategory === "all" && featuredPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            Destacadas
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden"
                onClick={() => openModal(post.id)}
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    DESTACADA
                  </span>
                </div>

                {post.image && (
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex items-center gap-2 ${categories[post.category].color}`}>
                      {React.createElement(categories[post.category].icon, { className: "w-4 h-4" })}
                      <span className="text-sm font-medium">{categories[post.category].name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime} min</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{getTimeAgo(post.publicatedAt)}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="space-y-8">
        {selectedCategory !== "all" && (
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            {React.createElement(categories[selectedCategory].icon, {
              className: `w-8 h-8 ${categories[selectedCategory].color}`,
            })}
            {categories[selectedCategory].name}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {(selectedCategory === "all" ? regularPosts : filteredPosts).map((post) => (
            <article
              key={post.id}
              className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => openModal(post.id)}
            >
              {post.image && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className={`flex items-center gap-2 ${categories[post.category].color}`}>
                    {React.createElement(categories[post.category].icon, { className: "w-4 h-4" })}
                    <span className="text-xs font-medium uppercase tracking-wide">
                      {categories[post.category].name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">{post.readTime}m</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{getTimeAgo(post.publicatedAt)}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 bg-gray-700/50 text-gray-300 px-2 py-1 rounded-lg text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-800/60 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">No se encontraron noticias</h3>
          <p className="text-gray-400 mb-6">Intenta cambiar los filtros o el término de búsqueda.</p>
          <button
            onClick={() => {
              setSearchTerm("")
              setSelectedCategory("all")
            }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Modal */}
      {modalOpen && selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-3xl flex flex-col border-2 border-gray-600/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {selectedPost.image && (
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                <img
                  src={selectedPost.image || "/placeholder.svg"}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>
            )}

            <div className="flex items-center gap-4 mb-6">
              <div className={`flex items-center gap-2 ${categories[selectedPost.category].color}`}>
                {React.createElement(categories[selectedPost.category].icon, { className: "w-5 h-5" })}
                <span className="font-medium">{categories[selectedPost.category].name}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(selectedPost.publicatedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{selectedPost.readTime} min de lectura</span>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">{selectedPost.title}</h2>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{selectedPost.content}</p>
            </div>

            {selectedPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 bg-gray-700/50 text-gray-300 px-3 py-2 rounded-xl text-sm"
                  >
                    <Tag className="w-4 h-4" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-4">
              <button
                className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-xl transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: selectedPost.title,
                      text: selectedPost.excerpt,
                      url: window.location.href,
                    })
                  }
                }}
              >
                <Share2 className="w-4 h-4" />
                Compartir
              </button>

              <button
                className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default NoticiasPage
