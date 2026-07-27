"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo y Ubicación */}
          <div>
            <div className="inline-block bg-yellow-400 text-black font-display font-black text-2xl px-3 py-1 rounded-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] mb-4">
              CHAPANAY CITY • CHAPA
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
              El festival oficial de Chapanay City. La Misa Chapanaya donde el
              humor mendocino, la cumbia, el cachengue y el yerbeado con
              tortitas se unen hasta el amanecer.
            </p>
            <p className="font-heading font-bold text-xs uppercase tracking-widest text-yellow-400">
              AUTÓDROMO CIUDAD DE SAN MARTÍN, MENDOZA
            </p>
          </div>

          {/* Festival */}
          <div>
            <h4 className="font-display text-xl uppercase text-white mb-5 tracking-wide">
              FESTIVAL
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/70">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#manifiesto"
                  className="hover:text-yellow-400 transition-colors"
                >
                  La Misa Chapanaya
                </a>
              </li>
              <li>
                <a
                  href="#tradiciones"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Tradiciones & Yerbeado
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Experiencia & Sorteos
                </a>
              </li>
              <li>
                <a
                  href="#lineup"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Lineup 2026
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Cómo Llegar
                </a>
              </li>
            </ul>
          </div>

          {/* Ayuda & Entradas */}
          <div>
            <h4 className="font-display text-xl uppercase text-white mb-5 tracking-wide">
              AYUDA & TICKETS
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/70">
              <li>
                <a
                  href="https://www.entradaweb.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors font-semibold text-white"
                >
                  Comprar en EntradaWeb →
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-yellow-400 transition-colors">
                  Preguntas Frecuentes (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="#acceso"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Ingreso con QR
                </a>
              </li>
              <li>
                <a
                  href="#transporte"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Transporte & Colectivos
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl uppercase text-white mb-5 tracking-wide">
              COMUNIDAD
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/70">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador e Información Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Chapafestival, LLC. Todos los derechos
            reservados.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacidad" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#terminos" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
