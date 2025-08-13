"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Lock,
  Calendar,
  Monitor,
  Users,
  Trophy,
  Zap,
  Download,
  Play,
  X,
  Wrench,
  ExternalLink,
  Skull,
  Sparkles,
  Gamepad2,
} from "lucide-react"
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
  isSecret?: boolean
  isRevealed?: boolean
}

interface ModData {
  id: string
  nombre: string
  descripcion: string
  descripcionCompleta: string
  version: string
  especificaciones: string
  imagen: string
  trailer: string
  descarga: string
  juego: string
  esHorror?: boolean
}

const juegosDataBase: Record<string, GameData> = {
  juego1: {
    fondo: "url(/fondos/fondo1.png)",
    fuente: "/fonts/Brianne_s_hand.ttf",
    imagen: "/juegos/juego1.png",
    titulo: "Plantas Vs. Zombies Remade",
    descripcion: "Un remade necesario para un gran juego clásico",
    descripcionCompleta:
      "Revivimos el clásico juego de tower defense con gráficos modernos, nuevas plantas, zombies únicos y mecánicas mejoradas. Incluye modo historia expandido, desafíos diarios y multijugador cooperativo.",
    estado: "Cancelado",
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
    isRevealed: true,
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
    isRevealed: true,
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
    isRevealed: true,
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
    isRevealed: false,
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
    isRevealed: false,
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
    isRevealed: false,
  },
}

