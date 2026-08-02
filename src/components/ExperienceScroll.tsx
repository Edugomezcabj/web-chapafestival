"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registramos el plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ExperienceScroll() {
    const containerRef = useRef<HTMLElement>(null);

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

    useGSAP(() => {
        // Seleccionamos todas las tarjetas que tengan la clase .pillar-card
        const cards = gsap.utils.toArray<HTMLElement>(".pillar-card");

        cards.forEach((card) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card.closest("article"),
                    start: "top 85%", // Empieza a entrar por abajo de la pantalla
                    end: "bottom 15%", // Sale por arriba de la pantalla
                    scrub: 1.5, // 1.5s de inercia para un movimiento más espeso, pesado y ralentizado
                },
            });

            // 1) Aparición gradual con zoom mucho más notorio (0% a 40% del scroll del bloque)
            tl.fromTo(
                card,
                { opacity: 0, scale: 0.45, y: 120 }, // scale: 0.45 (más del doble de zoom) para que sea súper evidente
                { opacity: 1, scale: 1, y: 0, ease: "none", duration: 0.4 }
            )
            // 2) Permanencia legible y estable en el centro de la pantalla (40% a 60% del scroll)
            .to(card, { opacity: 1, scale: 1, y: 0, ease: "none", duration: 0.2 })
            // 3) Salida/entrada inversa con zoom muy marcado (60% a 100%)
            .to(card, { opacity: 0, scale: 0.45, y: -120, ease: "none", duration: 0.4 });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="fiesta-chapanaya" className="w-full flex flex-col scroll-mt-20">
            {pillars.map((pillar) => (
                <article
                    key={pillar.id}
                    className="relative min-h-screen flex flex-col items-center justify-center py-32 px-4 sm:px-6 bg-fixed bg-center bg-cover overflow-hidden"
                    style={{ backgroundImage: `url(${pillar.image})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Contenedor animado con GSAP (clase "pillar-card") */}
                    <div className="relative z-10 pillar-card">

                        {/* La caja con diseño amarillo y bordes negros que se repite en cada bloque */}
                        <div className={`
                            p-6 md:p-12 max-w-3xl text-center transform transition-transform duration-300 hover:scale-105
                            border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                            ${pillar.boxColor} ${pillar.rotate}
                        `}>
                            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter ${pillar.textColor}`}>
                                {pillar.title}
                            </h2>
                        </div>
                    </div>

                </article>
            ))}
        </section>
    );
}