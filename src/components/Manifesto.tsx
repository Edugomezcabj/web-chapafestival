"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registramos el plugin ScrollTrigger para que GSAP sepa calcular el scroll
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Divide una palabra en pares de 2 caracteres ("cada dos letras")
const splitIntoPairs = (word: string) => {
    const pairs: string[] = [];
    for (let i = 0; i < word.length; i += 2) {
        pairs.push(word.slice(i, i + 2));
    }
    return pairs;
};

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const paragraphs = [
        "VUELVE EL FESTIVAL",
        "MÁS ESPERADO POR",
        "LA COMUNIDAD CHAPANAYA",
    ];

    useGSAP(() => {
        // Seleccionamos todos los pares de 2 letras dentro del h2
        const pairsElements = gsap.utils.toArray<HTMLElement>(".char-pair");

        // Estado inicial de opacidad baja
        gsap.set(pairsElements, { opacity: 0.15 });

        // Timeline simétrico:
        // - 0% a 50%: Iluminación progresiva cada dos letras hasta que el bloque llega justo al centro
        // - 50% a 100%: Apagado progresivo al seguir bajando desde el centro (y viceversa al subir)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%", // Arranca a iluminarse al entrar en pantalla
                end: "bottom 15%", // Termina de apagarse al salir de pantalla
                scrub: 0.5, // 0.5s de inercia sedosa y continua
            },
        });

        // 1) Iluminar gradualmente desde el inicio hasta el fin, completando justo en el centro del bloque
        tl.to(pairsElements, {
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "none",
        })
            // 2) Apagar progresivamente al descender desde el centro (para que al subir se ilumine desde la última palabra hacia la primera)
            .to(pairsElements, {
                opacity: 0.15,
                stagger: 0.2, // Al scrollear en reversa (100% a 50%), esto ilumina desde la última letra hacia la primera
                duration: 1,
                ease: "none",
            });
    }, { scope: containerRef }); // Encapsulamos la animación solo en esta sección

    return (
        <section
            className="relative bg-zinc-950 min-h-screen flex flex-col items-center justify-center py-32 px-4 sm:px-6 overflow-hidden bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url(/foto-4.jpg)" }}
        >
            {/* Capa oscura de contraste sobre la imagen de fondo */}
            <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none"></div>

            <div ref={containerRef} className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">

                {/* Referenciamos el contenedor de párrafos para capturar sus hijos en la animación */}
                <div ref={textRef} className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6 md:gap-y-8">
                    {paragraphs.map((para, paraIdx) => (
                        <p
                            key={paraIdx}
                            className="font-display font-normal tracking-tight text-5xl sm:text-6xl md:text-8xl lg:text-[105px] leading-[0.9] uppercase flex flex-wrap justify-center gap-x-3 md:gap-x-6"
                        >
                            {para.split(" ").map((word, wordIdx) => (
                                <span key={wordIdx} className="inline-flex">
                                    {splitIntoPairs(word).map((pair, pairIdx) => (
                                        <span key={pairIdx} className="text-white tracking-tight font-normal char-pair">
                                            {pair}
                                        </span>
                                    ))}
                                </span>
                            ))}
                        </p>
                    ))}
                </div>

            </div>
        </section>
    );
}