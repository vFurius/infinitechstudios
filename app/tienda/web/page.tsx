"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Check,
  Star,
  Code,
  Palette,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronDown,
  CreditCard,
  Mail,
  MapPin,
  Calendar,
  Lock,
  X,
  Rocket,
  Target,
  Globe,
} from "lucide-react"

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
    precioARS: 100000,
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
    precioARS: 300000,
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
    precioARS: 500000,
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
  const [mostrarPago, setMostrarPago] = useState(false)
  const [planSeleccionado, setPlanSeleccionado] = useState<any>(null)
  const [metodoPago, setMetodoPago] = useState<"tarjeta" | "mercadopago">("tarjeta")
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    codigoPostal: "",
    numeroTarjeta: "",
    fechaCaducidad: "",
    cvv: "",
    email: "",
    aceptoTerminos: false,
  })

  const formatearPrecio = (precioARS: number) => {
    const moneda = monedas[monedaSeleccionada]
    const precioConvertido = Math.round(precioARS * moneda.factor)
    return `${moneda.simbolo}${precioConvertido.toLocaleString()}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const formatearNumeroTarjeta = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatearFechaCaducidad = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  const handleNumeroTarjetaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatearNumeroTarjeta(e.target.value)
    setFormData((prev) => ({ ...prev, numeroTarjeta: formatted }))
  }

  const handleFechaCaducidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatearFechaCaducidad(e.target.value)
    setFormData((prev) => ({ ...prev, fechaCaducidad: formatted }))
  }

  const abrirPago = (plan: any) => {
    setPlanSeleccionado(plan)
    setMostrarPago(true)
  }

  const cerrarPago = () => {
    setMostrarPago(false)
    setPlanSeleccionado(null)
    setFormData({
      nombreCompleto: "",
      codigoPostal: "",
      numeroTarjeta: "",
      fechaCaducidad: "",
      cvv: "",
      email: "",
      aceptoTerminos: false,
    })
  }

  const procesarPago = () => {
    if (!formData.aceptoTerminos) {
      alert("Debes aceptar los términos y condiciones")
      return
    }

    if (metodoPago === "mercadopago") {
      window.open("https://www.mercadopago.com.ar/", "_blank")
    } else {
      const paypalUrl = `https://www.paypal.com/paypalme/axelcastro7542/${formatearPrecio(planSeleccionado.precioARS).replace(/[^0-9]/g, "")}`
      window.open(paypalUrl, "_blank")
    }

    alert(`Procesando pago de ${formatearPrecio(planSeleccionado.precioARS)} para el plan ${planSeleccionado.nombre}`)
    cerrarPago()
  }

  const isFormValid = () => {
    if (metodoPago === "mercadopago") {
      return formData.nombreCompleto && formData.email && formData.aceptoTerminos
    }
    return (
      formData.nombreCompleto &&
      formData.codigoPostal &&
      formData.numeroTarjeta.replace(/\s/g, "").length >= 16 &&
      formData.fechaCaducidad.length === 5 &&
      formData.cvv.length >= 3 &&
      formData.email &&
      formData.aceptoTerminos
    )
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background with animated particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-800/90" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
      <div className="relative z-10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-3xl mb-20">
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">InfiniTech Web</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Desarrollo Web
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transformamos tus ideas en experiencias web excepcionales. Sitios modernos, rápidos y optimizados para
                el éxito de tu negocio con tecnologías de vanguardia.
              </p>

              <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-300">
                <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Next.js & React</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <Palette className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Diseño Moderno</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Optimización SEO</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Seguridad Avanzada</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 animate-bounce delay-1000">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <div className="absolute bottom-10 right-10 animate-bounce delay-2000">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>
            </div>
          </section>

          {/* Currency Selector */}
          <section className="mb-16">
            <div className="flex justify-center animate-fade-in-up delay-500">
              <div className="relative">
                <button
                  onClick={() => setMostrarSelector(!mostrarSelector)}
                  className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm border border-gray-600/30 rounded-2xl px-8 py-4 text-white hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-lg">Moneda: {monedaSeleccionada}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mostrarSelector ? "rotate-180" : ""}`} />
                </button>

                {mostrarSelector && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-md border border-gray-600/30 rounded-2xl overflow-hidden z-10 shadow-2xl">
                    {Object.keys(monedas).map((moneda) => (
                      <button
                        key={moneda}
                        onClick={() => {
                          setMonedaSeleccionada(moneda as keyof typeof monedas)
                          setMostrarSelector(false)
                        }}
                        className="w-full px-8 py-4 text-left text-white hover:bg-gray-700/60 transition-colors flex items-center gap-3"
                      >
                        <span className="font-semibold">{moneda}</span>
                        <span className="text-gray-400">- {monedas[moneda as keyof typeof monedas].simbolo}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Plans Section */}
          <section className="mb-20">
            <div className="text-center mb-16 animate-fade-in-up delay-700">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Planes y Precios</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Elige el plan perfecto para tu proyecto. Todos incluyen diseño responsivo, código de calidad y soporte
                profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {planesBase.map((plan, index) => (
                <div
                  key={index}
                  className={`group relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                    plan.popular
                      ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
                      : "border-gray-600/30 hover:border-gray-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
                  }`}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-2xl">
                        <Star className="w-4 h-4" />
                        Más Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform shadow-2xl">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {plan.nombre}
                    </h3>
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        {formatearPrecio(plan.precioARS)}
                      </span>
                      <span className="text-gray-400 ml-2 text-lg">{monedaSeleccionada}</span>
                    </div>
                    <p className="text-gray-300 text-lg">{plan.descripcion}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300">{caracteristica}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => abrirPago(plan)}
                    className={`w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r ${plan.color} hover:opacity-90 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl text-lg`}
                  >
                    Elegir Plan
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Custom Solutions */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/30 text-center animate-fade-in-up delay-1200">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">¿Necesitas algo más específico?</h3>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  Creamos soluciones web completamente personalizadas. Desde aplicaciones web complejas hasta
                  integraciones específicas, trabajamos contigo para crear exactamente lo que necesitas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="group p-8 bg-gray-800/40 rounded-3xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Desarrollo a Medida</h4>
                    <p className="text-gray-400 text-sm">Funcionalidades específicas para tu negocio</p>
                  </div>
                  <div className="group p-8 bg-gray-800/40 rounded-3xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Diseño Único</h4>
                    <p className="text-gray-400 text-sm">Identidad visual completamente personalizada</p>
                  </div>
                  <div className="group p-8 bg-gray-800/40 rounded-3xl border border-gray-600/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">Integración Avanzada</h4>
                    <p className="text-gray-400 text-sm">APIs, bases de datos y sistemas externos</p>
                  </div>
                </div>

                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30"
                >
                  Solicitar Cotización Personalizada
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="text-center mb-16 animate-fade-in-up delay-1400">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Nuestro Proceso</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Un enfoque estructurado y colaborativo para garantizar el éxito de tu proyecto
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  numero: "01",
                  titulo: "Consulta",
                  descripcion: "Analizamos tus necesidades y objetivos",
                  icon: Target,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  numero: "02",
                  titulo: "Diseño",
                  descripcion: "Creamos mockups y prototipos interactivos",
                  icon: Palette,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  numero: "03",
                  titulo: "Desarrollo",
                  descripcion: "Programamos tu sitio con las mejores tecnologías",
                  icon: Code,
                  color: "from-green-500 to-green-600",
                },
                {
                  numero: "04",
                  titulo: "Lanzamiento",
                  descripcion: "Publicamos y optimizamos tu sitio web",
                  icon: Rocket,
                  color: "from-orange-500 to-red-500",
                },
              ].map((paso, index) => (
                <div
                  key={index}
                  className="group relative text-center animate-fade-in-up"
                  style={{ animationDelay: `${1500 + index * 100}ms` }}
                >
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${paso.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:rotate-6 transition-transform`}
                    >
                      <paso.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-white border-2 border-gray-600">
                      {paso.numero}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {paso.titulo}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{paso.descripcion}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Payment Modal */}
      {mostrarPago && planSeleccionado && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md rounded-3xl border border-gray-600/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Finalizar Compra</h3>
                  <p className="text-gray-300 text-lg">
                    Plan {planSeleccionado.nombre} - {formatearPrecio(planSeleccionado.precioARS)}
                  </p>
                </div>
                <button
                  onClick={cerrarPago}
                  className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-gray-700/50 rounded-xl"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-6">Método de Pago</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setMetodoPago("tarjeta")}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      metodoPago === "tarjeta"
                        ? "border-blue-500/50 bg-blue-500/10 text-blue-300"
                        : "border-gray-600/30 bg-gray-800/40 text-gray-300 hover:border-gray-500/50"
                    }`}
                  >
                    <CreditCard className="w-8 h-8 mx-auto mb-3" />
                    <span className="font-medium">Tarjeta de Crédito</span>
                  </button>
                  <button
                    onClick={() => setMetodoPago("mercadopago")}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      metodoPago === "mercadopago"
                        ? "border-blue-500/50 bg-blue-500/10 text-blue-300"
                        : "border-gray-600/30 bg-gray-800/40 text-gray-300 hover:border-gray-500/50"
                    }`}
                  >
                    <div className="w-8 h-8 mx-auto mb-3 bg-blue-500 rounded"></div>
                    <span className="font-medium">MercadoPago</span>
                  </button>
                </div>
              </div>

              {/* Payment Method Logos */}
              <div className="mb-8 p-6 bg-gray-800/40 rounded-2xl border border-gray-600/30">
                <p className="text-sm text-gray-300 mb-4 text-center">Métodos de pago aceptados:</p>
                <div className="flex justify-center items-center gap-6">
                  <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                    <Image src="/payment/visa.png" alt="Visa" width={40} height={25} />
                  </div>
                  <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                    <Image src="/payment/mastercard.png" alt="Mastercard" width={40} height={25} />
                  </div>
                  <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                    <Image src="/payment/mercadopago.png" alt="MercadoPago" width={40} height={25} />
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">
                      <CreditCard className="w-4 h-4 inline mr-2" />
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="nombreCompleto"
                      value={formData.nombreCompleto}
                      onChange={handleInputChange}
                      placeholder="Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-300">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="juan@ejemplo.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      required
                    />
                  </div>
                </div>

                {metodoPago === "tarjeta" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-300">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Código Postal
                      </label>
                      <input
                        type="text"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleInputChange}
                        placeholder="1234"
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3 text-gray-300">
                        <CreditCard className="w-4 h-4 inline mr-2" />
                        Número de Tarjeta
                      </label>
                      <input
                        type="text"
                        name="numeroTarjeta"
                        value={formData.numeroTarjeta}
                        onChange={handleNumeroTarjetaChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-3 text-gray-300">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Fecha de Caducidad
                        </label>
                        <input
                          type="text"
                          name="fechaCaducidad"
                          value={formData.fechaCaducidad}
                          onChange={handleFechaCaducidadChange}
                          placeholder="MM/AA"
                          maxLength={5}
                          className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-3 text-gray-300">
                          <Lock className="w-4 h-4 inline mr-2" />
                          CVV/CVC
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="aceptoTerminos"
                    checked={formData.aceptoTerminos}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    required
                  />
                  <label className="text-sm text-gray-300">
                    Acepto los{" "}
                    <Link href="/terminos" className="text-blue-400 hover:text-blue-300 underline">
                      términos y condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/privacidad" className="text-blue-400 hover:text-blue-300 underline">
                      política de privacidad
                    </Link>
                  </label>
                </div>

                <button
                  type="button"
                  onClick={procesarPago}
                  disabled={!isFormValid()}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isFormValid()
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white hover:scale-105 shadow-2xl shadow-green-500/30"
                      : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <CreditCard className="w-6 h-6" />
                  Pagar {formatearPrecio(planSeleccionado.precioARS)}
                </button>
              </form>

              <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                <p className="text-sm text-blue-300 flex items-start gap-3">
                  <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  Tus datos están protegidos con encriptación SSL de 256 bits. El pago se procesa de forma segura a
                  través de PayPal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