const modsData: ModData[] = [
  {
    id: "clicky-mod",
    nombre: "Clicky Mod",
    descripcion: "Un mod de terror que introduce una entidad invisible que acecha al jugador",
    descripcionCompleta:
      '💀 **CLICKY MOD - EXPERIENCIA DE TERROR ABSOLUTO** 💀\n\n🩸 **¿Creías conocer a Clicky? Piénsalo de nuevo...**\n\n"Clicky Mod" no es solo un mod de terror... es una **PESADILLA VIVIENTE** que transformará tu experiencia de Minecraft en algo que jamás olvidarás. Una entidad invisible, malévola y sedienta de caos ha tomado la forma de tu querido Clicky, pero esta vez... **NO VIENE EN SON DE PAZ**.\n\n🌑 **LA OSCURIDAD TE OBSERVA:**\n• **Entidad invisible** que te **ACECHA** constantemente desde las sombras\n• **Manipulación del clima** - tormentas eternas, noches infinitas\n• **Mensajes perturbadores** que aparecen sin previo aviso\n• **Alteración de la realidad** - bloques que cambian, estructuras que se corrompen\n• **Sonidos aterradores** que te seguirán incluso cuando cierres el juego\n• **Presencia constante** - nunca estarás realmente solo\n\n🔥 **EFECTOS PSICOLÓGICOS:**\n• **Paranoia creciente** - cada sonido te hará saltar\n• **Distorsión temporal** - el tiempo se comporta de manera extraña\n• **Visiones perturbadoras** - verás cosas que no deberían estar ahí\n• **Corrupción del mundo** - tu mundo se volverá cada vez más siniestro\n\n⚠️ **ADVERTENCIA EXTREMA:**\nEste mod ha sido reportado por causar **INSOMNIO**, **ANSIEDAD** y **PARANOIA** en jugadores. Múltiples usuarios han reportado **PESADILLAS RECURRENTES** después de jugarlo. \n\n🩸 **NO SOMOS RESPONSABLES** de los efectos psicológicos que puedas experimentar.\n\n👻 **Una vez que lo instales... Clicky nunca te dejará ir.**\n\n💀 **¿TODAVÍA QUIERES DESCARGARLO?**\n\n🔴 **SOLO PARA MAYORES DE 18 AÑOS - CONTENIDO EXTREMADAMENTE PERTURBADOR**',
    version: "1.0.0 - NIGHTMARE EDITION",
    especificaciones: "Minecraft 1.20.1 - Forge 47.4.0",
    imagen: "/mods/minecraft-clicky-edition.png",
    trailer: "https://www.youtube.com/watch?v=4-yQ5ZuIkUw&t=485s",
    descarga:
      "https://download1529.mediafire.com/09mnbetmpsvgbems65rXWQcTfohur0u-HwUZwDcRBsfBu7GWidph_a33jfW_gAnvRHHGaQfKfj0PD1sQcsndQs18d9zueXqMZSftOdUyghEglYG04v2FBfTekl9mAWmHdzC7fBeBnx2MNXXh8hn282FfmkWc_K3HbdFHPgN_oXg/yq4m2uhl8hmptzw/Clicky+Mod.zip",
    juego: "Minecraft",
    esHorror: true,
  },
]

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null)
  const [originalBg, setOriginalBg] = useState<string>("")
  const [pokemonMode, setPokemonMode] = useState(false)
  const [keySequence, setKeySequence] = useState<string>("")
  const [lastKeyTime, setLastKeyTime] = useState<number>(0)
  const [showPokeball, setShowPokeball] = useState(false)
  const [showFlash, setShowFlash] = useState(false)
  const [juegosData, setJuegosData] = useState(juegosDataBase)
  const [horrorMode, setHorrorMode] = useState(false)
  const [mostrarMods, setMostrarMods] = useState(false)
  const [modSeleccionado, setModSeleccionado] = useState<ModData | null>(null)
  const [modalModOpen, setModalModOpen] = useState(false)
  const [juegoModSeleccionado, setJuegoModSeleccionado] = useState<string>("")
  const body = typeof window !== "undefined" ? document.body : null

  const playSound = (soundName: string) => {
    try {
      const audio = new Audio(`/sounds/${soundName}.wav`)
      audio.volume = 0.7
      audio.play().catch(() => {})
    } catch (error) {}
  }

  const activatePokemonMode = async () => {
    if (pokemonMode) return

    setShowPokeball(true)
    playSound("SFX_BALL_TOSS")

    setTimeout(() => {
      setShowPokeball(false)
      setShowFlash(true)
      playSound("SFX_BALL_POOF")

      setTimeout(() => {
        setShowFlash(false)
        setPokemonMode(true)
        setHorrorMode(true)

        setJuegosData((prev) => ({
          ...prev,
          juego4: {
            ...prev.juego4,
            fondo: "linear-gradient(135deg, #000000, #330000, #660000, #990000, #000000)",
            fuente: "/fonts/PKMN-RBYGSC.ttf",
            imagen: "/juegos/pokemon-delta-silence.png",
            titulo: "Pokemon Delta Silence",
            descripcion:
              "Mmm bueno... aunque no quiero hablar de este maldito juego... tengo que hacerlo para advertirte que no se trata de un hack ROM o un juego original de Pokémon. De hecho... fue creado por personas que eran fanáticas del juego Pokémon, pero al parecer fue aceptado por Game Freak y Nintendo... pero el juego es demasiado aterrador e inquietante para los niños que mayormente consumen Pokémon en sí... Descubrí este 'Juego' justamente en esta página web... o bueno... eso creo... InfiniTech Studios logró restaurar parte de la idea original del juego. No sé cómo lo lograron, pero realmente... me hubiese gustado que no lo hubieran hecho. Si por algo en especial logras leer este mensaje, ¡por favor NO INSTALES EL JUEGO!... Contiene un malware súper extraño y peligroso. Si decides descargarlo... es bajo tu responsabilidad... Te lo advertí.",
            descripcionCompleta:
              "⚠️ ADVERTENCIA: CONTENIDO EXTREMADAMENTE PERTURBADOR ⚠️\n\nMmm bueno... aunque no quiero hablar de este maldito juego... tengo que hacerlo para advertirte que no se trata de un hack rom o un juego original de pokemon, de hecho... fue creado por personas que eran fanaticas del juego Pokemon pero al parecer fue aceptado por Game Freak y Nintendo... pero el juego es demasiado aterrador e inquitante para los niños que mayormente consumen Pokemon en si..., descubri este 'Juego' justamente en esta pagina web... o bueno... eso creo..., InfiniTech Studios logro restaurar parte de la idea original del juego. No se como lo lograron pero realmente... me hubiese gustado que no lo hubieran hecho. Si por algo en especial logras leer este mensaje porfavor ¡NO INSTALES EL JUEGO!... Contiene un malware super extraño y peligroso. Si decides descargarlo... es bajo tu responsabilidad... Te lo adverti",
            estado: "CORRUPTED",
            lanzamiento: "1995",
            disponible: "Game Boy Advance, PC",
            genero: "RPG / Survival Horror",
            jugadores: "1 jugador",
            caracteristicas: ["Sincronización con un Pokemon especial", "???", "???", "???", "???"],
            isSecret: true,
            isRevealed: true,
          },
        }))
      }, 1000)
    }, 3000)
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const currentTime = Date.now()
      const key = event.key.toUpperCase()

      if (currentTime - lastKeyTime > 5000) {
        setKeySequence(key)
      } else {
        setKeySequence((prev) => prev + key)
      }

      setLastKeyTime(currentTime)

      const sequence = keySequence + key

      if (sequence.includes("POKEMON") || sequence.includes("DELTA")) {
        if (!pokemonMode) {
          activatePokemonMode()
        } else {
          setPokemonMode(false)
          setHorrorMode(false)
          setJuegosData(juegosDataBase)
        }
        setKeySequence("")
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [keySequence, lastKeyTime, pokemonMode])

  useEffect(() => {
    if (!body) return

    if (horrorMode) {
      body.classList.add("horror-mode")
      const font = new FontFace("PokemonFont", "url(/fonts/PKMN-RBYGSC.ttf)")
      font
        .load()
        .then((f) => {
          document.fonts.add(f)
        })
        .catch(() => {
          console.log("Pokemon font failed to load")
        })
    } else {
      body.classList.remove("horror-mode")
    }

    return () => {
      if (body) {
        body.classList.remove("horror-mode")
      }
    }
  }, [horrorMode, body])

  useEffect(() => {
    if (body) {
      setOriginalBg(getComputedStyle(body).backgroundImage)
    }
  }, [body])

  useEffect(() => {
    if (!body) return

    if (selectedGame) {
      try {
        if (selectedGame.estado === "No revelado" || selectedGame.isSecret) {
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

  function openModsModal(juego: string) {
    setJuegoModSeleccionado(juego)
    setMostrarMods(true)
  }

  function closeModsModal() {
    setMostrarMods(false)
    setJuegoModSeleccionado("")
  }

  function openModDetail(mod: ModData) {
    setModSeleccionado(mod)
    setModalModOpen(true)
  }

  function closeModDetail() {
    setModalModOpen(false)
    setModSeleccionado(null)
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
      case "Cancelado":
        return "bg-red-500"
      case "CORRUPTED":
        return "bg-red-600 animate-pulse"
      default:
        return "bg-red-500"
    }
  }

  const gamesToShow = Object.keys(juegosData).filter((key) => {
    const game = juegosData[key]
    return game.isRevealed || (game.isSecret && horrorMode)
  })
  const modsDisponibles = modsData.filter((mod) => mod.juego === juegoModSeleccionado)

  return (
    <main className={`relative min-h-screen overflow-hidden ${horrorMode ? "horror-theme" : ""}`}>
      {/* Background with animated particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-400/20 rounded-full animate-pulse"
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
        {showPokeball && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            <div className="pokeball-falling">
              <div className="pokeball"></div>
            </div>
          </div>
        )}

        {showFlash && <div className="fixed inset-0 z-50 bg-white flash-effect pointer-events-none"></div>}

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-blue-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-2 mb-6">
                <Gamepad2 className="w-5 h-5 text-red-400" />
                <span className="text-gray-200 font-medium">Experiencias Únicas</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Nuestros Juegos
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Descubre nuestro catálogo de experiencias únicas, desde clásicos reinventados hasta aventuras
                completamente originales que conectan emocionalmente con cada jugador.
              </p>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 animate-bounce delay-1000">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Gamepad2 className="w-8 h-8 text-red-400" />
              </div>
            </div>
            <div className="absolute bottom-20 right-10 animate-bounce delay-2000">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Mods Section Button */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in-up delay-300">
              <button
                onClick={() => openModsModal("Minecraft")}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50"
              >
                <Wrench className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Modificaciones / Mods
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gamesToShow.map((key, index) => {
                const game = juegosData[key]
                const isRevealed = game.estado !== "No revelado" && game.isRevealed
                const isHorrorGame = game.isSecret && horrorMode

                return (
                  <div
                    key={key}
                    className={`game-card group relative p-8 border-2 backdrop-blur-sm cursor-pointer rounded-3xl transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in-up ${
                      isHorrorGame
                        ? "border-red-500/50 bg-gradient-to-br from-red-900/40 to-black/80 horror-card hover:border-red-400/70 hover:shadow-2xl hover:shadow-red-500/30"
                        : "border-gray-600/30 bg-gradient-to-br from-gray-800/40 to-gray-900/60 hover:border-gray-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
                    } ${!isRevealed && !isHorrorGame ? "overflow-hidden" : ""}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => {
                      if (isHorrorGame) {
                        playSound("SFX_PRESS_AB")
                      }
                      openModal(key)
                    }}
                  >
                    {!isRevealed && !isHorrorGame && (
                      <>
                        <div className="absolute inset-0 secret-game-overlay rounded-3xl z-10"></div>
                        <div className="absolute top-6 right-6 z-20 bg-gray-700/80 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm">
                          <Lock className="w-4 h-4" />
                          Clasificado
                        </div>
                      </>
                    )}

                    {isHorrorGame && (
                      <div className="absolute top-6 right-6 z-20 bg-red-600/80 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 backdrop-blur-sm pokemon-font glitch-text animate-pulse">
                        ⚠️ PELIGRO
                      </div>
                    )}

                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <Image
                        width={400}
                        height={300}
                        src={game.imagen || "/placeholder.svg?height=300&width=400"}
                        alt={game.titulo}
                        className={`w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110 ${
                          isHorrorGame ? "horror-image" : ""
                        }`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=300&width=400"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className={`${!isRevealed && !isHorrorGame ? "relative z-20" : ""}`}>
                      <h3
                        className={`text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors ${isHorrorGame ? "pokemon-font glitch-text" : ""}`}
                      >
                        {game.titulo}
                      </h3>
                      <p
                        className={`text-gray-300 mb-6 text-sm leading-relaxed ${
                          isHorrorGame ? "pokemon-font horror-text" : ""
                        } ${isHorrorGame ? "max-h-32 overflow-hidden" : ""}`}
                      >
                        {game.descripcion}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className={`text-sm ${isHorrorGame ? "pokemon-font" : ""}`}>
                            Lanzamiento:{" "}
                            {isHorrorGame ? (
                              <span className="glitch-date">
                                <span className="glitch-layer">1995</span>
                                <span className="glitch-layer">2025</span>
                                <span className="glitch-layer">1995</span>
                              </span>
                            ) : (
                              game.lanzamiento
                            )}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-400">
                          <Monitor className="w-4 h-4" />
                          <span className={`text-sm ${isHorrorGame ? "pokemon-font" : ""}`}>
                            Plataformas: {game.disponible}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-400">
                          <Trophy className="w-4 h-4" />
                          <span className={`text-sm ${isHorrorGame ? "pokemon-font" : ""}`}>Género: {game.genero}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`text-gray-400 text-sm ${isHorrorGame ? "pokemon-font" : ""}`}>Estado:</span>
                          <span
                            className={`text-white text-sm font-medium ${isHorrorGame ? "pokemon-font glitch-text" : ""}`}
                          >
                            {game.estado}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          {!isRevealed && !isHorrorGame && <Lock className="w-4 h-4 text-gray-400" />}
                          <span className={`w-4 h-4 rounded-full ${getStatusColor(game.estado)}`}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {!pokemonMode && (
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/30">
                <p className="text-sm text-gray-400 opacity-70 mb-2">💡 Consejo Secreto</p>
                <p className="text-gray-300">
                  Prueba escribiendo algo en tu teclado... Nunca sabes qué secretos podrías desbloquear.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Mods Modal */}
      {mostrarMods && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-3xl border-2 border-gray-600/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Modificaciones / Mods</h2>
                  <p className="text-gray-400 text-lg">Mods disponibles para {juegoModSeleccionado}</p>
                </div>
              </div>
              <button
                onClick={closeModsModal}
                className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-gray-700/50 rounded-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modsDisponibles.map((mod, index) => (
                <div
                  key={mod.id}
                  className={`group p-8 bg-gradient-to-br backdrop-blur-sm rounded-3xl border transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden animate-fade-in-up ${
                    mod.esHorror
                      ? "from-red-900/40 to-black/80 border-red-500/30 hover:border-red-400/70 shadow-2xl shadow-red-500/20"
                      : "from-gray-800/40 to-gray-900/60 border-gray-600/30 hover:border-green-500/50 shadow-xl"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openModDetail(mod)}
                >
                  {mod.esHorror && (
                    <>
                      <div className="absolute top-6 right-6 bg-red-600/90 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 z-10 animate-pulse shadow-lg">
                        <Skull className="w-4 h-4" />
                        NIGHTMARE
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-black/20 pointer-events-none"></div>
                    </>
                  )}

                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <Image
                      width={300}
                      height={200}
                      src={mod.imagen || "/placeholder.svg"}
                      alt={mod.nombre}
                      className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 ${
                        mod.esHorror ? "filter contrast-150 saturate-50 brightness-75" : ""
                      }`}
                    />
                    {mod.esHorror && (
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 transition-colors ${
                      mod.esHorror
                        ? "text-red-100 group-hover:text-red-300 drop-shadow-lg"
                        : "text-white group-hover:text-green-300"
                    }`}
                  >
                    {mod.nombre}
                    {mod.esHorror && <span className="text-red-400 ml-2">💀</span>}
                  </h3>
                  <p className={`mb-6 text-sm leading-relaxed ${mod.esHorror ? "text-red-200" : "text-gray-300"}`}>
                    {mod.descripcion}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Monitor className="w-5 h-5" />
                      <span className="text-sm">{mod.especificaciones}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${mod.esHorror ? "text-red-400" : "text-green-400"}`}>
                      <span className="text-sm font-medium">
                        {mod.esHorror ? "Entrar si te atreves" : "Ver detalles"}
                      </span>
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {modsDisponibles.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-800/60 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No hay mods disponibles</h3>
                <p className="text-gray-400 text-lg">Próximamente añadiremos más modificaciones para este juego.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mod Detail Modal */}
      {modalModOpen && modSeleccionado && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-4">
          <div
            className={`backdrop-blur-md p-8 rounded-3xl flex flex-col lg:flex-row gap-8 border-2 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${
              modSeleccionado.esHorror
                ? "bg-gradient-to-br from-red-900/95 to-black/98 border-red-600/50 shadow-red-500/30"
                : "bg-gradient-to-br from-gray-900/95 to-black/95 border-gray-600/30"
            }`}
          >
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  width={600}
                  height={400}
                  src={modSeleccionado.imagen || "/placeholder.svg"}
                  alt={modSeleccionado.nombre}
                  className={`w-full rounded-2xl shadow-2xl mb-6 ${
                    modSeleccionado.esHorror ? "filter contrast-150 saturate-50 brightness-75" : ""
                  }`}
                />
                {modSeleccionado.esHorror && (
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-black/40 rounded-2xl pointer-events-none"></div>
                )}
              </div>

              {/* YouTube Trailer */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Play className="w-6 h-6 text-red-400" />
                  Trailer / Gameplay
                  {modSeleccionado.esHorror && (
                    <span className="text-xs bg-red-500/30 text-red-200 px-3 py-1 rounded-full animate-pulse">
                      ⚠️ CONTENIDO PERTURBADOR
                    </span>
                  )}
                </h4>
                <div className="relative w-full h-72 bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src={`https://www.youtube.com/embed/${modSeleccionado.trailer.split("v=")[1]?.split("&")[0]}`}
                    title="Mod Trailer"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <button
                onClick={() => {
                  if (modSeleccionado.esHorror) {
                    const confirmacion = window.confirm(
                      "⚠️ ADVERTENCIA FINAL ⚠️\n\nEstás a punto de descargar contenido de TERROR EXTREMO que puede causar:\n\n• Pesadillas recurrentes\n• Ansiedad y paranoia\n• Insomnio\n• Efectos psicológicos duraderos\n\n¿REALMENTE quieres continuar?\n\nNO somos responsables de los efectos que puedas experimentar.",
                    )
                    if (!confirmacion) return
                  }
                  window.open(modSeleccionado.descarga, "_blank")
                }}
                className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl text-lg ${
                  modSeleccionado.esHorror
                    ? "bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white border-2 border-red-500/50 shadow-red-500/50 animate-pulse"
                    : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                }`}
              >
                <Download className="w-6 h-6" />
                {modSeleccionado.esHorror ? "DESCARGAR BAJO TU RIESGO" : "Descargar Mod"}
                {modSeleccionado.esHorror && <Skull className="w-6 h-6 animate-bounce" />}
              </button>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                  {modSeleccionado.nombre}
                  {modSeleccionado.esHorror && <Skull className="w-8 h-8 text-red-400 animate-pulse" />}
                </h2>
                <button
                  onClick={closeModDetail}
                  className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-gray-700/50 rounded-xl"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {modSeleccionado.esHorror && (
                <div className="p-6 bg-red-500/20 border-2 border-red-500/50 rounded-2xl animate-pulse shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Skull className="w-6 h-6 text-red-400 animate-bounce" />
                    <span className="font-bold text-red-200 text-xl">💀 ADVERTENCIA EXTREMA 💀</span>
                  </div>
                  <p className="text-red-100 text-sm leading-relaxed">
                    <strong>ESTE MOD HA SIDO REPORTADO POR CAUSAR:</strong>
                    <br />• Pesadillas recurrentes y terrores nocturnos
                    <br />• Ansiedad severa y ataques de pánico
                    <br />• Paranoia y sensación de ser observado
                    <br />• Insomnio y trastornos del sueño
                    <br />• Efectos psicológicos duraderos
                    <br />
                    <br />
                    <strong className="text-red-300">
                      ⚠️ SOLO PARA MAYORES DE 18 AÑOS - CONTENIDO EXTREMADAMENTE PERTURBADOR ⚠️
                    </strong>
                  </p>
                </div>
              )}

              <div
                className={`p-6 rounded-2xl border shadow-lg ${
                  modSeleccionado.esHorror ? "bg-red-500/10 border-red-500/30" : "bg-green-500/10 border-green-500/20"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className={`w-6 h-6 ${modSeleccionado.esHorror ? "text-red-400" : "text-green-400"}`} />
                  <span
                    className={`font-semibold text-lg ${modSeleccionado.esHorror ? "text-red-300" : "text-green-300"}`}
                  >
                    Especificaciones Técnicas
                  </span>
                </div>
                <p className={`text-lg ${modSeleccionado.esHorror ? "text-red-200" : "text-green-200"}`}>
                  {modSeleccionado.especificaciones}
                </p>
                <p className={`text-sm mt-2 ${modSeleccionado.esHorror ? "text-red-300" : "text-green-300"}`}>
                  {modSeleccionado.version}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  Descripción Completa
                  {modSeleccionado.esHorror && <span className="text-red-400">💀</span>}
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p
                    className={`leading-relaxed whitespace-pre-line text-lg ${
                      modSeleccionado.esHorror ? "text-red-100" : "text-gray-300"
                    }`}
                  >
                    {modSeleccionado.descripcionCompleta}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Download className="w-6 h-6 text-blue-400" />
                  <span className="font-semibold text-blue-300 text-lg">Instrucciones de Instalación</span>
                </div>
                <ol className="text-sm text-blue-200 space-y-2">
                  <li>1. Descarga e instala Minecraft Forge 47.4.0</li>
                  <li>2. Descarga el archivo del mod</li>
                  <li>3. Coloca el archivo .jar en la carpeta mods</li>
                  <li>4. Inicia Minecraft con el perfil de Forge</li>
                  <li>5. {modSeleccionado.esHorror ? "Prepárate para la pesadilla..." : "¡Disfruta del mod!"}</li>
                </ol>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    if (modSeleccionado.esHorror) {
                      const confirmacion = window.confirm(
                        "⚠️ ÚLTIMA ADVERTENCIA ⚠️\n\nUna vez descargado, Clicky nunca te dejará ir...\n\n¿Estás COMPLETAMENTE seguro?",
                      )
                      if (!confirmacion) return
                    }
                    window.open(modSeleccionado.descarga, "_blank")
                  }}
                  className={`flex-1 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3 ${
                    modSeleccionado.esHorror
                      ? "bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 border border-red-500/50"
                      : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Descargar
                </button>
                <button
                  onClick={closeModDetail}
                  className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-2xl font-semibold transition-colors"
                >
                  {modSeleccionado.esHorror ? "Escapar" : "Cerrar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Modal */}
      {modalOpen && selectedGame && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn p-4">
          <div
            className={`modal-content backdrop-blur-md p-8 rounded-3xl flex flex-col lg:flex-row gap-8 border-2 max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${
              selectedGame.isSecret
                ? "bg-gradient-to-br from-red-900/95 to-black/95 horror-modal border-red-600/30"
                : "bg-gradient-to-br from-gray-900/95 to-black/95 border-gray-600/30"
            }`}
          >
            <div className="lg:w-1/2">
              <Image
                width={600}
                height={400}
                src={selectedGame.imagen || "/placeholder.svg?height=400&width=600"}
                alt={selectedGame.titulo}
                className={`w-full rounded-2xl shadow-2xl mb-6 ${selectedGame.isSecret ? "horror-image" : ""}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?height=400&width=600"
                }}
              />

              {selectedGame.link && (
                <Link
                  href={selectedGame.link}
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/30 mb-4"
                >
                  <Zap className="w-6 h-6" />
                  Jugar Demo en itch.io
                </Link>
              )}
            </div>

            <div className="lg:w-1/2 space-y-6">
              <div>
                <h2
                  className={`text-4xl font-bold mb-4 text-white ${
                    selectedGame.isSecret ? "pokemon-font glitch-text" : ""
                  }`}
                >
                  {selectedGame.titulo}
                </h2>
                <p
                  className={`text-lg text-gray-300 leading-relaxed mb-4 whitespace-pre-line ${
                    selectedGame.isSecret ? "pokemon-font horror-text" : ""
                  }`}
                >
                  {selectedGame.descripcionCompleta}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full ${getStatusColor(selectedGame.estado)}`}></div>
                    <span className={`text-gray-400 ${selectedGame.isSecret ? "pokemon-font" : ""}`}>Estado:</span>
                    <span
                      className={`text-white font-medium ${selectedGame.isSecret ? "pokemon-font glitch-text" : ""}`}
                    >
                      {selectedGame.estado}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className={`text-gray-400 ${selectedGame.isSecret ? "pokemon-font" : ""}`}>Lanzamiento:</span>
                    <span className={`text-white font-medium ${selectedGame.isSecret ? "pokemon-font" : ""}`}>
                      {selectedGame.isSecret ? (
                        <span className="glitch-date">
                          <span className="glitch-layer">1995</span>
                          <span className="glitch-layer">2025</span>
                          <span className="glitch-layer">1995</span>
                        </span>
                      ) : (
                        selectedGame.lanzamiento
                      )}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-gray-400" />
                    <span className={`text-gray-400 ${selectedGame.isSecret ? "pokemon-font" : ""}`}>Plataformas:</span>
                    <span className={`text-white font-medium ${selectedGame.isSecret ? "pokemon-font" : ""}`}>
                      {selectedGame.disponible}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-gray-400" />
                    <span className={`text-gray-400 ${selectedGame.isSecret ? "pokemon-font" : ""}`}>Género:</span>
                    <span className={`text-white font-medium ${selectedGame.isSecret ? "pokemon-font" : ""}`}>
                      {selectedGame.genero}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className={`text-gray-400 ${selectedGame.isSecret ? "pokemon-font" : ""}`}>Jugadores:</span>
                    <span className={`text-white font-medium ${selectedGame.isSecret ? "pokemon-font" : ""}`}>
                      {selectedGame.jugadores}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className={`text-2xl font-bold text-white mb-4 ${selectedGame.isSecret ? "pokemon-font" : ""}`}>
                  Características Principales:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedGame.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 ${selectedGame.isSecret ? "bg-red-400" : "bg-red-400"} rounded-full`}
                      ></div>
                      <span className={`text-gray-300 ${selectedGame.isSecret ? "pokemon-font" : ""}`}>
                        {caracteristica}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl ${
                  selectedGame.isSecret
                    ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 pokemon-font"
                    : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                }`}
                onClick={() => {
                  if (selectedGame.isSecret) {
                    playSound("SFX_PRESS_AB")
                  }
                  closeModal()
                }}
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
