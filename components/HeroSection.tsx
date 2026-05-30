"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const chips = [
  "Gratis",
  "Café",
  "Cita",
  "Amigos",
  "Evento",
  "Tranqui",
  "Barato",
  "Cerca tuyo",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#C76A2A]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#6D1F1F]/12 blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#F0A84C]/5 blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(240,168,76,0.25)] bg-[rgba(240,168,76,0.06)] mb-7"
          >
            <Sparkles size={13} className="text-[#F0A84C]" />
            <span className="text-[#F0A84C] text-xs font-semibold tracking-wide uppercase">
              Útil antes que aesthetic
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-[2.6rem] md:text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight mb-6"
          >
            No sabés qué <span className="text-gradient">hacer.</span>
            <br />
            Plancito te lo{" "}
            <span className="relative inline-block">
              resuelve.
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C76A2A] to-[#F0A84C] rounded-full" />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#F4E7D0]/60 text-lg leading-relaxed mb-9 max-w-md"
          >
            Decinos dónde estás, cuándo querés salir y cuánto querés gastar. Te
            recomendamos planes reales cerca tuyo:{" "}
            <span className="text-[#F4E7D0]/85">
              gratis, baratos, tranquilos o especiales.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <button
              onClick={() => handleScroll("#waitlist")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C76A2A] hover:bg-[#F0A84C] text-[#070707] font-bold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(199,106,42,0.3)]"
            >
              Armar mi Plancito
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => handleScroll("#como-funciona")}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[rgba(244,231,208,0.15)] hover:border-[rgba(244,231,208,0.35)] text-[#F4E7D0]/70 hover:text-[#F4E7D0] font-medium text-base transition-all duration-200"
            >
              Ver cómo funciona
            </button>
          </motion.div>

          {/* Chips */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 max-w-sm"
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium bg-[#17120F] border border-[rgba(244,231,208,0.1)] text-[#F4E7D0]/50 hover:text-[#F0A84C] hover:border-[rgba(240,168,76,0.25)] transition-all duration-200 cursor-default"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: chat mockup */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm">
            {/* Glow behind card — más pronunciado */}
            <div className="absolute -inset-2 bg-[#C76A2A]/20 blur-[70px] rounded-3xl" />
            <div className="absolute -inset-1 bg-[#F0A84C]/08 blur-[40px] rounded-3xl" />

            <div className="relative bg-[#15110E] rounded-3xl border border-[rgba(240,168,76,0.22)] p-6 shadow-[0_8px_60px_rgba(0,0,0,0.7),0_0_0_1px_rgba(240,168,76,0.06)]">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[rgba(244,231,208,0.08)]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C76A2A] to-[#F0A84C] flex items-center justify-center">
                  <span className="text-[#070707] font-display font-black text-sm">P</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#FFF8EA]">Plancito</p>
                  <p className="text-xs text-[#F4E7D0]/40">Tu asistente de planes</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#F0A84C]/60 animate-pulse" />
                  <span className="text-[10px] text-[#F4E7D0]/30">activo</span>
                </div>
              </div>

              {/* User message */}
              <div className="flex justify-end mb-4">
                <div className="bg-[#1E160F] border border-[rgba(244,231,208,0.08)] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-[#F4E7D0]/80">
                    Estoy en Palermo, hoy a la tarde, quiero algo barato y tranqui 🙌
                  </p>
                </div>
              </div>

              {/* Bot response */}
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C76A2A] to-[#F0A84C] flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="text-[#070707] font-black text-[10px]">P</span>
                </div>
                <div className="bg-[#0F0B09] border border-[rgba(240,168,76,0.12)] rounded-2xl rounded-tl-sm px-4 py-3 flex-1">
                  <p className="text-xs text-[#F0A84C] font-semibold mb-2">
                    Te armé 4 opciones cerca 📍
                  </p>
                  <div className="space-y-2">
                    {[
                      { n: "1", label: "Café tranquilo para merendar" },
                      { n: "2", label: "Plan gratis para caminar" },
                      { n: "3", label: "Evento cultural cerca" },
                      { n: "4", label: "Plan B si querés algo simple" },
                    ].map((item) => (
                      <div
                        key={item.n}
                        className="flex items-start gap-2 text-sm text-[#F4E7D0]/75"
                      >
                        <span className="text-[#C76A2A] font-bold text-xs mt-0.5 flex-shrink-0">
                          {item.n}.
                        </span>
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Typing indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="flex gap-2.5 mt-4"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C76A2A] to-[#F0A84C] flex-shrink-0 flex items-center justify-center">
                  <span className="text-[#070707] font-black text-[10px]">P</span>
                </div>
                <div className="bg-[#0F0B09] border border-[rgba(240,168,76,0.08)] rounded-2xl rounded-tl-sm px-4 py-3.5 flex items-center gap-1.5">
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay,
                        ease: "easeInOut",
                      }}
                      className="w-1.5 h-1.5 rounded-full bg-[#F4E7D0]/30"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
