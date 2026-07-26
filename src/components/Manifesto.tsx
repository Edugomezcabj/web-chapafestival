"use client";

import React from "react";

export default function Manifesto() {
  const stats = [
    {
      number: "🧉 RITUAL",
      title: "YERBEADO & TORTITAS",
      desc: "La marca registrada del amanecer mendocino: yerbeado caliente gigante y miles de tortitas raspadas y pinchadas gratis al salir el sol.",
    },
    {
      number: "🚐 SORTEO",
      title: "DEL 'CHAPAHOME'",
      desc: "Con tu entrada de EntradaWeb participás por el sorteo de nuestra combi rodante equipada para viajar con tus amigxs.",
    },
    {
      number: "📍 SAN MARTÍN",
      title: "TEMPLO DEL ESTE",
      desc: "El punto de encuentro más épico del Este mendocino en el Autódromo Ciudad de San Martín con escenarios en vivo, food trucks y kermés.",
    },
  ];

  return (
    <section
      id="manifiesto"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/10 overflow-hidden"
    >
      {/* Fondo con grilla sutil e iluminación de neón amarilla */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Etiqueta / Tag superior */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-yellow-400">
            ORGULLO MENDOCINO • CHAPANAY CITY
          </span>
        </div>

        {/* Declaración Gigante al estilo Lollapalooza */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-normal tracking-tight text-white mb-6 leading-none">
          LA MISA CHAPANAYA ESTÁ EN{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-fuchsia-500">
            NUESTRO ADN
          </span>
        </h2>

        {/* Subtítulo de alto impacto */}
        <p className="font-sans text-lg sm:text-2xl text-white/80 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          De una fiesta entre amigxs de San Martín al festival más manija y
          autóctono de Mendoza, impulsado por{" "}
          <strong className="text-yellow-400">Chapanay City</strong>. Humor,
          música tropical, cachengue y el amanecer más épico de tu vida.
        </p>

        {/* Grilla de Billboards / Estadísticas del Festival */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-black/60 border border-white/10 p-8 rounded-xl hover:border-yellow-400/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="font-display text-3xl sm:text-4xl text-yellow-400 mb-4 group-hover:scale-105 transition-transform inline-block">
                {stat.number}
              </div>
              <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider mb-2">
                {stat.title}
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
