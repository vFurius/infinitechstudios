"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Star, Code, Palette, Zap, Shield, ArrowRight, Sparkles, ChevronDown } from "lucide-react"

const monedas = {
  ARS: { simbolo: "$", factor: 1 },
  USD: { simbolo: "$", factor: 0.001 },
  EUR: { simbolo: "€", factor: 0.0009 },
  BRL: { simbolo: "R$", factor: 0.005 },
  MXN: { simbolo: "$", factor: 0.018 },
  COP: { simbolo: "$", factor: 4.2 },
}

const planesBase = [
  {
    nombre: "Básico",
    precioARS: 10000,
    descripcion: "Perfecto para pequeños negocios y proyectos personales",
    caracteristicas: [
      "Diseño responsivo moderno",
      "Hasta 5 páginas",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Hosting por 1 año incluido",
      "Soporte por 30 días",
      "SSL certificado gratuito",
      "Integración Google Analytics",
    ],
    color: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    nombre: "Profesional",
    precioARS: 30000,
    descripcion: "Ideal para empresas que buscan una presencia digital sólida",
    caracteristicas: [
      "Todo lo del plan Básico",
      "Hasta 10 páginas",
      "Panel de administración",
      "Integración con redes sociales",
      "Analytics avanzado",
      "Blog integrado",
      "Optimización de velocidad",
      "Soporte por 90 días",
      "Backup automático",
      "Chat en vivo integrado",
    ],
    color: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    nombre: "Premium",
    precioARS: 50000,
    descripcion: "La solución completa para empresas ambiciosas",
    caracteristicas: [
      "Todo lo del plan Profesional",
      "Páginas ilimitadas",
      "E-commerce básico (hasta 50 productos)",
      "Integración con APIs externas",
      "Diseño UX/UI avanzado",
      "Optimización de conversión",
      "Mantenimiento por 6 meses",
      "Soporte prioritario 24/7",
      "CDN global incluido",
      "Múltiples idiomas",
    ],
    color: "from-yellow-500 to-orange-500",
    popular: false,
  },
]

export default function InfiniTechWebPage() {
  const [monedaSeleccionada, setMonedaSeleccionada] = useState<keyof typeof monedas>("ARS")
  const [mostrarSelector, setMostrarSelector] = useState(false)

  const formatearPrecio = (precioARS: number) => {
    const moneda = monedas[monedaSeleccionada]
    const precioConvertido = Math.round(precioARS * moneda.factor)
    return `${moneda.simbolo}${precioConvertido.toLocaleString()}`
  }

  return (
    <main className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">InfiniTech Web</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Desarrollo Web
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transformamos tus ideas en experiencias web excepcionales. Sitios modernos, rápidos y optimizados para el
            éxito de tu negocio.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Next.js & React</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
              <Palette className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">Diseño Moderno</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">Optimización SEO</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">Seguridad Avanzada</span>
            </div>
          </div>
        </div>

        {/* Selector de Moneda */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <button
              onClick={() => setMostrarSelector(!mostrarSelector)}
              className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm border border-gray-600/30 rounded-xl px-6 py-3 text-white hover:bg-gray-700/60 transition-all duration-300"
            >
              <span>Moneda: {monedaSeleccionada}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mostrarSelector ? "rotate-180" : ""}`} />
            </button>

            {mostrarSelector && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-xl overflow-hidden z-10">
                {Object.keys(monedas).map((moneda) => (
                  <button
                    key={moneda}
                    onClick={() => {
                      setMonedaSeleccionada(moneda as keyof typeof monedas)
                      setMostrarSelector(false)
                    }}
                    className="w-full px-6 py-3 text-left text-white hover:bg-gray-700/60 transition-colors"
                  >
                    {moneda} - {monedas[moneda as keyof typeof monedas].simbolo}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Planes de Precios */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Planes y Precios</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Elige el plan perfecto para tu proyecto. Todos incluyen diseño responsivo y código de calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {planesBase.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
                    : "border-gray-600/30 hover:border-gray-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Más Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.nombre}</h3>
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-white">{formatearPrecio(plan.precioARS)}</span>
                    <span className="text-gray-400 ml-2">{monedaSeleccionada}</span>
                  </div>
                  <p className="text-gray-300">{plan.descripcion}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${plan.color} hover:opacity-90 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
                >
                  Elegir Plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Plan Personalizado */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/30 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Necesitas algo más específico?</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Creamos soluciones web completamente personalizadas. Desde aplicaciones web complejas hasta
                integraciones específicas, trabajamos contigo para crear exactamente lo que necesitas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                  <Code className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Desarrollo a Medida</h4>
                  <p className="text-gray-400 text-sm">Funcionalidades específicas para tu negocio</p>
                </div>
                <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                  <Palette className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Diseño Único</h4>
                  <p className="text-gray-400 text-sm">Identidad visual completamente personalizada</p>
                </div>
                <div className="p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">Integración Avanzada</h4>
                  <p className="text-gray-400 text-sm">APIs, bases de datos y sistemas externos</p>
                </div>
              </div>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                Solicitar Cotización Personalizada
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Proceso de Trabajo */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Nuestro Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { numero: "01", titulo: "Consulta", descripcion: "Analizamos tus necesidades y objetivos" },
              { numero: "02", titulo: "Diseño", descripcion: "Creamos mockups y prototipos interactivos" },
              { numero: "03", titulo: "Desarrollo", descripcion: "Programamos tu sitio con las mejores tecnologías" },
              { numero: "04", titulo: "Lanzamiento", descripcion: "Publicamos y optimizamos tu sitio web" },
            ].map((paso, index) => (
              <div key={index} className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {paso.numero}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{paso.titulo}</h3>
                <p className="text-gray-300">{paso.descripcion}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
