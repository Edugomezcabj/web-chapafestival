"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      id="como-llegar"
      className="bg-black border-t border-white/10 pt-20 pb-12 px-6 sm:px-10 lg:px-16 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 justify-between mb-24">

          {/* Columna izquierda donde esta el título grande estilo minimalista */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tighter uppercase leading-tight max-w-xl">
                <span className="block">La fiesta más manija</span>
                <span className="block">de Mendoza</span>
              </h3>
            </div>
          </div>

          {/* Columna derecha de Enlaces */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="grid grid-cols-2 gap-12 sm:gap-20">

              {/* Columna 1 */}
              <div>
                <h4 className="font-heading font-bold text-xs sm:text-sm tracking-widest text-yellow-400 uppercase mb-6">
                  FESTIVAL
                </h4>
                <ul className="flex flex-col gap-3 font-sans text-sm text-white/80">
                  <li>
                    <a href="#inicio" className="hover:text-yellow-400 transition-colors">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#fiesta-chapanaya" className="hover:text-yellow-400 transition-colors">
                      Fiesta Chapanaya
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.entradaweb.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      Entradas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.app.goo.gl/ASv4fMbgjnjYK5zX9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      Ubicación
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-yellow-400 transition-colors">
                      Preguntas Frecuentes
                    </a>
                  </li>
                  <li>
                    <a href="#transporte" className="hover:text-yellow-400 transition-colors">
                      Transporte
                    </a>
                  </li>
                </ul>
              </div>

              {/* Columna 2 */}
              <div>
                <h4 className="font-heading font-bold text-xs sm:text-sm tracking-widest text-yellow-400 uppercase mb-6">
                  COMUNIDAD
                </h4>
                <ul className="flex flex-col gap-3 font-sans text-sm text-white/80">
                  <li>
                    <a
                      href="https://www.facebook.com/ChapanayCity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ChapanayCity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@ChapanayCity_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/ChapanayCityOK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      X / Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="hover:text-yellow-400 transition-colors">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Información legal en 3 partes */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} CHAPAFESTIVAL – CHAPANAY CITY. Todos los derechos reservados.
          </div>


          <div className="flex items-center gap-6">
            <a href="#privacidad" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#terminos" className="hover:text-white transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
