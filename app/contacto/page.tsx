export default function ContactoPage() {
  return (
    <main className="flex-grow py-16 px-4 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-center">Contáctanos</h1>
    <form className="space-y-6">
      <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400" />
      <input type="email" placeholder="Tu email" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400" />
      <textarea rows={5} placeholder="Tu mensaje" className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400"></textarea>
      <button type="submit" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold">Enviar</button>
    </form>
  </main>
  );
};
