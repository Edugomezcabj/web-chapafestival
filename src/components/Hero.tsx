export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden bg-gradient-to-br from-purple-900 via-fuchsia-900 to-purple-950"
    >
      {/* Capa de textura para darle profundidad al fondo púrpura */}
      <div className="absolute inset-0 bg-black/30 mix-blend-overlay pointer-events-none"></div>

      {/* Orbes de luz decorativos de festival */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Fecha y Lugar - Estilo cartelera con bordes duros */}
      <div className="relative z-10 bg-yellow-400 text-black font-heading font-black tracking-widest px-6 py-2 rounded-full mb-6 text-sm sm:text-base md:text-lg uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
        Chapanay City presenta • Autódromo Ciudad de San Martín
      </div>

      {/* Título Principal con el degradado amarillo/naranja de la gráfica */}
      <h1 className="relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-normal text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 uppercase tracking-tight mb-4 drop-shadow-[0_8px_8px_rgba(0,0,0,0.8)] filter">
        Chapafestival 2026
      </h1>

      {/* Subtítulo oficial de la Misa Chapanaya */}
      <p className="relative z-10 text-xl sm:text-2xl md:text-3xl text-white font-heading font-bold mb-4 tracking-wider uppercase drop-shadow-md max-w-4xl">
        La Misa Chapanaya • La fiesta más manija de Mendoza
      </p>

      {/* Tag especial con las tradiciones (Yerbeado, Tortitas y ChapaHome) */}
      <div className="relative z-10 bg-white/10 border border-yellow-400/50 text-yellow-300 font-sans font-medium text-xs sm:text-sm px-5 py-2 rounded-full mb-10 backdrop-blur-sm max-w-2xl">
        🧉 <strong className="text-white">Ritual único:</strong> Yerbeado + Tortitas gratis al amanecer • Sorteo del <strong className="text-white">ChapaHome</strong> con tu entrada
      </div>

      {/* Botones de Acción */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-5">
        <a
          href="https://www.entradaweb.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white border-2 border-black font-display font-normal text-xl sm:text-2xl px-12 py-5 rounded-full hover:bg-orange-600 transition-all transform hover:-translate-y-1 hover:scale-105 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 tracking-wider uppercase"
        >
          CONSEGUÍ TU LUGAR AHORA
        </a>

        <a
          href="#lineup"
          className="bg-black/60 hover:bg-black text-white border-2 border-white/40 hover:border-yellow-400 font-heading font-bold text-base sm:text-lg px-8 py-5 rounded-full transition-all tracking-widest uppercase hover:text-yellow-400"
        >
          VER CARTELERA
        </a>
      </div>

      {/* Decoración inferior de transición oscura */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}