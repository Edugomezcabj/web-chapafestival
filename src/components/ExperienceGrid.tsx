"use client";

import React from "react";

export default function ExperienceGrid() {
  const experiences = [
    {
      badge: "TRADICIÓN MENDOCINA • GRATIS",
      title: "YERBEADO & TORTITAS AL AMANECER",
      description:
        "La marca registrada innegociable de la Misa Chapanaya: al salir el sol en el Autódromo se prenden los fogones para repartir yerbeado caliente y miles de tortitas mendocinas gratis para todo el pueblo.",
      gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
      accent: "text-amber-400",
      borderColor: "hover:border-amber-500",
      icon: (
        <svg
          className="w-10 h-10 text-amber-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      ),
    },
    {
      badge: "TU TICKET ES TU CHANCE",
      title: "SORTEO DEL 'CHAPAHOME'",
      description:
        "En Chapafestival te podés ir manejando tu casa rodante propia. Con tu entrada comprada en EntradaWeb participás por el sorteo del ChapaHome (nuestra combi rodante equipada) y premios delirantes de Chapanay City.",
      gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
      accent: "text-orange-400",
      borderColor: "hover:border-orange-500",
      icon: (
        <svg
          className="w-10 h-10 text-orange-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
    },
    {
      badge: "MÚSICA TROPICAL & FIESTA",
      title: "CUMBIA, CUARTETO & CACHENGUE",
      description:
        "Escenarios en simultáneo con las bandas más populares del país (historial con Amar Azul, Ke Personajes, La K'onga, Ráfaga, Un Poco de Ruido) y DJs de cachengue para bailar sin descanso.",
      gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
      accent: "text-fuchsia-400",
      borderColor: "hover:border-fuchsia-500",
      icon: (
        <svg
          className="w-10 h-10 text-fuchsia-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
          />
        </svg>
      ),
    },
    {
      badge: "SABORES DEL ESTE MENDOCINO",
      title: "FOOD TRUCKS & BARRAS 360°",
      description:
        "El patio gastronómico más grande de San Martín con food trucks locales, barras gigantes con fernet, vino y cerveza bien helada, kermés de juegos y puntos de hidratación.",
      gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
      accent: "text-yellow-400",
      borderColor: "hover:border-yellow-400",
      icon: (
        <svg
          className="w-10 h-10 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-black relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header al estilo Lollapalooza */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></span>
              <span className="font-heading font-semibold text-xs text-yellow-400 tracking-widest uppercase">
                MÁS QUE UN FESTIVAL
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              LA EXPERIENCIA CHAPA
            </h2>
          </div>
          <p className="font-sans text-white/70 max-w-md text-sm sm:text-base leading-relaxed">
            Cada edición nos trae una puesta escénica única, arte, los mejores
            sabores y un sinfín de experiencias para disfrutar con amigxs.
          </p>
        </div>

        {/* Grilla de Tarjetas Temáticas (Inspirado en Lolla Food / Kidzapalooza) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative bg-zinc-900/80 border border-white/15 rounded-2xl p-8 sm:p-10 transition-all duration-300 group hover:-translate-y-1.5 overflow-hidden ${exp.borderColor} flex flex-col justify-between min-h-[320px]`}
            >
              {/* Degradado de fondo en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              ></div>

              <div>
                {/* Cabecera de la tarjeta */}
                <div className="flex items-start justify-between mb-8">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-heading font-semibold uppercase tracking-wider text-white/80 border border-white/10">
                    {exp.badge}
                  </span>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>
                </div>

                {/* Título y descripción */}
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>

              {/* Botón Explorar */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-heading font-bold text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                  CHAPA 2026 • AUTÓDROMO SAN MARTÍN
                </span>
                <span className={`text-xl font-bold ${exp.accent}`}>+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
