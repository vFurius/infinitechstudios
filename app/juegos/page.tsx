"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/globals.css";

const juegosData: Record<string, GameData> = {
  juego1: {
    fondo: "url(/fondos/fondo1.png)",
    fuente: "/fonts/Brianne_s_hand.ttf",
    imagen: "/juegos/juego1.png",
    titulo: "Plantas Vs. Zombies Remade",
    descripcion: "Un remade necesario para un gran juego",
    estado: "En desarrollo",
    lanzamiento: "TBD",
    disponible: "PC, Android/iOS",
  },
  juego2: {
    fondo: "url(/fondos/fondo2.png)",
    fuente: "/fonts/False.ttf",
    imagen: "/juegos/juego2.png",
    titulo: "Clicky & Yo",
    descripcion: "Demo Disponible En:",
    link: "https://vfurius.itch.io/clicky-yo",
    estado: "Próximo lanzamiento",
    lanzamiento: "18/12/2025",
    disponible: "PC, Steam",
  },
};

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameData | null>(null);
  const [originalBg, setOriginalBg] = useState<string>("");
  const body = typeof window !== "undefined" ? document.body : null;

  useEffect(() => {
    if (body) {
      setOriginalBg(getComputedStyle(body).backgroundImage);
    }
  }, [body]);

  useEffect(() => {
    if (!body) return;
    if (selectedGame) {
      body.style.backgroundImage = selectedGame.fondo;
      body.style.backgroundSize = "cover";
      body.style.backgroundPosition = "center";
      const font = new FontFace("GameFont", `url(${selectedGame.fuente})`);
      font.load().then((f) => {
        document.fonts.add(f);
        body.style.fontFamily = "GameFont, system-ui";
      });
    } else {
      body.style.backgroundImage = originalBg;
      body.style.fontFamily = "system-ui";
    }
  }, [selectedGame, body, originalBg]);

  function openModal(key: string) {
    setSelectedGame(juegosData[key]);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedGame(null);
  }

  return (
    <section className=" min-h-[80vh]">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-4">
        Nuestros juegos
      </h1>
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mx-auto max-w-4xl">
        {Object.keys(juegosData).map((key) => {
          const game = juegosData[key];
          return (
            <div
              key={key}
              className="game-card p-4 border-2 border-white bg-black cursor-pointer rounded-md hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl hover:shadow-white/40"
              onClick={() => openModal(key)}
            >
              <Image
                width={402}
                height={48}
                src={game.imagen}
                alt={game.titulo}
                className="rounded mb-4 mx-auto"
              />
              <h3 className="text-2xl font-bold mb-2">{game.titulo}</h3>
              <p className="text-gray-400 mb-2">Lanzamiento: {game.lanzamiento}</p>
              <div className="flex items-center">
                <p className="text-gray-600 text-sm">Estatus: {game.estado}</p>
                <span
                  className={`w-3 h-3 rounded-full ml-2 ${
                    game.estado === "Listo"
                      ? "bg-green-500"
                      : game.estado === "Próximo lanzamiento"
                      ? "bg-yellow-300"
                      : "bg-red-500"
                  }`}
                ></span>
              </div>
            </div>
          );
        })}
      </main>

      {modalOpen && selectedGame && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-100 animate-fadeIn">
          <div className="modal-content bg-[#1f1f1f] p-8 rounded-2xl flex flex-col md:flex-row gap-8 border-2 border-white">
            <Image
              width={132}
              height={32}
              src={selectedGame.imagen}
              alt={selectedGame.titulo}
              className="w-full md:w-1/2 rounded-lg"
            />
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold mb-2">{selectedGame.titulo}</h2>
              <p className="mb-2 text-lg">
                {selectedGame.descripcion}{" "}
                {selectedGame.link ? (
                  <Link
                    className="text-red-600 hover:text-black transition-colors"
                    href={selectedGame.link}
                  >
                    itch.io
                  </Link>
                ) : null}
              </p>
              <p className="mb-2 text-sm text-gray-400">
                Estado: {selectedGame.estado}
              </p>
              <p className="mb-2 text-sm text-gray-400">
                Lanzamiento: {selectedGame.lanzamiento}
              </p>
              <p className="mb-4 text-sm text-gray-400">
                Disponible en: {selectedGame.disponible}
              </p>
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded mt-4 cursor-pointer"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
