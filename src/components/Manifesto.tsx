"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Subcomponente que anima cada palabra individualmente según el scroll
const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <motion.span style={{ opacity }} className="text-white tracking-tight font-normal">
            {children}
        </motion.span>
    );
};

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "end 50%"],
    });

    const text = "VUELVE EL FESTIVAL MÁS ESPERADO POR LA COMUNIDAD CHAPANAYA";
    const words = text.split(" ");

    return (
        <section
            className="relative bg-zinc-950 min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 overflow-hidden bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url(/foto-4.jpg)" }}
        >
            {/* Capa oscura de contraste sobre la imagen de fondo */}
            <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none"></div>

            <div ref={containerRef} className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">

                <h2 className="font-display font-normal tracking-tight text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[0.9] uppercase flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-4">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);

                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </h2>

            </div>
        </section>
    );
}