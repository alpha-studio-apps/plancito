import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plancito — No sabés qué hacer. Plancito te lo resuelve.",
  description:
    "Planes cerca tuyo según tu zona, tu presupuesto y tus ganas: cafés, eventos, actividades gratis y lugares para salir sin perder tiempo buscando.",
  keywords: [
    "planes",
    "salir",
    "qué hacer",
    "cafés",
    "eventos",
    "actividades gratis",
    "Argentina",
  ],
  openGraph: {
    title: "Plancito",
    description: "No sabés qué hacer. Plancito te lo resuelve.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${fraunces.variable} ${manrope.variable} bg-[#070707] text-[#F4E7D0] font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
