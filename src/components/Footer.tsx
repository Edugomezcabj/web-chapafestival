"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      id="como-llegar"
      className="bg-black border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo y Ubicación */}
          <div>
            <div className="inline-block bg-yellow-400 text-black font-display font-black text-2xl px-3 py-1 rounded-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] mb-4">
              CHAPAFESTIVAL 2026
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
              El festival oficial de Chapanay City. Donde el
              humor mendocino, la música y el yerbeado se unen hasta el amanecer.
            </p>
            <a
              href="https://maps.app.goo.gl/ASv4fMbgjnjYK5zX9"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-bold text-xs uppercase tracking-widest text-yellow-400 hover:text-white transition-colors w-fit"
              title="Ver ubicación en Google Maps"
            >
              <span className="underline decoration-yellow-400/50 hover:decoration-white">
                AUTÓDROMO CIUDAD DE SAN MARTÍN, MENDOZA
              </span>
            </a>
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
                  href="#fiesta-chapanaya"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Fiesta Chapanaya
                </a>
              </li>
              <li>
                <a
                  href="#como-llegar"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Info importante
                </a>
              </li>
            </ul>
          </div>

          {/* Ayuda & Entradas */}
          <div>
            <h4 className="font-display text-xl uppercase text-white mb-5 tracking-wide">
              AYUDA
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/70">
              <li>
                <a
                  href="https://www.entradaweb.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors font-semibold text-white"
                >
                  Comprar en EntradaWeb
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-yellow-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href="#transporte"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Transporte
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
                  href="https://www.facebook.com/ChapanayCity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ChapanayCity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ChapanayCity_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/ChapanayCityOK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span>X</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador e Información Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Chapafestival ℗. Todos los derechos
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
