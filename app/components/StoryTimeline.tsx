"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "2018",
    title: "O Encontro",
    description: "Quando nossos caminhos se cruzaram de forma mágica",
  },
  {
    year: "2020",
    title: "Primeiras Viagens",
    description: "Conhecendo o mundo juntos",
  },
  {
    year: "2023",
    title: "O Sim Mais Importante",
    description: "João pediu a mão de Amanda com todo seu amor",
  },
  {
    year: "2026",
    title: "Para Sempre Começa",
    description: "Chegou o dia de oficializar nosso amor",
  },
];

export function StoryTimeline() {
  return (
    <section className="timeline-section" aria-label="Linha do tempo">
      <div className="timeline-title">
        <h2>Nossa Jornada</h2>
        <p>Os momentos que nos definem</p>
      </div>

      <div className="timeline">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
            <div className="timeline-marker" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
