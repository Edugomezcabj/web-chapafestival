"use client";

import React, { useState } from "react";

export default function LineupTeaser() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const stages = [
    {
      name: "ESCENARIO TROPICAL & CUARTETO",
      tag: "CUMBIA & BANDAS EN VIVO",
      vibe: "Cumbia de la buena, cuarteto cordobés y las bandas en vivo que te hacen cantar a los gritos con el vaso en la mano.",
    },
    {
      name: "ESCENARIO CACHENGUE & FIESTA",
      tag: "HITS & UN POCO DE RUIDO",
      vibe: "Los hits de la fiesta, RKT, reggaetón retro y los mejores DJs de Mendoza para bailar hasta el amanecer.",
    },
    {
      name: "ESCENARIO CHAPANAY CITY",
      tag: "HUMOR & ANIMACIÓN",
      vibe: "Intervenciones en vivo, invitados sorpresa, los personajes de Chapanay City y la animación más delirante del Este.",
    },
  ];

  return (
    <section
      id="lineup"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cartelera de Anuncio / Lineup Teaser */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-heading font-black text-xs uppercase px-4 py-1.5 rounded-sm border-2 border-black mb-6 shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]">
            CARTELERA 2026 • CHAPANAY CITY
          </div>
          <h2 className="font-display text-4xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            3 ESCENARIOS • MÁS DE 20 ARTISTAS
          </h2>
          <p className="font-sans text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Estamos preparando el lineup más manija de la historia del
            Chapafestival. Cumbia, cuarteto, cachengue y humor mendocino.
          </p>
        </div>

        {/* 3 Escenarios Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-black border-2 border-white/20 p-8 rounded-xl hover:border-yellow-400 transition-all duration-300 group hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-6 -bottom-6 font-display text-8xl text-white/[0.03] select-none pointer-events-none">
                0{idx + 1}
              </div>

              <span className="inline-block px-3 py-1 bg-yellow-400/10 text-yellow-400 font-heading font-bold text-xs uppercase tracking-wider rounded-sm mb-4">
                {stage.tag}
              </span>
              <h3 className="font-display text-3xl text-white uppercase mb-3 group-hover:text-yellow-400 transition-colors">
                {stage.name}
              </h3>
              <p className="font-sans text-sm text-white/70 font-light leading-relaxed">
                {stage.vibe}
              </p>
            </div>
          ))}
        </div>

        {/* Newsletter (Inspirado en Lollapalooza Argentina + Chapanay City) */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-fuchsia-600 p-1 sm:p-1.5 rounded-3xl shadow-2xl">
          <div className="bg-black rounded-[22px] p-8 sm:p-14 text-center">
            <h3 className="font-display text-3xl sm:text-5xl uppercase text-white mb-4">
              DEJANOS TU EMAIL PARA ENTERARTE DE LA GRILLA DE CHAPANAY CITY
            </h3>
            <p className="font-sans text-white/80 max-w-xl mx-auto text-sm sm:text-base mb-8">
              Inscribite al Newsletter oficial del Chapafestival y recibí
              alertas de preventa en EntradaWeb, confirmación de artistas y
              novedades del sorteo del ChapaHome.
            </p>

            {subscribed ? (
              <div className="bg-yellow-400 text-black font-heading font-black text-lg py-4 px-8 rounded-full inline-block uppercase tracking-wider animate-bounce">
                ¡ESTÁS EN LA LISTA! TE AVISAREMOS APENAS SALGA LA FASE 1
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico..."
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/50 px-6 py-4 rounded-full font-sans text-sm focus:outline-none focus:border-yellow-400 focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-display font-black uppercase text-base px-8 py-4 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  QUIERO ENTERARME
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
