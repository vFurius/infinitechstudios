'use client';

import { useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  publicatedAt: string; 
}

const posts: Post[] = [
  {
    id: 4,
    title: "🎁 Clicky & Yo | vAlfa 0.6",
    content: 
      "La Demo de Clicky & Yo ya esta disponible en ITCHIO.IO, ¡Prueba el juego y no olvides de dar sugerencias!",
    publicatedAt: "2025-05-09",
  },
  {
    id: 3,
    title: "🎉 ¡Anunciamos la fecha de lanzamiento de Clicky & Yo!",
    content:
      "El esperado juego 'Clicky & Yo' estará disponible el 18/12/2025 en Steam. ¡Prepárate para la aventura definitiva!",
    publicatedAt: "2025-05-02",
  },
  {
    id: 2,
    title: "🚧 PvZ Remade: ¡Demo en camino!",
    content:
      "Nuestro remade de Plants vs. Zombies avanza rápido. Próximamente lanzaremos una demo para PC y dispositivos móviles.",
    publicatedAt: "2025-03-31",
  },
  {
    id: 1,
    title: "🎨 Nuevo arte conceptual publicado",
    content:
      "Mira los nuevos diseños de personajes y fondos para 'Clicky & Yo'. ¡Nos encantaría saber qué opinas!",
    publicatedAt: "2025-03-15",
  },
];

const NoticiasPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedPostId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPostId(null);
    setModalOpen(false);
  };

  const selectedPost = posts.find((p) => p.id === selectedPostId) || null;

  return (
    <main className="flex-grow py-16 px-4 max-w-3xl mx-auto min-h-[85vh]">
      <h1 className="text-5xl font-bold mb-12 text-center">Foro de Noticias</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white/10 p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out border border-white/0 hover:border-white/40 hover:shadow-2xl hover:shadow-white/10"
            onClick={() => openModal(post.id)}
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-lg text-gray-400">
              {post.content.length > 58
                ? `${post.content.slice(0, 58)}...`
                : post.content}
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500 text-left">
                {new Date(post.publicatedAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-sm text-gray-500 text-right">
                {(() => {
                  const now = new Date();
                  const postDate = new Date(post.publicatedAt);
                  const diffInMs = now.getTime() - postDate.getTime();
                  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;

                  if (diffInDays < 7) {
                    return `hace ${diffInDays} día${diffInDays === 1 ? "." : "s."}`;
                  } else if (diffInDays < 30) {
                    const weeks = Math.floor(diffInDays / 7);
                    return `hace ${weeks} semana${weeks === 1 ? "." : "s."}`;
                  } else if (diffInDays < 365) {
                    const months = Math.floor(diffInDays / 30);
                    return `hace más de ${months} mes${months === 1 ? "." : "es."}`;
                  } else {
                    const years = Math.floor(diffInDays / 365);
                    return `hace más de ${years} año${years === 1 ? "." : "s."}`;
                  }
                })()}
              </span>
            </div>
          </div>
        ))}

        {modalOpen && selectedPost && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-[#1f1f1f] p-8 rounded-2xl flex flex-col border-2 border-white animate-fadeIn max-w-2xl lg:max-w-3xl">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-pretty">
                {selectedPost.title}
              </h2>
              <p className="mb-2 text-lg lg:text-xl text-pretty">
                {selectedPost.content}
              </p>
              <button
                className="px-4 py-2 bg-red-700 hover:bg-red-500 rounded mt-4 cursor-pointer"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default NoticiasPage;
