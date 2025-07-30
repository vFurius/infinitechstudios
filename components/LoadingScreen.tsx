'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'Preparando los juegos...',
  'Cargando mundos increíbles...',
  'Afinando los controles...',
  'Desplegando aventuras...',
  '¡InfiniTech Studios en acción!'
];

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -50 }
};

export default function LoadingScreen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prev => (prev + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        role="status"
        aria-live="polite"
        aria-label={phrases[index]}
        className="fixed inset-0 flex items-center justify-center bg-black"
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <motion.h2 variants={variants} className="text-3xl md:text-5xl lg:text-8xl font-bold text-white honk">
          {phrases[index]}
        </motion.h2>
      </motion.div>
    </AnimatePresence>
  );
}
