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
    },
    {
      badge: "TU TICKET ES TU CHANCE",
      title: "SORTEO DEL 'CHAPAHOME'",
      description:
        "En Chapafestival te podés ir manejando tu casa rodante propia. Con tu entrada comprada en EntradaWeb participás por el sorteo del ChapaHome (nuestra combi rodante equipada) y premios delirantes de Chapanay City.",
      gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
      accent: "text-orange-400",
      borderColor: "hover:border-orange-500",
    },
    {
      badge: "MÚSICA TROPICAL & FIESTA",
      title: "CUMBIA, CUARTETO & CACHENGUE",
      description:
        "Escenarios en simultáneo con las bandas más populares del país (historial con Amar Azul, Ke Personajes, La K'onga, Ráfaga, Un Poco de Ruido) y DJs de cachengue para bailar sin descanso.",
      gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
      accent: "text-fuchsia-400",
      borderColor: "hover:border-fuchsia-500",
    },
    {
      badge: "SABORES DEL ESTE MENDOCINO",
      title: "FOOD TRUCKS & BARRAS 360°",
      description:
        "El patio gastronómico más grande de San Martín con food trucks locales, barras gigantes con fernet, vino y cerveza bien helada, kermés de juegos y puntos de hidratación.",
      gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
      accent: "text-yellow-400",
      borderColor: "hover:border-yellow-400",
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
            <div className="mb-3">
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
                <div className="flex items-start mb-8">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-heading font-semibold uppercase tracking-wider text-white/80 border border-white/10">
                    {exp.badge}
                  </span>
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
