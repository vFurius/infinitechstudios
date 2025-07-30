"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Lock, Calendar, Monitor, Users, Trophy, Zap } from "lucide-react"
import "@/styles/globals.css"

interface GameData {
  fondo: string
  fuente: string
  imagen?: string
  titulo: string
  descripcion: string
  descripcionCompleta: string
  estado: string
  lanzamiento: string
  disponible: string
  genero: string
  jugadores: string
  caracteristicas: string[]
  link?: string
}

const juegosData: Record<string, GameData> = {
  juego1: {
    fondo: "url(/fondos/fondo1.png)",
    fuente: "/fonts/Brianne_s_hand.ttf",
    imagen: "/juegos/juego1.png",
    titulo: "Plantas Vs. Zombies Remade",
    descripcion: "Un remade necesario para un gran juego clásico",
    descripcionCompleta:
      "Revivimos el clásico juego de tower defense con gráficos modernos, nuevas plantas, zombies únicos y mecánicas mejoradas. Incluye modo historia expandido, desafíos diarios y multijugador cooperativo.",
    estado: "En desarrollo",
    lanzamiento: "Q2 2025",
    disponible: "PC, Android/iOS",
    genero: "Tower Defense / Estrategia",
    jugadores: "1-2 jugadores (cooperativo)",
    caracteristicas: [
      "Gráficos HD remasterizados",
      "50+ nuevas plantas",
      "Modo multijugador",
      "Desafíos diarios",
      "Historia expandida",
    ],
  },
  juego2: {
    fondo: "url(/fondos/fondo2.png)",
    fuente: "/fonts/False.ttf",
    imagen: "/juegos/juego2.png",
    titulo: "Clicky & Yo",
    descripcion: "Una aventura emocional llena de puzzles y misterios",
    descripcionCompleta:
      "Acompaña a Clicky en una conmovedora aventura donde cada decisión importa. Resuelve puzzles únicos, descubre secretos ocultos y vive una historia que te marcará para siempre. Demo disponible en itch.io",
    link: "https://vfurius.itch.io/clicky-yo",
    estado: "Próximo lanzamiento",
    lanzamiento: "18/12/2025",
    disponible: "PC, Steam",
    genero: "Novela Visual",
    jugadores: "1 jugador",
    caracteristicas: [
      "Historia emotiva",
      "Puzzles únicos",
      "Arte particular",
      "Banda sonora original",
      "Múltiples finales",
      "Juego Clicker",
    ],
  },
  juego3: {
    fondo: "linear-gradient(135deg, #000000, #374151, #6b7280)",
    fuente: "/fonts/DePixelSchmal.ttf",
    imagen: "/juegos/eco-shift-pixel.png",
    titulo: "Eco Shift",
    descripcion: "???",
    descripcionCompleta: "???",
    estado: "No revelado",
    lanzamiento: "???",
    disponible: "???",
    genero: "???",
    jugadores: "???",
    caracteristicas: ["???", "???", "???", "???", "???"],
  },
  juego4: {
    fondo: "linear-gradient(135deg, #000000, #374151, #6b7280)",
    fuente: "/fonts/False.ttf",
    imagen: "/placeholder.svg?height=300&width=400",
    titulo: "???",
    descripcion: "???",
    descripcionCompleta: "???",
    estado: "No revelado",
    lanzamiento: "???",
    disponible: "???",
    genero: "???",
    jugadores: "???",
    caracteristicas: ["???", "???", "???", "???", "???"],
  },
  juego5: {
    fondo: "linear-gradient(135deg, #000000, #374151, #6b7280)",
    fuente: "/fonts/Brianne_s_hand.ttf",
    imagen: "/placeholder.svg?height=300&width=400",
    titulo: "???",
    descripcion: "???",
    descripcionCompleta: "???",
    estado: "No revelado",
    lanzamiento: "???",
    disponible: "???",
    genero: "???",
    jugadores: "???",
    caracteristicas: ["???", "???", "???", "???", "???"],
  },
  juego6: {
    fondo: "linear-gradient(135deg, #000000, #374151, #6b7280)",
    fuente: "/fonts/False.ttf",
    imagen: "/placeholder.svg?height=300&width=400",
    titulo: "???",
    descripcion: "???",
    descripcionCompleta: "???",
    estado: "No revelado",
    lanzamiento: "???",
    disponible: "???",
    genero: "???",
    jugadores: "???",
    caracteristicas: ["???", "???", "???", "???", "???"],
  },
}

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null)
  const [originalBg, setOriginalBg] = useState<string>("")
  const body = typeof window !== "undefined" ? document.body : null

  useEffect(() => {
    if (body) {
      setOriginalBg(getComputedStyle(body).backgroundImage)
    }
  }, [body])

  useEffect(() => {
    if (!body) return

    if (selectedGame) {
      try {
        if (selectedGame.estado === "No revelado") {
          body.style.background = selectedGame.fondo
          body.style.backgroundImage = ""
        } else {
          body.style.backgroundImage = selectedGame.fondo
          body.style.background = ""
        }
        body.style.backgroundSize = "cover"
        body.style.backgroundPosition = "center"

        if (selectedGame.fuente) {
          const font = new FontFace("GameFont", `url(${selectedGame.fuente})`)
          font
            .load()
            .then((f) => {
              document.fonts.add(f)
              body.style.fontFamily = "GameFont, system-ui"
            })
            .catch(() => {
            
              body.style.fontFamily = "system-ui"
            })
        }
      } catch (error) {
        console.warn("Error applying game theme:", error)

        body.style.fontFamily = "system-ui"
      }
    } else {
      try {
        body.style.backgroundImage = originalBg
        body.style.background = ""
        body.style.fontFamily = "system-ui"
      } catch (error) {
        console.warn("Error resetting theme:", error)
      }
    }
  }, [selectedGame, body, originalBg])

  function openModal(key: string) {
    setSelectedGame(juegosData[key])
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
    setSelectedGame(null)
  }

  function getStatusColor(estado: string) {
    switch (estado) {
      case "Listo":
        return "bg-green-500"
      case "Próximo lanzamiento":
        return "bg-yellow-400"
      case "En desarrollo":
        return "bg-blue-500"
      case "No revelado":
        return "bg-gray-500"
      default:
        return "bg-red-500"
    }
  }

  return (
    <section className="min-h-screen py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Nuestros Juegos
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Descubre nuestro catálogo de experiencias únicas, desde clásicos reinventados hasta aventuras completamente
          originales.
        </p>
      </div>

      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-auto max-w-7xl">
        {Object.keys(juegosData).map((key) => {
          const game = juegosData[key]
          const isRevealed = game.estado !== "No revelado"

          return (
            <div
              key={key}
              className={`game-card relative p-6 border-2 border-gray-600/30 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm cursor-pointer rounded-2xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-gray-500/50 ${
                !isRevealed ? "overflow-hidden" : ""
              }`}
              onClick={() => openModal(key)}
            >
              {!isRevealed && (
                <>
                  {/* Overlay borroso grisáceo para juegos secretos */}
                  <div className="absolute inset-0 secret-game-overlay rounded-2xl z-10"></div>
                  <div className="absolute top-4 right-4 z-20 bg-gray-700/80 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                    <Lock className="w-3 h-3" />
                    Clasificado
                  </div>
                </>
              )}

              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  width={400}
                  height={300}
                  src={game.imagen || "/placeholder.svg?height=300&width=400"}
                  alt={game.titulo}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=300&width=400"
                  }}
                />
              </div>

              <div className={`${!isRevealed ? "relative z-20" : ""}`}>
                <h3 className="text-2xl font-bold mb-2 text-white">{game.titulo}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{game.descripcion}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Lanzamiento: {game.lanzamiento}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Monitor className="w-4 h-4" />
                    <span className="text-sm">Plataformas: {game.disponible}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm">Género: {game.genero}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">Estado:</span>
                    <span className="text-white text-sm font-medium">{game.estado}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!isRevealed && <Lock className="w-4 h-4 text-gray-400" />}
                    <span className={`w-3 h-3 rounded-full ${getStatusColor(game.estado)}`}></span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </main>

      {modalOpen && selectedGame && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fadeIn p-4">
          <div className="modal-content bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-3xl flex flex-col lg:flex-row gap-8 border-2 border-gray-600/30 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="lg:w-1/2">
              <Image
                width={600}
                height={400}
                src={selectedGame.imagen || "/placeholder.svg?height=400&width=600"}
                alt={selectedGame.titulo}
                className="w-full rounded-2xl shadow-2xl mb-6"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=400&width=600"
                }}
              />

              {selectedGame.link && (
                <Link
                  href={selectedGame.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg mb-4"
                >
                  <Zap className="w-5 h-5" />
                  Jugar Demo en itch.io
                </Link>
              )}
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">{selectedGame.titulo}</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">{selectedGame.descripcionCompleta}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(selectedGame.estado)}`}></div>
                    <span className="text-gray-400">Estado:</span>
                    <span className="text-white font-medium">{selectedGame.estado}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Lanzamiento:</span>
                    <span className="text-white font-medium">{selectedGame.lanzamiento}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Monitor className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Plataformas:</span>
                    <span className="text-white font-medium">{selectedGame.disponible}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Género:</span>
                    <span className="text-white font-medium">{selectedGame.genero}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Jugadores:</span>
                    <span className="text-white font-medium">{selectedGame.jugadores}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">Características Principales:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {selectedGame.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
