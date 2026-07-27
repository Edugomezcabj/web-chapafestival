import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";
import ExperienceScroll from "@/components/ExperienceScroll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <ExperienceScroll />
      <Footer />
    </main>
  );
}