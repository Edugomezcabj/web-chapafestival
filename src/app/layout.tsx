import type { Metadata } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chapafestival 2026 | Chapanay City | La Misa Chapanaya en San Martín",
  description:
    "El festival de Chapanay City en el Autódromo Ciudad de San Martín, Mendoza. Música en vivo, cumbia, cuarteto, cachengue, sorteo del ChapaHome y el tradicional yerbeado con tortitas al amanecer.",
  keywords: [
    "Chapafestival",
    "Chapanay City",
    "Misa Chapanaya",
    "Festival Mendoza",
    "San Martín Mendoza",
    "Autódromo San Martín",
    "Yerbeado y tortitas",
    "ChapaHome",
    "Entradas Chapafestival",
    "EntradaWeb",
  ],
  openGraph: {
    title: "Chapafestival 2026 | Chapanay City | La Misa Chapanaya",
    description:
      "La fiesta más manija del Este mendocino. Música en vivo, sorteo del ChapaHome y yerbeado con tortitas al amanecer en el Autódromo San Martín.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
