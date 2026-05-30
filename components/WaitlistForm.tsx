"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

const interests = [
  "Gratis",
  "Cafés",
  "Eventos",
  "Citas",
  "Amigos",
  "Solo",
  "Baratos",
  "Cerca",
];

type FormData = {
  name: string;
  city: string;
  email: string;
  whatsapp: string;
  interests: string[];
};

export default function WaitlistForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    city: "",
    email: "",
    whatsapp: "",
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const toggleInterest = (item: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = "Ingresá tu nombre.";
    if (!form.city.trim()) newErrors.city = "Ingresá tu ciudad o zona.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Ingresá un email válido.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    // Simulate API call — replace with Supabase / Formspree / Resend / Google Sheets
    // Example Supabase:
    // const { error } = await supabase.from("waitlist").insert([form]);
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#C76A2A]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#6D1F1F]/10 blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[#C76A2A] text-sm font-semibold tracking-widest uppercase mb-4">
            Waitlist
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight text-[#FFF8EA] mb-5">
            Sé de los primeros en probar Plancito.
          </h2>
          <p className="text-[#F4E7D0]/55 text-base leading-relaxed">
            Estamos preparando la primera versión. Dejá tu mail o WhatsApp y te
            avisamos cuando puedas pedir tu primer plancito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="bg-[#15110E] border border-[rgba(244,231,208,0.1)] rounded-3xl p-7 md:p-9 shadow-[0_8px_60px_rgba(0,0,0,0.5)]"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-[rgba(240,168,76,0.12)] border border-[rgba(240,168,76,0.25)] flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-[#F0A84C]" />
                </div>
                <h3 className="font-display text-2xl font-black text-[#FFF8EA] mb-3">
                  ¡Listo!
                </h3>
                <p className="text-[#F4E7D0]/60 text-base leading-relaxed">
                  Cuando Plancito esté activo, te avisamos.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name + City */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#F4E7D0]/50 mb-2 uppercase tracking-wide">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={`w-full bg-[#0F0B09] border rounded-xl px-4 py-3 text-sm text-[#F4E7D0] placeholder-[#F4E7D0]/25 outline-none focus:border-[rgba(240,168,76,0.4)] transition-colors ${
                        errors.name
                          ? "border-[#6D1F1F]"
                          : "border-[rgba(244,231,208,0.1)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[#6D1F1F] text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#F4E7D0]/50 mb-2 uppercase tracking-wide">
                      Ciudad / Zona
                    </label>
                    <input
                      type="text"
                      placeholder="Buenos Aires, La Plata…"
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      className={`w-full bg-[#0F0B09] border rounded-xl px-4 py-3 text-sm text-[#F4E7D0] placeholder-[#F4E7D0]/25 outline-none focus:border-[rgba(240,168,76,0.4)] transition-colors ${
                        errors.city
                          ? "border-[#6D1F1F]"
                          : "border-[rgba(244,231,208,0.1)]"
                      }`}
                    />
                    {errors.city && (
                      <p className="text-[#6D1F1F] text-xs mt-1">{errors.city}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#F4E7D0]/50 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={`w-full bg-[#0F0B09] border rounded-xl px-4 py-3 text-sm text-[#F4E7D0] placeholder-[#F4E7D0]/25 outline-none focus:border-[rgba(240,168,76,0.4)] transition-colors ${
                      errors.email
                        ? "border-[#6D1F1F]"
                        : "border-[rgba(244,231,208,0.1)]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[#6D1F1F] text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* WhatsApp (optional) */}
                <div>
                  <label className="block text-xs font-semibold text-[#F4E7D0]/50 mb-2 uppercase tracking-wide">
                    WhatsApp{" "}
                    <span className="text-[#F4E7D0]/25 normal-case font-normal">
                      (opcional)
                    </span>
                  </label>
                  <div className="relative">
                    <MessageCircle
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F4E7D0]/25"
                    />
                    <input
                      type="tel"
                      placeholder="+54 9 11 1234-5678"
                      value={form.whatsapp}
                      onChange={(e) =>
                        setForm({ ...form, whatsapp: e.target.value })
                      }
                      className="w-full bg-[#0F0B09] border border-[rgba(244,231,208,0.1)] rounded-xl pl-10 pr-4 py-3 text-sm text-[#F4E7D0] placeholder-[#F4E7D0]/25 outline-none focus:border-[rgba(240,168,76,0.4)] transition-colors"
                    />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-xs font-semibold text-[#F4E7D0]/50 mb-3 uppercase tracking-wide">
                    ¿Qué planes te interesan más?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => {
                      const selected = form.interests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleInterest(item)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                            selected
                              ? "bg-[rgba(199,106,42,0.2)] border-[rgba(199,106,42,0.5)] text-[#F0A84C]"
                              : "bg-transparent border-[rgba(244,231,208,0.1)] text-[#F4E7D0]/40 hover:border-[rgba(244,231,208,0.2)] hover:text-[#F4E7D0]/60"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 rounded-full bg-[#C76A2A] hover:bg-[#F0A84C] disabled:opacity-60 disabled:cursor-not-allowed text-[#070707] font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(199,106,42,0.25)]"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-4 h-4 border-2 border-[#070707]/30 border-t-[#070707] rounded-full inline-block"
                      />
                      Enviando…
                    </span>
                  ) : (
                    <>
                      Quiero probar Plancito
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
