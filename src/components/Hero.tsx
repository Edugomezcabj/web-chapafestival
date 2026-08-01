"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 118,
    hours: 10,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fecha objetivo: 22 de Noviembre de 2026 a las 21:00 hs
    const targetDate = new Date("2026-11-22T21:00:00-03:00").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden bg-zinc-950"
    >
      {/* Video de Fondo (ubicado en la carpeta public/hero-video.mp4) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-85"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>

      {/* Capa oscura de contraste sobre el video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 z-0 pointer-events-none"></div>

      <div className="relative z-10 inline-block bg-yellow-400 text-black font-display font-black text-xl sm:text-2xl px-6 py-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 uppercase tracking-wide">
        22 DE NOVIEMBRE 2026
      </div>

      {/* Bloques de Banner al estilo Cosquín Rock (Semántica H1 para SEO) */}
      <h1 className="relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
        <span className="bg-[#d94814] text-white font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase px-2.5 py-1 sm:px-4 md:px-4.5 lg:px-5 sm:py-2 tracking-tight shadow-2xl block">
          CHAPAFESTIVAL 2026
        </span>
        <span className="bg-[#e8dec8] text-[#d94814] font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase px-2.5 py-1 sm:px-4 md:px-4.5 lg:px-5 sm:py-2 tracking-tight shadow-2xl block">
          YA TIENE FECHA
        </span>
      </h1>

      {/* Cuenta Regresiva */}
      <div className="relative z-10 grid grid-cols-4 gap-4 sm:gap-8 md:gap-14 my-6 text-center">
        {/* Días */}
        <div className="flex flex-col items-center">
          <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight">
            {timeLeft.days}
          </span>
          <span className="font-heading font-bold text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-widest mt-1 sm:mt-2">
            Días
          </span>
        </div>

        {/* Horas */}
        <div className="flex flex-col items-center">
          <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="font-heading font-bold text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-widest mt-1 sm:mt-2">
            Horas
          </span>
        </div>

        {/* Minutos */}
        <div className="flex flex-col items-center">
          <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="font-heading font-bold text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-widest mt-1 sm:mt-2">
            Minutos
          </span>
        </div>

        {/* Segundos */}
        <div className="flex flex-col items-center">
          <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="font-heading font-bold text-xs sm:text-sm md:text-base text-white/80 uppercase tracking-widest mt-1 sm:mt-2">
            Segundos
          </span>
        </div>
      </div>

      {/* Botones de Acción / CTA */}
      <div className="relative z-10 mt-10">
        <a
          href="https://www.entradaweb.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#d94814] hover:bg-[#bf3d0f] text-white font-display text-xl sm:text-2xl px-10 py-4 rounded-full transition-all transform hover:-translate-y-1 hover:scale-105 shadow-2xl tracking-wider uppercase border border-white/20"
        >
          ADQUIRÍ TUS ENTRADAS
        </a>
      </div>
    </section>
  );
}