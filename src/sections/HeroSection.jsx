import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Eye, Mail, ArrowRight, Sparkles, Smartphone, Terminal, Code2 } from "lucide-react";
import { personalInfo } from "../data/personal";

const taglines = personalInfo.taglines;

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = taglines[taglineIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setTaglineIndex((i) => (i + 1) % taglines.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, taglineIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "8.5rem", paddingBottom: "5.5rem" }}
    >
      {/* Controlled, Subtle Radial Glows */}
      <div
        className="absolute top-1/4 left-1/12 w-[450px] h-[450px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(0, 112, 243, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-12 right-1/12 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-18 items-center">
          
          {/* ─── LEFT COLUMN: Clean & Fresh Typography (7 cols) ─── */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[0.7rem] sm:text-xs font-semibold mb-7 shadow-md"
              style={{
                background: "rgba(11, 18, 29, 0.9)",
                border: "1px solid rgba(92, 200, 255, 0.18)",
                color: "#dfeafe",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Final-Year B.Tech IT · Software Developer</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="text-base sm:text-lg font-medium text-slate-400 mb-2 tracking-wide"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hello, I&apos;m
            </motion.p>

            {/* Main Name */}
            <motion.h1
              className="font-bold tracking-[-0.06em] text-white mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 6.5vw, 6rem)",
                lineHeight: 0.94,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Harshal{" "}
              <span className="gradient-blue drop-shadow-[0_0_20px_rgba(0,112,243,0.3)]">
                Mendhule
              </span>
            </motion.h1>

            {/* Interactive Typewriter line */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-7 text-lg sm:text-2xl md:text-3xl font-semibold"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <span className="text-slate-400 font-normal">I build</span>
              <span className="text-[#5cc8ff] font-mono min-w-[200px] sm:min-w-[230px] text-left font-semibold">
                {displayed}
                <span className="animate-pulse text-[#1d9bf0]">|</span>
              </span>
            </motion.div>

            {/* Bio summary */}
            <motion.p
              className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 font-normal text-balance"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-secondary py-3.5 px-7"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#38bdf8] transition-colors py-2 px-3"
              >
                <span>Contact Me</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>

            {/* Clean Social Profile Badges */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3 flex-wrap"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-xs text-slate-500 font-mono mr-1">PROFILES:</span>
              
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#0b1224] border border-slate-800 text-slate-300 hover:text-white hover:border-[#0070f3] hover:shadow-[0_0_12px_rgba(0,112,243,0.3)] transition-all"
              >
                <svg className="w-4 h-4 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.761-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#0b1224] border border-slate-800 text-slate-300 hover:text-white hover:border-[#38bdf8] hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>

              {/* GeeksforGeeks */}
              <a
                href={personalInfo.gfg}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#0b1224] border border-slate-800 text-slate-300 hover:text-white hover:border-[#2f8d46] hover:shadow-[0_0_12px_rgba(47,141,70,0.3)] transition-all"
              >
                <span className="font-bold text-[#2f8d46] font-mono text-sm">GFG</span>
                <span>Leaderboard</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#0b1224] border border-slate-800 text-slate-300 hover:text-white hover:border-[#38bdf8] transition-all"
              >
                <Mail size={14} className="text-[#38bdf8]" />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN: Futuristic Concentric Orbit Ring with Floating Photo ─── */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Technical Dashed Orbit Ring 1 (Rotating Clockwise) */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-[#38bdf8]/30 orbit-spin-slow pointer-events-none"
              />

              {/* Middle Orbital Ring 2 (Rotating Counter-Clockwise) */}
              <div
                className="absolute inset-4 rounded-full border border-dotted border-slate-700/60 orbit-spin-reverse pointer-events-none"
              />

              {/* Concentric Precision Ring with Accent Ticks */}
              <div className="absolute inset-8 rounded-full border border-white/10 pointer-events-none flex items-center justify-center">
                <span className="absolute -top-1 w-2 h-2 rounded-full bg-[#0070f3] shadow-[0_0_8px_#0070f3]" />
                <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
              </div>

              {/* Central Levitating Profile Photo */}
              <motion.div
                className="relative w-56 h-56 sm:w-68 sm:h-68 rounded-full overflow-hidden p-1.5 shadow-[0_0_40px_rgba(0,112,243,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #0070f3, #38bdf8 60%, rgba(255,255,255,0.4) 100%)",
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#060a16] relative">
                  <img
                    src="/images/profile/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "/images/profile/logo.png";
                    }}
                  />
                </div>
              </motion.div>

              {/* Clean Floating Tech Badges */}
              <motion.div
                className="absolute top-2 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-2xl"
                style={{
                  background: "rgba(10, 16, 32, 0.92)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  backdropFilter: "blur(14px)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Smartphone size={13} className="text-[#38bdf8]" />
                <span>Flutter & Android</span>
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-2 sm:-left-4 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-2xl"
                style={{
                  background: "rgba(10, 16, 32, 0.92)",
                  border: "1px solid rgba(56, 189, 248, 0.35)",
                  backdropFilter: "blur(14px)",
                }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Terminal size={13} className="text-emerald-400" />
                <span>Firebase & Node.js</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Hint */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollTo("about")}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-[#38bdf8] transition-colors"
            aria-label="Scroll to About"
          >
            <span className="text-[0.7rem] uppercase tracking-widest font-mono">Scroll</span>
            <ChevronDown size={17} className="animate-bounce text-[#38bdf8]" />
          </button>
        </div>

      </div>
    </section>
  );
}
