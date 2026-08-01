import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://www.chapafestival.com"),
  title: "Chapafestival 2026 - Chapanay City",
  description:
    "El festival oficial de Chapanay City. Donde el humor mendocino, la música y el yerbeado se unen hasta el amanecer.",
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
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Chapafestival 2026 - Chapanay City",
    description:
      "El festival oficial de Chapanay City. Donde el humor mendocino, la música y el yerbeado se unen hasta el amanecer.",
    url: "https://www.chapafestival.com",
    type: "website",
    locale: "es_AR",
    siteName: "Chapafestival 2026",
    images: [
      {
        url: "/foto-1.jpg",
        width: 1200,
        height: 630,
        alt: "Chapafestival 2026 - El festival oficial de Chapanay City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapafestival 2026 - Chapanay City",
    description:
      "El festival oficial de Chapanay City. Donde el humor mendocino, la música y el yerbeado se unen hasta el amanecer.",
    creator: "@ChapanayCityOK",
    images: ["/foto-1.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
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
