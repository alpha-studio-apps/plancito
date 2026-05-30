"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Planes", href: "#planes" },
  { label: "Ejemplo", href: "#ejemplo" },
  { label: "Unirme", href: "#waitlist" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070707]/80 backdrop-blur-md border-b border-[rgba(244,231,208,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl font-black tracking-tight text-gradient hover:opacity-80 transition-opacity"
          >
            Plancito
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-[#F4E7D0]/60 hover:text-[#F4E7D0] transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav("#waitlist")}
              className="px-5 py-2.5 rounded-full bg-[#C76A2A] hover:bg-[#F0A84C] text-[#070707] text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Armar mi Plancito
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#F4E7D0]/70 hover:text-[#F4E7D0] transition-colors"
            aria-label="Menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0F0B09]/95 backdrop-blur-xl border-b border-[rgba(244,231,208,0.08)] md:hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left text-base font-medium text-[#F4E7D0]/70 hover:text-[#F4E7D0] transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#waitlist")}
                className="mt-2 w-full py-3 rounded-full bg-[#C76A2A] hover:bg-[#F0A84C] text-[#070707] font-bold text-sm transition-all"
              >
                Armar mi Plancito
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
