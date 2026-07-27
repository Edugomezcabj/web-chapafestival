"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INICIO", href: "#inicio" },
    { name: "MISA CHAPANAYA", href: "#manifiesto" },
    { name: "CÓMO LLEGAR", href: "#ubicacion" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Fecha (Estilo Lollapalooza + Chapanay City) */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="bg-yellow-400 text-black font-display font-black text-2xl px-3 py-1 rounded-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] group-hover:bg-yellow-300 transition-colors">
            CHAPA
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-heading font-bold text-xs sm:text-sm tracking-widest text-yellow-400 uppercase">
              CHAPANAY CITY PRESENTA • 21 DE NOVIEMBRE
            </span>
            <span className="text-white/70 text-xs font-sans tracking-wide">
              Autódromo Ciudad de San Martín, Mendoza
            </span>
          </div>
        </a>

        {/* Menú Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-heading font-semibold text-sm tracking-widest uppercase text-white/90 hover:text-yellow-400 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Botón CTA Ticket y Hamburguesa Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.entradaweb.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-display font-black text-sm sm:text-base px-6 py-2.5 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.9)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.9)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all tracking-wider uppercase"
          >
            CONSEGUÍ TU LUGAR
          </a>

          {/* Menú Mobile Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-yellow-400 focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-white/15 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-5">
            <div className="sm:hidden pb-3 border-b border-white/10">
              <p className="font-heading font-bold text-sm text-yellow-400 uppercase">
                Sábado 21 de Noviembre 2026
              </p>
              <p className="text-white/70 text-xs">
                Autódromo Ciudad de San Martín, Mendoza
              </p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-bold text-lg text-white hover:text-yellow-400 tracking-wider uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Progress bar al estilo de Lollapalooza AR */}
      <div className="w-full bg-white/10 h-1 overflow-hidden">
        <div
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-fuchsia-500 h-full transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
