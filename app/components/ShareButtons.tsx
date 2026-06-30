"use client";

import { motion } from "framer-motion";

interface ShareOption {
  name: string;
  icon: string;
  color: string;
  href: string;
}

const shareOptions: ShareOption[] = [
  {
    name: "WhatsApp",
    icon: "💬",
    color: "bg-green-500",
    href: "https://wa.me/?text=Você%20foi%20convidado%20para%20o%20casamento%20de%20Amanda%20e%20João%20Gabriel!%20Confira%20em%20...&app_absent=0",
  },
  {
    name: "Facebook",
    icon: "f",
    color: "bg-blue-600",
    href: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    name: "Instagram",
    icon: "📷",
    color: "bg-pink-500",
    href: "https://www.instagram.com/?url=",
  },
  {
    name: "Copiar Link",
    icon: "🔗",
    color: "bg-gray-600",
    href: "#",
  },
];

export function ShareButtons() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <section className="share-section" aria-label="Compartilhar">
      <div className="share-header">
        <h2>Compartilhe a Alegria</h2>
        <p>Convide seus amigos para celebrar conosco</p>
      </div>

      <div className="share-buttons">
        {shareOptions.map((option, index) => (
          <motion.a
            key={option.name}
            href={option.href}
            onClick={(e) => {
              if (option.name === "Copiar Link") {
                e.preventDefault();
                handleCopyLink();
              }
            }}
            className={`share-button ${option.color}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noreferrer"
            title={option.name}
          >
            <span>{option.icon}</span>
            <small>{option.name}</small>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
