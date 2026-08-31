import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// UI Components
import LoadingScreen from "./components/ui/LoadingScreen";

// Portfolio Sections (In Clean Flow)
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="bg-[#04060d] text-slate-100 min-h-screen relative overflow-x-hidden selection:bg-[#0070f3] selection:text-white">
      {/* ─── DYNAMIC PROFESSIONAL CYBER BACKGROUND ─── */}
      <div className="cyber-bg" aria-hidden="true">
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Ambient Moving Glow Spheres */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 112, 243, 0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[45%] right-[5%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[75%] left-[10%] w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 112, 243, 0.07) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Noise Texture Overlay for Rich Depth */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Initial Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      {!loading && (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <CertificationsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
