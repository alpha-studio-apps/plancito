"use client";

import { motion } from "framer-motion";
import { MapPin, Wallet } from "lucide-react";

const cards = [
  {
    badge: "Mejor opción general",
    badgeColor: "#F0A84C",
    title: "Café + caminata por zona céntrica",
    cost: "Bajo",
    costIcon: "💸",
    ideal: "Salir sin organizar demasiado.",
    contra: "Puede llenarse en horario pico.",
    highlight: true,
  },
  {
    badge: "Opción gratis",
    badgeColor: "#8A4B24",
    title: "Plaza / paseo / actividad cultural",
    cost: "$0",
    costIcon: "✨",
    ideal: "Cortar el día sin gastar.",
    contra: null,
    highlight: false,
  },
  {
    badge: "Opción evento",
    badgeColor: "#6D1F1F",
    title: "Evento cultural disponible hoy",
    cost: "Gratis o bajo",
    costIcon: "🎭",
    ideal: "Descubrir algo nuevo cerca.",
    contra: "Verificar horario antes de ir.",
    highlight: false,
  },
  {
    badge: "Plan B",
    badgeColor: "#8A4B24",
    title: "Lugar simple para merendar o caminar",
    cost: "Bajo",
    costIcon: "🚶",
    ideal: "Algo sin vueltas.",
    contra: null,
    highlight: false,
  },
];

export default function ExampleResponse() {
  return (
    <section id="ejemplo" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-[#C76A2A]/07 blur-[130px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-12"
        >
          <p className="text-[#C76A2A] text-sm font-semibold tracking-widest uppercase mb-4">
            Ejemplo real
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-[#FFF8EA] mb-5">
            Así podría responder Plancito.
          </h2>
        </motion.div>

        {/* Input query card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#17120F] border border-[rgba(244,231,208,0.1)] rounded-2xl p-5 mb-6 inline-flex items-start gap-3 max-w-lg"
        >
          <MapPin size={16} className="text-[#C76A2A] mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-[#F4E7D0]/40 text-xs mb-1">Tu consulta:</p>
            <p className="text-[#F4E7D0]/85 text-sm font-medium">
              "Estoy en La Plata centro, hoy a la tarde. Quiero algo gratis o
              barato."
            </p>
          </div>
        </motion.div>

        {/* Response header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-[#F0A84C] text-sm font-semibold mb-5"
        >
          Te armé 4 plancitos cerca:
        </motion.p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className={`relative bg-[#15110E] rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02] ${
                card.highlight
                  ? "border-[rgba(240,168,76,0.3)] shadow-[0_0_30px_rgba(240,168,76,0.08)]"
                  : "border-[rgba(244,231,208,0.08)]"
              }`}
            >
              {card.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(240,168,76,0.04)] to-transparent pointer-events-none" />
              )}

              {/* Badge */}
              <span
                className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                style={{
                  background: `${card.badgeColor}20`,
                  color: card.badgeColor,
                  border: `1px solid ${card.badgeColor}30`,
                }}
              >
                {card.badge}
              </span>

              <h3 className="font-display text-base font-black text-[#FFF8EA] mb-3 leading-snug">
                {card.title}
              </h3>

              {/* Cost */}
              <div className="flex items-center gap-2 mb-3">
                <Wallet size={13} className="text-[#C76A2A]" />
                <span className="text-xs text-[#F4E7D0]/50">Costo:</span>
                <span className="text-xs text-[#F0A84C] font-semibold">
                  {card.costIcon} {card.cost}
                </span>
              </div>

              {/* Ideal + contra */}
              <div className="space-y-1.5 text-xs">
                <p className="text-[#F4E7D0]/50">
                  <span className="text-[#8A4B24] font-semibold">Ideal:</span>{" "}
                  {card.ideal}
                </p>
                {card.contra && (
                  <p className="text-[#F4E7D0]/40">
                    <span className="text-[#6D1F1F] font-semibold">Contra:</span>{" "}
                    {card.contra}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-[#0F0B09] border border-[rgba(240,168,76,0.15)] rounded-2xl p-6 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C76A2A] to-[#F0A84C] flex items-center justify-center flex-shrink-0">
              <span className="text-[#070707] font-black text-[9px]">P</span>
            </div>
            <span className="text-[#F0A84C] text-xs font-semibold">
              Mi recomendación sincera
            </span>
          </div>
          <p className="text-[#F4E7D0]/65 text-sm leading-relaxed">
            Si querés gastar poco, haría la{" "}
            <span className="text-[#FFF8EA] font-semibold">opción gratis + café.</span>{" "}
            Simple, cerca y sin complicarte. Si te surge ganas de algo más,
            revisá el evento cultural — suele valer la pena y no cuesta nada.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
