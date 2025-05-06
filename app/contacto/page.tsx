'use client';

import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function ContactoPage() {
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres.',
    }),
    email: z.string().email({
      message: 'Por favor, introduce una dirección de correo válida.',
    }),
    message: z.string().min(10, {
      message: 'El mensaje debe tener al menos 10 caracteres.',
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('https://formspree.io/f/xdkggwnz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: '¡Mensaje Enviado!',
          description: 'Gracias por contactarnos. Te responderemos pronto.',
        });
        console.log("Mensaje enviado correctamente");
        reset();
      } else {
        toast({
          title: 'Envío Fallido',
          description: '¡Vaya! Algo salió mal. Por favor, inténtalo de nuevo más tarde.',
          variant: 'destructive',
        });
        console.error('Error al enviar el mensaje');
      }
    } catch {
      toast({
        title: 'Envío Fallido',
        description: '¡Vaya! Algo salió mal. Por favor, inténtalo de nuevo más tarde.',
        variant: 'destructive',
      });
      console.error('Error al enviar el mensaje');
    }
  }

  return (
    <main className="flex-grow py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contáctanos</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            aria-invalid={errors.name ? 'true' : 'false'}
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400"
          />
          {errors.name && (
            <p role="alert" className="mt-1 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            placeholder="Tu email"
            className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400"
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
            placeholder="Tu mensaje"
            className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400"
          />
          {errors.message && (
            <p role="alert" className="mt-1 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-700 hover:bg-red-500 px-6 py-3 rounded-lg font-semibold disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </main>
  );
}
