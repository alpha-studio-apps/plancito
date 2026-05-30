"use client";

import { motion } from "framer-motion";
import { Coffee, CalendarDays, Heart, Users, User, Wallet } from "lucide-react";

const plans = [
  {
    icon: Wallet,
    title: "Gratis",
    description:
      "Actividades, plazas, muestras, ferias y opciones sin gastar.",
    accent: "#F0A84C",
    tag: "Sin costo",
  },
  {
    icon: Coffee,
    title: "Cafés",
    description:
      "Lugares para merendar, trabajar, charlar o cortar el día.",
    accent: "#C76A2A",
    tag: "Tranqui",
  },
  {
    icon: CalendarDays,
    title: "Eventos",
    description:
      "Agenda cultural, música, ferias, muestras y experiencias cercanas.",
    accent: "#8A4B24",
    tag: "Esta semana",
  },
  {
    icon: Heart,
    title: "Citas",
    description:
      "Opciones pensadas para salir con alguien sin improvisar.",
    accent: "#6D1F1F",
    tag: "Con onda",
  },
  {
    icon: Users,
    title: "Amigos",
    description:
      "Planes simples para juntarse, comer algo o hacer algo distinto.",
    accent: "#C76A2A",
    tag: "Grupal",
  },
  {
    icon: User,
    title: "Solo",
    description:
      "Ideas para salir, caminar, tomar algo o despejarte sin depender de nadie.",
    accent: "#F0A84C",
    tag: "Libre",
  },
];

export default function PlanTypes() {
  return (
    <section id="planes" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C76A2A]/07 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <p className="text-[#C76A2A] text-sm font-semibold tracking-widest uppercase mb-4">
            Tipos de planes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-[#FFF8EA]">
            Planes para cuando no sabés qué hacer.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
                className="group relative bg-[#15110E] border border-[rgba(244,231,208,0.08)] rounded-2xl p-6 overflow-hidden hover:border-[rgba(240,168,76,0.15)] hover:bg-[#1A130E] transition-all duration-300 cursor-default"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${plan.accent}10 0%, transparent 60%)`,
                  }}
                />

                {/* Tag */}
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"
                  style={{
                    background: `${plan.accent}15`,
                    color: plan.accent,
                    border: `1px solid ${plan.accent}25`,
                  }}
                >
                  {plan.tag}
                </span>

                {/* Icon + title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: `${plan.accent}18`,
                      border: `1px solid ${plan.accent}28`,
                    }}
                  >
                    <Icon size={18} style={{ color: plan.accent }} />
                  </div>
                  <h3 className="font-display text-xl font-black text-[#FFF8EA] pt-1.5">
                    {plan.title}
                  </h3>
                </div>

                <p className="text-[#F4E7D0]/50 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
