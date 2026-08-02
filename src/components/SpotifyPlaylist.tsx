export default function SpotifyPlaylist() {
    return (
        <section
            id="previa"
            className="relative bg-zinc-950 min-h-screen flex flex-col items-center justify-center py-32 px-4 sm:px-6 overflow-hidden bg-fixed bg-center bg-cover scroll-mt-20 w-full"
            style={{ backgroundImage: "url(/foto-5.jpg)" }}
        >
            {/* Capa oscura de contraste sobre la imagen de fondo */}
            <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center relative z-10">

                {/* Texto del título */}
                <h2 className="font-black tracking-tighter text-4xl sm:text-5xl md:text-6xl text-white uppercase mb-10 text-center drop-shadow-lg">
                    TU PLAYLIST IDEAL PARA LA PREVIA
                </h2>

                {/* Contenedor del reproductor de Spotify con ellink oficial de la playlist nuestra */}
                <div className="w-full max-w-5xl bg-black p-2 sm:p-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] rounded-2xl transform transition-transform hover:-translate-y-1">
                    <iframe
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/playlist/4UKyk6AyzxIdOhqjYtv4nI?utm_source=generator&theme=0"
                        width="100%"
                        height="500"
                        frameBorder="0"
                        allowFullScreen={false}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Playlist Fiesta Chapanaya"
                    ></iframe>
                </div>

            </div>
        </section>
    );
}