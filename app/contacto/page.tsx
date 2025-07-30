"use client"

import * as z from "zod"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import {
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  Phone,
  Send,
  User,
  FileText,
  Gamepad2,
  Code,
  HelpCircle,
  Instagram,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react"

const consultaTypes = [
  { value: "desarrollo-juegos", label: "Desarrollo de Videojuegos", icon: Gamepad2 },
  { value: "desarrollo-web", label: "Desarrollo Web", icon: Code },
  { value: "colaboracion", label: "Colaboración/Partnership", icon: MessageCircle },
  { value: "soporte", label: "Soporte Técnico", icon: HelpCircle },
  { value: "prensa", label: "Prensa/Media", icon: FileText },
  { value: "otro", label: "Otro", icon: Mail },
]

const faqs = [
  {
    question: "¿Ofrecen servicios de desarrollo web?",
    answer:
      "¡Sí! A través de InfiniTech Web ofrecemos desarrollo de sitios web modernos, desde landing pages hasta e-commerce completos.",
  },
  {
    question: "¿Trabajan con clientes internacionales?",
    answer: "Absolutamente. Trabajamos con clientes de todo el mundo y ofrecemos comunicación en español e inglés.",
  },
  {
    question: "¿Cuál es su proceso de trabajo?",
    answer:
      "Comenzamos con una consulta gratuita, luego creamos una propuesta detallada, seguida de desarrollo iterativo con feedback constante.",
  },
]

export default function ContactoPage() {
  const { toast } = useToast()
  const [selectedConsulta, setSelectedConsulta] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "El nombre debe tener al menos 2 caracteres.",
    }),
    email: z.string().email({
      message: "Por favor, introduce una dirección de correo válida.",
    }),
    subject: z.string().min(5, {
      message: "El asunto debe tener al menos 5 caracteres.",
    }),
    consultaType: z.string().min(1, {
      message: "Por favor, selecciona un tipo de consulta.",
    }),
    message: z.string().min(10, {
      message: "El mensaje debe tener al menos 10 caracteres.",
    }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      consultaType: "",
      message: "",
    },
    mode: "onChange",
  })

  const watchedFields = watch()

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const selectedType = consultaTypes.find((type) => type.value === values.consultaType)
      const formData = {
        ...values,
        consultaTypeLabel: selectedType?.label || "No especificado",
      }

      const response = await fetch("https://formspree.io/f/xdkggwnzlo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "¡Mensaje Enviado Exitosamente!",
          description: "Gracias por contactarnos. Te responderemos dentro de 24-48 horas.",
        })
        reset()
        setSelectedConsulta("")
      } else {
        throw new Error("Error en el envío")
      }
    } catch {
      toast({
        title: "Error al Enviar",
        description:
          "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por Instagram.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldStatus = (fieldName: keyof typeof watchedFields) => {
    const hasError = errors[fieldName]
    const hasValue = watchedFields[fieldName] && watchedFields[fieldName].length > 0

    if (hasError) return "error"
    if (hasValue) return "success"
    return "default"
  }

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Hablemos</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una idea increíble? ¿Necesitas un sitio web? ¿Quieres colaborar con nosotros? Estamos aquí para
            hacer realidad tus proyectos digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-600/30 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Envíanos un Mensaje</h2>
                  <p className="text-gray-400">Completa el formulario y te responderemos pronto</p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      <User className="w-4 h-4 inline mr-2" />
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        placeholder="Tu nombre completo"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-700/50 border text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          getFieldStatus("name") === "error"
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : getFieldStatus("name") === "success"
                              ? "border-green-500/50 focus:border-green-500 focus:ring-green-500/20"
                              : "border-gray-600/30 focus:border-blue-500/50 focus:ring-blue-500/20"
                        }`}
                      />
                      {getFieldStatus("name") === "success" && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                      )}
                      {getFieldStatus("name") === "error" && (
                        <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
                      )}
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="tu@email.com"
                        className={`w-full px-4 py-3 rounded-xl bg-gray-700/50 border text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                          getFieldStatus("email") === "error"
                            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                            : getFieldStatus("email") === "success"
                              ? "border-green-500/50 focus:border-green-500 focus:ring-green-500/20"
                              : "border-gray-600/30 focus:border-blue-500/50 focus:ring-blue-500/20"
                        }`}
                      />
                      {getFieldStatus("email") === "success" && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                      )}
                      {getFieldStatus("email") === "error" && (
                        <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
                      )}
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Asunto
                  </label>
                  <div className="relative">
                    <input
                      id="subject"
                      type="text"
                      {...register("subject")}
                      placeholder="¿De qué quieres hablar?"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-700/50 border text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                        getFieldStatus("subject") === "error"
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : getFieldStatus("subject") === "success"
                            ? "border-green-500/50 focus:border-green-500 focus:ring-green-500/20"
                            : "border-gray-600/30 focus:border-blue-500/50 focus:ring-blue-500/20"
                      }`}
                    />
                    {getFieldStatus("subject") === "success" && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
                    )}
                    {getFieldStatus("subject") === "error" && (
                      <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
                    )}
                  </div>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-300">
                    <HelpCircle className="w-4 h-4 inline mr-2" />
                    Tipo de Consulta
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {consultaTypes.map((type) => {
                      const Icon = type.icon
                      const isSelected = selectedConsulta === type.value
                      return (
                        <label
                          key={type.value}
                          className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                            isSelected
                              ? "border-blue-500/50 bg-blue-500/10 text-blue-300"
                              : "border-gray-600/30 bg-gray-700/30 text-gray-300 hover:border-gray-500/50 hover:bg-gray-700/50"
                          }`}
                        >
                          <input
                            type="radio"
                            value={type.value}
                            {...register("consultaType")}
                            onChange={(e) => setSelectedConsulta(e.target.value)}
                            className="sr-only"
                          />
                          <Icon className={`w-5 h-5 ${isSelected ? "text-blue-400" : "text-gray-400"}`} />
                          <span className="font-medium">{type.label}</span>
                        </label>
                      )
                    })}
                  </div>
                  {errors.consultaType && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.consultaType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Mensaje
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      placeholder="Cuéntanos sobre tu proyecto, idea o consulta. Mientras más detalles nos proporciones, mejor podremos ayudarte..."
                      className={`w-full px-4 py-3 rounded-xl bg-gray-700/50 border text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                        getFieldStatus("message") === "error"
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : getFieldStatus("message") === "success"
                            ? "border-green-500/50 focus:border-green-500 focus:ring-green-500/20"
                            : "border-gray-600/30 focus:border-blue-500/50 focus:ring-blue-500/20"
                      }`}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                      {watchedFields.message?.length || 0}/500
                    </div>
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    isSubmitting || !isValid
                      ? "bg-gray-600/50 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover:scale-105 shadow-lg hover:shadow-blue-500/30"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-600/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Información de Contacto</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300 text-sm">Respuesta en 24-48 horas</p>
                    <a
                      href="mailto:infinitechstudios5@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      infinitechstudios5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horario de Atención</h4>
                    <p className="text-gray-300 text-sm">Lunes a Viernes: 9:00 - 18:00 (GMT-3)</p>
                    <p className="text-gray-300 text-sm">Fines de semana: Respuesta limitada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Ubicación</h4>
                    <p className="text-gray-300 text-sm">Buenos Aires, Argentina</p>
                    <p className="text-gray-300 text-sm">Trabajamos remotamente</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-600/30">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  Síguenos en Instagram
                </h4>
                <a
                  href="https://instagram.com/infinitechstudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Instagram className="w-4 h-4" />
                  @infinitechstudios
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-600/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Preguntas Frecuentes</h3>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
                      <span className="font-medium text-white text-sm">{faq.question}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-2 p-4 text-sm text-gray-300 leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-blue-300 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  ¿No encuentras la respuesta que buscas? No dudes en contactarnos directamente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Desde la idea inicial hasta el lanzamiento final, estamos aquí para acompañarte en cada paso del camino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar Mensaje
            </a>
            <a
              href="/tienda"
              className="inline-flex items-center gap-3 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/30 hover:border-gray-500/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
