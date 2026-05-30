import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#070707",
          secondary: "#111111",
          card: "#15110E",
          cardAlt: "#17120F",
        },
        cream: "#F4E7D0",
        warmWhite: "#FFF8EA",
        amber: "#F0A84C",
        burntOrange: "#C76A2A",
        wine: "#6D1F1F",
        brown: "#8A4B24",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "warm-radial":
          "radial-gradient(ellipse at 60% 0%, rgba(199,106,42,0.18) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(109,31,31,0.15) 0%, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, #17120F 0%, #0F0D0B 100%)",
      },
      boxShadow: {
        warm: "0 0 40px rgba(199,106,42,0.12)",
        card: "0 4px 32px rgba(0,0,0,0.5)",
        glow: "0 0 60px rgba(240,168,76,0.08)",
      },
      borderColor: {
        soft: "rgba(244,231,208,0.12)",
        warm: "rgba(240,168,76,0.2)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
