"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(244,231,208,0.06)] py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[#C76A2A]/05 blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-display text-3xl font-black text-gradient block mb-2">
              Plancito
            </span>
            <p className="text-[#F4E7D0]/40 text-sm max-w-xs leading-relaxed">
              No sabés qué hacer. Plancito te lo resuelve.
            </p>
            <p className="text-[#F4E7D0]/25 text-xs mt-3">
              Hecho para encontrar planes reales cerca tuyo.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#F4E7D0]/45 hover:text-[#F4E7D0]/80 transition-colors group"
            >
              <Instagram size={15} />
              Instagram
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="mailto:hola@plancito.ar"
              className="flex items-center gap-2 text-sm text-[#F4E7D0]/45 hover:text-[#F4E7D0]/80 transition-colors"
            >
              <Mail size={15} />
              Contacto
            </a>
            <button className="text-sm text-[#F4E7D0]/30 hover:text-[#F4E7D0]/50 transition-colors">
              Términos
            </button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[rgba(244,231,208,0.05)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[#F4E7D0]/20 text-xs">
            © {new Date().getFullYear()} Plancito. Todos los derechos reservados.
          </p>
          <p className="text-[#F4E7D0]/15 text-xs italic">
            Útil antes que aesthetic.
          </p>
        </div>
      </div>
    </footer>
  );
}
