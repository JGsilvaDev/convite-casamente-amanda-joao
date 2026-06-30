"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: "/photos/foto_casal.png", alt: "Amanda e João Gabriel" },
  { id: 2, src: "/photos/foto_casal.png", alt: "Momento especial do casal" },
  { id: 3, src: "/photos/foto_casal.png", alt: "Outro momento feliz" },
];

export function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = photos.find((p) => p.id === selectedId);

  return (
    <section className="gallery-section" aria-label="Galeria de fotos">
      <div className="gallery-title">
        <h2>Nossa História</h2>
        <p>Momentos que fazem parte de nós</p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.id}
            className="gallery-item"
            onClick={() => setSelectedId(photo.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="gallery-thumbnail">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span>Ampliar</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery-modal-backdrop"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="gallery-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-close"
                onClick={() => setSelectedId(null)}
                aria-label="Fechar"
              >
                ✕
              </button>
              <Image
                src={selected.src}
                alt={selected.alt}
                width={600}
                height={600}
                className="gallery-modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
