import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ChapaHomePromo from "@/components/ChapaHomePromo";
import ExperienceGrid from "@/components/ExperienceGrid";
import LineupTeaser from "@/components/LineupTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Manifesto />
      <ChapaHomePromo />
      <ExperienceGrid />
      <LineupTeaser />
      <Footer />
    </main>
  );
}