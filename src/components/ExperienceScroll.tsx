"use client";

import { motion } from "framer-motion";

export default function ExperienceScroll() {
    const pillars = [
        {
            id: 1,
            title: "Patio Gastronómico y la clásica tradición del Yerbeado",
            image: "/foto-1.jpg",
            boxColor: "bg-yellow-400",
            textColor: "text-black",
            rotate: "-rotate-2",
        },
        {
            id: 2,
            title: "Shows, actividades y música hasta el amanecer",
            image: "/foto-2.jpg",
            boxColor: "bg-purple-600",
            textColor: "text-white",
            rotate: "rotate-2",
        },
        {
            id: 3,
            title: "La Fiesta Chapanaya está en nuestro ADN",
            image: "/foto-3.jpg",
            boxColor: "bg-orange-500",
            textColor: "text-white",
            rotate: "-rotate-1",
        }
    ];

    return (
        <section id="fiesta-chapanaya" className="w-full flex flex-col">
            {pillars.map((pillar) => (
                <article
                    key={pillar.id}
                    className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden p-6"
                    style={{ backgroundImage: `url(${pillar.image})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Acá sucede la magia de la animación */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }} // Arranca invisible y 100px más abajo
                        whileInView={{ opacity: 1, y: 0 }} // Cuando entra en pantalla, sube a su lugar y se hace visible
                        viewport={{ once: false, amount: 0.3 }} // Se activa cuando el 30% de la caja es visible. once: false hace que se repita si volvés a subir.
                        transition={{ duration: 0.8, ease: "easeOut" }} // Duración y suavidad del movimiento
                        className="relative z-10"
                    >
                        {/* Tu caja con diseño original */}
                        <div className={`
              p-6 md:p-12 max-w-3xl text-center transform transition-transform duration-300 hover:scale-105
              border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
              ${pillar.boxColor} ${pillar.rotate}
            `}>
                            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter ${pillar.textColor}`}>
                                {pillar.title}
                            </h2>
                        </div>
                    </motion.div>

                </article>
            ))}
        </section>
    );
}