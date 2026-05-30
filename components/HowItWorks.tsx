"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Decís dónde estás",
    description: "Tu zona, barrio o ubicación aproximada.",
    color: "#C76A2A",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Elegís tu mood",
    description:
      "Tranqui, gratis, cita, amigos, café, evento o algo distinto.",
    color: "#F0A84C",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Recibís opciones reales",
    description:
      "Planes claros, con precio estimado, distancia y recomendación honesta.",
    color: "#8A4B24",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#6D1F1F]/08 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <p className="text-[#C76A2A] text-sm font-semibold tracking-widest uppercase mb-4">
            Cómo funciona
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-[#FFF8EA] mb-5">
            Salir no debería llevarte media hora de búsqueda.
          </h2>
          <p className="text-[#F4E7D0]/55 text-lg leading-relaxed">
            Plancito filtra opciones según lo que realmente importa: dónde
            estás, cuánto querés gastar, qué día es y qué ganas tenés.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                className="group relative bg-[#15110E] border border-[rgba(244,231,208,0.08)] rounded-2xl p-7 hover:border-[rgba(240,168,76,0.18)] transition-all duration-300 hover:bg-[#17120F] hover:shadow-[0_4px_40px_rgba(199,106,42,0.1)]"
              >
                {/* Number */}
                <span className="absolute top-6 right-7 font-display text-5xl font-black text-[rgba(244,231,208,0.04)] select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `radial-gradient(circle, ${step.color}22 0%, transparent 70%)`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: step.color }} />
                </div>

                <h3 className="font-display text-xl font-black text-[#FFF8EA] mb-2 group-hover:text-gradient transition-all">
                  {step.title}
                </h3>
                <p className="text-[#F4E7D0]/50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-[62%] left-[calc(8px+33.3%+28px)] right-[calc(8px+33.3%+28px)] h-px bg-gradient-to-r from-transparent via-[rgba(240,168,76,0.2)] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
