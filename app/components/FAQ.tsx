"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Qual o local exato da cerimônia?",
    answer:
      "A cerimônia acontece na Igreja São Luis Rei de França. Av. Coronel Colares Moreira, s/n - Calhau, São Luís - MA",
  },
  {
    question: "Quanto tempo durará o evento?",
    answer:
      "A cerimônia inicia às 18:00h e tem duração aproximada de 30-40 minutos. A recepção prosseguirá a noite.",
  },
  {
    question: "Como faço para confirmar presença?",
    answer:
      "Clique no botão 'Confirmar presença' e envie uma mensagem pelo WhatsApp com os nomes dos confirmados.",
  },
  {
    question: "Posso levar um acompanhante não convidado?",
    answer:
      "O convite é nominativo. Por favor, confirme apenas os nomes informados no convite recebido.",
  },
  {
    question: "Há estacionamento disponível?",
    answer:
      "Sim, ambos os locais possuem estacionamento gratuito para os convidados.",
  },
  {
    question: "Posso tirar fotos durante a cerimônia?",
    answer:
      "Preferimos que durante a cerimônia se aprecie o momento. Haverá espaço para fotos na recepção!",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" aria-label="Dúvidas Frequentes">
      <div className="faq-header">
        <h2>Dúvidas Frequentes</h2>
        <p>Informações que você pode precisar</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
