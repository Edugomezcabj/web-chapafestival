"use client";

import React from "react";

export default function ChapaHomePromo() {
  return (
    <section
      id="tradiciones"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/10 relative overflow-hidden"
    >
      {/* Fondo decorativo con resplandor amarillo/naranja */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabecera */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-heading font-black text-xs uppercase px-4 py-1.5 rounded-sm border-2 border-black mb-4 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]">
            TRADICIONES DE CHAPANAY CITY
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4">
            EL RITUAL QUE NOS HACE ÚNICOS EN EL PAÍS
          </h2>
          <p className="font-sans text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            En el Este mendocino la fiesta no termina cuando se apagan las luces:
            termina cuando sale el sol con nuestras dos marcas registradas.
          </p>
        </div>

        {/* 2 Grandes Banners Promocionales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tarjeta 1: El Yerbeado y Tortitas al Amanecer */}
          <div className="bg-gradient-to-br from-amber-500/15 via-black to-black border-2 border-amber-500/40 hover:border-amber-400 rounded-3xl p-8 sm:p-12 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center mb-8">
                <span className="inline-block px-3 py-1 bg-amber-400 text-black font-heading font-bold text-xs uppercase tracking-wider rounded-sm">
                  RITUAL DEL AMANECER
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4 group-hover:text-amber-400 transition-colors">
                EL YERBEADO MÁS GRANDE DEL MUNDO & TORTITAS
              </h3>

              <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-6 font-light">
                Cuando asoma el sol sobre el Autódromo Ciudad de San Martín, se
                encienden los fogones. Todo el pueblo mendocino comparte el
                mítico yerbeado caliente y miles de tortitas raspadas y
                pinchadas recién horneadas <strong className="text-white">GRATIS</strong> para todos los asistentes.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-amber-400">
                MISA CHAPANAYA • SAN MARTÍN, MENDOZA
              </span>
              <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full font-sans">
                6:00 AM - SALIDA DEL SOL
              </span>
            </div>
          </div>

          {/* Tarjeta 2: El Sorteo del ChapaHome */}
          <div className="bg-gradient-to-br from-orange-500/15 via-black to-black border-2 border-orange-500/40 hover:border-orange-400 rounded-3xl p-8 sm:p-12 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center mb-8">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm">
                  SORTEO CON TU TICKET
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-4 group-hover:text-orange-400 transition-colors">
                SORTEO DEL &ldquo;CHAPAHOME&rdquo; & PREMIOS DELIRANTES
              </h3>

              <p className="font-sans text-white/70 text-base sm:text-lg leading-relaxed mb-6 font-light">
                En Chapafestival no solo venís a cantar a los gritos con tus
                amigxs: ¡te podés ir manejando tu casa propia! Con cada entrada
                comprada en EntradaWeb participás por el sorteo del{" "}
                <strong className="text-white">ChapaHome</strong> (la mítica combi
                rodante equipada) y sorpresas estilo Chapanay City.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-orange-400">
                INCLUIDO EN TU ENTRADA DE ENTRADAWEB
              </span>
              <a
                href="https://www.entradaweb.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full font-heading font-bold uppercase transition-colors"
              >
                VER TICKETS →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
