"use client";

import { motion } from "framer-motion";
import { Wallet, Navigation, Users, ArrowRight, CheckCircle, Link } from "lucide-react";

const features = [
  {
    icon: Wallet,
    label: "Precio estimado",
    description: "Sabés cuánto vas a gastar antes de salir.",
  },
  {
    icon: Navigation,
    label: "Distancia aproximada",
    description: "Opciones cerca tuyo, no al otro lado de la ciudad.",
  },
  {
    icon: Users,
    label: "Ideal para",
    description: "Cita, amigos, solo, cortar el día. Sin ambigüedades.",
  },
  {
    icon: ArrowRight,
    label: "Posible contra",
    description: "Si algo tiene un problema real, Plancito te lo dice.",
  },
  {
    icon: CheckCircle,
    label: "Recomendación sincera",
    description: "Una sola opción destacada, con criterio claro.",
  },
  {
    icon: Link,
    label: "Links para verificar",
    description: "Antes de ir, confirmás que todo esté activo.",
  },
];

export default function HonestRecommendation() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#6D1F1F]/08 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C76A2A] text-sm font-semibold tracking-widest uppercase mb-4">
              No es una lista random
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-[#FFF8EA] mb-6">
              No te tira lugares.{" "}
              <span className="text-gradient">Te arma un plancito.</span>
            </h2>
            <p className="text-[#F4E7D0]/55 text-lg leading-relaxed mb-8">
              Plancito no busca mostrarte veinte opciones iguales. Te recomienda{" "}
              <span className="text-[#F4E7D0]/80">pocas, claras y con criterio.</span>{" "}
              Si algo no conviene, te lo dice. Si algo es plan B, también.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#17120F] border border-[rgba(240,168,76,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#F0A84C]" />
              <span className="text-sm text-[#F4E7D0]/60">
                Honesto antes que completo
              </span>
            </div>
          </motion.div>

          {/* Right: feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }}
                  className="group bg-[#15110E] border border-[rgba(244,231,208,0.08)] rounded-xl p-4 hover:border-[rgba(240,168,76,0.15)] hover:bg-[#1A130E] transition-all duration-250"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon size={15} className="text-[#C76A2A] flex-shrink-0" />
                    <span className="text-[#FFF8EA] text-sm font-semibold">
                      {f.label}
                    </span>
                  </div>
                  <p className="text-[#F4E7D0]/45 text-xs leading-relaxed">
                    {f.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
