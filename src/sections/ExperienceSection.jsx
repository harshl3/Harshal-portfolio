import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ChevronRight, Sparkles, Building2 } from "lucide-react";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { experiences } from "../data/experience";

export default function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <SectionWrapper id="experience" className="relative">
      {/* Subtle Ambient Radial Lighting Accents */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 112, 243, 0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeader
          label="Work Experience"
          title="Internships & Engineering Roles"
          subtitle="Real-world engineering internships delivering production-grade Android and Flutter applications."
        />

        {/* Timeline Container with Generous Spacing and Interactive Track */}
        <div className="max-w-4xl mx-auto mt-10 sm:mt-14">
          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1;
            const isHovered = hoveredId === exp.id;

            return (
              <FadeInUp key={exp.id} delay={i * 0.12}>
                <div
                  className="relative flex items-start gap-4 sm:gap-7 pb-12 sm:pb-16 last:pb-2 group"
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* ─── LEFT: Interactive Dynamic Timeline Node & Vertical Track ─── */}
                  <div className="flex flex-col items-center shrink-0 relative self-stretch">
                    {/* Interactive Glowing Node */}
                    <div className="relative mt-2 sm:mt-3 flex items-center justify-center">
                      {/* Pulse Wave on Hover */}
                      <span
                        className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                          isHovered
                            ? "bg-[#38bdf8]/30 scale-125 animate-ping"
                            : "bg-[#0070f3]/10 scale-100"
                        }`}
                      />

                      {/* Outer Glow Ring */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "bg-[#060e22] border-2 border-[#38bdf8] shadow-[0_0_18px_rgba(56,189,248,0.8)] scale-110"
                            : "bg-[#080f24] border-2 border-slate-700 shadow-[0_0_8px_rgba(0,112,243,0.3)]"
                        }`}
                      >
                        {/* Center Dot */}
                        <div
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            isHovered
                              ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]"
                              : "bg-[#0070f3]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Continuous Vertical Beam connecting to the next node */}
                    {!isLast && (
                      <div className="relative w-[2px] flex-1 my-3 overflow-hidden rounded-full bg-slate-800/80">
                        {/* Ambient Gradient Track */}
                        <div
                          className={`w-full h-full transition-all duration-500 ${
                            isHovered
                              ? "bg-gradient-to-b from-[#38bdf8] via-[#0070f3] to-slate-800"
                              : "bg-gradient-to-b from-[#0070f3]/60 via-[#38bdf8]/30 to-slate-800/50"
                          }`}
                        />

                        {/* Animated Light Shimmer traveling down the line */}
                        <motion.div
                          className="absolute inset-x-0 w-full h-16 bg-gradient-to-b from-transparent via-[#5cc8ff] to-transparent opacity-80"
                          animate={{ y: ["-100%", "300%"] }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.9,
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* ─── RIGHT: Executive Experience Card with Clear Spacing ─── */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`glass-card p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                        isHovered
                          ? "border-[#38bdf8]/50 shadow-[0_20px_50px_rgba(0,112,243,0.18)] bg-gradient-to-br from-[#0c162c] to-[#070e1c] -translate-y-1"
                          : "border-slate-800/90 shadow-xl bg-gradient-to-br from-[#0b1426]/90 to-[#060b17]/85"
                      }`}
                    >
                      {/* Top Header Row: Role, Company, Pill Badge, Date & Location */}
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3.5 pb-4 border-b border-slate-800/80">
                        <div>
                          {/* Role Title */}
                          <h3
                            className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {exp.position}
                          </h3>

                          {/* Company & Role Type Badge */}
                          <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                            <span className="text-sm sm:text-base font-semibold text-[#38bdf8] flex items-center gap-1.5">
                              <Building2 size={15} className="text-[#38bdf8]/80" />
                              {exp.company}
                            </span>

                            <span className="px-3 py-0.5 rounded-full text-[0.7rem] font-bold font-mono bg-[#0070f3]/15 border border-[#0070f3]/35 text-[#5cc8ff] uppercase tracking-wider">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        {/* Date & Location Glass Pill */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-300 bg-[#070d1e]/90 border border-slate-800 px-3.5 py-2 rounded-xl shrink-0 self-start lg:self-auto shadow-inner">
                          <span className="flex items-center gap-1.5 text-slate-200">
                            <Calendar size={13} className="text-[#38bdf8]" />
                            {exp.duration}
                          </span>
                          <span className="text-slate-600 hidden sm:inline">•</span>
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <MapPin size={13} className="text-slate-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Role Overview */}
                      <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed my-5 font-normal">
                        {exp.description}
                      </p>

                      {/* Distinct Key Responsibilities Container */}
                      {exp.responsibilities && (
                        <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#060b18]/70 border border-slate-800/70 space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-[#5cc8ff] font-mono flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                            Key Contributions & Responsibilities
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li
                                key={rIdx}
                                className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0 mt-2 shadow-[0_0_6px_#38bdf8]" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack Chips */}
                      {exp.technologies && (
                        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/70">
                          <span className="text-xs text-slate-500 font-mono font-medium mr-1">
                            STACK:
                          </span>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="tech-tag text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
