"use client";

import { motion } from "framer-motion";
import { Heart, Coffee, User, Wallet, CalendarDays, Sparkles, Navigation } from "lucide-react";

const audience = [
  { icon: Heart, label: "Para una cita", description: "Sin improvisar ni quedar mal." },
  { icon: Coffee, label: "Para un café", description: "Encontrá el lugar correcto según el momento." },
  { icon: User, label: "Para salir solo", description: "Despejarte sin depender de nadie." },
  { icon: Wallet, label: "Para planes baratos", description: "Opciones reales con presupuesto ajustado." },
  { icon: Navigation, label: "Para cortar la rutina", description: "Algo distinto cerca, sin planificar demasiado." },
  { icon: CalendarDays, label: "Para descubrir eventos", description: "Qué pasa cerca tuyo esta semana." },
  { icon: Sparkles, label: "Para algo distinto", description: "Experiencias locales que no conocías." },
];

export default function AudienceSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#6D1F1F]/08 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-[#C76A2A] text-sm font-semibold tracking-widest uppercase mb-4">
            Para quién es
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-[#FFF8EA]">
            Para los que quieren salir, pero no quieren pensar tanto.
          </h2>
        </motion.div>

        {/* Cards — horizontal wrapping with centered last row */}
        <div className="flex flex-wrap justify-center gap-3">
          {audience.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                className="group bg-[#15110E] border border-[rgba(244,231,208,0.08)] rounded-2xl px-5 py-4 flex items-start gap-3 hover:border-[rgba(240,168,76,0.2)] hover:bg-[#1A130E] transition-all duration-300 cursor-default max-w-[260px] w-full sm:w-auto"
              >
                <div className="w-9 h-9 rounded-xl bg-[rgba(199,106,42,0.12)] border border-[rgba(199,106,42,0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(240,168,76,0.12)] transition-colors">
                  <Icon size={16} className="text-[#C76A2A] group-hover:text-[#F0A84C] transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#FFF8EA] mb-0.5">{item.label}</p>
                  <p className="text-xs text-[#F4E7D0]/40 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
