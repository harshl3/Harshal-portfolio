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

import InteractiveBackground from "./components/ui/InteractiveBackground";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="bg-[#030712] text-slate-100 min-h-screen relative overflow-x-hidden selection:bg-[#0070f3] selection:text-white">
      {/* ─── DYNAMIC INTERACTIVE CYBER BACKGROUND ─── */}
      <InteractiveBackground />

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
