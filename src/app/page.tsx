import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";

// Carga diferida de componentes debajo del fold para reducir JS inicial
const Manifesto = dynamic(() => import("@/components/Manifesto"));
const ExperienceScroll = dynamic(() => import("@/components/ExperienceScroll"));
const SpotifyPlaylist = dynamic(() => import("@/components/SpotifyPlaylist"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <SocialSidebar />
      <Hero />
      {/* Acá agregamos el nuevo componente con el efecto de las letras */}
      <Manifesto />
      <ExperienceScroll />
      {/* Acá agregamos el reproductor de Spotify antes del footer */}
      <SpotifyPlaylist />
      <Footer />
    </main>
  );
}