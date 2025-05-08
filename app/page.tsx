"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <main className="relative flex items-center justify-center min-h-[85vh] font-sans">
      <div className="relative max-w-xl text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          InfiniTech Studios
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-200">
          Grandes ideas, desde un pequeño lugar.
        </p>
        <Link
          href="/juegos"
          aria-label="Ver nuestros juegos en InfiniTech Studios"
          className="inline-block bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-lg font-semibold transition-transform hover:scale-105 motion-reduce:transition-none shadow-lg shadow-red-400/30"
        >
          Ver Juegos
        </Link>
      </div>
    </main>
  );
}
